import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Spots', href: '#spots' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'nav-blur py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-[#f0f0f0] hover:text-[#f97316] transition-colors"
          >
            Spotix
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+16479063547"
              className="flex items-center gap-2 text-sm text-[#a0a0a0] hover:text-[#f97316] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>647-906-3547</span>
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Get Your Spot
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#f0f0f0] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0f]/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-['Space_Grotesk'] font-semibold text-[#f0f0f0] hover:text-[#f97316] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+16479063547"
            className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#f97316] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>647-906-3547</span>
          </a>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-primary mt-4"
          >
            Get Your Spot
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
