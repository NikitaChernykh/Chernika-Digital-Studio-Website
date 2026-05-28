import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
              {/* Placeholder for dark logo - replace with actual logo image */}
              <span className="text-gray-900 font-bold text-xl">C</span>
            </div>
            <div className="font-bold text-lg tracking-tight text-gray-900">Chernika Digital</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#projects" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3 border-t border-gray-200 mt-4">
            <a
              href="#services"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-center"
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
