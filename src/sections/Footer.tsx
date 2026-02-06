import { Mail } from 'lucide-react';

// Clear Postcard Logo Icon
const LogoIcon = ({ size = 20 }: { size?: number }) => (
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

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1f2e] py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Logo & Tagline */}
            <div className="text-center lg:text-left">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center gap-2.5 group justify-center lg:justify-start"
              >
                <div className="w-9 h-9 bg-spotix-orange rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <LogoIcon size={20} />
                </div>
                <span className="text-white font-bold text-xl tracking-tight group-hover:text-spotix-orange transition-colors">
                  Spotix
                </span>
              </button>
              <p className="text-gray-400 mt-2 text-sm">
                Real reach. Real simple.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'Spots', id: 'spots' },
                { label: 'Benefits', id: 'benefits' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Contact */}
            <a
              href="mailto:hello@myspotix.com"
              className="flex items-center gap-2 text-gray-400 hover:text-spotix-orange transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">hello@myspotix.com</span>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
              <p>&copy; {currentYear} Spotix. All rights reserved.</p>
              <p>Made for local businesses everywhere.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
