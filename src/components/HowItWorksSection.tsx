import { MousePointer, Upload, Printer, Home, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="section-padding bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-spotix-cream/50 pointer-events-none" />

      <div className="container-narrow relative z-10">
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
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative text-center group"
              >
                {/* Step circle */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 mx-auto w-24 h-24 bg-gradient-to-br from-card to-spotix-cream rounded-2xl border-4 border-primary flex items-center justify-center shadow-xl mb-6 group-hover:shadow-orange transition-shadow"
                >
                  <step.icon className="text-primary" size={36} />
                </motion.div>

                {/* Number badge */}
                <div className="absolute top-0 right-1/2 translate-x-14 -translate-y-2 bg-gradient-to-r from-primary to-orange-600 text-primary-foreground text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to get started? It only takes 5 minutes.
          </p>
          <Button
            variant="hero"
            size="xl"
            onClick={handleScrollToContact}
            className="group"
          >
            Reserve Your Spot Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
