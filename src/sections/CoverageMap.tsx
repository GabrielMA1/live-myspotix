import { MapPin } from 'lucide-react'

const neighborhoods = [
  'Downtown Core',
  'Midtown',
  'North York',
  'Scarborough',
  'Etobicoke',
  'York',
  'East York',
  'Liberty Village',
  'Kensington Market',
  'The Beaches',
  'Leslieville',
  'Parkdale',
  'High Park',
  'Yonge & Eglinton',
  'Distillery District',
]

export default function CoverageMap() {
  return (
    <section id="coverage" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-spotix-orange/5 via-transparent to-spotix-orange/5" />
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Toronto Coverage Map</span>
          </h2>
          <p className="text-spotix-gray text-lg max-w-2xl mx-auto">
            We cover 15+ Toronto neighborhoods. Choose the areas where your customers live.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stylized Toronto Map */}
          <div className="relative bg-spotix-darkgray/50 rounded-3xl p-8 md:p-12 border border-spotix-gray/20 mb-12 overflow-hidden">
            {/* Map Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-spotix-orange/10" style={{ filter: 'blur(60px)' }} />

            {/* Map Grid */}
            <div className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {neighborhoods.map((neighborhood, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-spotix-black/50 rounded-xl px-3 py-3 border border-spotix-gray/10 card-hover group cursor-default"
                >
                  <MapPin className="w-4 h-4 text-spotix-orange flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-white text-xs font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>

            {/* Map Legend */}
            <div className="flex items-center justify-center gap-6 mt-8 text-spotix-gray text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-spotix-orange" />
                <span>Active Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-spotix-gray/30" />
                <span>Expanding Soon</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-spotix-darkgray/50 rounded-xl p-5 border border-spotix-gray/20 text-center card-hover">
              <div className="text-2xl md:text-3xl font-black gradient-text mb-1">10,000+</div>
              <p className="text-spotix-gray text-sm">Homes Reached Monthly</p>
            </div>
            <div className="bg-spotix-darkgray/50 rounded-xl p-5 border border-spotix-gray/20 text-center card-hover">
              <div className="text-2xl md:text-3xl font-black gradient-text mb-1">95%</div>
              <p className="text-spotix-gray text-sm">Delivery Rate</p>
            </div>
            <div className="bg-spotix-darkgray/50 rounded-xl p-5 border border-spotix-gray/20 text-center card-hover">
              <div className="text-2xl md:text-3xl font-black gradient-text mb-1">15+</div>
              <p className="text-spotix-gray text-sm">Neighborhoods Covered</p>
            </div>
            <div className="bg-spotix-darkgray/50 rounded-xl p-5 border border-spotix-gray/20 text-center card-hover">
              <div className="text-2xl md:text-3xl font-black gradient-text mb-1">0</div>
              <p className="text-spotix-gray text-sm">Ad Blockers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
