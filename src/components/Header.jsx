import { useState } from 'react';
import { Menu, X, Sparkles, LogOut, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const { user, logout, getInitials } = useAuth();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b-4 border-orange-200 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-orange-400 to-pink-400 w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="text-white" size={24} />
              </div>
              <div className="text-2xl md:text-3xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">IN</span>
                <span className="text-gray-800">xyz</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2 lg:gap-4 items-center">
            <Link
              to="/"
              className={`px-6 py-2 rounded-full text-base lg:text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-orange-50'
              }`}
            >
             Home
            </Link>
            <Link
              to="/about"
              className={`px-6 py-2 rounded-full text-base lg:text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                isActive('/about') 
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-pink-50'
              }`}
            >
              About
            </Link>
            <Link
              to="/catagories"
              className={`px-6 py-2 rounded-full text-base lg:text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                isActive('/catagories') 
                  ? 'bg-gradient-to-r from-purple-400 to-blue-400 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-purple-50'
              }`}
            >
               Categories
            </Link>

            {/* User Profile - Desktop */}
            {user && (
              <div className="relative ml-4">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-sm">
                    {getInitials()}
                  </div>
                  <span className="font-semibold hidden lg:block">{user.name.split(' ')[0]}</span>
                </button>

                {/* Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border-2 border-orange-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-4 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg">
                          {getInitials()}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{user.name}</p>
                          <p className="text-xs opacity-90">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-xl transition-colors font-medium"
                      >
                        <LogOut size={18} />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* User Profile - Mobile */}
            {user && (
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="bg-gradient-to-r from-orange-400 to-pink-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg font-bold text-sm"
              >
                {getInitials()}
              </button>
            )}
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gradient-to-r from-orange-400 to-pink-400 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t-2 border-orange-200 space-y-2">
            <Link 
              to="/" 
              className={`block py-3 px-4 rounded-2xl font-bold transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-orange-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block py-3 px-4 rounded-2xl font-bold transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-pink-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/catagories" 
              className={`block py-3 px-4 rounded-2xl font-bold transition-all duration-300 ${
                isActive('/catagories') 
                  ? 'bg-gradient-to-r from-purple-400 to-blue-400 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-purple-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
               Categories
            </Link>
          </nav>
        )}

        {/* Mobile Profile Dropdown */}
        {showProfileMenu && user && (
          <div className="md:hidden fixed right-4 top-20 w-64 bg-white rounded-2xl shadow-2xl border-2 border-orange-200 overflow-hidden z-50">
            <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg">
                  {getInitials()}
                </div>
                <div>
                  <p className="font-bold text-sm">{user.name}</p>
                  <p className="text-xs opacity-90">{user.email}</p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-xl transition-colors font-medium"
              >
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for mobile profile menu */}
      {showProfileMenu && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setShowProfileMenu(false)}
        />
      )}
    </header>
  );
}

export default Header;