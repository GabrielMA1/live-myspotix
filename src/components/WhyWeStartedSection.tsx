import { Check, TrendingUp, DollarSign, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: Target, text: "Easy setup for any small business" },
  { icon: DollarSign, text: "Clear spot options for every budget" },
  { icon: Users, text: "Direct reach to real local households" },
  { icon: TrendingUp, text: "Simple monthly schedule you can rely on" },
];

const stats = [
  { value: "10K+", label: "Homes Reached Monthly" },
  { value: "127+", label: "Local Businesses" },
  { value: "4.9★", label: "Average Rating" },
  { value: "89%", label: "Repeat Customers" },
];

export function WhyWeStartedSection() {
  return (
    <section className="section-padding bg-spotix-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-narrow relative z-10">
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-card rounded-2xl p-6 shadow-md border border-border"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Why We Started <span className="text-primary">Spotix</span>
          </h2>
          
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4 mb-12">
            <p>
              We built Spotix to help local businesses reach real homes without
              high ad costs. <span className="font-semibold text-foreground">Online ads change fast and waste money.</span> Direct mail
              stays simple. People read what they receive.
            </p>
            <p>
              We wanted a way for small businesses to stay visible in the
              neighbourhoods they serve. Our postcard goes to <span className="font-semibold text-foreground">10,000 homes</span>. You
              pick your spot. We design it. We handle the mailing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all cursor-default"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                  <benefit.icon className="text-primary-foreground" size={18} />
                </div>
                <span className="text-foreground font-medium text-left">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
