
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Info } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const CalculatorSection = () => {
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [timeHorizon, setTimeHorizon] = useState(5);
  const [riskTolerance, setRiskTolerance] = useState(50);
  const [calculatedRisk, setCalculatedRisk] = useState(65);
  
  const handleCalculate = () => {
    // This would be a more complex calculation in a real app
    const newRisk = Math.floor(
      ((riskTolerance / 100) * 70) + 
      ((investmentAmount / 500000) * 15) + 
      ((10 - timeHorizon) / 10 * 15)
    );
    setCalculatedRisk(Math.min(Math.max(newRisk, 10), 90));
  };
  
  return (
    <section className="py-20 bg-gradient-to-r from-finance-blue to-finance-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Portfolio Risk Calculator
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Assess your portfolio's risk exposure based on your investment parameters and market conditions.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Risk Assessment Tool</CardTitle>
            <CardDescription>
              Adjust the parameters below to calculate your portfolio risk score
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Investment Amount</label>
                  <span className="text-sm font-bold">${investmentAmount.toLocaleString()}</span>
                </div>
                <Slider 
                  value={[investmentAmount]} 
                  min={10000} 
                  max={1000000} 
                  step={10000} 
                  onValueChange={(values) => setInvestmentAmount(values[0])} 
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Time Horizon (Years)</label>
                  <span className="text-sm font-bold">{timeHorizon} years</span>
                </div>
                <Slider 
                  value={[timeHorizon]} 
                  min={1} 
                  max={20} 
                  step={1} 
                  onValueChange={(values) => setTimeHorizon(values[0])} 
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Risk Tolerance</label>
                  <span className="text-sm font-bold">{riskTolerance}%</span>
                </div>
                <Slider 
                  value={[riskTolerance]} 
                  min={0} 
                  max={100} 
                  step={5} 
                  onValueChange={(values) => setRiskTolerance(values[0])} 
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Conservative</span>
                  <span>Moderate</span>
                  <span>Aggressive</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-finance-blue hover:bg-finance-darkblue" 
                onClick={handleCalculate}
              >
                Calculate Risk
              </Button>
              
              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold">Your Risk Score</h3>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Info className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <div className="max-w-xs">
                          <p className="text-sm">
                            This score reflects the overall risk exposure of your portfolio based on your inputs and current market conditions.
                          </p>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <Progress value={calculatedRisk} className="h-4" />
                
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold">{calculatedRisk}</span>
                    <span className="text-sm text-muted-foreground ml-2">/ 100</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                    <span className={
                      calculatedRisk < 30 ? "text-green-500" : 
                      calculatedRisk < 70 ? "text-amber-500" : 
                      "text-red-500"
                    }>
                      {
                        calculatedRisk < 30 ? "Low Risk" : 
                        calculatedRisk < 70 ? "Moderate Risk" : 
                        "High Risk"
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CalculatorSection;
