import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Cloud,
  Code,
  Shield,
  Database,
  Smartphone,
  Server,
} from "lucide-react";
import { ROUTES } from "../utils/Routes";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: "Home", href: ROUTES.HOME },
    { name: "About", href: ROUTES.ABOUT },
    { name: "Services", href: ROUTES.SERVICES },
    { name: "Portfolio", href: ROUTES.PORTFOLIO },
    { name: "Blog", href: ROUTES.BLOG },
    { name: "Contact", href: ROUTES.CONTACT },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <div className="relative">
              <img
                src="/public/assets/Group 4.png"
                alt="CODONIXO Logo"
                className="w-full h-11 sm:w-20 sm:h-20 lg:w-full lg:h-15 rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center space-x-1 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Services Mega Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-xl">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Our Services
                          </h3>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 flex-shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50  bg-black/70 backdrop-blur-sm flex flex-col">
            {/* Close Button - Top Right */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 hover:bg-black/40 hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
            >
              <X
                size={20}
                className="text-white group-hover:rotate-90 transition-transform duration-300"
              />
            </button>

            <div className="flex-col bg-black/40 backdrop-blur-md items-center justify-center px-10 py-24">
              <div className="w-full max-w-sm space-y-3">
                {menuItems.map((item, index) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="group w-full text-center px-6 py-4 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/20 text-white font-semibold text-lg hover:bg-black/40 hover:border-white/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex items-center justify-center space-x-2">
                            <span>{item.name}</span>
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                dropdownOpen
                                  ? "rotate-180"
                                  : "group-hover:translate-y-0.5"
                              }`}
                            />
                          </div>
                        </button>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="group block w-full text-center px-6 py-4 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/20 text-white font-semibold text-lg hover:bg-black/40 hover:border-white/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
                        onClick={() => setMobileOpen(false)}
                        style={{ animationDelay: `${index * 120}ms` }}
                      >
                        <div className="relative">
                          {item.name}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-16 transition-all duration-300" />
                        </div>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
