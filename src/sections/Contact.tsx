import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: '地址',
      content: '河南省郑州市巩义市回郭镇小微企业园',
    },
    {
      icon: Phone,
      title: '电话',
      content: '132 5359 5777',
    },
    {
      icon: Mail,
      title: '邮箱',
      content: 'contact@chenzhe-al.com',
    },
    {
      icon: Clock,
      title: '工作时间',
      content: '周一至周六 8:00 - 18:00',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative w-full py-24 lg:py-32 bg-[#F7F7F7] overflow-hidden"
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
              联系我们
            </span>
            <div className="w-12 h-[2px] bg-[#008CF0]" />
          </div>

          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            开始<span className="text-[#008CF0]">合作</span>
          </h2>

          <p 
            className={`text-lg text-[#8B8B8B] max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            有任何问题或需求？请随时与我们联系，我们将竭诚为您服务
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-2xl font-bold text-[#1D1D1D] mb-8">
              联系方式
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0 group-hover:bg-[#008CF0] transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-[#008CF0] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#8B8B8B] mb-1">
                      {info.title}
                    </h4>
                    <p className="text-lg text-[#1D1D1D]">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-[#008CF0]/10 to-[#008CF0]/5 border border-[#008CF0]/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#008CF0] mx-auto mb-3" />
                  <p className="text-[#1D1D1D] font-medium">河南省郑州市</p>
                  <p className="text-sm text-[#8B8B8B]">巩义市回郭镇小微企业园</p>
                </div>
              </div>
              {/* Decorative Grid */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(#008CF0 1px, transparent 1px), linear-gradient(90deg, #008CF0 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#1D1D1D] mb-2">
                发送消息
              </h3>
              <p className="text-[#8B8B8B] mb-8">
                填写以下表单，我们会尽快回复您
              </p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1D1D1D] mb-2">
                    发送成功！
                  </h4>
                  <p className="text-[#8B8B8B] text-center">
                    感谢您的留言，我们会尽快与您联系
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="floating-input">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      required
                      className="peer"
                    />
                    <label htmlFor="name">您的姓名</label>
                    <div 
                      className={`absolute bottom-0 left-1/2 h-[2px] bg-[#008CF0] transition-all duration-300 ${
                        focusedField === 'name' ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2'
                      }`}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="floating-input">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      required
                      className="peer"
                    />
                    <label htmlFor="email">电子邮箱</label>
                    <div 
                      className={`absolute bottom-0 left-1/2 h-[2px] bg-[#008CF0] transition-all duration-300 ${
                        focusedField === 'email' ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2'
                      }`}
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="floating-input">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      className="peer"
                    />
                    <label htmlFor="phone">联系电话（选填）</label>
                    <div 
                      className={`absolute bottom-0 left-1/2 h-[2px] bg-[#008CF0] transition-all duration-300 ${
                        focusedField === 'phone' ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2'
                      }`}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="floating-input">
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      rows={4}
                      required
                      className="peer resize-none"
                    />
                    <label htmlFor="message">您的留言</label>
                    <div 
                      className={`absolute bottom-0 left-1/2 h-[2px] bg-[#008CF0] transition-all duration-300 ${
                        focusedField === 'message' ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#008CF0] text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-[#0078d4] hover:shadow-lg hover:shadow-[#008CF0]/30 liquid-fill"
                  >
                    <span className="relative z-10">发送消息</span>
                    <Send className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
