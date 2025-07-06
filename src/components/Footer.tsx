const Footer = () => {
  return <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img alt="Communicycle Logo" src="/lovable-uploads/c633a871-beba-477d-8a36-0b2a6450dc46.png" className="max-h-8 w-auto brightness-0 invert-0 " />
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Free Professional Electronic resale services and recycling helping residential customers turn their 
              TVs, laptops, desktops, phones and more into cash while protecting their data and the environment.
            </p>
            <p className="text-background/60 text-sm">
              © 2024 Communicycle. All rights reserved.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>TV Resale</li>
              <li>Laptop Resale</li>
              <li>Desktop Computers Resale</li>
              <li>Phone & Tablet Resale</li>
              <li>Electronics Recycling</li>
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
            Free Professional Electronic services • Secure data destruction • Electronics recycling • Environmentally responsible
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;