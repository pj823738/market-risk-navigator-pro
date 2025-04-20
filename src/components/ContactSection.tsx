
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Get Expert Risk Management
          </h2>
          <p className="text-lg text-finance-gray max-w-3xl mx-auto">
            Speak with our financial risk specialists to develop a tailored risk management strategy for your portfolio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below to schedule a consultation with our risk management experts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">First Name</label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="investment-size" className="text-sm font-medium">Investment Portfolio Size</label>
                  <Select>
                    <SelectTrigger id="investment-size">
                      <SelectValue placeholder="Select portfolio size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-100k">Under $100,000</SelectItem>
                      <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                      <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                      <SelectItem value="1m-5m">$1 million - $5 million</SelectItem>
                      <SelectItem value="over-5m">Over $5 million</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your risk management needs..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-finance-blue hover:bg-finance-darkblue text-white">
                  Schedule Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="bg-finance-blue text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="mt-1">contact@stratrisk.com</p>
                    <p className="text-sm text-gray-300 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="mt-1">+1 (800) 555-RISK</p>
                    <p className="text-sm text-gray-300 mt-1">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="mt-1">350 Wall Street</p>
                    <p className="mt-1">New York, NY 10005</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-finance-light rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-finance-blue">Trusted By</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-md border border-gray-100 flex items-center justify-center">
                  <div className="text-finance-blue font-bold">AlphaFund</div>
                </div>
                <div className="bg-white p-3 rounded-md border border-gray-100 flex items-center justify-center">
                  <div className="text-finance-blue font-bold">BetaCapital</div>
                </div>
                <div className="bg-white p-3 rounded-md border border-gray-100 flex items-center justify-center">
                  <div className="text-finance-blue font-bold">GammaInvest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
