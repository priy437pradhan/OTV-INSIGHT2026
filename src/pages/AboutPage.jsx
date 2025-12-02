import React from 'react';
import { Target, Heart, Users, Award, Sparkles, Star, Trophy, Zap } from 'lucide-react';

function FloatingIcons() {
  const icons = [
    { Icon: Star, delay: 0, duration: 3 },
    { Icon: Heart, delay: 0.5, duration: 4 },
    { Icon: Trophy, delay: 1, duration: 3.5 },
    { Icon: Sparkles, delay: 1.5, duration: 4.5 },
    { Icon: Award, delay: 2, duration: 3 },
    { Icon: Zap, delay: 2.5, duration: 4 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {icons.map((item, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index % 3) * 25}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`
          }}
        >
          <item.Icon 
            className="text-purple-400/20 hover:text-purple-400/40 transition-colors" 
            size={40 + (index % 3) * 20} 
          />
        </div>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 pt-24 md:pt-32 pb-16 relative overflow-hidden">
      <FloatingIcons />
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center mb-12">
          <div className="inline-block mb-6 px-6 py-2 bg-white rounded-full shadow-lg">
            <span className="text-purple-500 font-semibold text-sm md:text-base">✨ About xyz 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              Our Story
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Celebrating the creative minds shaping Odisha's digital landscape 🎨
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-purple-200">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              xyz 2025 is Odisha's first-ever awards ceremony dedicated to recognizing and celebrating digital creators who have made significant contributions to our state's presence in the digital world. From content creators and influencers to digital artists and innovators, we honor those who inspire, entertain, and educate through their creative work.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our mission is to create a platform that not only acknowledges excellence but also fosters a thriving community of digital creators in Odisha. We believe in the power of digital media to connect, inspire, and transform lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To recognize and celebrate digital creators who are putting Odisha on the global digital map through their innovative and creative content.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "To build the largest and most supportive community of digital creators in Odisha, fostering collaboration and growth.",
      color: "from-pink-400 to-orange-400"
    },
    {
      icon: Users,
      title: "Our Community",
      description: "A diverse group of content creators, influencers, artists, and innovators who are passionate about digital storytelling.",
      color: "from-orange-400 to-yellow-400"
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, Innovation, Authenticity, and Community. We celebrate creativity that makes a positive impact.",
      color: "from-yellow-400 to-green-400"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Stand For</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Our core values and beliefs that drive everything we do 💫
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${value.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <value.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const timeline = [
    { phase: "Phase 1", title: "Nominations Open", date: "December 2024", description: "Submit your favorite creators" },
    { phase: "Phase 2", title: "Public Voting", date: "January 2025", description: "Vote for your top picks" },
    { phase: "Phase 3", title: "Jury Selection", date: "Early February 2025", description: "Expert panel reviews finalists" },
    { phase: "Phase 4", title: "Grand Ceremony", date: "February 15, 2025", description: "Winners announced live" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Timeline</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Journey with us through the xyz 2025 experience 
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {timeline.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border-l-8 border-purple-400 transform hover:-translate-x-2"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-400 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="text-sm font-bold text-purple-500 mb-1">{item.phase}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-orange-500 font-bold text-lg">📅 {item.date}</span>
                    <span className="text-gray-600 text-base md:text-lg">{item.description}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Join Us?</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Be part of Odisha's biggest digital creator celebration! 🎉
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 md:px-14 py-4 md:py-5 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl">
            🗳️ Vote Now
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-800 px-10 md:px-14 py-4 md:py-5 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-xl border-4 border-purple-200">
            📧 Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
      <HeroSection />
      <ValuesSection />
      <TimelineSection />
      <CTASection />
    </div>
  );
}