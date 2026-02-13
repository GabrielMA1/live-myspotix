import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Check, Phone, Mail, MapPin, AlertCircle, Building, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    email: '',
    phone: '',
    spotInterest: '',
    targetArea: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.contact-form-field',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        businessName: '',
        name: '',
        email: '',
        phone: '',
        spotInterest: '',
        targetArea: '',
        message: '',
      });
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: 'hello@myspotix.com', href: 'mailto:hello@myspotix.com' },
    { icon: Phone, label: '647-906-3547', href: 'tel:+16479063547' },
    { icon: MapPin, label: 'Ontario, Canada', href: '#' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-flowing bg-[#121218] py-20 lg:py-28"
    >
      <div className="container-wide">
        <div className="contact-content grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div>
            <span className="mono text-[#f97316] mb-4 block">GET YOUR SPOT</span>
            <h2 className="text-display font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-6">
              Reserve Your Space on Next Month&apos;s Postcard
            </h2>
            <p className="text-[#a0a0a0] text-lg mb-8">
              Limited spots available each month. Fill out the form and we&apos;ll 
              get back to you within 24 hours with pricing and availability.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1c1c24] border border-[#2a2a35] flex items-center justify-center group-hover:border-[#f97316]/40 transition-colors">
                    <item.icon className="w-5 h-5 text-[#a0a0a0] group-hover:text-[#f97316] transition-colors" />
                  </div>
                  <span className="text-[#f0f0f0] group-hover:text-[#f97316] transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Trust note */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#f97316]/5 border border-[#f97316]/20">
              <AlertCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#a0a0a0]">
                Spots fill monthly. Book early for best placement. 
                No commitment required to inquire.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form">
            <div className="card-dark p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#f97316]/10 flex items-center justify-center">
                    <Check className="w-7 h-7 text-[#f97316]" />
                  </div>
                  <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-[#f0f0f0] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[#a0a0a0]">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours 
                    with pricing and availability.
                  </p>
                </div>
              ) : (
                <form 
                  // Formspree endpoint for contact form submissions
                  action="https://formspree.io/f/xzdaelrp" 
                  method="POST"
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div className="contact-form-field">
                    <label className="block text-sm text-[#a0a0a0] mb-2">Business Name *</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Your business name"
                        className="pl-11"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="contact-form-field">
                      <label className="block text-sm text-[#a0a0a0] mb-2">Your Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="pl-11"
                        />
                      </div>
                    </div>
                    <div className="contact-form-field">
                      <label className="block text-sm text-[#a0a0a0] mb-2">Phone *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="647-906-3547"
                          className="pl-11"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="contact-form-field">
                    <label className="block text-sm text-[#a0a0a0] mb-2">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="pl-11"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="contact-form-field">
                      <label className="block text-sm text-[#a0a0a0] mb-2">Spot Interest</label>
                      <select
                        name="spotInterest"
                        value={formData.spotInterest}
                        onChange={(e) => setFormData({ ...formData, spotInterest: e.target.value })}
                      >
                        <option value="">Select a spot size</option>
                        <option value="prime">Prime Spot (4.25&quot; x 4.25&quot;)</option>
                        <option value="standard">Standard Spot (4.25&quot; x 2.125&quot;)</option>
                        <option value="compact">Compact Spot (2.125&quot; x 2.125&quot;)</option>
                        <option value="mini">Mini Spot (2.125&quot; x 1.0625&quot;)</option>
                      </select>
                    </div>
                    <div className="contact-form-field">
                      <label className="block text-sm text-[#a0a0a0] mb-2">Target Area / Zip Code</label>
                      <input
                        type="text"
                        name="targetArea"
                        value={formData.targetArea}
                        onChange={(e) => setFormData({ ...formData, targetArea: e.target.value })}
                        placeholder="e.g., M5V 3A8"
                      />
                    </div>
                  </div>

                  <div className="contact-form-field">
                    <label className="block text-sm text-[#a0a0a0] mb-2">Message / Content Ideas</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business and what you'd like to promote..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Reserve My Spot
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
