import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Home, Star, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-background via-background to-spotix-cream relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="text-primary" size={16} />
              <span className="text-sm font-semibold text-primary">
                February spots filling fast — only 3 Prime spots left!
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Get Your Spot{" "}
              <span className="text-primary relative">
                Now
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 100 8"
                  fill="none"
                >
                  <motion.path
                    d="M2 6C30 2 70 2 98 6"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Reach <span className="font-bold text-foreground">10,000 local homes</span> with your business offer. 
              No tech skills. No ad algorithms. Just real mailboxes in neighborhoods you choose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                variant="hero"
                size="xl"
                onClick={() => handleScrollToSection("#spots")}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Choose Your Spot
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Button>
              <button
                onClick={() => handleScrollToSection("#how-it-works")}
                className="inline-flex items-center justify-center text-foreground font-medium hover:text-primary transition-colors group"
              >
                See How It Works
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border"
              >
                <Home className="text-primary" size={18} />
                <span className="font-semibold text-sm">10,000 Homes</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border"
              >
                <Mail className="text-primary" size={18} />
                <span className="font-semibold text-sm">Monthly Mailings</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border"
              >
                <Star className="text-yellow-500 fill-yellow-500" size={18} />
                <span className="font-semibold text-sm">4.9/5 Rating</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual - Postcard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <motion.div 
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-card rounded-2xl shadow-2xl p-6 border border-border"
            >
              {/* Live indicator */}
              <div className="absolute -top-3 -left-3 flex items-center gap-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Live Example
              </div>

              {/* Postcard representation */}
              <div className="aspect-[4/3] bg-gradient-to-br from-spotix-cream to-spotix-cream-dark rounded-xl border-2 border-dashed border-border relative overflow-hidden">
                {/* Grid showing spot sizes */}
                <div className="absolute inset-4 grid grid-cols-2 gap-3">
                  {/* Prime Spot */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="col-span-1 row-span-2 bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary rounded-lg flex items-center justify-center p-3 cursor-pointer transition-all hover:shadow-lg"
                  >
                    <div className="text-center">
                      <span className="text-xs font-bold text-primary uppercase tracking-wide">Prime</span>
                      <div className="text-[10px] text-muted-foreground mt-1">4.25" × 4.25"</div>
                      <div className="mt-2 text-xs font-bold text-primary bg-primary/20 rounded-full px-2 py-0.5">Best Value</div>
                    </div>
                  </motion.div>
                  
                  {/* Standard Spot */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary/20 border-2 border-primary/60 rounded-lg flex items-center justify-center p-2 cursor-pointer transition-all hover:shadow-md"
                  >
                    <div className="text-center">
                      <span className="text-[10px] font-bold text-primary uppercase">Standard</span>
                    </div>
                  </motion.div>
                  
                  {/* Compact & Mini */}
                  <div className="grid grid-cols-2 gap-2">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-primary/15 border-2 border-primary/40 rounded-lg flex items-center justify-center cursor-pointer"
                    >
                      <span className="text-[8px] font-bold text-primary uppercase">Compact</span>
                    </motion.div>
                    <div className="flex flex-col gap-1">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 bg-primary/10 border border-primary/30 rounded flex items-center justify-center cursor-pointer"
                      >
                        <span className="text-[6px] font-bold text-primary uppercase">Mini</span>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 bg-primary/10 border border-primary/30 rounded flex items-center justify-center cursor-pointer"
                      >
                        <span className="text-[6px] font-bold text-primary uppercase">Mini</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative stamp */}
                <div className="absolute top-3 right-3 w-10 h-12 bg-primary/20 rounded border border-primary/30 flex items-center justify-center">
                  <Mail className="text-primary/50" size={16} />
                </div>
              </div>
              
              {/* Label */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <Clock className="text-primary" size={16} />
                <p className="text-sm text-muted-foreground font-medium">
                  Next mailing: Feb 15th — Reserve your spot today!
                </p>
              </div>
            </motion.div>
            
            {/* Floating testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-4 bg-card rounded-xl shadow-xl p-4 border border-border max-w-[200px]"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={12} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic">
                "Got 47 new customers from my first postcard!"
              </p>
              <p className="text-xs font-semibold text-foreground mt-1">— Mike's Pizza</p>
            </motion.div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
