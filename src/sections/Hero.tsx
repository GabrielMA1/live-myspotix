import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MapPin, Users, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      // Load animation
      const loadTl = gsap.timeline({ delay: 0.2 });
      
      loadTl
        .fromTo('.hero-badge',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        )
        .fromTo('.hero-title span',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo('.hero-subtitle',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo('.hero-ctas',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo('.postcard-mockup',
          { opacity: 0, x: 60, rotateY: -20 },
          { opacity: 1, x: 0, rotateY: -8, duration: 1, ease: 'power2.out' },
          '-=0.8'
        )
        .fromTo('.hero-trust',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set('.hero-badge, .hero-title span, .hero-subtitle, .hero-ctas, .hero-trust, .postcard-mockup', {
              opacity: 1, y: 0, x: 0
            });
          }
        }
      });

      // EXIT phase
      scrollTl
        .fromTo(content,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const trustPoints = [
    { icon: MapPin, text: 'Toronto Area' },
    { icon: Users, text: '10,000 Homes' },
    { icon: Check, text: 'Canada Post Partner' },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-pinned z-10 warm-gradient"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#f97316]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#fbbf24]/8 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex items-center"
      >
        <div className="container-wide w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left - Text */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="hero-badge trust-badge-warm mb-6 inline-flex">
                <MapPin className="w-4 h-4 text-[#f97316]" />
                <span className="text-sm text-[#f0f0f0]">Postcards to 10,000 Toronto Homes</span>
              </div>

              {/* Headline */}
              <h1 className="hero-title text-hero font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-6">
                <span className="block">Get Your</span>
                <span className="block mt-1 bg-gradient-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent">
                  Spot Now
                </span>
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle text-lg md:text-xl text-[#a0a0a0] max-w-lg mx-auto lg:mx-0 mb-8">
                Reach 10,000 local homes with your business offer. 
                No tech skills. No ad algorithms. Just real mailboxes 
                in neighborhoods you choose.
              </p>

              {/* CTAs */}
              <div className="hero-ctas flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="#spots"
                  className="btn-primary"
                >
                  Choose Your Spot
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="btn-outline"
                >
                  See How It Works
                </a>
              </div>

              {/* Trust points */}
              <div className="hero-trust flex flex-wrap justify-center lg:justify-start gap-4">
                {trustPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#a0a0a0]"
                  >
                    <point.icon className="w-4 h-4 text-[#f97316]" />
                    <span>{point.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Postcard Mockup */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="postcard-mockup relative">
                {/* Main postcard */}
                <div className="w-80 h-56 bg-gradient-to-br from-[#f97316] to-[#fbbf24] rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0a0a0f]/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-2xl bg-white/95 p-6 flex flex-col justify-between">
                      <div className="w-16 h-4 bg-[#f97316]/20 rounded" />
                      <div className="w-20 h-3 bg-[#a0a0a0]/30 rounded" />
                      <div className="flex justify-between items-end">
                        <div className="w-14 h-2 bg-[#a0a0a0]/20 rounded" />
                        <div className="w-10 h-10 bg-[#f97316]/10 rounded-lg flex items-center justify-center">
                          <span className="text-xl font-bold text-[#f97316]">S</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative stamp */}
                  <div className="absolute top-4 right-4 w-12 h-14 border-2 border-dashed border-white/40 rounded flex items-center justify-center">
                    <span className="text-xs text-white/60 font-mono rotate-12">STAMP</span>
                  </div>
                </div>

                {/* Shadow/glow */}
                <div className="absolute -inset-4 bg-[#f97316]/20 rounded-3xl blur-2xl -z-10" />
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#1c1c24] rounded-xl border border-[#2a2a35] flex items-center justify-center animate-float">
                  <MapPin className="w-6 h-6 text-[#f97316]" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-[#1c1c24] rounded-xl border border-[#2a2a35] flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Users className="w-5 h-5 text-[#fbbf24]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
};

export default Hero;
