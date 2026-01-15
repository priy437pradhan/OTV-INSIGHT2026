import React from 'react';
import { Mail } from "lucide-react";
import { ACTIVE_THEME } from '../config/Theme';

export default function ContactUsPage() {
  const theme = ACTIVE_THEME;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.gradient.hero} py-24 px-4 md:px-6`}>
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-300">Have questions or feedback? We'd love to hear from you</p>
        </div>

        {/* Main Content Card */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-orange-500/20 p-8 md:p-12 border border-orange-500/30">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <ContactBlock
              title="Award Nomination"
              name="Sameer Ranjan Rana"
              email="sameer@odishatv.com"
              phone="+91 82499 28025"
              theme={theme}
            />

            <ContactBlock
              title="Sponsorship"
              name="Biswa Prakash Jena"
              email="biswa@odishatv.com"
              phone="+91 63702 82430"
              theme={theme}
            />

            <ContactBlock
              title="Payment Support"
              name="Payment Support Team"
              email="insight@odishatv.com"
              phone="+91 82499 28025"
              theme={theme}
            />

            <ContactBlock
              title="Event Collaboration"
              name="Binit Kumar"
              email="aloha@oliveridleymedia.in"
              phone="+91 90789 76157"
              theme={theme}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

function ContactBlock({ title, name, email, phone, theme }) {
  return (
    <div>
      <h3 className={`text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} mb-4`}>
        {title}
      </h3>
      
      <div className="flex items-start gap-3">
        <Mail className="text-orange-400 mt-1 flex-shrink-0" size={18} />
        <div>
          <p className="text-white font-medium">{name}</p>
          <a href={`mailto:${email}`} className="text-gray-300 hover:text-orange-400 transition-colors text-sm block">
            {email}
          </a>
          <p className="text-gray-300 text-sm">{phone}</p>
        </div>
      </div>
    </div>
  );
}