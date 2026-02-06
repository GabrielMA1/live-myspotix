import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SpotCardProps {
  name: string;
  description: string;
  size: string;
  width: number;
  height: number;
  featured?: boolean;
  delay: number;
  onReserve: () => void;
}

function SpotCard({
  name,
  description,
  size,
  width,
  height,
  featured,
  delay,
  onReserve,
}: SpotCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`relative bg-card rounded-2xl p-6 shadow-md border-2 transition-all duration-300 ${
        featured
          ? "border-primary shadow-orange"
          : "border-border hover:border-primary/50"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
          Most Popular
        </div>
      )}

      <div className="text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {/* Visual size representation */}
        <div className="flex justify-center mb-4">
          <div
            className="bg-primary/10 border-2 border-primary/30 rounded-lg flex items-center justify-center"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              minWidth: "60px",
              minHeight: "30px",
            }}
          >
            <span className="text-[10px] font-medium text-primary/70">
              {size}
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Size: {size}
        </p>

        <Button
          variant={featured ? "hero" : "outline"}
          size="lg"
          className="w-full"
          onClick={onReserve}
        >
          Reserve This Spot
        </Button>
      </div>
    </motion.div>
  );
}

export function SpotPricingSection() {
  const handleReserve = (spotType: string) => {
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
    // Set spot type in form after scroll
    setTimeout(() => {
      const selectElement = document.querySelector(
        '[name="spotInterest"]'
      ) as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = spotType;
      }
    }, 500);
  };

  const spots = [
    {
      name: "Prime Spot",
      description: "Maximum impact. Best for strong offers.",
      size: '4.25" × 4.25"',
      width: 120,
      height: 120,
      featured: true,
    },
    {
      name: "Standard Spot",
      description: "Balanced size. Great for most businesses.",
      size: '4.25" × 2.125"',
      width: 120,
      height: 60,
    },
    {
      name: "Compact Spot",
      description: "Simple and clear.",
      size: '2.125" × 2.125"',
      width: 80,
      height: 80,
    },
    {
      name: "Mini Spot",
      description: "Budget friendly. Perfect for short promos.",
      size: '2.125" × 1.0625"',
      width: 80,
      height: 40,
    },
  ];

  return (
    <section id="spots" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Spot Size
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick the space that fits your message. Every spot puts you in front
            of 10,000 homes. Larger spots give more room for photos and text.
            Smaller spots help you stay visible at a lower cost.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spots.map((spot, index) => (
            <SpotCard
              key={spot.name}
              {...spot}
              delay={index * 0.1}
              onReserve={() => handleReserve(spot.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
