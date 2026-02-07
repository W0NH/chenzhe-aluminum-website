import { useEffect, useRef, useState } from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: '首页', href: '#hero' },
    { label: '关于我们', href: '#about' },
    { label: '服务流程', href: '#process' },
    { label: '核心优势', href: '#advantages' },
    { label: '联系我们', href: '#contact' },
  ];

  const quickLinks = [
    { label: '产品中心', href: '#' },
    { label: '加工能力', href: '#' },
    { label: '质量控制', href: '#' },
    { label: '新闻动态', href: '#' },
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative w-full bg-[#1D1D1D] text-white overflow-hidden"
    >
      {/* Main Footer Content */}
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-32 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Company Info */}
          <div 
            className={`lg:col-span-1 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="./logo.svg" 
                alt="宸哲铝业" 
                className="w-12 h-12 rounded-xl"
              />
              <div>
                <h3 className="text-xl font-bold">宸哲铝业</h3>
                <p className="text-xs text-white/50">CHENZHE ALUMINUM</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              专业铝箔加工制造商，致力于为客户提供高品质、高精度的铝箔产品和加工服务。
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:contact@chenzhe-al.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#008CF0] transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="tel:13253595777"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#008CF0] transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h4 className="text-lg font-semibold mb-6">网站导航</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-[#008CF0] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h4 className="text-lg font-semibold mb-6">快速链接</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-[#008CF0] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h4 className="text-lg font-semibold mb-6">联系方式</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#008CF0]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#008CF0]" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">地址</p>
                  <p className="text-white/80">河南省郑州市巩义市回郭镇小微企业园</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#008CF0]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#008CF0]" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">电话</p>
                  <p className="text-white/80">132 5359 5777</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#008CF0]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#008CF0]" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">邮箱</p>
                  <p className="text-white/80">contact@chenzhe-al.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-32 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center sm:text-left">
              © 2024 宸哲铝业. 保留所有权利.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                服务条款
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#008CF0] text-white shadow-lg shadow-[#008CF0]/30 flex items-center justify-center transition-all duration-500 hover:bg-[#0078d4] hover:scale-110 z-50 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
