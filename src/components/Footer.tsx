import { motion } from "framer-motion";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#spots", label: "Spots" },
  { href: "#benefits", label: "Benefits" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-2xl font-bold tracking-wider text-primary mb-2"
          >
            SPOTIX
          </a>
          <p className="text-background/70 mb-8">Real reach. Real simple.</p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Email */}
          <a
            href="mailto:hello@myspotix.com"
            className="text-sm text-primary hover:underline mb-8"
          >
            hello@myspotix.com
          </a>

          {/* Copyright */}
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Spotix. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
