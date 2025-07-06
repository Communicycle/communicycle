import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Shield, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-electronics.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Turn Your Old Electronics
            <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
              Into Cash
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">Free Professional Electronic resale services for businesses and residential customers. We handle TVs, laptops, desktops, phones and more, plus electronics recycling for electronic scrap with secure data protection.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Quote Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white/30 hover:bg-white/10">
              Learn More
            </Button>
          </div>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Shield className="h-6 w-6 text-primary-glow" />
              <span className="font-medium">Secure Data Wiping</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <DollarSign className="h-6 w-6 text-primary-glow" />
              <span className="font-medium">Fair Market Value</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Recycle className="h-6 w-6 text-primary-glow" />
              <span className="font-medium">Eco-Friendly Process</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;