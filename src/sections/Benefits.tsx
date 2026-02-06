import { 
  Target, 
  MapPin, 
  Eye, 
  Settings, 
  DollarSign, 
  TrendingUp, 
  Award, 
  Palette 
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Direct reach',
      description: 'Your offer goes straight to 10,000 homes.',
    },
    {
      icon: MapPin,
      title: 'Local focus',
      description: 'You target households near your business.',
    },
    {
      icon: Eye,
      title: 'Strong visibility',
      description: 'Your spot stays in front of families who check their mail.',
    },
    {
      icon: Settings,
      title: 'Simple setup',
      description: 'Pick a spot and send your content.',
    },
    {
      icon: DollarSign,
      title: 'Clear pricing',
      description: 'No confusing plans or hidden charges.',
    },
    {
      icon: TrendingUp,
      title: 'Real results',
      description: 'Local ads bring calls, visits, and new customers.',
    },
    {
      icon: Award,
      title: 'Better awareness',
      description: 'People see your business month after month.',
    },
    {
      icon: Palette,
      title: 'Easy design help',
      description: 'We help you prepare your spot so you look clean and clear.',
    },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-spotix-cream">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-spotix-charcoal mb-4">
              The Benefits of Reaching Real Local Homes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Skip the algorithms. Reach real people in real homes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-spotix-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-spotix-orange group-hover:scale-110 transition-all duration-300">
                    <Icon size={24} className="text-spotix-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-spotix-charcoal mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
