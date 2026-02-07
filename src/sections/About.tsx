import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [image1Revealed, setImage1Revealed] = useState(false);
  const [image2Revealed, setImage2Revealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setImage1Revealed(true), 400);
          setTimeout(() => setImage2Revealed(true), 600);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, value: '10+', label: '年行业经验' },
    { icon: Users, value: '500+', label: '服务客户' },
    { icon: Clock, value: '99%', label: '准时交付率' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div className="relative z-10">
            {/* Section Label */}
            <div 
              className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-12 h-[2px] bg-[#008CF0]" />
              <span className="text-sm font-medium text-[#008CF0] tracking-wider uppercase">
                关于我们
              </span>
            </div>

            {/* Title */}
            <h2 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-8 leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              专业铝箔
              <br />
              <span className="text-[#008CF0]">加工制造商</span>
            </h2>

            {/* Description */}
            <div 
              className={`space-y-4 mb-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-lg text-[#8B8B8B] leading-relaxed">
                凭借数十年的行业经验，我们将原材料转化为精密工程产品。
                我们对卓越的承诺坚定不移，始终坚持以客户需求为导向，
                提供高品质的铝箔加工解决方案。
              </p>
              <p className="text-lg text-[#8B8B8B] leading-relaxed">
                公司拥有先进的生产设备和完善的质量管理体系，
                产品广泛应用于包装、电子、建筑、新能源等多个领域。
              </p>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-6 mb-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-[#008CF0]" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-[#1D1D1D]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#8B8B8B]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <a 
                href="#process"
                className="group inline-flex items-center gap-3 text-[#008CF0] font-medium hover:gap-4 transition-all duration-300"
              >
                <span>了解我们的流程</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Image 1 - Top */}
            <div 
              className={`absolute top-0 right-0 w-[85%] h-[55%] overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 precision-out ${
                image1Revealed ? 'clip-reveal' : ''
              }`}
              style={{ 
                clipPath: image1Revealed ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
              }}
            >
              <img
                src="/images/about-1.jpg"
                alt="铝箔卷材存储"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Image 2 - Bottom */}
            <div 
              className={`absolute bottom-0 left-0 w-[75%] h-[50%] overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 precision-out ${
                image2Revealed ? 'clip-reveal' : ''
              }`}
              style={{ 
                clipPath: image2Revealed ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                transitionDelay: '200ms'
              }}
            >
              <img
                src="/images/about-2.jpg"
                alt="铝箔加工生产线"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div 
              className={`absolute top-[20%] left-[10%] w-20 h-20 border-2 border-[#008CF0]/30 rounded-full transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: '600ms' }}
            />
            <div 
              className={`absolute bottom-[15%] right-[5%] w-12 h-12 bg-[#008CF0]/10 rounded-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100 rotate-45' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: '700ms' }}
            />

            {/* Experience Badge */}
            <div 
              className={`absolute top-[45%] left-[5%] bg-white rounded-xl shadow-xl p-4 transition-all duration-700 fluid-motion ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="text-3xl font-bold text-[#008CF0]">10+</div>
              <div className="text-sm text-[#8B8B8B]">年专业经验</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
