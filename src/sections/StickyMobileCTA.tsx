import { Calendar } from 'lucide-react'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-spotix-black/95 backdrop-blur-md border-t border-spotix-orange/30 p-3">
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="btn-gradient w-full py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        Book Your Spot
      </a>
    </div>
  )
}
