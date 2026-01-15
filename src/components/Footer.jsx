import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { ACTIVE_THEME } from '../config/Theme';

function Footer() {
  const theme = ACTIVE_THEME;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className={`bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 transform group-hover:rotate-12 transition-transform duration-300`}>
                <Sparkles className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">INSIGHT</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Odisha's 1st Creators Awards - Celebrating Digital Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/RulePage" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Rules
                </Link>
              </li>
              <li>
                <Link 
                  to="/catagories" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/contactus" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacypolicy" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/termandcondition" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span>contact@INSIGHTawards.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span>Odisha, India</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} flex items-center justify-center hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110`}
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} flex items-center justify-center hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110`}
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} flex items-center justify-center hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110`}
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} INSIGHT Awards. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                to="/privacypolicy" 
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Privacy
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                to="/termandcondition" 
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Terms
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                to="/contactus" 
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;