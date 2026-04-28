import { Utensils, Scissors, HeartPulse, Home, Briefcase } from 'lucide-react'

const businesses = [
  { icon: Utensils, label: 'Local Restaurants' },
  { icon: Scissors, label: 'Salons & Barbers' },
  { icon: HeartPulse, label: 'Clinics & Wellness' },
  { icon: Home, label: 'Realtors' },
  { icon: Briefcase, label: 'Home Services' },
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-20 md:py-32 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Who It's For</span>
          </h2>
          <p className="text-spotix-gray text-lg max-w-2xl mx-auto">
            If you serve Toronto locals, Spotix is built for you.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
          {businesses.map((biz, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-spotix-darkgray/50 rounded-full px-6 py-3 border border-spotix-gray/20 card-hover"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-spotix-orange/20 to-spotix-orangeDark/20 flex items-center justify-center">
                <biz.icon className="w-5 h-5 text-spotix-orange" />
              </div>
              <span className="text-white font-medium">{biz.label}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-spotix-gray text-lg max-w-xl mx-auto">
          Any local business that wants to reach real people in real neighborhoods — without fighting algorithms or ad blockers.
        </p>
      </div>
    </section>
  )
}
