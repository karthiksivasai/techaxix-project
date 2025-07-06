import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg font-bold">QIS</h3>
                <p className="text-xs text-primary-foreground/80 leading-none">
                  QUANTUM INNOVATIVE SOLUTIONS
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Delivering exceptional enterprise solutions to help businesses adapt to constantly changing market dynamics.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Industries", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <Button variant="ghost" className="p-0 h-auto text-primary-foreground/80 hover:text-accent justify-start">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Technology Solutions",
                "Application Development",
                "Software Testing",
                "Consulting Services",
                "Cloud Computing"
              ].map((service) => (
                <li key={service}>
                  <Button variant="ghost" className="p-0 h-auto text-primary-foreground/80 hover:text-accent justify-start text-left">
                    {service}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  123 Innovation Drive<br />
                  Tech District, TD 12345<br />
                  United States
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">info@quantuminnovativesolutions.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Quantum Innovative Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Button variant="ghost" className="p-0 h-auto text-primary-foreground/60 hover:text-accent text-sm">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="p-0 h-auto text-primary-foreground/60 hover:text-accent text-sm">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;