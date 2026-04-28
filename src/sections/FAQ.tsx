import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Which neighborhoods can I target?',
    a: 'Any Toronto postal code area. We group by neighborhood for maximum relevance. Choose from Downtown Core, Midtown, North York, Scarborough, Etobicoke, and 10+ more areas.',
  },
  {
    q: 'What if I don\'t have a design?',
    a: 'Professional layout included. Send your logo + offer, we handle the rest. Our design team creates a polished, print-ready postcard that represents your brand.',
  },
  {
    q: 'How do I track results?',
    a: 'Unique phone number or QR code on each postcard. You see exactly what works. We provide scan data and call tracking so you can measure your ROI.',
  },
  {
    q: 'Can I mail more than once?',
    a: 'Yes — monthly subscriptions available with 15% discount. Lock in your spot and build consistent brand recognition in your neighborhood.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i)
  }

  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-spotix-gray text-lg max-w-2xl mx-auto">
            Everything you need to know about getting started with Spotix.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-spotix-darkgray/50 rounded-xl border border-spotix-gray/20 overflow-hidden">
              <button
                className="accordion-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-spotix-darkgray/70 transition-colors"
                onClick={() => toggle(i)}
              >
                <span className="text-white font-semibold pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-spotix-orange flex-shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className="accordion-content"
                style={{
                  maxHeight: openIdx === i ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease-out',
                }}
              >
                <p className="text-spotix-gray px-6 pb-5">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
