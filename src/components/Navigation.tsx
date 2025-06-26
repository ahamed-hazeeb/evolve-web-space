
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            [Your Name]
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-teal-500 ${
                  isScrolled ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white"
              onClick={() => window.open('#', '_blank')}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden w-6 h-6 flex flex-col justify-center space-y-1 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-full h-0.5 bg-current transition-transform ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></div>
            <div className={`w-full h-0.5 bg-current transition-opacity ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></div>
            <div className={`w-full h-0.5 bg-current transition-transform ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full px-4 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-teal-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white"
                onClick={() => window.open('#', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
