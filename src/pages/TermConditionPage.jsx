
import { Shield, FileText, CreditCard, Vote, Scale, AlertTriangle, UserCheck, Lock, Globe, Mail, CheckCircle, XCircle } from 'lucide-react';

export default function TermsConditionsPage() {


  const sections = [
    {
      id: 1,
      icon: CheckCircle,
      title: "1. Acceptance of Terms",
      content: "Welcome to OTV Vote, the official digital platform for participation and voting in Insight Creators Awards 2026, organised by OTV Network. By accessing, registering, voting, or using this platform in any manner, you agree to be bound by these Terms & Conditions, our Privacy Policy, and all applicable laws and regulations. If you do not agree, you must discontinue use of the platform immediately."
    },
    {
      id: 2,
      icon: FileText,
      title: "2. Modifications to Terms",
      content: "OTV Network reserves the right to update, revise, or modify these Terms & Conditions at any time to reflect operational, legal, or technological changes. Any such changes will be effective immediately upon being published on the platform. Your continued use of OTV Vote after updates constitutes acceptance of the revised terms."
    },
    {
      id: 3,
      icon: UserCheck,
      title: "3. Eligibility & Age Requirement",
      content: "The platform is intended strictly for users 18 years of age or older. By using the platform, you confirm that you are legally eligible to enter into binding agreements under applicable law. OTV reserves the right to restrict access if age eligibility is found to be misrepresented."
    },
    {
      id: 4,
      icon: Lock,
      title: "4. User Accounts & Registration",
      content: "Participation in nominations or voting requires creation of a user account through approved login methods. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account. You agree to provide true, accurate, and complete information during registration and to update it when required.",
      details: [
        "Information provided is false, misleading, or incomplete",
        "There is suspected misuse, automation, vote manipulation, or policy violation",
        "The account activity threatens the integrity of the platform"
      ],
      detailsTitle: "OTV reserves the right to suspend, restrict, or terminate accounts if:"
    },
    {
      id: 5,
      icon: FileText,
      title: "5. Creator Participation & Submissions",
      content: "Creator participation is subject to internal validation for authenticity and eligibility. Submission of profiles, images, links, or content must not infringe third-party rights or platform policies. OTV may remove or reject submissions that fail to meet participation standards, community guidelines, or ethical benchmarks. Such actions are taken solely to ensure fairness, credibility, and platform trust."
    },
    {
      id: 6,
      icon: CreditCard,
      title: "6. Payments & Transactions",
      content: "Certain features, including creator participation, require payment. All payments are processed securely via Razorpay, OTV's authorized payment gateway partner.",
      details: [
        "You are authorized to use the selected payment method",
        "You permit the platform to charge the applicable amount"
      ],
      detailsTitle: "By initiating a transaction, you confirm that:",
      footer: "OTV does not store full payment details. Payment data is handled securely by Razorpay in compliance with PCI-DSS standards."
    },
    {
      id: 7,
      icon: CreditCard,
      title: "7. Refund Policy",
      content: "Participation fees are generally non-refundable, as they are used to validate and administer the nomination process. However, in cases where a creator entry is removed during verification due to inauthentic or unverifiable information, a full refund may be issued to the original payment method, as per platform policy. Refund decisions are at OTV's discretion and will be communicated transparently."
    },
    {
      id: 8,
      icon: Vote,
      title: "8. Voting Integrity & Fair Use",
      content: "Each user is permitted to vote once per category, subject to platform verification. Use of bots, fake accounts, paid voting schemes, or automated tools is strictly prohibited. OTV employs technical, behavioral, and manual audits to maintain vote integrity.",
      details: [
        "Vote invalidation",
        "Disqualification of nominees",
        "Account suspension or banning"
      ],
      detailsTitle: "Any attempt to manipulate the voting process may result in:"
    },
    {
      id: 9,
      icon: Scale,
      title: "9. Transparency & Outcomes",
      content: "Vote counts are not displayed publicly. Public voting serves as a shortlisting mechanism, while final winners are selected by an independent jury based on merit and content quality. Jury decisions are final, binding, and not subject to dispute or appeal."
    },
    {
      id: 10,
      icon: FileText,
      title: "10. Intellectual Property & Usage Rights",
      content: "By participating, you grant OTV Network a non-exclusive, royalty-free right to use submitted names, images, content snippets, and profiles, promote nominees and winners across digital, broadcast, and social platforms, and archive event-related content for editorial and promotional use. Ownership of original content remains with the creator."
    },
    {
      id: 11,
      icon: Globe,
      title: "11. Platform Availability",
      content: "OTV Vote is provided on an 'as-is' and 'as-available' basis. While reasonable efforts are made to ensure uptime and accuracy, OTV does not guarantee uninterrupted access or error-free operation at all times."
    },
    {
      id: 12,
      icon: AlertTriangle,
      title: "12. Limitation of Liability",
      content: "To the fullest extent permitted by law, OTV Network shall not be liable for any indirect, incidental, consequential, or punitive damages arising from use of the platform. OTV is not responsible for losses arising from platform outages, data inaccuracies, or third-party service interruptions. Use of the platform is at your own discretion and risk."
    },
    {
      id: 13,
      icon: Shield,
      title: "13. Indemnification",
      content: "You agree to indemnify and hold harmless OTV Network, its affiliates, officers, employees, and partners from any claims, losses, liabilities, or expenses arising from your misuse of the platform, violation of these Terms, or infringement of third-party rights."
    },
    {
      id: 14,
      icon: Scale,
      title: "14. Governing Law & Jurisdiction",
      content: "These Terms & Conditions shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction vested in courts located in Odisha."
    },
    {
      id: 15,
      icon: Mail,
      title: "15. Contact & Support",
      content: "For any queries, clarifications, or concerns regarding these Terms & Conditions, users may contact the official Insight support channels as listed on the platform."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 mb-6 shadow-2xl shadow-orange-500/50">
            <FileText size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Terms & Conditions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">Insight Creators Awards 2026 – OTV Network</p>
          <p className="text-gray-400">Last updated: 2026</p>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 border border-orange-500/30 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-orange-400 flex-shrink-0 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Important Notice</h3>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using the OTV Vote platform, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-orange-500/20 border border-orange-500/30 overflow-hidden">
          <div className="divide-y divide-gray-700">
            {sections.map((section) => (
              <div key={section.id} className="p-6 md:p-8 hover:bg-slate-800/50 transition-colors">
                <div className="flex items-start gap-4">
                  <section.icon className="text-orange-400 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 text-base leading-relaxed mb-4">
                      {section.content}
                    </p>
                    
                    {section.detailsTitle && (
                      <div className="mt-4 bg-slate-800/50 rounded-xl p-4 border border-gray-700">
                        <p className="text-orange-300 font-semibold mb-3">{section.detailsTitle}</p>
                        <ul className="space-y-2">
                          {section.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <span className="text-orange-400 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {section.footer && (
                      <p className="mt-4 text-gray-400 italic text-sm">
                        {section.footer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl shadow-2xl p-8 md:p-10 text-center">
          <Shield className="w-16 h-16 text-black mx-auto mb-4" />
          <p className="text-2xl md:text-3xl text-black font-bold mb-4">
            Insight 2026 stands on trust, fairness, and cultural responsibility.
          </p>
          <p className="text-lg md:text-xl text-black/90 font-medium">
            By participating, you agree to uphold the integrity of a platform built to celebrate creators—not compromise credibility.
          </p>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            These terms are effective as of the date mentioned above and apply to all users of the OTV Vote platform.
          </p>
        </div>

      </div>
    </div>
  );
}