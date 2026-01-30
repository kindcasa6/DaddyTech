
import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore our specialized security solutions designed to protect your home, business, and assets with unparalleled precision.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {SERVICES.map((service, idx) => (
          <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
              <div className="bg-blue-600/10 text-blue-600 p-4 rounded-2xl w-fit mb-8">
                {service.icon}
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {service.description} Our systems provide seamless integration with your existing infrastructure, ensuring a robust safety net for your premises. 
                Whether it's crystal clear 4K visuals or instantaneous alarm triggers, we utilize only the most reliable hardware in the industry.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Free Consultation', 'Remote Management', 'Mobile App Support', 'Professional Install'].map((feat, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all"
              >
                Inquire About {service.title}
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl -z-10 rotate-2"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready for a Secure Tomorrow?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Schedule a site survey today and let our experts design the perfect security ecosystem for your needs.
            </p>
            <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
              Get Your Free Estimate
            </Link>
          </div>
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-700 rounded-full opacity-20"></div>
        </div>
      </section>
    </div>
  );
};

export default Services;
