import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Home, 
  MapPin, 
  Eye, 
  Settings, 
  DollarSign, 
  TrendingUp, 
  HeartHandshake,
  Paintbrush
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.benefits-header',
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

      gsap.fromTo('.benefit-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.benefits-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: Home,
      title: 'Direct Reach',
      description: 'Your offer goes straight to 10,000 homes. No algorithms blocking your message.',
    },
    {
      icon: MapPin,
      title: 'Local Focus',
      description: 'You target households near your business. Reach the people who matter most.',
    },
    {
      icon: Eye,
      title: 'Strong Visibility',
      description: 'Your spot stays in front of families who check their mail every day.',
    },
    {
      icon: Settings,
      title: 'Simple Setup',
      description: 'Pick a spot and send your content. We handle the rest from design to delivery.',
    },
    {
      icon: DollarSign,
      title: 'Clear Pricing',
      description: 'No confusing plans or hidden charges. You know exactly what you get.',
    },
    {
      icon: TrendingUp,
      title: 'Real Results',
      description: 'Local ads bring calls, visits, and new customers to your door.',
    },
    {
      icon: HeartHandshake,
      title: 'Better Awareness',
      description: 'People see your business month after month. Build trust over time.',
    },
    {
      icon: Paintbrush,
      title: 'Easy Design Help',
      description: 'We help you prepare your spot so you look clean, clear, and professional.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="section-flowing bg-[#121218] py-20 lg:py-28"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="benefits-header text-center mb-16">
          <span className="mono text-[#f97316] mb-4 block">WHY SPOTIX</span>
          <h2 className="text-display font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-6">
            Skip the Algorithms.<br />Reach Real People.
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            Online ads change fast and waste money. Direct mail stays simple. 
            People read what they receive in their mailbox.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="benefit-card card-dark p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-[#f97316]" />
              </div>
              <h3 className="text-lg font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-[#a0a0a0] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
