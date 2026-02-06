import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Flame, Clock } from "lucide-react";

interface SpotCardProps {
  name: string;
  description: string;
  size: string;
  width: number;
  height: number;
  featured?: boolean;
  delay: number;
  spotsLeft?: number;
  perks: string[];
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
  spotsLeft,
  perks,
  onReserve,
}: SpotCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`relative bg-card rounded-2xl p-6 shadow-md border-2 transition-all duration-300 flex flex-col ${
        featured
          ? "border-primary shadow-orange lg:scale-105 lg:z-10"
          : "border-border hover:border-primary/50"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-orange-600 text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide flex items-center gap-1 shadow-lg">
          <Flame size={12} />
          Most Popular
        </div>
      )}

      {spotsLeft !== undefined && spotsLeft <= 5 && (
        <div className="absolute -top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
          <Clock size={10} />
          {spotsLeft} left!
        </div>
      )}

      <div className="text-center flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {/* Visual size representation */}
        <div className="flex justify-center mb-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/40 rounded-lg flex items-center justify-center shadow-inner"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              minWidth: "60px",
              minHeight: "30px",
            }}
          >
            <span className="text-[10px] font-bold text-primary/80">
              {size}
            </span>
          </motion.div>
        </div>

        {/* Perks list */}
        <ul className="space-y-2 mb-6 text-left">
          {perks.map((perk, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
              <span className="text-muted-foreground">{perk}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Button
            variant={featured ? "hero" : "outline"}
            size="lg"
            className={`w-full ${featured ? 'shadow-orange' : 'hover:bg-primary hover:text-primary-foreground'}`}
            onClick={onReserve}
          >
            Reserve This Spot
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function SpotPricingSection() {
  const handleReserve = (spotType: string) => {
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
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
      spotsLeft: 3,
      perks: [
        "Largest ad space available",
        "Premium placement guaranteed",
        "Room for photos + full offer",
        "Best ROI for strong offers",
      ],
    },
    {
      name: "Standard Spot",
      description: "Balanced size. Great for most businesses.",
      size: '4.25" × 2.125"',
      width: 120,
      height: 60,
      spotsLeft: 7,
      perks: [
        "Perfect balance of space & price",
        "Logo + key message",
        "Most popular choice",
      ],
    },
    {
      name: "Compact Spot",
      description: "Simple and clear.",
      size: '2.125" × 2.125"',
      width: 80,
      height: 80,
      perks: [
        "Clean, focused message",
        "Great for brand awareness",
        "Budget-friendly option",
      ],
    },
    {
      name: "Mini Spot",
      description: "Budget friendly. Perfect for short promos.",
      size: '2.125" × 1.0625"',
      width: 80,
      height: 40,
      perks: [
        "Lowest cost entry",
        "Quick promo or coupon",
        "Test the waters",
      ],
    },
  ];

  return (
    <section id="spots" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-6"
          >
            <Clock className="text-red-500" size={16} />
            <span className="text-sm font-semibold text-red-600">
              February mailing closes in 9 days
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Spot Size
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick the space that fits your message. Every spot puts you in front
            of <span className="font-bold text-foreground">10,000 homes</span>. Larger spots give more room for photos and text.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-start">
          {spots.map((spot, index) => (
            <SpotCard
              key={spot.name}
              {...spot}
              delay={index * 0.1}
              onReserve={() => handleReserve(spot.name)}
            />
          ))}
        </div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            <span className="font-bold text-foreground">127+ local businesses</span> already advertising with Spotix
          </p>
          <div className="flex justify-center items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-muted-foreground ml-2">4.9 average rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
