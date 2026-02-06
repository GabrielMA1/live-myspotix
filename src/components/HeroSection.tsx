import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Home } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-background"
    >
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Get Your Spot{" "}
              <span className="text-primary">Now</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Reach 10,000 local homes with your business offer. No tech skills.
              No ad algorithms. Just real mailboxes in neighborhoods you choose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                variant="hero"
                size="xl"
                onClick={() => handleScrollToSection("#spots")}
              >
                Choose Your Spot
                <ArrowRight className="ml-2" size={20} />
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
              <div className="flex items-center gap-2 text-muted-foreground">
                <Home className="text-primary" size={20} />
                <span className="font-semibold">10,000 Homes Reached</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="text-primary" size={20} />
                <span className="font-semibold">Simple Monthly Mailings</span>
              </div>
            </div>
          </motion.div>

          {/* Visual - Postcard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-2xl shadow-xl p-6 border border-border">
              {/* Postcard representation */}
              <div className="aspect-[4/3] bg-spotix-cream rounded-xl border-2 border-dashed border-border relative overflow-hidden">
                {/* Grid showing spot sizes */}
                <div className="absolute inset-4 grid grid-cols-2 gap-3">
                  {/* Prime Spot */}
                  <div className="col-span-1 row-span-2 bg-primary/10 border-2 border-primary rounded-lg flex items-center justify-center p-3">
                    <div className="text-center">
                      <span className="text-xs font-bold text-primary uppercase tracking-wide">Prime</span>
                      <div className="text-[10px] text-muted-foreground mt-1">4.25" × 4.25"</div>
                    </div>
                  </div>
                  
                  {/* Standard Spot */}
                  <div className="bg-primary/20 border-2 border-primary/60 rounded-lg flex items-center justify-center p-2">
                    <div className="text-center">
                      <span className="text-[10px] font-bold text-primary uppercase">Standard</span>
                    </div>
                  </div>
                  
                  {/* Compact & Mini */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-primary/15 border-2 border-primary/40 rounded-lg flex items-center justify-center">
                      <span className="text-[8px] font-bold text-primary uppercase">Compact</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex-1 bg-primary/10 border border-primary/30 rounded flex items-center justify-center">
                        <span className="text-[6px] font-bold text-primary uppercase">Mini</span>
                      </div>
                      <div className="flex-1 bg-primary/10 border border-primary/30 rounded flex items-center justify-center">
                        <span className="text-[6px] font-bold text-primary uppercase">Mini</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative stamp */}
                <div className="absolute top-3 right-3 w-10 h-12 bg-primary/20 rounded border border-primary/30 flex items-center justify-center">
                  <Mail className="text-primary/50" size={16} />
                </div>
              </div>
              
              {/* Label */}
              <p className="text-center text-sm text-muted-foreground mt-4 font-medium">
                Sample postcard with spot sizes
              </p>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
