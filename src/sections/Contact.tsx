import { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    yourName: '',
    email: '',
    phone: '',
    spotInterest: '',
    targetArea: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Thank you! We will contact you soon to discuss your spot.');
    setFormData({
      businessName: '',
      yourName: '',
      email: '',
      phone: '',
      spotInterest: '',
      targetArea: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-gradient-to-br from-spotix-orange to-spotix-orange-dark"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get Your Spot Now
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Reserve your space on next month&apos;s postcard. Limited spots available.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-spotix-orange focus:ring-2 focus:ring-spotix-orange/20 outline-none transition-all"
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="yourName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="yourName"
                    name="yourName"
                    required
                    value={formData.yourName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-spotix-orange focus:ring-2 focus:ring-spotix-orange/20 outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-spotix-orange focus:ring-2 focus:ring-spotix-orange/20 outline-none transition-all"
                    placeholder="you@business.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-spotix-orange focus:ring-2 focus:ring-spotix-orange/20 outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="spot-interest"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Spot Interest
                  </label>
                  <select
                    id="spot-interest"
                    name="spotInterest"
                    value={formData.spotInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-spotix-orange focus:ring-2 focus:ring-spotix-orange/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a spot size</option>
                    <option value="Prime">Prime Spot (4.25&quot; x 4.25&quot;)</option>
                    <option value="Standard">Standard Spot (4.25&quot; x 2.125&quot;)</option>
                    <option value="Compact">Compact Spot (2.125&quot; x 2.125&quot;)</option>
                    <option value="Mini">Mini Spot (2.125&quot; x 1.0625&quot;)</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="targetArea"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Target Area / Zip Code
                  </label>
                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      id="targetArea"
                      name="targetArea"
                      value={formData.targetArea}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-spotix-orange focus:ring-2 focus:ring-spotix-orange/20 outline-none transition-all"
                      placeholder="90210 or neighborhood"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message / Content Ideas
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-spotix-orange focus:ring-2 focus:ring-spotix-orange/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your business and what you'd like to promote..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-spotix-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-spotix-orange-dark transition-all shadow-lg shadow-spotix-orange/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Reserve My Spot
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-600 mb-4">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:hello@myspotix.com"
                  className="flex items-center gap-2 text-spotix-orange hover:text-spotix-orange-dark transition-colors"
                >
                  <Mail size={18} />
                  <span className="font-medium">hello@myspotix.com</span>
                </a>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-spotix-orange hover:text-spotix-orange-dark transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-medium">(555) 123-4567</span>
                </a>
              </div>
            </div>
          </div>

          {/* Urgency Banner */}
          <div className="mt-8 flex items-center justify-center gap-2 text-white/90">
            <AlertCircle size={18} />
            <span className="text-sm font-medium">
              Spots fill monthly. Book early for best placement.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
