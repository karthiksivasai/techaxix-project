import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#home", active: true },
    { name: "ABOUT US", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "INDUSTRIES", href: "#industries" },
    { name: "CAREERS", href: "#careers" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-accent rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">QIS</h1>
              <p className="text-xs text-muted-foreground leading-none">
                QUANTUM INNOVATIVE SOLUTIONS
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  item.active ? "text-accent" : "text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => handleNavClick('#contact')}
            >
              CONTACT US
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left justify-start text-sm font-medium transition-colors duration-200 hover:text-primary p-2 ${
                    item.active ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                variant="cta" 
                className="mt-4"
                onClick={() => handleNavClick('#contact')}
              >
                CONTACT US
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;