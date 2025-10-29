import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              INDUSTRIAL<span className="text-primary-foreground">TOOLS</span>
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Built to Last. Engineered for Excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-90 hover:opacity-100 hover:text-primary transition-smooth">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/where-to-buy" className="opacity-90 hover:opacity-100 hover:text-primary transition-smooth">
                  Where to Buy
                </Link>
              </li>
              <li>
                <Link to="/service" className="opacity-90 hover:opacity-100 hover:text-primary transition-smooth">
                  Service Request
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="opacity-90 hover:opacity-100 hover:text-primary transition-smooth">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/power-tools" className="opacity-90 hover:opacity-100 hover:text-primary transition-smooth">
                  Power Tools
                </Link>
              </li>
              <li>
                <Link to="/category/abrasives" className="opacity-90 hover:opacity-100 hover:text-primary transition-smooth">
                  Abrasives
                </Link>
              </li>
              <li>
                <Link to="/category/ladders" className="opacity-90 hover:opacity-100 hover:text-primary transition-smooth">
                  Ladders & Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="opacity-90">123 Industrial Avenue, City, State 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a href="tel:+1234567890" className="opacity-90 hover:opacity-100 hover:text-primary transition-smooth">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <a href="mailto:info@industrialtools.com" className="opacity-90 hover:opacity-100 hover:text-primary transition-smooth">
                  info@industrialtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-6 text-center text-sm opacity-75">
          <p>&copy; {currentYear} Industrial Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
