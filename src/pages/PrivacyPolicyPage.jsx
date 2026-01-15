import React from 'react';
import { Shield, Lock, Eye, FileText, Users, Bell, Database, Globe, Scale, Mail } from 'lucide-react';
import { ACTIVE_THEME } from '../config/Theme';

export default function PrivacyPolicyPage() {
  const theme = ACTIVE_THEME;
  
  const sections = [
    {
      icon: Shield,
      title: "Introduction",
      text: "Welcome to the official digital platform for Insight Creators Awards 2026, operated by OTV Network. Your privacy matters to us. This Privacy Policy explains how we collect, use, process, store, and protect personal data when you register, nominate, vote, or otherwise interact with the Insight platform."
    },
    {
      icon: Database,
      title: "Information We Collect",
      text: "Personal Information: Name, Email address, Contact details, Profile image and Social media links (for creators). Participation Data: Category selections, Voting activity, Timestamps. Technical Data: IP address, Browser type, Device information, Cookies and tracking technologies."
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      text: "We use collected data to: Register and authenticate users, Enable nominations and voting, Communicate event updates, Ensure voting fairness and prevent fraud, Improve platform usability, and Comply with legal requirements. We do not use your personal data for unrelated commercial purposes."
    },
    {
      icon: Lock,
      title: "Data Security & Protection",
      text: "We implement reasonable safeguards including: Secure servers and access controls, Encrypted communication channels, and Restricted internal access to sensitive data. While no digital system is completely immune, we take all practical measures to safeguard your data."
    },
    {
      icon: Users,
      title: "Sharing of Information",
      text: "We do not sell, trade, or rent personal data to third parties. Information may be shared only with trusted service providers (hosting, analytics, payment partners) for operational purposes, and legal authorities if required by law."
    },
    {
      icon: FileText,
      title: "Payment Data",
      text: "Payments are processed through authorized payment gateways. OTV does not store complete payment or card details. All financial data is handled securely by the payment partner."
    },
    {
      icon: Globe,
      title: "Cookies & Tracking",
      text: "We use cookies to enable core functionality, understand usage patterns, and improve site performance. You may disable cookies through your browser settings, though some features may not function optimally."
    },
    {
      icon: Scale,
      title: "Your Rights",
      text: "You have the right to: Access your personal data, Correct or update information, Request deletion of your data, and Withdraw consent. Requests will be processed within a reasonable timeframe."
    },
    {
      icon: Database,
      title: "Data Retention",
      text: "We retain personal data only as long as necessary to conduct the awards process, maintain platform integrity, and meet legal obligations. Once no longer required, data is securely deleted or anonymized."
    },
    {
      icon: Bell,
      title: "Policy Updates",
      text: "This Privacy Policy may be updated periodically. Updates will be published on this page, and continued use of the platform constitutes acceptance of the revised policy."
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.gradient.hero} py-24 px-4 md:px-6`}>
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300">Insight Creators Awards 2026 – OTV Network</p>
          <p className="text-gray-400 mt-2">Last updated: 2026</p>
        </div>

        {/* Main Content Card */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-orange-500/20 p-8 md:p-12 border border-orange-500/30">
          
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-gray-700 last:border-b-0 pb-8 last:pb-0">
                <div className="flex items-center gap-4 mb-4">
                  <section.icon className="text-orange-400" size={24} />
                  <h2 className="text-xl md:text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed ml-10">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="text-orange-400" size={24} />
              <h2 className="text-xl md:text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <p className="text-gray-300 mb-4">For questions, concerns, or data-related requests:</p>
            <a 
              href="mailto:odishatvotv@gmail.com"
              className={`inline-block bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform`}
            >
              odishatvotv@gmail.com
            </a>
          </div>

          {/* Trust Statement */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-lg md:text-xl text-gray-300 italic">
              At Insight 2026, trust is foundational. Your data is handled with care, responsibility, and respect.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}