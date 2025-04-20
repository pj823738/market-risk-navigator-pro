
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, TrendingUp, BarChart2 } from "lucide-react";

const strategies = [
  {
    title: "Volatility Hedging",
    description: "Protect your portfolio from market volatility using options strategies and derivatives that act as insurance during turbulent times.",
    items: [
      "VIX-based hedging strategies",
      "Put option protective strategies",
      "Collar option strategies",
      "Volatility ETF positioning"
    ],
    icon: <Shield className="h-8 w-8" />
  },
  {
    title: "Asset Allocation",
    description: "Diversify risk across asset classes, sectors, and geographies to reduce concentration and correlation risks in your portfolio.",
    items: [
      "Modern Portfolio Theory implementation",
      "Factor-based allocation",
      "Tactical sector rotation",
      "Global diversification strategies"
    ],
    icon: <BarChart2 className="h-8 w-8" />
  },
  {
    title: "Risk Parity",
    description: "Balance risk contribution across different assets to create resilient portfolios that can weather various economic scenarios.",
    items: [
      "Volatility-weighted allocation",
      "Cross-asset risk balancing",
      "Leverage-adjusted risk parity",
      "Economic regime-based adjustments"
    ],
    icon: <TrendingUp className="h-8 w-8" />
  }
];

const StrategiesSection = () => {
  return (
    <section id="strategies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Risk Management Strategies
          </h2>
          <p className="text-lg text-finance-gray max-w-3xl mx-auto">
            Implement professional-grade risk management techniques to protect and grow your investment portfolio.
          </p>
        </div>
        
        <Tabs defaultValue="strategy-0" className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-transparent mb-8">
            {strategies.map((strategy, index) => (
              <TabsTrigger 
                key={index}
                value={`strategy-${index}`}
                className="data-[state=active]:bg-finance-blue data-[state=active]:text-white px-8 py-4 rounded-lg border data-[state=active]:border-finance-blue"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-2">{strategy.icon}</div>
                  <span>{strategy.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {strategies.map((strategy, index) => (
            <TabsContent key={index} value={`strategy-${index}`}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-finance-blue">{strategy.title}</CardTitle>
                  <CardDescription className="text-base">{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {strategy.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-finance-gold text-2xl mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-finance-blue hover:bg-finance-darkblue text-white">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default StrategiesSection;
