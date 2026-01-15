import React from 'react';
import { Target, Heart, Users, Award, Sparkles, Globe, Compass, Zap } from 'lucide-react';
import { ACTIVE_THEME } from '../config/Theme';

export default function AboutPage() {
  const theme = ACTIVE_THEME;

  const values = [
    {
      icon: Target,
      title: "Our Vision",
      description: "From recognition to representation—an evolution into a multi-format cultural summit bringing together creators, thinkers, performers, brands, and communities under one roof."
    },
    {
      icon: Heart,
      title: "Our Core Belief",
      description: "They don't just create content—they create context. They don't just go viral—they build value. They don't just speak—they represent."
    },
    {
      icon: Sparkles,
      title: "What We Celebrate",
      description: "Creators who elevate Odia identity, bridge tradition with modern formats, influence communities with integrity, and spark dialogue, awareness, and cultural pride."
    },
    {
      icon: Globe,
      title: "Powered by OTV",
      description: "Hosted by Odisha's largest and most trusted media network, bringing the credibility of legacy media together with the energy of the creator economy."
    }
  ];

  const creatorTypes = [
    "Travel creators documenting unseen Odisha",
    "Meme artists decoding Odia pop culture",
    "Dancers reimagining classical forms digitally",
    "Podcasters shaping public discourse",
    "Fashion creators reviving heritage weaves",
    "Technologists using AI as a cultural tool"
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.gradient.hero} py-24 px-4 md:px-6`}>
      <div className="container mx-auto max-w-5xl">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>
              INSIGHT 2026
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-white font-semibold mb-4">
            Where Culture Scales. Where Influence Endures.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Odisha's definitive digital creator platform—an evolution of recognition into relevance, and celebration into cultural legacy.
          </p>
        </div>

        {/* Main Statement */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-orange-500/20 p-8 md:p-12 border border-orange-500/30 mb-12">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            In an era where algorithms amplify noise and trends vanish overnight, Insight – 2026 stands for something rarer and more enduring: creators who build meaning, preserve identity, and shape culture in ways that last.
          </p>
          <p className="text-lg md:text-xl text-white font-bold text-center">
            This is not just an award show.
          </p>
          <p className="text-xl md:text-2xl text-center mt-2">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} font-bold`}>
              It is Odisha's digital conscience, on a global stage.
            </span>
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/10 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30`}>
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Why It Matters */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-orange-500/20 p-8 md:p-12 border border-orange-500/30 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Why <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>Insight 2026</span> Matters
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            For decades, Odisha's creators have shaped conversations, preserved culture, and influenced communities—often without formal recognition or national visibility. Insight – 2026 corrects that imbalance.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            It places Odisha's creators where they belong: On the cultural map, in public memory, and in the future narrative of Indian digital storytelling.
          </p>
          <p className="text-xl md:text-2xl text-center mt-8 text-white italic">
            Because when the world scrolls endlessly, we want them to pause—and see Odisha, clearly and proudly.
          </p>
        </div>

        {/* Creator Types */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-orange-500/20 p-8 md:p-12 border border-orange-500/30 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>This is Your Platform</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6 text-center">Whether you are:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {creatorTypes.map((type, index) => (
              <div key={index} className="flex items-start gap-3">
                <Sparkles className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-300">{type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-orange-500/20 p-8 md:p-12 border border-orange-500/30 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            More Than Awards — A <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>Cultural Convergence</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6 text-center">
            A full-scale experience designed to inspire exchange and collaboration
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Creator keynotes and masterclasses",
              "Panel discussions on culture, technology, and influence",
              "Cross-platform networking with top creators and brands",
              "One-on-one interactions with national celebrities and thought leaders",
              "Live music, dance performances, comedy, and immersive showcases"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Zap className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            A Movement, Not a Moment
          </h2>
          <p className="text-lg md:text-xl text-black mb-4">
            Insight – 2026 is not just an annual event. It is a growing ecosystem—one that nurtures talent, preserves heritage, and projects Odisha confidently onto the global digital stage.
          </p>
          <p className="text-xl md:text-2xl text-black font-bold mt-6">
            Culture meets content. Influence meets responsibility.
          </p>
          <p className="text-xl md:text-2xl text-black font-bold">
            And Odisha meets the world—on its own terms.
          </p>
          <p className="text-2xl md:text-3xl text-black font-bold mt-8">
            Welcome to Insight – 2026.
          </p>
        </div>

      </div>
    </div>
  );
}