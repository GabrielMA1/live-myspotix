import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Spots = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.spots-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.spot-card-item',
        { opacity: 0, y: 60, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.spots-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const spots = [
    {
      name: 'Prime',
      description: 'Maximum impact. Best for strong offers.',
      size: '4.25" x 4.25"',
      popular: false,
      features: ['Full visibility', 'Large images', 'Detailed text', 'Best placement'],
    },
    {
      name: 'Standard',
      description: 'Balanced size. Great for most businesses.',
      size: '4.25" x 2.125"',
      popular: true,
      features: ['Good visibility', 'Medium images', 'Clear message', 'Great value'],
    },
    {
      name: 'Compact',
      description: 'Simple and clear. Perfect for logos and offers.',
      size: '2.125" x 2.125"',
      popular: false,
      features: ['Clean design', 'Logo focus', 'Short offer', 'Budget friendly'],
    },
    {
      name: 'Mini',
      description: 'Budget friendly. Perfect for short promos.',
      size: '2.125" x 1.0625"',
      popular: false,
      features: ['Simple promo', 'Logo + offer', 'Lowest cost', 'Stay visible'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="spots"
      className="section-flowing bg-[#0a0a0f] py-20 lg:py-28"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="spots-header text-center mb-16">
          <span className="mono text-[#f97316] mb-4 block">CHOOSE YOUR SPOT</span>
          <h2 className="text-display font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-6">
            Pick the Space That<br />Fits Your Message
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            Every spot puts you in front of 10,000 homes. Larger spots give more room 
            for photos and text. Smaller spots help you stay visible at a lower cost.
          </p>
        </div>

        {/* Spots Grid */}
        <div className="spots-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spots.map((spot, idx) => (
            <div
              key={idx}
              className="spot-card-item spot-card relative"
            >
              {/* Popular badge - positioned outside card */}
              {spot.popular && (
                <div className="popular-badge">
                  Most Popular
                </div>
              )}

              <div className={`card-dark p-6 h-full flex flex-col ${spot.popular ? 'ring-2 ring-[#f97316]' : ''}`}>
                {/* Visual representation */}
                <div className="mb-6 flex justify-center">
                  <div 
                    className="bg-gradient-to-br from-[#f97316]/20 to-[#fbbf24]/20 rounded-lg border border-[#f97316]/30 flex items-center justify-center"
                    style={{
                      width: spot.name === 'Prime' ? '120px' : spot.name === 'Standard' ? '120px' : spot.name === 'Compact' ? '80px' : '80px',
                      height: spot.name === 'Prime' ? '120px' : spot.name === 'Standard' ? '60px' : spot.name === 'Compact' ? '80px' : '40px',
                    }}
                  >
                    <span className="text-xs text-[#f97316] font-mono">{spot.size}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-2 text-center">
                  {spot.name}
                </h3>
                <p className="text-[#a0a0a0] text-sm mb-4 text-center flex-1">
                  {spot.description}
                </p>

                {/* Size */}
                <div className="text-center mb-4">
                  <span className="text-xs mono text-[#a0a0a0]">SIZE</span>
                  <div className="text-sm text-[#f0f0f0] font-medium">{spot.size}</div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {spot.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-[#a0a0a0]">
                      <Check className="w-4 h-4 text-[#f97316] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => {
                    const contactSection = document.querySelector('#contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 px-4 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                    spot.popular
                      ? 'bg-[#f97316] text-white hover:bg-[#fbbf24] hover:text-[#0a0a0f]'
                      : 'bg-[#1c1c24] text-[#f0f0f0] border border-[#2a2a35] hover:border-[#f97316] hover:text-[#f97316]'
                  }`}
                >
                  Reserve This Spot
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spots;
