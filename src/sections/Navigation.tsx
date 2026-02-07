import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '服务流程', href: '#process' },
  { label: '核心优势', href: '#advantages' },
  { label: '联系我们', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Detect active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-32">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3"
            >
              <img 
                src="/logo.svg" 
                alt="宸哲铝业" 
                className={`w-10 h-10 rounded-lg transition-colors duration-300 ${
                  isScrolled ? '' : 'drop-shadow-lg'
                }`}
              />
              <div className={`hidden sm:block transition-colors duration-300 ${
                isScrolled ? 'text-[#1D1D1D]' : 'text-white'
              }`}>
                <span className="font-bold text-lg">宸哲铝业</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? activeSection === link.href.replace('#', '')
                        ? 'text-[#008CF0]'
                        : 'text-[#1D1D1D] hover:text-[#008CF0]'
                      : activeSection === link.href.replace('#', '')
                        ? 'text-[#008CF0]'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#008CF0] rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[#008CF0] text-white hover:bg-[#0078d4]'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20'
                }`}
              >
                免费咨询
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-[#F7F7F7] text-[#1D1D1D]' 
                  : 'bg-white/10 backdrop-blur-sm text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            {/* Mobile Nav Links */}
            <div className="flex-1 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block py-4 px-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-[#008CF0]/10 text-[#008CF0]'
                      : 'text-[#1D1D1D] hover:bg-[#F7F7F7]'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block w-full py-4 px-6 bg-[#008CF0] text-white text-center font-medium rounded-xl hover:bg-[#0078d4] transition-colors"
            >
              免费咨询
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
