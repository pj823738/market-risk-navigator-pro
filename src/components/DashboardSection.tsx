
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

const marketData = [
  { name: 'Jan', S_and_P: 4200, Portfolio: 1040, Risk: 65 },
  { name: 'Feb', S_and_P: 4250, Portfolio: 1080, Risk: 60 },
  { name: 'Mar', S_and_P: 4180, Portfolio: 1060, Risk: 70 },
  { name: 'Apr', S_and_P: 4300, Portfolio: 1100, Risk: 55 },
  { name: 'May', S_and_P: 4350, Portfolio: 1150, Risk: 50 },
  { name: 'Jun', S_and_P: 4400, Portfolio: 1200, Risk: 45 },
  { name: 'Jul', S_and_P: 4450, Portfolio: 1230, Risk: 55 },
  { name: 'Aug', S_and_P: 4400, Portfolio: 1210, Risk: 65 },
  { name: 'Sep', S_and_P: 4380, Portfolio: 1190, Risk: 60 },
  { name: 'Oct', S_and_P: 4450, Portfolio: 1240, Risk: 50 },
  { name: 'Nov', S_and_P: 4500, Portfolio: 1300, Risk: 45 },
  { name: 'Dec', S_and_P: 4550, Portfolio: 1350, Risk: 40 },
];

const sectorRiskData = [
  { name: 'Technology', risk: 75 },
  { name: 'Finance', risk: 65 },
  { name: 'Healthcare', risk: 45 },
  { name: 'Energy', risk: 85 },
  { name: 'Consumer', risk: 55 },
  { name: 'Utilities', risk: 35 },
  { name: 'Real Estate', risk: 70 },
];

const StatsCard = ({ title, value, change, isPositive, icon }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className={`text-xs flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
        <span>{change}</span>
      </p>
    </CardContent>
  </Card>
);

const DashboardSection = () => {
  const [activeChart, setActiveChart] = useState("performance");
  
  return (
    <section id="dashboard" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Market Risk Dashboard
          </h2>
          <p className="text-lg text-finance-gray max-w-3xl mx-auto">
            Real-time analytics and visualization to monitor your portfolio's risk exposure and performance metrics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard 
            title="Portfolio Value" 
            value="$1,352,489.00" 
            change="3.2% from last month" 
            isPositive={true}
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          />
          <StatsCard 
            title="Risk Score" 
            value="42.6" 
            change="5.1% from last month" 
            isPositive={false}
            icon={<TrendingDown className="h-4 w-4 text-muted-foreground" />}
          />
          <StatsCard 
            title="Sharpe Ratio" 
            value="1.82" 
            change="0.4 from last month" 
            isPositive={true}
            icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Risk Analysis</CardTitle>
            <CardDescription>
              Performance and risk metrics over the past 12 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeChart} onValueChange={setActiveChart}>
              <TabsList className="mb-6">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="risk">Risk Metrics</TabsTrigger>
                <TabsTrigger value="sectors">Sector Risk</TabsTrigger>
              </TabsList>
              
              <TabsContent value="performance" className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={marketData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="S_and_P" stroke="#143D59" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="Portfolio" stroke="#D9A74A" />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="risk" className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={marketData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Risk" stroke="#1E7A8E" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="sectors" className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sectorRiskData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="risk" fill="#1E7A8E" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DashboardSection;
