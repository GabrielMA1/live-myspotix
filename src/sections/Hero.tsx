import { ArrowRight, Sparkles, Home } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-white via-white to-spotix-cream pt-20"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-spotix-orange/10 text-spotix-orange px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              <span>Your Direct Mail Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-spotix-charcoal leading-[1.1] tracking-tight">
              Get Your{' '}
              <span className="text-spotix-orange">Spot</span>{' '}
              Now
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
              Reach <strong className="text-spotix-charcoal">10,000 local homes</strong> with your business offer. 
              No tech skills. No ad algorithms. Just real mailboxes in neighborhoods you choose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-spotix-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-spotix-orange-dark transition-all shadow-xl shadow-spotix-orange/30 hover:shadow-spotix-orange/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Choose Your Spot
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-spotix-charcoal px-8 py-4 rounded-full text-lg font-medium hover:text-spotix-orange transition-colors flex items-center justify-center gap-2 group"
              >
                See How It Works
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-10 h-10 bg-spotix-orange/10 rounded-full flex items-center justify-center">
                  <Home size={18} className="text-spotix-orange" />
                </div>
                <span className="font-medium">10,000 Homes Reached</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-10 h-10 bg-spotix-orange/10 rounded-full flex items-center justify-center">
                  <Sparkles size={18} className="text-spotix-orange" />
                </div>
                <span className="font-medium">Simple Monthly Mailings</span>
              </div>
            </div>
          </div>

          {/* Right Content - Postcard Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-spotix-orange/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-spotix-orange/10 rounded-full blur-3xl"></div>
              
              {/* Main Image */}
              <img
                src="/postcard-mockup.jpg"
                alt="Beautiful direct mail postcard example"
                className="relative z-10 w-full max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-xl shadow-xl p-4 z-20 animate-pulse-soft">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-spotix-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <p className="font-bold text-spotix-charcoal">Spot Sizes</p>
                    <p className="text-sm text-gray-500">For every budget</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
