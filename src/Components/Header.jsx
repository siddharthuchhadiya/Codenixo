import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles, Sun, Moon } from "lucide-react";
import { ROUTES } from "../utils/Routes";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
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

  const features = [
    { name: "AI Assistant", icon: "🤖", description: "Smart automation" },
    { name: "Analytics", icon: "📊", description: "Real-time insights" },
    { name: "Security", icon: "🛡️", description: "Enterprise grade" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-transparent"
      }`}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-500 hover:opacity-100" />
      
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">
        {/* Logo with Animation */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nexus
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          <li>
            <a
              href={ROUTES.HOME}
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10" />
            </a>
          </li>

          {/* Features Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
            >
              Features
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl rounded-2xl w-64 p-4 space-y-2 border border-gray-200/50 dark:border-gray-600/50 animate-fade-in">
                {features.map((feature, index) => (
                  <a
                    key={feature.name}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:translate-x-1 cursor-pointer group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {feature.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {feature.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </li>

          <li>
            <a
              href={ROUTES.ABOUT}
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
            >
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10" />
            </a>
          </li>

          <li>
            <a
              href={ROUTES.CONTACT}
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10" />
            </a>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium">
            Login
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 font-medium">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-t border-gray-200/50 dark:border-gray-700/50 px-6 py-6 space-y-4 animate-slide-down">
          <a className="block py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
            Home
          </a>

          <div className="border-b border-gray-100 dark:border-gray-800 pb-2">
            <button
              className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-700 dark:text-gray-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Features
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="ml-4 space-y-3 py-2">
                {features.map((feature) => (
                  <a
                    key={feature.name}
                    className="flex items-center space-x-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="text-xl">{feature.icon}</span>
                    <span>{feature.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a className="block py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
            About
          </a>

          <a className="block py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
            Contact
          </a>

          <div className="pt-4 space-y-3">
            <button className="w-full py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium">
              Login
            </button>
            <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}