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
import { Mail, Clock, Shield, CheckCircle, Zap } from "lucide-react";
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
      title: "🎉 Request Received!",
      description: "We'll get back to you within 24 hours to discuss your spot.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary via-primary to-orange-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="text-white" size={16} />
              <span className="text-sm font-semibold text-white">
                Limited spots — February filling fast!
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get Your Spot Now
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Reserve your space on next month's postcard. Join 127+ local businesses already growing with Spotix.
            </p>

            {/* Trust indicators */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold">No long-term contracts</p>
                  <p className="text-white/70 text-sm">Try it for one month. Cancel anytime.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold">100% satisfaction guarantee</p>
                  <p className="text-white/70 text-sm">Not happy? We'll make it right.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold">Response within 24 hours</p>
                  <p className="text-white/70 text-sm">Quick setup, no endless waiting.</p>
                </div>
              </div>
            </div>

            {/* Direct contact */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 mb-3">Prefer to reach out directly?</p>
              <a 
                href="mailto:hello@myspotix.com" 
                className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
              >
                <Mail size={18} />
                hello@myspotix.com
              </a>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-2xl"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    placeholder="Your Business Name"
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yourName">Your Name *</Label>
                  <Input
                    id="yourName"
                    name="yourName"
                    placeholder="Your Name"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@business.com"
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="spotInterest">Spot Interest *</Label>
                  <Select name="spotInterest" required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a spot size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Prime Spot">🔥 Prime Spot (4.25" × 4.25") — 3 left!</SelectItem>
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
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <Label htmlFor="message">Tell us about your business</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What do you want to promote? Any special offers?"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  "Reserve My Spot Now →"
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                🔒 Your information is secure and never shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
