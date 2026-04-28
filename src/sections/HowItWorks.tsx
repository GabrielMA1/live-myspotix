import { MousePointerClick, Upload, Palette, Home } from 'lucide-react'

const steps = [
  {
    num: '1',
    date: 'By 15th of month',
    title: 'Book Your Spot',
    desc: 'Choose your size and neighborhood. Reserve your place on next month\'s postcard.',
    icon: MousePointerClick,
  },
  {
    num: '2',
    date: 'By 20th of month',
    title: 'Design Approved',
    desc: 'Send your logo + offer. We design, you approve. Professional layout included.',
    icon: Palette,
  },
  {
    num: '3',
    date: 'By 1st of next month',
    title: 'Mailing Delivered',
    desc: '10,000 postcards hit mailboxes across your chosen Toronto neighborhoods.',
    icon: Home,
  },
  {
    num: '4',
    date: 'Ongoing',
    title: 'Track & Optimize',
    desc: 'Track responses via QR code and phone number. Optimize next month\'s campaign.',
    icon: Upload,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-spotix-gray text-lg max-w-2xl mx-auto">
            Four simple steps to reach thousands of local homes — with real dates so you know exactly what to expect.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Connector Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-spotix-orange/20 via-spotix-orange/50 to-spotix-orange/20" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="text-center flex flex-col items-center">
                  <div className="relative z-10 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-spotix-orange to-spotix-orangeDark flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-spotix-orange/30">
                      {step.num}
                    </div>
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-spotix-orange/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-spotix-orange" />
                  </div>
                  <span className="inline-block bg-spotix-orange/10 text-spotix-orange text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {step.date}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-spotix-gray text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8 relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-spotix-orange/20 via-spotix-orange/50 to-spotix-orange/20" />
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-start gap-6">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-spotix-orange to-spotix-orangeDark flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-spotix-orange/30">
                    {step.num}
                  </div>
                </div>
                <div className="flex-grow bg-spotix-darkgray/50 rounded-2xl p-6 border border-spotix-gray/20">
                  <span className="inline-block bg-spotix-orange/10 text-spotix-orange text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {step.date}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-spotix-gray text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
