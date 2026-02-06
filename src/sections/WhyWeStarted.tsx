import { Check } from 'lucide-react';

const WhyWeStarted = () => {
  const benefits = [
    'Easy setup for any small business',
    'Clear spot options for every budget',
    'Direct reach to real local households',
    'Simple monthly schedule you can rely on',
  ];

  return (
    <section className="py-20 lg:py-28 bg-spotix-cream">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-spotix-charcoal text-center mb-12">
            Why We Started Spotix
          </h2>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-card">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                We built Spotix to help local businesses reach real homes without high ad costs. 
                Online ads change fast and waste money. Direct mail stays simple. People read what they receive.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                We wanted a way for small businesses to stay visible in the neighbourhoods they serve. 
                Our postcard goes to <strong className="text-spotix-charcoal">10,000 homes</strong>. 
                You pick your spot. We design it. We handle the mailing.
              </p>
            </div>

            {/* Benefit Bullets */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-6 h-6 bg-spotix-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStarted;
