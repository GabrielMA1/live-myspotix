import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Spots', href: '#spots' },
      { label: 'Benefits', href: '#benefits' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'FAQ', href: '#faq' },
    ],
    family: [
      { label: 'GMACOVEI', href: 'https://gmacovei.com' },
      { label: 'RielArt', href: 'https://rielart.com' },
    ],
  };

  return (
    <footer className="bg-[#0a0a0f] border-t border-[#2a2a35]">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-['Space_Grotesk'] font-bold text-[#f0f0f0]">
                Spotix
              </span>
            </a>
            <p className="text-[#a0a0a0] mb-6 max-w-sm">
              Direct mail postcards to 10,000 Toronto homes. 
              Simple, honest, effective local advertising.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:hello@myspotix.com" className="flex items-center gap-3 text-sm text-[#a0a0a0] hover:text-[#f97316] transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@myspotix.com</span>
              </a>
              <a href="tel:+16479063547" className="flex items-center gap-3 text-sm text-[#a0a0a0] hover:text-[#f97316] transition-colors">
                <Phone className="w-4 h-4" />
                <span>647-906-3547</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-[#a0a0a0]">
                <MapPin className="w-4 h-4" />
                <span>Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mono text-[#f0f0f0] mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[#a0a0a0] hover:text-[#f97316] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Family */}
          <div>
            <h4 className="mono text-[#f0f0f0] mb-4">Family</h4>
            <ul className="space-y-3">
              {footerLinks.family.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0a0a0] hover:text-[#f97316] transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2a2a35] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#a0a0a0]">
            © {currentYear} Spotix. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#a0a0a0]">
              Part of the{' '}
              <a 
                href="https://gmacovei.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#f97316] hover:underline"
              >
                Gabriel Macovei
              </a>{' '}
              family
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
