import { Card } from "@/components/ui/card";
import { Package, Search, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "1. Send Your Devices",
    description: "Pack your laptops, phones, tablets, and other electronics securely and ship them to us using our prepaid shipping label."
  },
  {
    icon: Search,
    title: "2. Evaluation & Data Wipe",
    description: "Our experts assess your devices for resale value and perform secure, certified data wiping to protect your privacy."
  },
  {
    icon: DollarSign,
    title: "3. Get Paid",
    description: "Receive payment based on current market value. We handle the resale process while you get the cash."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our simple three-step process makes it easy to turn your old electronics into cash
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;