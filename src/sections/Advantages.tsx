import { useEffect, useRef, useState } from 'react';
import { Cpu, ShieldCheck, Zap } from 'lucide-react';

interface Advantage {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const advantages: Advantage[] = [
  {
    icon: Cpu,
    title: '尖端技术',
    subtitle: 'Advanced Technology',
    description: '配备最新CNC数控机床和自动化生产线，实现高精度、高效率的铝箔加工。我们持续投资研发，保持技术领先地位。',
    image: './images/advantage-1.jpg',
  },
  {
    icon: ShieldCheck,
    title: '品质保证',
    subtitle: 'Quality Assurance',
    description: 'ISO 9001质量管理体系认证，从原材料采购到成品出厂，每个环节都有严格的质量控制，确保产品符合国际标准。',
    image: './images/advantage-2.jpg',
  },
  {
    icon: Zap,
    title: '快速交付',
    subtitle: 'Fast Delivery',
    description: '行业领先的周转时间，完善的供应链管理和生产调度系统，确保订单准时交付，满足客户紧急需求。',
    image: './images/advantage-3.jpg',
  },
];

export default function Advantages() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x: x * 10, y: y * 10 });
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={sectionRef}
      id="advantages"
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div 
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-12 h-[2px] bg-[#008CF0]" />
            <span className="text-sm font-medium text-[#008CF0] tracking-wider uppercase">
              核心优势
            </span>
            <div className="w-12 h-[2px] bg-[#008CF0]" />
          </div>

          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            我们的<span className="text-[#008CF0]">优势</span>
          </h2>

          <p 
            className={`text-lg text-[#8B8B8B] max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            技术领先、品质卓越、服务高效，是我们始终如一的追求
          </p>
        </div>

        {/* Advantages Grid - Accordion Style */}
        <div 
          className={`flex flex-col lg:flex-row gap-4 lg:gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 precision-out ${
                activeIndex === index 
                  ? 'lg:flex-[2] flex-auto' 
                  : activeIndex !== null 
                    ? 'lg:flex-[0.5] flex-auto' 
                    : 'lg:flex-1 flex-auto'
              }`}
              style={{
                height: '400px',
                transform: activeIndex === index 
                  ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)` 
                  : 'none',
                transition: 'flex 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease'
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Background Image */}
              <div 
                className={`absolute inset-0 transition-transform duration-700 ${
                  activeIndex === index ? 'scale-110' : 'scale-100'
                }`}
              >
                <img
                  src={advantage.image}
                  alt={advantage.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeIndex === index 
                      ? 'bg-gradient-to-t from-black/80 via-black/50 to-black/20' 
                      : 'bg-gradient-to-t from-black/70 via-black/40 to-transparent'
                  }`}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
                {/* Icon */}
                <div 
                  className={`w-14 h-14 rounded-xl bg-[#008CF0]/20 backdrop-blur-sm flex items-center justify-center mb-4 transition-all duration-500 ${
                    activeIndex === index ? 'bg-[#008CF0]' : ''
                  }`}
                >
                  <advantage.icon 
                    className={`w-7 h-7 transition-colors duration-500 ${
                      activeIndex === index ? 'text-white' : 'text-[#008CF0]'
                    }`} 
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {advantage.title}
                </h3>
                <p className="text-sm text-white/60 mb-4 tracking-wider">
                  {advantage.subtitle}
                </p>

                {/* Description - Revealed on hover */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-white/80 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>

                {/* Bottom Line Indicator */}
                <div 
                  className={`absolute bottom-0 left-0 h-1 bg-[#008CF0] transition-all duration-500 ${
                    activeIndex === index ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards - Alternative Layout */}
        <div className="lg:hidden mt-8 space-y-4">
          {advantages.map((advantage, index) => (
            <div
              key={`mobile-${index}`}
              className={`bg-white rounded-xl p-6 shadow-lg border border-[#E9E9E9] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#008CF0]/10 flex items-center justify-center flex-shrink-0">
                  <advantage.icon className="w-6 h-6 text-[#008CF0]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1D1D1D] mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-[#8B8B8B] leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
