import { Check, QrCode, Phone, Palette, MapPin, Sparkles, MessageCircle } from 'lucide-react'

const plans = [
  {
    name: 'Solo Spot',
    price: '$299',
    subtitle: 'per mailing',
    size: '1/8 page',
    badge: null,
    border: 'border-spotix-gray/20',
    features: [
      { icon: MapPin, text: '1 neighborhood' },
      { icon: Palette, text: 'Professional design included' },
      { icon: Sparkles, text: 'Logo + offer layout' },
      { icon: Check, text: 'Reach ~1,250 homes' },
    ],
    cta: 'Book Solo Spot',
  },
  {
    name: 'Duo Spot',
    price: '$499',
    subtitle: 'per mailing',
    size: '1/4 page',
    badge: null,
    border: 'border-spotix-gray/20',
    features: [
      { icon: MapPin, text: '2 neighborhoods' },
      { icon: Palette, text: 'Professional design included' },
      { icon: QrCode, text: 'QR code for tracking' },
      { icon: Check, text: 'Reach ~2,500 homes' },
    ],
    cta: 'Book Duo Spot',
  },
  {
    name: 'Full Spot',
    price: '$799',
    subtitle: 'per mailing',
    size: '1/2 page',
    badge: 'MOST POPULAR',
    border: 'border-2 border-spotix-orange/50 glow-orange',
    features: [
      { icon: MapPin, text: 'Full coverage — all areas' },
      { icon: Palette, text: 'Professional design included' },
      { icon: QrCode, text: 'QR code for tracking' },
      { icon: Phone, text: 'Unique phone tracking' },
      { icon: Check, text: 'Reach ~5,000 homes' },
    ],
    cta: 'Book Full Spot',
  },
  {
    name: 'Custom',
    price: 'Contact us',
    subtitle: '',
    size: 'Full page',
    badge: null,
    border: 'border-spotix-gray/20',
    features: [
      { icon: MapPin, text: 'Multi-neighborhood targeting' },
      { icon: Palette, text: 'Premium custom design' },
      { icon: QrCode, text: 'QR + phone + URL tracking' },
      { icon: MessageCircle, text: 'Multi-month campaigns' },
      { icon: Check, text: 'Dedicated account support' },
    ],
    cta: 'Get Custom Quote',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-spotix-orange/5 via-transparent to-spotix-orange/5" />
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Choose Your Spot</span>
          </h2>
          <p className="text-spotix-gray text-lg max-w-2xl mx-auto">
            Four tiers to fit every budget and message. Pick the perfect spot for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className="flex flex-col">
              {/* Badge outside the card */}
              {plan.badge && (
                <div className="text-center mb-3">
                  <span className="inline-block bg-gradient-to-r from-spotix-orange to-spotix-orangeDark text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-spotix-orange/20">
                    {plan.badge}
                  </span>
                </div>
              )}
              <div
                className={`bg-spotix-darkgray/50 rounded-2xl p-6 ${plan.border} relative overflow-hidden flex flex-col h-full card-hover`}
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-black gradient-text">{plan.price}</span>
                    {plan.subtitle && <span className="text-spotix-gray text-sm">{plan.subtitle}</span>}
                  </div>
                  <p className="text-spotix-orange text-sm mb-6">{plan.size}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-spotix-gray">
                        <feat.icon className="w-4 h-4 text-spotix-orange mt-0.5 flex-shrink-0" />
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="mt-auto block text-center btn-gradient px-6 py-3 rounded-xl text-white font-bold text-sm"
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
