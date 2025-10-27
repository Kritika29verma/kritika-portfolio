import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  data: {
    contact: {
      email: string;
      linkedin: string;
      github: string;
    twitter:string;
    };
  };
}

const ContactSection = ({ data }: ContactSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Mail, href: `mailto:${data.contact.email}`, label: 'Email', color: 'text-red-500' },
    { icon: Linkedin, href: data.contact.linkedin, label: 'LinkedIn', color: 'text-blue-600' },
    { icon: Github, href: data.contact.github, label: 'GitHub', color: 'text-foreground' },
    { icon: Twitter, href: data.contact.twitter, label: 'Twitter', color: 'text-blue-400' },
  ];

  return (
    <section ref={ref} className="flex min-h-screen items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl text-center">
        <motion.h2
          className="mb-6 text-5xl font-bold text-foreground md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="mb-12 text-xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'd love to hear from you! Feel free to reach out through any of these platforms.
        </motion.p>

        <motion.div
          className="mb-12 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-2xl bg-card/80 p-6 shadow-elegant backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-primary group-hover:shadow-glow">
                    <Icon className={`h-8 w-8 ${social.color} transition-colors group-hover:text-primary-foreground`} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {social.label}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Button
            size="lg"
            onClick={() => window.location.href = `mailto:${data.contact.email}`}
            className="bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-elegant transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send me an email
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
