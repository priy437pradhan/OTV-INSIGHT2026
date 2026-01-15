import React from 'react';
import { Shield, Users, FileText, CheckCircle, Award, AlertCircle, DollarSign, Vote, Trophy, Gavel, Clock, Mail } from 'lucide-react';
import { ACTIVE_THEME } from '../config/Theme';

export default function RulesGuidelinesPage() {
  const theme = ACTIVE_THEME;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.gradient.hero} py-24 px-4 md:px-6`}>
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>
              Rules & Guidelines
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">Insight Creators Awards 2026</p>
          <p className="text-gray-400">Participation Guidelines</p>
        </div>

        {/* Introduction */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-orange-500/20 p-8 md:p-10 border border-orange-500/30 mb-12">
          <p className="text-lg text-gray-300 leading-relaxed text-center mb-6">
            Insight Creators Awards 2026 is a curated, merit-driven recognition platform designed to celebrate authentic digital creators from Odisha and beyond. Participation in the awards implies acceptance of the following rules and conditions.
          </p>
          <div className="text-center">
            <span className={`inline-block px-6 py-3 bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} rounded-xl text-white font-bold text-lg`}>
              Credibility over noise. Quality over shortcuts. Culture over clicks.
            </span>
          </div>
        </div>

        {/* Organiser Section */}
        <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white/10 mb-8">
          <div className="flex items-start gap-4">
            <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <Shield className="text-white" size={28} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Organiser & Authority</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Insight Creators Awards 2026 is organised and hosted by <strong className="text-white">OTV Network</strong>, in association with event partners and sponsors (to be announced). OTV shall act as the final authority in all matters relating to participation, selection, voting, jury decisions, and event execution.
              </p>
            </div>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white/10 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <Users className="text-white" size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Eligibility</h2>
          </div>
          <ul className="space-y-3 ml-0 md:ml-18">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-300 text-base md:text-lg">Any digital content creator, irrespective of platform (Instagram, Facebook, YouTube, or equivalent), is eligible to participate</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-300 text-base md:text-lg">Creators may participate as individuals or as the primary representative of a creator-led brand or channel</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-300 text-base md:text-lg">Participation is open to creators based in Odisha, Odia creators across India, and Global Odia creators</span>
            </li>
          </ul>
        </div>

        {/* Registration Section */}
        <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white/10 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <FileText className="text-white" size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Registration & Category Selection</h2>
          </div>
          <div className="ml-0 md:ml-18 space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">All participants must register through the official Insight platform using Google social login</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">During registration, creators must select: <strong className="text-white">Minimum 1 category, Maximum 3 categories</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">A participation fee of <strong className="text-white">₹499</strong> is applicable for registration, irrespective of the number of categories selected</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Participation Fee Section */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-orange-500/30 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <DollarSign className="text-white" size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Participation Fee & Intent</h2>
          </div>
          <div className="ml-0 md:ml-18">
            <p className="text-gray-300 text-base md:text-lg mb-4">The participation fee is instituted to ensure:</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Serious and intentional participation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Verification of authentic creator profiles</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Fairness in the nomination and voting ecosystem</span>
              </li>
            </ul>
            <p className="text-gray-400 italic">* This fee is not linked to winning or shortlisting, and does not guarantee nomination or selection.</p>
          </div>
        </div>

        {/* Profile Submission Section */}
        <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white/10 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <FileText className="text-white" size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Profile Submission Requirements</h2>
          </div>
          <div className="ml-0 md:ml-18">
            <p className="text-gray-300 text-base md:text-lg mb-4">Participants must submit:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">A valid Instagram / Facebook / YouTube profile link (publicly accessible)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">A profile image that will be displayed on the voting and nominee pages</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Accurate and truthful information related to content, reach, and identity</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 font-semibold flex items-start gap-3">
                <AlertCircle className="flex-shrink-0 mt-1" size={20} />
                <span>Any misrepresentation may result in disqualification.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Review & Refund Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/10">
            <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
              <Shield className="text-white" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Review & Approval Process</h3>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={18} />
                <span>All registrations subject to internal validation by OTV Insight team</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={18} />
                <span>OTV reserves the right to decline entries that don't meet authenticity standards</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-green-500/30">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <DollarSign className="text-white" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Refund Policy</h3>
            <p className="text-gray-300 text-sm md:text-base mb-3">If removed due to inauthentic details:</p>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
                <span>Full refund of ₹499 participation fee</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
                <span>Processed within same working day</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Voting Process Section */}
        <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white/10 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <Vote className="text-white" size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Voting Process</h2>
          </div>
          <div className="ml-0 md:ml-18 space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Voting is open to the general public through the Insight platform</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Each voter can vote for <strong className="text-white">one creator per category</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Vote <strong className="text-white">only once per category</strong>, subject to login verification</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Any attempt to manipulate or misuse the voting system may lead to disqualification</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 p-6 rounded-2xl border border-purple-500/30 mt-6">
              <h4 className="text-lg font-bold text-white mb-3">Vote Transparency & Integrity</h4>
              <p className="text-gray-300 text-base mb-3">All votes are logged securely, audited internally, and protected against duplication, bots, or manipulation.</p>
              <p className="text-gray-400 text-sm italic">* Individual vote counts will not be displayed publicly</p>
            </div>
          </div>
        </div>

        {/* Shortlisting Section */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-orange-500/30 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <Trophy className="text-white" size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Shortlisting Criteria</h2>
          </div>
          <div className="ml-0 md:ml-18">
            <p className="text-gray-300 text-base md:text-lg mb-4">After the voting window closes:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Trophy className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">The <strong className="text-white">Top 5 nominees</strong> with the highest valid votes in each category will be shortlisted</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Shortlisted nominees will receive an official invitation to attend the Insight Creators Awards Event</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Jury Section */}
        <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white/10 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <Gavel className="text-white" size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Jury Evaluation & Winner Selection</h2>
          </div>
          <div className="ml-0 md:ml-18">
            <p className="text-gray-300 text-base md:text-lg mb-4">Final winners are selected by an independent Jury Panel. Jury decisions are based primarily on:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Content quality</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Originality</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Consistency</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Cultural impact</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 text-base md:text-lg">Responsible digital influence</span>
              </li>
            </ul>
            <p className="text-gray-400 italic text-base">* Public voting is used as a shortlisting mechanism, not as the sole deciding factor. Winners will be announced live at the event. Jury decisions are final and binding.</p>
          </div>
        </div>

        {/* Code of Conduct Section */}
        <div className="bg-red-500/10 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-red-500/30 mb-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="text-red-400 flex-shrink-0" size={36} />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Code of Conduct</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300 text-base md:text-lg">Participants must maintain respectful conduct throughout the process—online and offline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300 text-base md:text-lg">Any form of abuse, misinformation, vote manipulation, or unethical behaviour may result in immediate disqualification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rights & Amendments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/10">
            <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
              <FileText className="text-white" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Rights & Usage</h3>
            <p className="text-gray-300 text-sm md:text-base">By participating, creators grant OTV the right to use submitted names, images, and content snippets for event promotion, digital coverage, and archival purposes across OTV's platforms.</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/10">
            <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
              <Shield className="text-white" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Amendments</h3>
            <p className="text-gray-300 text-sm md:text-base">OTV reserves the right to modify, update, or amend these rules at any point to ensure fairness, transparency, and smooth conduct of the awards. Updates will be communicated through official channels.</p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl shadow-2xl p-8 md:p-10 text-center">
          <p className="text-xl md:text-2xl text-black font-bold mb-4">
            Insight Creators Awards 2026 stands for credibility over noise, quality over shortcuts, and culture over clicks.
          </p>
          <p className="text-lg md:text-xl text-black">
            Participation means becoming part of a platform that values influence with responsibility.
          </p>
        </div>

      </div>
    </div>
  );
}