import { Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-spotix-gray/20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-spotix-orange to-spotix-orangeDark flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Spotix</span>
              </div>
              <p className="text-spotix-gray mb-4 max-w-sm">
                Direct Mail Advertising to 10,000 Toronto Homes. Reach local customers with real mailboxes in neighborhoods you choose.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/spotix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-spotix-darkgray/50 flex items-center justify-center text-spotix-gray hover:text-spotix-orange hover:bg-spotix-orange/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hello@myspotix.com"
                  className="w-10 h-10 rounded-full bg-spotix-darkgray/50 flex items-center justify-center text-spotix-gray hover:text-spotix-orange hover:bg-spotix-orange/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-spotix-gray hover:text-spotix-orange transition-colors">Home</a></li>
                <li><a href="#pricing" className="text-spotix-gray hover:text-spotix-orange transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="text-spotix-gray hover:text-spotix-orange transition-colors">How It Works</a></li>
                <li><a href="#coverage" className="text-spotix-gray hover:text-spotix-orange transition-colors">Coverage</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy-policy.html" className="text-spotix-gray hover:text-spotix-orange transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service.html" className="text-spotix-gray hover:text-spotix-orange transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-spotix-gray/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-spotix-gray text-sm">
              &copy; 2026 Spotix. All rights reserved.
            </p>
            <p className="text-spotix-gray text-sm">
              A{' '}
              <a
                href="https://gmacovei.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-spotix-orange hover:underline"
              >
                Gabriel Macovei
              </a>{' '}
              company
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
