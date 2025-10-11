import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import SimpleMobileMenu from "./SimpleMobileMenu";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "ABOUT US", href: "/", active: location.pathname === "/", scrollTo: "about" },
    { name: "SERVICES", href: "/services", active: location.pathname === "/services" },
    { name: "INDUSTRIES", href: "/industries", active: location.pathname === "/industries" },
  ];

  const handleNavClick = (item: any, e: React.MouseEvent) => {
    e.preventDefault();
    if (item.name === "ABOUT US" && location.pathname === "/") {
      const element = document.getElementById(item.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.href);
    }
  };

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
              <button
                key={item.name}
                onClick={(e) => handleNavClick(item, e)}
                className={`text-fluid-sm xl:text-fluid-base font-medium transition-colors duration-200 hover:text-blue-700 whitespace-nowrap ${
                  item.active ? "text-blue-800 font-semibold" : "text-slate-800"
                }`}
              >
                {item.name}
              </button>
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

          {/* Mobile Menu */}
          <SimpleMobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
