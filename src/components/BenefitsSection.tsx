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
    color: "from-orange-500 to-red-500",
  },
  {
    icon: MapPin,
    title: "Local focus",
    description: "You target households near your business.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Strong visibility",
    description: "Your spot stays in front of families who check their mail.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Settings,
    title: "Simple setup",
    description: "Pick a spot and send your content.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: DollarSign,
    title: "Clear pricing",
    description: "No confusing plans or hidden charges.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Real results",
    description: "Local ads bring calls, visits, and new customers.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Sparkles,
    title: "Better awareness",
    description: "People see your business month after month.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "Easy design help",
    description: "We help you prepare your spot so you look clean and clear.",
    color: "from-teal-500 to-cyan-500",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding bg-spotix-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-primary/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-primary/5 rounded-full"
        />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Benefits of Reaching{" "}
            <span className="text-primary">Real Local Homes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why 127+ local businesses choose Spotix over online ads
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <benefit.icon className="text-white" size={26} />
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground">
            Ready to reach your local community?{" "}
            <a
              href="#spots"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#spots")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary font-semibold hover:underline"
            >
              Choose your spot now →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
