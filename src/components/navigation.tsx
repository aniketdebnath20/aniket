import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const halfScreen = window.innerHeight / 2;

      // Only show nav after scrolling past half screen
      if (scrollY <= halfScreen) {
        setShowNav(false);
        return;
      }

      // Hide nav while actively scrolling
      setIsScrolling(true);
      setShowNav(false);

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Show nav after user stops scrolling
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        if (window.scrollY > halfScreen) {
          setShowNav(true);
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {showNav && !isScrolling && (
        <motion.header
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 bg-background/80 backdrop-blur-lg border-b border-border"
        >
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <Link
              to="/"
              className="font-display text-xl font-bold text-foreground"
            >
              AD<span className="text-primary">.</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile nav */}
          <motion.div
            initial={false}
            animate={
              isOpen
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg rounded-xl mt-4 border border-border"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
