import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e4dde3cd-08bc-449a-86a5-d10d67f20ff3.png" 
              alt="Communicycle Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <Button asChild variant="hero" size="lg">
            <a href="https://tally.so/r/w40aVO" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;