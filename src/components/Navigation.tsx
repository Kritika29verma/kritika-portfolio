import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  return (
    <nav className="fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col gap-6 rounded-2xl bg-card/80 p-6 shadow-elegant backdrop-blur-sm border border-border">
        <ThemeToggle />
        <div className="h-px w-full bg-gradient-rainbow" />
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="group relative flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`rounded-xl p-3 transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-primary shadow-glow' 
                  : 'bg-muted hover:bg-primary-glow'
              }`}>
                <Icon className={`h-5 w-5 transition-colors ${
                  isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'
                }`} />
              </div>
              
              <span className={`text-xs font-medium transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
              }`}>
                {item.label}
              </span>

              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -left-4 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-gradient-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
