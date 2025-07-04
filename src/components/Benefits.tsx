import { Card } from "@/components/ui/card";
import { Shield, Leaf, TrendingUp, Clock, Award, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Data Security",
    description: "Certified data wiping ensures your personal information is completely and permanently removed."
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Keep electronics out of landfills by extending their lifecycle through responsible resale."
  },
  {
    icon: TrendingUp,
    title: "Market Value",
    description: "Get the best possible price based on current resale market conditions and device condition."
  },
  {
    icon: Clock,
    title: "Quick Process",
    description: "Fast turnaround from device receipt to payment, typically within 5-7 business days."
  },
  {
    icon: Award,
    title: "Certified Service",
    description: "Professional ITAD service with industry certifications and compliance standards."
  },
  {
    icon: Users,
    title: "Trusted by Customers",
    description: "Thousands of satisfied residential customers have trusted us with their electronics."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Communicycle?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional ITAD services designed specifically for residential customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                  <benefit.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;