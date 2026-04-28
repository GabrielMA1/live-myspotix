import { Calendar, PenTool, Truck, Phone } from 'lucide-react'

const timeline = [
  {
    week: 'Week 1',
    title: 'You Book Your Spot',
    desc: 'Choose your size, neighborhood, and mailing date. Send us your logo and offer details.',
    icon: Calendar,
  },
  {
    week: 'Week 2',
    title: 'Design & Approve',
    desc: 'Our team creates your professional layout. You approve, we print.',
    icon: PenTool,
  },
  {
    week: 'Week 3',
    title: '10,000 Postcards Delivered',
    desc: 'Your ad lands in mailboxes across Toronto. Physical, tangible, impossible to ignore.',
    icon: Truck,
  },
  {
    week: 'Week 4',
    title: 'Calls & Visits Start',
    desc: 'Track responses via QR scans and your unique phone number. See exactly what works.',
    icon: Phone,
  },
]

export default function WhatToExpect() {
  return (
    <section id="expect" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-spotix-orange/5 via-transparent to-spotix-orange/10" />
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What to Expect</span>
          </h2>
          <p className="text-spotix-gray text-lg max-w-2xl mx-auto">
            A clear 4-week timeline from booking to results. No surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {timeline.map((item, i) => (
            <div key={i} className="bg-spotix-darkgray/50 rounded-2xl p-8 border border-spotix-gray/20 card-hover text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-spotix-orange to-spotix-orangeDark flex items-center justify-center">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className="inline-block bg-spotix-orange/10 text-spotix-orange text-xs font-bold px-3 py-1 rounded-full mb-3">
                {item.week}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-spotix-gray text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
