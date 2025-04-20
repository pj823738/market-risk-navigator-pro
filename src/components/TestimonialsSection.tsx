
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "StratRisk's portfolio protection strategies saved our fund from significant losses during the last market correction. Their approach to risk management is unparalleled.",
    author: "Michael R.",
    title: "Hedge Fund Manager",
    avatar: "MR"
  },
  {
    quote: "The risk analytics dashboard provides insights I simply couldn't get elsewhere. It's transformed how I approach position sizing and portfolio construction.",
    author: "Sarah T.",
    title: "Investment Advisor",
    avatar: "ST"
  },
  {
    quote: "As a family office director, I need reliable risk management solutions. StratRisk delivers sophisticated analytics that are still accessible and actionable.",
    author: "David C.",
    title: "Family Office Director",
    avatar: "DC"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-finance-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Trusted by Industry Professionals
          </h2>
          <p className="text-lg text-finance-gray max-w-3xl mx-auto">
            See what financial experts are saying about our strategic risk management platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-finance-gold">★</span>
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4 bg-finance-blue text-white">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
