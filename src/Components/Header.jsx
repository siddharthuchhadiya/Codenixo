import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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

  const features = [
    { name: "AI Assistant" },
    { name: "Analytics" },
    { name: "Security" },
  ];

  const menuItems = [
    { name: "Home", href: ROUTES.HOME },
    { name: "Services", href: ROUTES.SERVICES },
    { name: "About", href: ROUTES.ABOUT },
    { name: "Contact", href: ROUTES.CONTACT },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">
        <div className="flex mt-3 items-center space-x-2 group cursor-pointer">
          <img
            src="/public/assets/Group 4.png"
            alt="CODONIXO Logo"
            className="w-45 h-auto rounded-xl object-cover"
          />
        </div>

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

          <li>
            <a
              href={ROUTES.SERVICES}
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
            >
              Services
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10" />
            </a>
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

        <button
          className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/20 backdrop-blur-sm">
          
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 z-60 p-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/20 hover:bg-black/30 hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
          >
            <X
              size={24}
              className="text-white group-hover:rotate-90 transition-transform duration-300"
            />
          </button>

          {/* Centered Menu Content */}
          <div className="h-full flex flex-col items-center justify-center px-6">
            {/* Menu Items - Clean Design */}
            <div className="w-full max-w-sm space-y-3">
              {/* Main Menu Items */}
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group block w-full text-center px-6 py-5 rounded-2xl bg-black/10 backdrop-blur-xl border border-white/10 text-white font-semibold text-xl hover:bg-black/20 hover:border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    {item.name}
                    {/* Animated underline on hover */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-16 transition-all duration-300" />
                  </div>
                </a>
              ))}

              {/* Features Dropdown */}
              <div className="space-y-3">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="group block w-full text-center px-6 py-5 rounded-2xl bg-black/10 backdrop-blur-xl border border-white/10 text-white font-semibold text-xl hover:bg-black/20 hover:border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>Features</span>
                    <ChevronDown
                      size={20}
                      className={`transform transition-transform duration-300 ${
                        dropdownOpen
                          ? "rotate-180"
                          : "group-hover:translate-y-1"
                      }`}
                    />
                  </div>
                </button>

                {dropdownOpen && (
                  <div className="space-y-2 animate-fade-in">
                    {features.map((feature, index) => (
                      <a
                        key={feature.name}
                        href="#"
                        onClick={() => setMobileOpen(false)}
                        className="block w-full text-center px-6 py-4 rounded-xl bg-black/5 backdrop-blur-xl border border-white/5 text-white/90 font-medium text-lg hover:bg-black/15 hover:border-white/10 hover:scale-102 hover:shadow-xl transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {feature.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
