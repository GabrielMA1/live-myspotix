import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Request Received!",
      description: "We'll get back to you within 24 hours to discuss your spot.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-gradient-orange">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Get Your Spot Now
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Reserve your space on next month's postcard. Limited spots available.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-xl"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  name="businessName"
                  placeholder="Your Business Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yourName">Your Name</Label>
                <Input
                  id="yourName"
                  name="yourName"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@business.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="spotInterest">Spot Interest</Label>
                <Select name="spotInterest" defaultValue="">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a spot size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Prime Spot">Prime Spot (4.25" × 4.25")</SelectItem>
                    <SelectItem value="Standard Spot">Standard Spot (4.25" × 2.125")</SelectItem>
                    <SelectItem value="Compact Spot">Compact Spot (2.125" × 2.125")</SelectItem>
                    <SelectItem value="Mini Spot">Mini Spot (2.125" × 1.0625")</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetArea">Target Area/Zip Code</Label>
                <Input
                  id="targetArea"
                  name="targetArea"
                  placeholder="e.g., 90210 or Downtown"
                />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <Label htmlFor="message">Message/Content Ideas</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your business and what you'd like to promote..."
                rows={4}
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full bg-foreground text-background hover:bg-foreground/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Reserve My Spot"}
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-sm">hello@myspotix.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span className="text-sm">Spots fill monthly. Book early!</span>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
