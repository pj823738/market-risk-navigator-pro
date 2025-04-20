
import React from 'react';
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, BarChart2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-pattern py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Strategic Risk Management for Market Success
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Advanced analytics and expert strategies to navigate market volatility and optimize your investment returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-finance-gold hover:bg-amber-500 text-finance-blue">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-finance-blue">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-xl animate-slide-up">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <div className="h-40 bg-gradient-to-r from-finance-blue to-finance-teal rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-20 w-20 text-white" />
                </div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-white">
                <h3 className="font-bold">Risk Score</h3>
                <div className="text-3xl font-bold mt-2">64.8</div>
                <div className="text-sm text-gray-200 mt-1">Moderate</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-white">
                <h3 className="font-bold">Volatility</h3>
                <div className="text-3xl font-bold mt-2">2.4%</div>
                <div className="text-sm text-gray-200 mt-1">30-day avg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
