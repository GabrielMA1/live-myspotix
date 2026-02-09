import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer, Send, Palette, Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.how-header',
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

      gsap.fromTo('.step-item',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      icon: MousePointer,
      title: 'Pick Your Spot',
      description: 'Choose the size that fits your budget and message. From Mini to Prime, we have options for every business.',
    },
    {
      number: '02',
      icon: Send,
      title: 'Send Your Content',
      description: 'Give us your logo, photos, and offer text. Not sure what to say? We\'ll help you craft the perfect message.',
    },
    {
      number: '03',
      icon: Palette,
      title: 'We Design & Print',
      description: 'We arrange your spot professionally on the postcard. You\'ll see a proof before anything goes to print.',
    },
    {
      number: '04',
      icon: Truck,
      title: 'Reach 10,000 Homes',
      description: 'Your spot mails to local households monthly. Sit back and watch the calls and visits come in.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="section-flowing bg-[#0a0a0f] py-20 lg:py-28"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="how-header text-center mb-16">
          <span className="mono text-[#f97316] mb-4 block">HOW IT WORKS</span>
          <h2 className="text-display font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-6">
            Four Simple Steps to<br />Get Your Spot
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            We made it easy. No complicated setup, no tech skills needed. 
            Just pick, send, and we handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-container max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f97316] via-[#fbbf24] to-transparent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="step-item relative flex gap-6 md:gap-10"
                >
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-[#1c1c24] border border-[#2a2a35] flex items-center justify-center animate-pulse-glow-orange">
                      <span className="text-xl font-['Space_Grotesk'] font-bold text-[#f97316]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-dark flex-1 p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-[#f97316]" />
                      </div>
                      <h3 className="text-xl font-['Space_Grotesk'] font-bold text-[#f0f0f0]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#a0a0a0] leading-relaxed md:pl-14">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
