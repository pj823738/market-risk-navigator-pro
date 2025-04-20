
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, BarChart2 } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-finance-blue" />
            <span className="ml-2 text-xl font-bold text-finance-blue">StratRisk</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-finance-gray hover:text-finance-blue transition-colors">Features</a>
            <a href="#dashboard" className="text-finance-gray hover:text-finance-blue transition-colors">Dashboard</a>
            <a href="#strategies" className="text-finance-gray hover:text-finance-blue transition-colors">Strategies</a>
            <a href="#contact" className="text-finance-gray hover:text-finance-blue transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center">
            <Button className="bg-finance-blue hover:bg-finance-darkblue text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
