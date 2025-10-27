import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface MobileNavProps {
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

const MobileNav = ({ activeSection, onNavigate }: MobileNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm border-t border-border lg:hidden">
      <div className="flex items-center justify-between px-2 py-2">
        <div className="flex items-center justify-around flex-1">
          {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative flex flex-col items-center gap-1 p-2"
              whileTap={{ scale: 0.95 }}
            >
              <div className={`rounded-lg p-2 transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-primary' 
                  : 'bg-transparent'
              }`}>
                <Icon className={`h-5 w-5 transition-colors ${
                  isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                }`} />
              </div>
              
              <span className={`text-xs font-medium transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {item.label}
              </span>
            </motion.button>
          );
        })}
        </div>
        <div className="pr-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
