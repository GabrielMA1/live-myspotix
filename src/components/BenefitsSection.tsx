import {
  Target,
  MapPin,
  Eye,
  Settings,
  DollarSign,
  TrendingUp,
  Sparkles,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Target,
    title: "Direct reach",
    description: "Your offer goes straight to 10,000 homes.",
  },
  {
    icon: MapPin,
    title: "Local focus",
    description: "You target households near your business.",
  },
  {
    icon: Eye,
    title: "Strong visibility",
    description: "Your spot stays in front of families who check their mail.",
  },
  {
    icon: Settings,
    title: "Simple setup",
    description: "Pick a spot and send your content.",
  },
  {
    icon: DollarSign,
    title: "Clear pricing",
    description: "No confusing plans or hidden charges.",
  },
  {
    icon: TrendingUp,
    title: "Real results",
    description: "Local ads bring calls, visits, and new customers.",
  },
  {
    icon: Sparkles,
    title: "Better awareness",
    description: "People see your business month after month.",
  },
  {
    icon: Palette,
    title: "Easy design help",
    description: "We help you prepare your spot so you look clean and clear.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding bg-spotix-cream">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Benefits of Reaching Real Local Homes
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
