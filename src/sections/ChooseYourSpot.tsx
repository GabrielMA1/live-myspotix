import { Star, ArrowRight } from 'lucide-react';

interface SpotCardProps {
  name: string;
  description: string;
  size: string;
  price: string;
  isFeatured?: boolean;
  visualClass: string;
  onSelect: () => void;
}

const SpotCard = ({ name, description, size, price, isFeatured, visualClass, onSelect }: SpotCardProps) => {
  return (
    <div
      className={`relative bg-white rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover border-2 ${
        isFeatured
          ? 'border-spotix-orange shadow-xl shadow-spotix-orange/10'
          : 'border-transparent shadow-card hover:border-spotix-orange/30'
      }`}
    >
      {isFeatured && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-spotix-orange text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg shadow-spotix-orange/25">
          <Star size={14} fill="currentColor" />
          Most Popular
        </div>
      )}

      {/* Visual Size Representation */}
      <div className="flex justify-center mb-6 pt-2">
        <div
          className={`bg-gradient-to-br from-spotix-orange/20 to-spotix-orange/5 border-2 border-spotix-orange/30 rounded-lg flex items-center justify-center ${visualClass}`}
        >
          <span className="text-spotix-orange font-bold text-xs">{name.split(' ')[0]}</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-spotix-charcoal mb-2">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{description}</p>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Size:</span>
          <span className="font-medium text-spotix-charcoal">{size}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Price:</span>
          <span className={`font-bold ${isFeatured ? 'text-spotix-orange' : 'text-spotix-charcoal'}`}>
            {price}
          </span>
        </div>
      </div>

      <button
        onClick={onSelect}
        className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
          isFeatured
            ? 'bg-spotix-orange text-white hover:bg-spotix-orange-dark shadow-lg shadow-spotix-orange/25'
            : 'bg-gray-100 text-spotix-charcoal hover:bg-spotix-orange hover:text-white'
        }`}
      >
        Reserve This Spot
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

const ChooseYourSpot = () => {
  const scrollToContact = (spotType: string) => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Set the spot type in the form
      const select = document.getElementById('spot-interest') as HTMLSelectElement;
      if (select) {
        select.value = spotType;
      }
    }
  };

  const spots = [
    {
      name: 'Prime Spot',
      description: 'Maximum impact. Best for strong offers.',
      size: '4.25" x 4.25"',
      price: 'Contact for pricing',
      isFeatured: true,
      visualClass: 'w-32 h-32',
    },
    {
      name: 'Standard Spot',
      description: 'Balanced size. Great for most businesses.',
      size: '4.25" x 2.125"',
      price: 'Contact for pricing',
      visualClass: 'w-32 h-16',
    },
    {
      name: 'Compact Spot',
      description: 'Simple and clear. Perfect for logos and offers.',
      size: '2.125" x 2.125"',
      price: 'Contact for pricing',
      visualClass: 'w-20 h-20',
    },
    {
      name: 'Mini Spot',
      description: 'Budget friendly. Perfect for short promos.',
      size: '2.125" x 1.0625"',
      price: 'Contact for pricing',
      visualClass: 'w-20 h-10',
    },
  ];

  return (
    <section id="spots" className="py-20 lg:py-28 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-spotix-charcoal mb-4">
              Choose Your Spot Size
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pick the space that fits your message. Every spot puts you in front of{' '}
              <strong className="text-spotix-charcoal">10,000 homes</strong>. Larger spots give 
              more room for photos and text. Smaller spots help you stay visible at a lower cost.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spots.map((spot) => (
              <SpotCard
                key={spot.name}
                {...spot}
                onSelect={() => scrollToContact(spot.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourSpot;
