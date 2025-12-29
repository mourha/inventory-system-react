
import React from 'react';
import { Leaf, Users, Globe, Target, ArrowLeft, GraduationCap, Building2, Quote, Eye, Compass, ShieldCheck, History } from 'lucide-react';
import { FOUNDER_NAME } from '../constants';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <nav className="p-6 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-semibold transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Home
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Sustain Stack</span>
          </div>
        </div>
      </nav>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4 border border-emerald-100">
            Our Legacy & Future
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
            Efficiency for the <br />
            <span className="text-emerald-600">Common Good.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Sustain Stack is the definitive resource management operating system designed to empower schools, governments, and enterprises across Africa.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="p-12 bg-emerald-600 text-white rounded-[3rem] shadow-2xl shadow-emerald-200/50 relative overflow-hidden group">
            <Target className="absolute -bottom-6 -right-6 w-48 h-48 text-white/10 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                <Compass size={28} />
              </div>
              <h3 className="text-3xl font-black mb-6">Our Mission</h3>
              <p className="text-lg text-emerald-50 leading-relaxed">
                To build the world's most accessible industrial-grade inventory tools, ensuring that institutional resources are managed with absolute transparency and zero waste.
              </p>
            </div>
          </div>
          <div className="p-12 bg-slate-900 text-white rounded-[3rem] shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
            <Eye className="absolute -bottom-6 -right-6 w-48 h-48 text-white/5 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                <Globe size={28} />
              </div>
              <h3 className="text-3xl font-black mb-6">Our Vision</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                A continent where every university, hospital, and public agency operates with the digital precision required to thrive in the 21st century.
              </p>
            </div>
          </div>
        </div>

        {/* Founding Story Section */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] bg-slate-100 rounded-[4rem] overflow-hidden relative shadow-2xl ring-1 ring-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt={FOUNDER_NAME} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Founder</span>
              </div>
              <p className="text-sm font-bold text-slate-900">{FOUNDER_NAME}</p>
              <p className="text-xs text-slate-500">Visionary & Lead Engineer</p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-black text-sm uppercase tracking-widest">
              <History size={18} /> Our Genesis
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Born out of necessity. Built for impact.</h2>
            <div className="space-y-6 text-lg text-slate-500 leading-relaxed">
              <p>
                The story of Sustain Stack began when <strong>{FOUNDER_NAME}</strong> identified a critical gap in West Africa's infrastructure: institutional resource leakage. From overstocked laboratory chemicals in universities to depleted medical supplies in regional clinics, the lack of digital transparency was hindering progress.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border-l-4 border-emerald-500 relative">
                <Quote className="absolute -top-4 left-4 text-emerald-500 opacity-20" size={48} />
                <p className="italic text-slate-700 font-medium">
                  "Efficiency isn't just about profit; it's about making sure that the resources meant for a student's education or a citizen's health actually reach them. We built Sustain Stack to be that bridge."
                </p>
              </div>
              <p>
                Today, under Muhammad's leadership, Sustain Stack serves as the digital backbone for dozens of institutions, transforming logistical nightmares into streamlined, automated workflows that save millions in taxpayers' and stakeholders' funds.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Values that drive us.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">These principles guide every feature we ship and every partner we support.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Absolute Integrity', desc: 'Our audit trails are immutable and transparent, ensuring accountability at every level of governance.' },
              { icon: Leaf, title: 'Radical Sustainability', desc: 'We prioritize the reduction of physical waste by optimizing batch tracking and expiry alerts.' },
              { icon: Users, title: 'Human-Centric Design', desc: 'Powerful software is useless if it is hard to use. We design for the person on the frontline.' },
            ].map((value, i) => (
              <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-emerald-200 hover:shadow-2xl transition-all group shadow-sm">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-slate-900 text-white p-12 md:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to transform your <br /> institutional logistics?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onBack} className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
                Join the Network
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-black hover:bg-white/20 transition-all active:scale-95">
                Speak to our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm font-medium">
          © 2024 Sustain Stack. Locally engineered by <strong>{FOUNDER_NAME}</strong>.
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
