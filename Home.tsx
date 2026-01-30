
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000" 
            alt="Secure building" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-600/20 backdrop-blur-md text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full mb-4 md:mb-6 border border-blue-500/30">
              Your Safety, Our Priority
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6 md:mb-8">
              Securing Your World <br className="hidden sm:block" />
              <span className="text-blue-500">One Connection</span> at a Time
            </h1>
            <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-lg md:max-w-none">
              Premium CCTV and smart alarm systems tailored for modern living. Protecting what matters most with advanced technology and 24/7 reliability.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-center shadow-xl hover:shadow-blue-600/20 text-sm md:text-base">
                Book Free Consultation
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-center text-sm md:text-base">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-6 md:bottom-12 left-0 right-0 z-10 hidden sm:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl">
              {[
                { label: 'Systems Installed', value: '2,500+' },
                { label: 'Happy Clients', value: '1,800+' },
                { label: 'Monitoring 24/7', value: '100%' },
                { label: 'Years Experience', value: '12+' },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats (Visible only on mobile) */}
      <section className="sm:hidden px-4">
        <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          {[
            { label: 'Systems', value: '2,500+' },
            { label: 'Clients', value: '1,800+' },
            { label: 'Uptime', value: '100%' },
            { label: 'Experience', value: '12+ yrs' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Comprehensive Security Solutions</h3>
          <p className="text-slate-600 text-base md:text-lg">
            We provide end-to-end security integration for residential and commercial properties using the latest hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="bg-blue-50 text-blue-600 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to="/services" className="text-blue-600 font-semibold text-sm inline-flex items-center hover:underline">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=1000" 
                alt="Security Expert" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight">Professional Integrity Meets Advanced Tech</h3>
              <div className="space-y-6">
                {[
                  { title: 'Certified Installers', desc: 'Our team consists of licensed and vetted security experts.' },
                  { title: 'Remote Access', desc: 'Monitor your property from anywhere in the world via our app.' },
                  { title: 'Customized Plans', desc: 'No one-size-fits-all. We design systems for your specific needs.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-blue-600/20 p-2 rounded-lg mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-base">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 md:mt-10">
                <Link to="/contact" className="inline-block w-full sm:w-auto text-center bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-all text-sm md:text-base">
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Clients Say</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { name: 'Michael Thorne', role: 'Business Owner', content: 'Daddy Tech transformed our warehouse security. The 4K cameras are crystal clear and the app is so easy to use.' },
            { name: 'Sarah Jenkins', role: 'Homeowner', content: 'Peace of mind is priceless. The alarm system installed by the team is reliable and the response time is incredible.' },
            { name: 'David Wilson', role: 'Property Manager', content: 'The access control system they installed for our apartment complex has significantly reduced unauthorized entry.' },
          ].map((t, i) => (
            <div key={i} className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 text-sm md:text-base leading-relaxed">"{t.content}"</p>
              <div>
                <div className="font-bold text-slate-900 text-sm md:text-base">{t.name}</div>
                <div className="text-slate-500 text-xs md:text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
