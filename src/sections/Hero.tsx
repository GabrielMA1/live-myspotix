import { MapPin, Home, Mail, Send, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-spotix-orange/10 via-transparent to-transparent" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-spotix-orange opacity-50 animate-particle"
            style={{
              left: `${10 + i * 10}%`,
              bottom: '0',
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Hero Visual */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mb-12">
        <div className="relative h-80 md:h-[420px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
          {/* Central Postcard */}
          <div className="absolute w-40 h-28 md:w-56 md:h-36 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-2xl z-20 animate-float" style={{ transform: 'rotate(-5deg)' }}>
            <div className="absolute inset-0 rounded-lg border-2 border-spotix-orange/30" />
            <div className="absolute top-3 left-3 w-16 h-2 bg-spotix-orange/40 rounded" />
            <div className="absolute top-6 left-3 w-12 h-2 bg-gray-300 rounded" />
            <div className="absolute top-9 left-3 w-14 h-2 bg-gray-300 rounded" />
            <div className="absolute top-3 right-3 w-10 h-12 bg-gradient-to-br from-spotix-orange to-spotix-orangeDark rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="absolute bottom-8 right-4 w-20 h-1 bg-gray-400 rounded" />
            <div className="absolute bottom-5 right-4 w-16 h-1 bg-gray-400 rounded" />
            <div className="absolute bottom-2 right-4 w-14 h-1 bg-gray-400 rounded" />
          </div>

          {/* Homes Grid */}
          {[
            { top: '5%', left: '10%', delay: '0s' },
            { top: '8%', left: '25%', delay: '0.3s' },
            { top: '3%', right: '20%', delay: '0.6s' },
            { top: '12%', right: '8%', delay: '0.9s' },
            { bottom: '15%', left: '5%', delay: '1.2s' },
            { bottom: '10%', left: '22%', delay: '1.5s' },
            { bottom: '18%', right: '18%', delay: '1.8s' },
            { bottom: '8%', right: '5%', delay: '2.1s' },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-10 h-10 md:w-12 md:h-12 animate-home-pulse"
              style={{
                ...pos,
                animationDelay: pos.delay,
              }}
            >
              <div className={`w-full h-full bg-gradient-to-br ${i % 2 === 0 ? 'from-spotix-orange/60 to-spotix-orangeDark/60' : 'from-spotix-orange/50 to-spotix-orangeDark/50'} rounded-lg flex items-center justify-center`}>
                <Home className={`w-5 h-5 md:w-6 md:h-6 ${i % 2 === 0 ? 'text-white' : 'text-white/80'}`} />
              </div>
            </div>
          ))}

          {/* Flying Envelopes */}
          <div className="envelope-shape absolute w-10 h-7 md:w-14 md:h-10 rounded animate-fly" style={{ top: '20%', left: '18%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
            </div>
          </div>
          <div className="envelope-shape absolute w-9 h-6 md:w-12 md:h-8 rounded animate-fly-delayed" style={{ top: '25%', right: '22%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Send className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
            </div>
          </div>
          <div className="envelope-shape absolute w-8 h-6 md:w-10 md:h-7 rounded animate-fly-slow" style={{ bottom: '25%', left: '30%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-white/90" />
            </div>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{ zIndex: 5 }}>
            <line x1="50%" y1="50%" x2="15%" y2="10%" stroke="#F97316" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" />
            <line x1="50%" y1="50%" x2="30%" y2="12%" stroke="#F97316" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <line x1="50%" y1="50%" x2="75%" y2="8%" stroke="#F97316" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <line x1="50%" y1="50%" x2="88%" y2="15%" stroke="#F97316" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <line x1="50%" y1="50%" x2="10%" y2="75%" stroke="#F97316" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <line x1="50%" y1="50%" x2="28%" y2="80%" stroke="#F97316" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            <line x1="50%" y1="50%" x2="78%" y2="78%" stroke="#F97316" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '1.3s' }} />
            <line x1="50%" y1="50%" x2="92%" y2="85%" stroke="#F97316" strokeWidth="1" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '1.8s' }} />
          </svg>

          {/* Central Glow */}
          <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-spotix-orange/30 to-spotix-orangeDark/20 opacity-60 animate-pulse-glow" style={{ filter: 'blur(40px)', zIndex: 1 }} />
        </div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-spotix-orange/10 border border-spotix-orange/30 rounded-full px-4 py-2 mb-6">
          <MapPin className="w-4 h-4 text-spotix-orange" />
          <span className="text-spotix-orange text-sm font-medium">Postcards to 10,000 Toronto Homes</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="text-white">Get Your</span><br />
          <span className="gradient-text glow-text">Spot Now</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-spotix-gray max-w-2xl mx-auto mb-8 leading-relaxed">
          Reach <span className="text-white font-semibold">10,000 local homes</span> with your business offer. No tech skills. No ad algorithms. Just real mailboxes in neighborhoods you choose.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="btn-gradient px-8 py-4 rounded-full text-white font-bold text-lg w-full sm:w-auto text-center">
            Choose Your Spot
          </a>
          <a href="#how-it-works" className="px-8 py-4 rounded-full border border-spotix-gray/50 text-white font-semibold text-lg hover:bg-white/5 transition-colors w-full sm:w-auto text-center">
            See How It Works
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-spotix-gray text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-spotix-orange" />
            <span>Toronto Area</span>
          </div>
          <div className="flex items-center gap-2">
            <Home className="w-4 h-4 text-spotix-orange" />
            <span>10,000 Homes</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-spotix-orange/60" />
      </div>
    </section>
  )
}
