import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current || !contentRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      
      if (scrollY < heroHeight) {
        // Parallax effect for image
        imageRef.current.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`;
        // Faster parallax for text
        contentRef.current.style.transform = `translateY(${scrollY * -0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#F7F7F7]"
    >
      {/* Background Image Layer */}
      <div 
        ref={imageRef}
        className={`absolute inset-0 w-full h-full transition-all duration-[1400ms] precision-out ${
          isLoaded ? 'scale-100 blur-0' : 'scale-110 blur-[10px]'
        }`}
        style={{ willChange: 'transform' }}
      >
        <img
          src="./images/hero-machine.jpg"
          alt="铝箔加工设备"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Diagonal SVG Mask */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,140,240,0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M 0 100 L 40 100 L 60 0 L 0 0 Z"
          fill="url(#diagonalGradient)"
          className={`transition-all duration-[1200ms] ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transitionDelay: '200ms',
            transform: isLoaded ? 'none' : 'translateX(-100%)'
          }}
        />
      </svg>

      {/* Content Layer */}
      <div 
        ref={contentRef}
        className="relative z-10 h-full flex items-center"
        style={{ willChange: 'transform' }}
      >
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-32">
          <div className="max-w-2xl">
            {/* Main Title */}
            <h1 
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-tight ${
                isLoaded ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <span className="inline-block overflow-hidden">
                <span className="inline-block">宸</span>
              </span>
              <span className="inline-block overflow-hidden">
                <span className="inline-block">哲</span>
              </span>
              <span className="inline-block overflow-hidden">
                <span className="inline-block">铝</span>
              </span>
              <span className="inline-block overflow-hidden">
                <span className="inline-block">业</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-xl sm:text-2xl lg:text-3xl text-white/90 font-light mb-6 ${
                isLoaded ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '500ms' }}
            >
              精准与品质的完美结合
            </p>

            {/* Description */}
            <p 
              className={`text-base sm:text-lg text-white/70 mb-10 max-w-lg leading-relaxed ${
                isLoaded ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '600ms' }}
            >
              我们提供高精度铝箔分切与加工服务，满足各行业需求。
              凭借先进的设备和专业的技术团队，为客户创造卓越价值。
            </p>

            {/* CTA Button */}
            <div 
              className={`${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '800ms' }}
            >
              <button 
                onClick={scrollToAbout}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#008CF0] text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-[#0078d4] hover:shadow-lg hover:shadow-[#008CF0]/30 liquid-fill"
              >
                <span className="relative z-10">探索我们的解决方案</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 ${
          isLoaded ? 'animate-fade-in' : 'opacity-0'
        }`}
        style={{ animationDelay: '1200ms' }}
      >
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-sm tracking-wider">向下滚动</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Machine glow effect */}
      <div 
        className="absolute bottom-0 right-0 w-1/3 h-1/2 pointer-events-none animate-pulse-glow"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(0,140,240,0.15) 0%, transparent 70%)'
        }}
      />
    </section>
  );
}
