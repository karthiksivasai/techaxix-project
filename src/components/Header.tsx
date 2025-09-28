import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "HOME", href: "/", active: location.pathname === "/" },
    { name: "SERVICES", href: "/services", active: location.pathname === "/services" },
    { name: "INDUSTRIES", href: "/industries", active: location.pathname === "/industries" },
  ];


  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  // Focus trap for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
        if (e.key === 'Escape') {
          closeMobileMenu();
        }
      };

      firstElement?.focus();
      document.addEventListener('keydown', handleTabKey);

      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="header-gradient backdrop-blur-sm border-b border-border sticky top-0 z-50 header-shadow animate-slide-in-down">
      <div className="container-responsive relative z-10">
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
                className={`text-fluid-sm xl:text-fluid-base font-medium transition-colors duration-200 hover:text-blue-700 whitespace-nowrap ${
                  item.active ? "text-blue-800 font-semibold" : "text-slate-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button 
                variant="brand" 
                size="lg" 
                className="btn-responsive-lg font-semibold"
              >
                CONTACT US
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-800 hover:text-blue-700 hover:bg-blue-100/50 h-12 w-12 sm:h-14 sm:w-14 hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
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
          <div className="lg:hidden relative z-10">
            <div 
              ref={mobileMenuRef}
              id="mobile-menu"
              className="absolute top-full left-0 right-0 bg-gradient-to-b from-blue-100/95 to-blue-200/95 backdrop-blur-sm border-t border-border shadow-xl"
            >
              <nav className="py-4 px-4 sm:px-6 md:px-8">
                <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={closeMobileMenu}
                      className={`text-left justify-start text-fluid-base sm:text-fluid-lg md:text-fluid-xl font-medium transition-colors duration-200 hover:text-blue-700 p-3 sm:p-4 md:p-5 rounded-lg hover:bg-blue-100/50 ${
                        item.active
                          ? "text-blue-800 font-semibold bg-blue-200/50"
                          : "text-slate-800"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-2 sm:pt-4 md:pt-6 border-t border-border/50">
                    <Link to="/contact" onClick={closeMobileMenu}>
                      <Button 
                        variant="brand" 
                        className="w-full btn-responsive font-semibold"
                      >
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
