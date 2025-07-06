import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Contact us today for a free quote on your electronics
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-white/80">laith@communicycle.ca</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-white/80">1-365-777-3058</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-white/80">Oakville, ON</p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* CTA */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              We accept TVs, laptops, desktops, phones and more for resale or recycling. 
              Get your free quote today - no obligation, no hidden fees.
            </p>
            <div className="space-y-4">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-base text-center">
                <a href="https://tally.so/r/w40aVO" target="_blank" rel="noopener noreferrer">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-white/70 text-sm">
                Typically responds within 2 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;