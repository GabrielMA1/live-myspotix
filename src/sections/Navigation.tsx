import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Clear Postcard Logo Icon
const LogoIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer postcard rectangle */}
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="white" strokeWidth="2" fill="none" />
    {/* Vertical divider line */}
    <line x1="9" y1="3" x2="9" y2="21" stroke="white" strokeWidth="1.5" />
    {/* Stamp box in top right */}
    <rect x="14" y="5" width="5" height="6" rx="1" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="2 1" />
    {/* Address lines */}
    <line x1="11" y1="14" x2="20" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="11" y1="17" x2="18" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Spots', id: 'spots' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 bg-spotix-orange rounded-xl flex items-center justify-center shadow-lg shadow-spotix-orange/25 group-hover:shadow-spotix-orange/40 group-hover:scale-105 transition-all">
              <LogoIcon size={24} />
            </div>
            <span className="text-spotix-charcoal font-bold text-xl lg:text-2xl tracking-tight group-hover:text-spotix-orange transition-colors">
              Spotix
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-600 text-sm font-medium hover:text-spotix-orange transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-spotix-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-spotix-orange-dark transition-colors shadow-lg shadow-spotix-orange/25"
            >
              Get Your Spot
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-spotix-charcoal hover:text-spotix-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-spotix-charcoal font-medium py-2 hover:text-spotix-orange transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full bg-spotix-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-spotix-orange-dark transition-colors mt-4"
          >
            Get Your Spot
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
