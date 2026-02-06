import { MousePointer, Upload, Printer, Home } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: MousePointer,
      title: 'Pick Your Spot',
      description: 'Choose the size that fits your budget and message',
    },
    {
      number: '02',
      icon: Upload,
      title: 'Send Your Content',
      description: 'Give us your logo, photos, and offer text',
    },
    {
      number: '03',
      icon: Printer,
      title: 'We Design & Print',
      description: 'We arrange your spot professionally on the postcard',
    },
    {
      number: '04',
      icon: Home,
      title: 'Reach 10,000 Homes',
      description: 'Your spot mails to local households monthly',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-spotix-charcoal mb-4">
              How Spotix Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Four simple steps to get your business in 10,000 mailboxes.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-spotix-orange/20 via-spotix-orange to-spotix-orange/20 rounded-full"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative text-center">
                      {/* Step Number */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-spotix-orange text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                        {step.number}
                      </div>
                      
                      {/* Icon Circle */}
                      <div className="w-20 h-20 bg-white border-4 border-spotix-orange/20 rounded-full flex items-center justify-center mx-auto mb-6 mt-8 shadow-lg hover:border-spotix-orange hover:scale-110 transition-all duration-300">
                        <Icon size={28} className="text-spotix-orange" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-spotix-charcoal mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Cards */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-spotix-cream rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-spotix-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-spotix-orange font-bold text-sm mb-1">
                      Step {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-spotix-charcoal mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
