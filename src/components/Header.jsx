import { useState, useEffect, useRef } from "react";
import { Menu, X, Sparkles, LogOut, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ACTIVE_THEME } from "../config/Theme";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const location = useLocation();
  const { user, logout } = useAuth();
  const theme = ACTIVE_THEME;
  const profileMenuRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  /* ---------------- USER HELPERS ---------------- */
  const getUserName = () => user?.name || user?.user?.name || "User";
  const getUserEmail = () => user?.email || user?.user?.email || "";

  const getInitials = () => {
    const name = getUserName();
    const parts = name.trim().split(" ");
    return parts.length === 1
      ? parts[0][0].toUpperCase()
      : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    setIsMenuOpen(false);
  };

  /* -------- CLOSE PROFILE ON OUTSIDE CLICK -------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    if (showProfileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfileMenu]);

  /* -------- CLOSE MENUS ON ROUTE CHANGE -------- */
  // useEffect(() => {
  //   setIsMenuOpen(false);
  //   setShowProfileMenu(false);
  // }, );

  return (
    <>
      <header className="bg-black/95 backdrop-blur-xl border-b border-orange-500/30 fixed w-full top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div
                className={`bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}
                w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg`}
              >
                <Sparkles className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-white">INSIGHT</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-4">
              <Link to="/" className={navClass(isActive("/"))}>Home</Link>
              <Link to="/RulePage" className={navClass(isActive("/RulePage"))}>Rules</Link>
              <Link to="/catagories" className={navClass(isActive("/catagories"))}>
                Categories
              </Link>

              {user && (
                <div className="relative" ref={profileMenuRef}>
                  <button
                    onClick={() => setShowProfileMenu((p) => !p)}
                    className={`flex items-center gap-3 bg-gradient-to-r
                    ${theme.primary.from} ${theme.primary.to}
                    px-4 py-2 rounded-full text-white font-semibold`}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      {getInitials()}
                    </div>
                    <span className="hidden lg:block">
                      {getUserName().split(" ")[0]}
                    </span>
                  </button>

                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl
                    rounded-2xl border border-orange-500/30 shadow-2xl animate-fadeIn">
                      <div
                        className={`bg-gradient-to-r ${theme.primary.from}
                        ${theme.primary.to} p-4 text-white rounded-t-2xl`}
                      >
                        <p className="font-bold">{getUserName()}</p>
                        <p className="text-xs opacity-90">{getUserEmail()}</p>
                      </div>

                      <div className="p-2">
                        <Link
                          to="/profile"
                          className="flex items-center gap-3 px-4 py-3 rounded-xl
                          hover:bg-white/5 text-gray-300 hover:text-white"
                        >
                          <User size={18} />
                          <span>View Profile</span>
                        </Link>

                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl
                          hover:bg-white/5 text-gray-300 hover:text-white w-full"
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

            {/* Mobile Buttons */}
            <div className="md:hidden flex gap-2">
              {user && (
                <button
                  onClick={() => setShowProfileMenu((p) => !p)}
                  className={`w-10 h-10 rounded-full bg-gradient-to-r
                  ${theme.primary.from} ${theme.primary.to} text-white font-bold`}
                >
                  {getInitials()}
                </button>
              )}

              <button
                onClick={() => setIsMenuOpen((p) => !p)}
                className={`p-3 rounded-2xl bg-gradient-to-r
                ${theme.primary.from} ${theme.primary.to} text-white`}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-orange-500/30 animate-fadeIn">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <Link to="/" className={mobileNavClass(isActive("/"))}>Home</Link>
              <Link to="/RulePage" className={mobileNavClass(isActive("/RulePage"))}>Rules</Link>
              <Link to="/catagories" className={mobileNavClass(isActive("/catagories"))}>
                Categories
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Profile Menu */}
      {showProfileMenu && user && (
        <div className="md:hidden fixed top-16 right-4 w-64 bg-slate-900/95 backdrop-blur-xl
        rounded-2xl border border-orange-500/30 shadow-2xl z-50 animate-fadeIn">
          <div className={`bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} p-4 text-white rounded-t-2xl`}>
            <p className="font-bold">{getUserName()}</p>
            <p className="text-xs opacity-90">{getUserEmail()}</p>
          </div>

          <div className="p-2">
            <Link
              to="/profile"
              onClick={() => setShowProfileMenu(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl
              hover:bg-white/5 text-gray-300 hover:text-white"
            >
              <User size={18} />
              <span>View Profile</span>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl
              hover:bg-white/5 text-gray-300 hover:text-white w-full"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Overlay */}
      {showProfileMenu && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-40 top-16"
          onClick={() => setShowProfileMenu(false)}
        />
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}

/* ---------------- HELPERS ---------------- */
const navClass = (active) =>
  `px-6 py-2 rounded-full font-bold transition ${
    active
      ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
      : "text-gray-300 hover:text-white hover:bg-white/5"
  }`;

const mobileNavClass = (active) =>
  `px-6 py-3 rounded-xl font-bold transition ${
    active
      ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
      : "text-gray-300 hover:text-white hover:bg-white/5"
  }`;

export default Header;