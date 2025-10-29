import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { categories } from "@/data/products";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const checkAdminStatus = () => {
      setIsAdmin(!!localStorage.getItem("isAdminLoggedIn"));
    };
    
    window.addEventListener("scroll", handleScroll);
    checkAdminStatus();
    
    // Check admin status when location changes
    const interval = setInterval(checkAdminStatus, 1000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Where to Buy", path: "/where-to-buy" },
    { name: "Downloads", path: "/downloads" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled ? "bg-card/95 backdrop-blur-sm card-shadow" : "bg-card"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              INDUSTRIAL <span className="text-secondary">TOOLS</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.name === "Products" ? (
                <NavigationMenu key={link.name}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-muted">
                        Products
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {categories.map((category) => (
                            <li key={category.id}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={`/category/${category.id}`}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {category.name}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {category.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                          <li className="md:col-span-2">
                            <NavigationMenuLink asChild>
                              <Link
                                to="/products"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-muted hover:bg-primary hover:text-primary-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  View All Products →
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            
            {/* Admin Link - only visible when logged in */}
            {isAdmin && (
              <Link
                to="/admin"
                className={`text-sm font-medium transition-smooth hover:text-primary flex items-center gap-1 ${
                  location.pathname.startsWith("/admin")
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                <Shield className="w-4 h-4" />
                Admin
              </Link>
            )}
            
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-3 text-sm font-medium hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Admin Link - only visible when logged in */}
            {isAdmin && (
              <Link
                to="/admin"
                className="block py-3 text-sm font-medium hover:text-primary transition-smooth flex items-center gap-1"
                onClick={() => setIsOpen(false)}
              >
                <Shield className="w-4 h-4" />
                Admin Panel
              </Link>
            )}
            
            <Button variant="default" className="w-full mt-4" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Request Quote
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;