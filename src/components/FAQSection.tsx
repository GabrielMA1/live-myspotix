import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Spotix exactly?",
    answer:
      "Spotix is a shared postcard that goes to 10,000 local homes each month. You buy a spot (ad space) on the card, and we mail it for you.",
  },
  {
    question: "How big are the spots?",
    answer:
      'We offer four sizes: Prime (4.25"×4.25"), Standard (4.25"×2.125"), Compact (2.125"×2.125"), and Mini (2.125"×1.0625").',
  },
  {
    question: "Do I need to design the ad?",
    answer:
      "No. Send us your logo, photos, and text. We design your spot to look professional and clear.",
  },
  {
    question: "How often does it mail?",
    answer:
      "Monthly. Your spot goes out every month to the same 10,000 homes, or you can choose specific months.",
  },
  {
    question: "Can I choose which neighborhoods?",
    answer:
      "Yes. We target specific zip codes or radius around your business. You pick the area.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on spot size. Mini spots start budget-friendly, Prime spots are premium. All include design and mailing to 10,000 homes.",
  },
  {
    question: "Is this better than Facebook ads?",
    answer:
      "For local reach, yes. Every home gets your spot. No algorithms hiding you. No ad fatigue. Physical mail sticks on fridges.",
  },
  {
    question: "Can I change my spot design?",
    answer:
      "Yes, you can update your spot monthly or keep it consistent. Changes are easy.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-spotix-cream">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
