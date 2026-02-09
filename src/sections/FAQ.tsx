import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header',
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

      gsap.fromTo('.faq-item-container',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: 'What is Spotix exactly?',
      answer: 'Spotix is a direct mail advertising service. We send postcards to 10,000 homes in the Toronto area every month. You buy a spot on the postcard, and we handle design, printing, and delivery through Canada Post.',
    },
    {
      question: 'How big are the spots?',
      answer: 'We offer four sizes: Mini (2.125" x 1.0625"), Compact (2.125" x 2.125"), Standard (4.25" x 2.125"), and Prime (4.25" x 4.25"). The Standard spot is our most popular option—big enough for a strong message, priced right for small businesses.',
    },
    {
      question: 'Do I need to design the ad?',
      answer: 'Nope! Just send us your logo, any photos you want to include, and your offer text. Our design team will create a professional layout and send you a proof for approval before printing.',
    },
    {
      question: 'How often does it mail?',
      answer: 'Our postcards mail once a month to 10,000 homes. You can book a single month or reserve multiple months in advance. Spots fill up fast, so we recommend booking early.',
    },
    {
      question: 'Can I choose which neighborhoods?',
      answer: 'Yes! We target specific postal codes in the Toronto area. When you book, let us know which area you want to reach, and we\'ll match it with our delivery routes.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Pricing depends on the spot size. Mini spots start at an affordable rate for small promos, while Prime spots offer maximum visibility. Contact us for current pricing—we\'ll find an option that fits your budget.',
    },
    {
      question: 'Is this better than Facebook ads?',
      answer: 'They work differently. Facebook ads can be great, but they depend on algorithms and people being online. Direct mail goes straight to the mailbox—no ad blockers, no scrolling past. Many of our clients use both!',
    },
    {
      question: 'Can I change my spot design?',
      answer: 'Absolutely! You can update your design each month. Many businesses keep their spot fresh with seasonal offers or new promotions. Just send us your updates before the monthly deadline.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="section-flowing bg-[#0a0a0f] py-20 lg:py-28"
    >
      <div className="container-narrow">
        {/* Header */}
        <div className="faq-header text-center mb-12">
          <span className="mono text-[#f97316] mb-4 block">COMMON QUESTIONS</span>
          <h2 className="text-display font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-6">
            Simple Answers to<br />Help You Decide
          </h2>
          <p className="text-[#a0a0a0] text-lg">
            Got questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, 
            just reach out.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="faq-item-container faq-item"
            >
              <button
                className="faq-trigger"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                  openIndex === idx 
                    ? 'bg-[#f97316] text-white' 
                    : 'bg-[#1c1c24] text-[#a0a0a0]'
                }`}>
                  {openIndex === idx ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              <div 
                className="faq-content"
                style={{ 
                  height: openIndex === idx ? 'auto' : 0,
                  opacity: openIndex === idx ? 1 : 0
                }}
              >
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
