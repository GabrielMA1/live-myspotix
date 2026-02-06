import { MousePointer, Upload, Printer, Home } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MousePointer,
    number: "01",
    title: "Pick Your Spot",
    description: "Choose the size that fits your budget and message",
  },
  {
    icon: Upload,
    number: "02",
    title: "Send Your Content",
    description: "Give us your logo, photos, and offer text",
  },
  {
    icon: Printer,
    number: "03",
    title: "We Design & Print",
    description: "We arrange your spot professionally on the postcard",
  },
  {
    icon: Home,
    number: "04",
    title: "Reach 10,000 Homes",
    description: "Your spot mails to local households monthly",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How Spotix Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to reach your local community
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 mx-auto w-20 h-20 bg-card rounded-full border-4 border-primary flex items-center justify-center shadow-lg mb-6">
                  <step.icon className="text-primary" size={32} />
                </div>

                {/* Number badge */}
                <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-1 bg-primary text-primary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
