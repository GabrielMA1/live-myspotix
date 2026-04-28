import { Shield, MapPin, Wrench, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Direct Reach',
    desc: 'Your ad can\'t be blocked, skipped, or filtered. It physically arrives in the mailbox.',
  },
  {
    icon: MapPin,
    title: 'Local Focus',
    desc: 'Target the exact neighborhoods where your customers live. No wasted impressions.',
  },
  {
    icon: Wrench,
    title: 'Simple Setup',
    desc: 'Send us your logo and offer — we handle design, printing, and delivery.',
  },
  {
    icon: BarChart3,
    title: 'Real Results',
    desc: 'Track every response via QR code and unique phone number. Know what works.',
  },
]

export default function WhySpotix() {
  return (
    <section id="why-spotix" className="py-20 md:py-32 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Spotix?</span>
          </h2>
          <p className="text-spotix-gray text-lg max-w-2xl mx-auto">
            The four reasons local businesses trust us with their advertising.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feat, i) => (
            <div key={i} className="card-hover bg-spotix-darkgray/30 rounded-xl p-6 border border-spotix-gray/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-spotix-orange/20 to-spotix-orangeDark/20 flex items-center justify-center mb-4">
                <feat.icon className="w-6 h-6 text-spotix-orange" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-spotix-gray text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
