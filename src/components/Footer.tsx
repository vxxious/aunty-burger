import { Link } from "react-router-dom";
import { FiInstagram, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { businessInfo } from "@/data/menuData";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display tracking-wider">
              AUNTY BURGERS
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              {businessInfo.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href={businessInfo.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display tracking-wide">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-background/70 hover:text-background transition-colors"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="block text-background/70 hover:text-background transition-colors"
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="block text-background/70 hover:text-background transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/delivery"
                className="block text-background/70 hover:text-background transition-colors"
              >
                Delivery & FAQ
              </Link>
              <Link
                to="/contact"
                className="block text-background/70 hover:text-background transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display tracking-wide">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <FiPhone className="w-4 h-4" />
                <span>{businessInfo.phone}</span>
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <FiMapPin className="w-4 h-4" />
                <span>{businessInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-display tracking-wide">Opening Hours</h4>
            <div className="flex items-center gap-3 text-background/70">
              <FiClock className="w-4 h-4" />
              <span>{businessInfo.hours}</span>
            </div>
            <div className="pt-2">
              <Link
                to="/menu"
                className="inline-block bg-background text-foreground text-sm px-6 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-4">
          <p className="text-center text-background/50 text-sm">
            Aunty Burgers 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
