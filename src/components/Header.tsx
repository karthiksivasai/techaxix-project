import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", href: "/", active: location.pathname === "/" },
    {
      name: "ABOUT US",
      href: "/about",
      active: location.pathname === "/about",
    },
    {
      name: "SERVICES",
      href: "/services",
      active: location.pathname === "/services",
    },
    {
      name: "INDUSTRIES",
      href: "/industries",
      active: location.pathname === "/industries",
    },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-lg">
      <div className="container-responsive">
        <div className="flex items-center justify-between py-3 sm:py-4 md:py-5 lg:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="header" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-fluid-sm xl:text-fluid-base font-medium transition-colors duration-200 hover:text-brand-blue-light whitespace-nowrap ${
                  item.active ? "text-accent font-semibold" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="brand" size="lg" className="btn-responsive-lg font-semibold">
                CONTACT US
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:text-brand-blue-light hover:bg-secondary/20 h-10 w-10 sm:h-12 sm:w-12"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="absolute top-full left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border shadow-xl">
              <nav className="py-4 px-4 sm:px-6 md:px-8">
                <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={closeMobileMenu}
                      className={`text-left justify-start text-fluid-base sm:text-fluid-lg md:text-fluid-xl font-medium transition-colors duration-200 hover:text-brand-blue-light p-3 sm:p-4 md:p-5 rounded-lg hover:bg-secondary/20 ${
                        item.active
                          ? "text-accent font-semibold bg-secondary/30"
                          : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-2 sm:pt-4 md:pt-6 border-t border-border/50">
                    <Link to="/contact" onClick={closeMobileMenu}>
                      <Button variant="brand" className="w-full btn-responsive font-semibold">
                        CONTACT US
                      </Button>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
