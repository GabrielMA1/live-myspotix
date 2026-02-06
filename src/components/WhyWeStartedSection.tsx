import { Check } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Easy setup for any small business",
  "Clear spot options for every budget",
  "Direct reach to real local households",
  "Simple monthly schedule you can rely on",
];

export function WhyWeStartedSection() {
  return (
    <section className="section-padding bg-spotix-cream">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Why We Started Spotix
          </h2>
          
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4 mb-12">
            <p>
              We built Spotix to help local businesses reach real homes without
              high ad costs. Online ads change fast and waste money. Direct mail
              stays simple. People read what they receive.
            </p>
            <p>
              We wanted a way for small businesses to stay visible in the
              neighbourhoods they serve. Our postcard goes to 10,000 homes. You
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
                className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-sm border border-border"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="text-primary-foreground" size={14} />
                </div>
                <span className="text-foreground font-medium text-left">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
