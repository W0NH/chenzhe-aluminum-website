import { useEffect, useRef, useState } from 'react';
import { MessageSquare, PenTool, Cog, Truck } from 'lucide-react';

interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: MessageSquare,
    title: '咨询',
    description: '深入了解您的需求，提供专业建议和解决方案。',
  },
  {
    icon: PenTool,
    title: '设计',
    description: '根据需求创建精密加工布局和工艺方案。',
  },
  {
    icon: Cog,
    title: '加工',
    description: '采用先进设备精准执行，确保产品质量。',
  },
  {
    icon: Truck,
    title: '交付',
    description: '准时发货，提供完善的售后服务支持。',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);

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

  useEffect(() => {
    if (isVisible) {
      // Animate line progress
      const lineTimer = setTimeout(() => {
        setLineProgress(100);
      }, 500);

      // Activate steps sequentially
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setActiveStep(index + 1);
        }, 800 + index * 400);
      });

      return () => clearTimeout(lineTimer);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      id="process"
      className="relative w-full py-24 lg:py-32 bg-[#F7F7F7] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D3D3D3 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div 
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-12 h-[2px] bg-[#008CF0]" />
            <span className="text-sm font-medium text-[#008CF0] tracking-wider uppercase">
              服务流程
            </span>
            <div className="w-12 h-[2px] bg-[#008CF0]" />
          </div>

          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            我们的<span className="text-[#008CF0]">流程</span>
          </h2>

          <p 
            className={`text-lg text-[#8B8B8B] max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            从咨询到交付，我们提供一站式专业服务，确保每个环节都精益求精
          </p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* SVG Connection Line */}
            <svg 
              className="absolute top-[60px] left-0 w-full h-4"
              preserveAspectRatio="none"
            >
              <line
                x1="12.5%"
                y1="8"
                x2="87.5%"
                y2="8"
                stroke="#D3D3D3"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="12.5%"
                y1="8"
                x2={`${12.5 + (lineProgress * 0.75)}%`}
                y2="8"
                stroke="#008CF0"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-all duration-[2000ms] ease-out"
              />
            </svg>

            {/* Steps Grid */}
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Step Card */}
                  <div 
                    className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 tilt-card ${
                      activeStep > index 
                        ? 'scale-105 shadow-xl shadow-[#008CF0]/10' 
                        : 'hover:shadow-xl'
                    }`}
                  >
                    {/* Step Number */}
                    <div 
                      className={`absolute -top-4 left-8 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                        activeStep > index 
                          ? 'bg-[#008CF0] text-white' 
                          : 'bg-[#E9E9E9] text-[#8B8B8B]'
                      }`}
                    >
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div 
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                        activeStep > index 
                          ? 'bg-[#008CF0]/10' 
                          : 'bg-[#F7F7F7]'
                      }`}
                    >
                      <step.icon 
                        className={`w-8 h-8 transition-all duration-500 ${
                          activeStep > index ? 'text-[#008CF0]' : 'text-[#8B8B8B]'
                        }`} 
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#1D1D1D] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#8B8B8B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Dot */}
                  <div 
                    className={`absolute top-[52px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 transition-all duration-500 ${
                      activeStep > index 
                        ? 'bg-[#008CF0] border-[#008CF0]/30 scale-125' 
                        : 'bg-white border-[#D3D3D3]'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-[#E9E9E9]">
              <div 
                className="absolute top-0 left-0 w-full bg-[#008CF0] transition-all duration-[2000ms] ease-out"
                style={{ height: `${lineProgress}%` }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative pl-20 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Step Number */}
                  <div 
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                      activeStep > index 
                        ? 'bg-[#008CF0] text-white' 
                        : 'bg-[#E9E9E9] text-[#8B8B8B]'
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div 
                    className={`bg-white rounded-xl p-6 shadow-md transition-all duration-500 ${
                      activeStep > index ? 'shadow-lg shadow-[#008CF0]/10' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div 
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                          activeStep > index ? 'bg-[#008CF0]/10' : 'bg-[#F7F7F7]'
                        }`}
                      >
                        <step.icon 
                          className={`w-6 h-6 transition-all duration-500 ${
                            activeStep > index ? 'text-[#008CF0]' : 'text-[#8B8B8B]'
                          }`} 
                        />
                      </div>
                      <h3 className="text-lg font-bold text-[#1D1D1D]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#8B8B8B] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
