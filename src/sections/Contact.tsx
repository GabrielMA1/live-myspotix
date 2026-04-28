import { Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-spotix-orange/10 to-spotix-orange/20" />
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Book Your Spot</span>
            </h2>
            <p className="text-xl text-white font-semibold mb-2">Reserve Your Space on Next Month's Postcard</p>
            <p className="text-spotix-gray">Limited spots available each month. We respond within 24 hours.</p>
          </div>

          {/* Urgency Banner */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-spotix-orange/20 to-spotix-orangeDark/20 rounded-2xl p-5 border border-spotix-orange/30 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-spotix-orange flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold mb-1">Limited Availability — Book by the 15th</p>
                <p className="text-spotix-gray text-sm">
                  Only 8 advertiser spots per monthly postcard. Book by the 15th to secure your place in next month's mailing.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-spotix-darkgray/50 rounded-2xl p-6 border border-spotix-gray/20">
                <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-spotix-orange/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-spotix-orange" />
                    </div>
                    <div>
                      <p className="text-spotix-gray text-sm">Call / Text</p>
                      <p className="text-white font-medium">647-906-3547</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-spotix-orange/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-spotix-orange" />
                    </div>
                    <div>
                      <p className="text-spotix-gray text-sm">Email</p>
                      <p className="text-white font-medium">hello@myspotix.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-spotix-orange/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-spotix-orange" />
                    </div>
                    <div>
                      <p className="text-spotix-gray text-sm">Location</p>
                      <p className="text-white font-medium">Toronto, Ontario</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-spotix-orange/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-spotix-orange" />
                    </div>
                    <div>
                      <p className="text-spotix-gray text-sm">Response Time</p>
                      <p className="text-white font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly / Book a call */}
              <div className="bg-spotix-darkgray/50 rounded-2xl p-6 border border-spotix-gray/20">
                <h3 className="text-lg font-bold text-white mb-3">Prefer to Talk?</h3>
                <p className="text-spotix-gray text-sm mb-4">
                  Book a free 10-minute spot check. We'll review your business and recommend the best placement.
                </p>
                <a
                  href="tel:647-906-3547"
                  className="btn-gradient w-full py-3 rounded-xl text-white font-bold text-sm text-center block"
                >
                  Call / Text: 647-906-3547
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-spotix-darkgray/50 rounded-2xl p-8 md:p-10 border border-spotix-orange/30 glow-orange h-full">
                <form action="https://formspree.io/f/xzdaelrp" method="POST" className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">Your Name *</label>
                      <input type="text" name="name" required className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-spotix-gray/50" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">Your Email *</label>
                      <input type="email" name="email" required className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-spotix-gray/50" placeholder="john@business.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">Business Name</label>
                      <input type="text" name="business" className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-spotix-gray/50" placeholder="Your Business Name" />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">Spot Size Interest</label>
                      <select name="spot_size" className="form-input w-full px-4 py-3 rounded-xl text-white bg-spotix-black">
                        <option value="solo">Solo Spot — $299</option>
                        <option value="duo">Duo Spot — $499</option>
                        <option value="full" selected>Full Spot — $799 (Most Popular)</option>
                        <option value="custom">Custom — Contact Us</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 text-sm">Your Message</label>
                    <textarea name="message" rows={4} className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-spotix-gray/50 resize-none" placeholder="Tell us about your business and what you're looking for..."></textarea>
                  </div>

                  <button type="submit" className="btn-gradient w-full py-4 rounded-xl text-white font-bold text-lg">
                    Book My Spot
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
