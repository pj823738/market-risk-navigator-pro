
import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { TrendingUp, TrendingDown } from "lucide-react";

type MarketData = {
  id: string;
  symbol: string;
  price: number;
  change_percent: number;
  volume: number;
  timestamp: string;
}

const MarketDataTable = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);

  useEffect(() => {
    // Initial fetch of market data
    const fetchMarketData = async () => {
      const { data, error } = await supabase
        .from('market_data')
        .select('*')
        .order('symbol');
      
      if (error) {
        console.error('Error fetching market data:', error);
        return;
      }
      
      if (data) setMarketData(data);
    };

    fetchMarketData();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'market_data'
        },
        (payload) => {
          if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
            setMarketData(current => {
              const newData = [...current];
              const index = newData.findIndex(item => item.id === payload.new.id);
              if (index >= 0) {
                newData[index] = payload.new as MarketData;
              } else {
                newData.push(payload.new as MarketData);
              }
              return newData;
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marketData.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium">{data.symbol}</TableCell>
              <TableCell>${data.price.toLocaleString()}</TableCell>
              <TableCell className="flex items-center gap-1">
                {data.change_percent >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span className={data.change_percent >= 0 ? "text-green-500" : "text-red-500"}>
                  {Math.abs(data.change_percent).toFixed(2)}%
                </span>
              </TableCell>
              <TableCell>{data.volume.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MarketDataTable;
