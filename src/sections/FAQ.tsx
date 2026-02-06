import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is Spotix exactly?',
      answer:
        'Spotix is a shared postcard that goes to 10,000 local homes each month. You buy a spot (ad space) on the card, and we mail it for you.',
    },
    {
      question: 'How big are the spots?',
      answer:
        'We offer four sizes: Prime (4.25"x4.25"), Standard (4.25"x2.125"), Compact (2.125"x2.125"), and Mini (2.125"x1.0625").',
    },
    {
      question: 'Do I need to design the ad?',
      answer:
        'No. Send us your logo, photos, and text. We design your spot to look professional and clear.',
    },
    {
      question: 'How often does it mail?',
      answer:
        'Monthly. Your spot goes out every month to the same 10,000 homes, or you can choose specific months.',
    },
    {
      question: 'Can I choose which neighborhoods?',
      answer:
        'Yes. We target specific zip codes or radius around your business. You pick the area.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'Pricing depends on spot size. Mini spots start budget-friendly, Prime spots are premium. All include design and mailing to 10,000 homes.',
    },
    {
      question: 'Is this better than Facebook ads?',
      answer:
        'For local reach, yes. Every home gets your spot. No algorithms hiding you. No ad fatigue. Physical mail sticks on fridges.',
    },
    {
      question: 'Can I change my spot design?',
      answer:
        'Yes, you can update your spot monthly or keep it consistent. Changes are easy.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-spotix-cream">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-spotix-charcoal mb-4">
              Common Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Simple answers to help you decide.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 shadow-card border-none data-[state=open]:shadow-card-hover transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-spotix-charcoal hover:text-spotix-orange hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
