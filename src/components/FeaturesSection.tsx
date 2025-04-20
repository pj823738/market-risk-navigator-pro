
import React from 'react';
import { Shield, TrendingUp, BarChart2, Calculator, Calendar, Database } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-10 w-10 text-finance-blue" />,
    title: "Portfolio Protection",
    description: "Advanced strategies to safeguard your investments against market downturns and systematic risks."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-finance-blue" />,
    title: "Risk-Adjusted Performance",
    description: "Optimize returns while keeping risk exposure in check through sophisticated risk modeling."
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-finance-blue" />,
    title: "Market Analysis",
    description: "In-depth technical and fundamental analysis to identify risk factors and market opportunities."
  },
  {
    icon: <Calculator className="h-10 w-10 text-finance-blue" />,
    title: "Risk Calculation",
    description: "Proprietary algorithms that calculate risk metrics including VaR, Beta, and Sharpe Ratio."
  },
  {
    icon: <Calendar className="h-10 w-10 text-finance-blue" />,
    title: "Scenario Planning",
    description: "Test portfolios against historical crashes and custom scenarios to prepare for any market condition."
  },
  {
    icon: <Database className="h-10 w-10 text-finance-blue" />,
    title: "Data Integration",
    description: "Seamless integration with market data sources for comprehensive risk assessment."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Comprehensive Risk Management
          </h2>
          <p className="text-lg text-finance-gray max-w-3xl mx-auto">
            Our platform offers advanced tools and methodologies to identify, assess, and mitigate financial risks in your investment portfolio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card-gradient rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-finance-light rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-finance-blue">{feature.title}</h3>
              <p className="text-finance-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
