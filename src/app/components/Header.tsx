import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/img/logo.svg";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex items-center shrink-0 min-h-11">
            <img
              src={logo}
              alt="Chernika Digital"
              className="h-8 w-auto sm:h-9 md:h-10"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Services
            </a>
            <a href="/#projects" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Projects
            </a>
            <a
              href="/#contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-sm min-h-11 inline-flex items-center shadow-sm shadow-primary/25"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center min-h-11 min-w-11 rounded-lg text-gray-900 active:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 space-y-1 border-t border-gray-200 mt-3">
            <a
              href="/#services"
              className="block py-3 px-2 text-base text-gray-700 hover:text-primary transition-colors min-h-11"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/#projects"
              className="block py-3 px-2 text-base text-gray-700 hover:text-primary transition-colors min-h-11"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="/#contact"
              className="block px-4 py-3 mt-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-center text-base min-h-11 shadow-sm shadow-primary/25"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
