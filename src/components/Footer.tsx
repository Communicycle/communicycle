const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">Communicycle</span>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Professional ITAD services helping residential customers turn their old electronics 
              into cash while protecting their data and the environment.
            </p>
            <p className="text-background/60 text-sm">
              © 2024 Communicycle. All rights reserved.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>Laptop Resale</li>
              <li>Phone & Tablet</li>
              <li>Desktop Computers</li>
              <li>Data Wiping</li>
              <li>ITAD Consulting</li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Shipping Info</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            Certified ITAD service provider • Secure data destruction • Environmentally responsible
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;