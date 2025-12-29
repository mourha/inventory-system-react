
import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowLeft, CheckCircle2, Globe, Clock } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-emerald-100">
      <nav className="p-6 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-semibold transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Home
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Contact Us</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter">Let's build <br /> together.</h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                Whether you're a university administrator, a government procurement officer, or a warehouse manager, we're here to help you scale.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Email Support</h4>
                  <p className="text-slate-600 font-medium">help@sustainstack.io</p>
                  <p className="text-slate-600 font-medium">sales@sustainstack.io</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Phone Inquiry</h4>
                  <p className="text-slate-600 font-medium">+234 (0) 800 123 4567</p>
                  <p className="text-slate-500 text-sm">Mon-Fri · 8am - 6pm WAT</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Regional Office</h4>
                  <p className="text-slate-600 font-medium">Tech Cluster Hub, Lagos</p>
                  <p className="text-slate-600 font-medium">Nigeria</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-emerald-600 rounded-[2.5rem] text-white space-y-4 shadow-xl shadow-emerald-600/20">
              <Clock className="text-emerald-200" size={32} />
              <h4 className="text-xl font-bold">Fast Response Times</h4>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Our support team typically responds to institutional inquiries within 2 business hours.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-3 bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden min-h-[600px] flex flex-col">
            {submitted ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-700">
                <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={56} />
                </div>
                <h2 className="text-3xl font-black text-slate-900">Message Received!</h2>
                <p className="text-slate-500 max-w-sm text-lg">
                  Thank you for reaching out. A dedicated account manager will contact you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="flex-1 flex flex-col">
                <div className="mb-10">
                  <h3 className="text-2xl font-black text-slate-900">Send an Inquiry</h3>
                  <p className="text-slate-500">Please provide details about your organization's needs.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                      <input required type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-sm font-medium" placeholder="Murtala Muhammad" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Work Email</label>
                      <input required type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-sm font-medium" placeholder="m.murtala@university.edu" />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Organization Type</label>
                      <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-sm font-medium appearance-none">
                        <option>University / School</option>
                        <option>Government Agency</option>
                        <option>Private Enterprise</option>
                        <option>Healthcare / Pharmacy</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Reason for Inquiry</label>
                      <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-sm font-medium appearance-none">
                        <option>Sales & Pricing</option>
                        <option>Campus License Demo</option>
                        <option>Technical Support</option>
                        <option>Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Message</label>
                    <textarea required rows={5} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-sm font-medium resize-none" placeholder="Tell us more about your inventory or resource tracking challenges..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-emerald-600 text-white rounded-[1.5rem] font-black flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 group disabled:bg-slate-300 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Inquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-slate-400 font-medium">
                    By submitting, you agree to our <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
