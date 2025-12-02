import React, { useState } from 'react';
import { 
  Video, Music, Camera, Palette, Gamepad2, BookOpen, 
  Mic, Laugh, TrendingUp, Heart, Sparkles, Trophy,
  Users, Star, Award, Film, Utensils, ShoppingBag,
  Newspaper,
  NewspaperIcon
} from 'lucide-react';

function FloatingIcons() {
  const icons = [
    { Icon: Trophy, delay: 0, duration: 3 },
    { Icon: Star, delay: 0.5, duration: 4 },
    { Icon: Award, delay: 1, duration: 3.5 },
    { Icon: Sparkles, delay: 1.5, duration: 4.5 },
    { Icon: Heart, delay: 2, duration: 3 },
    { Icon: Video, delay: 2.5, duration: 4 },
    { Icon: Newspaper, delay: 2.5, duration: 4 },
    { Icon: NewspaperIcon, delay: 2.5, duration: 4 },

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
            className="text-blue-400/20 hover:text-blue-400/40 transition-colors" 
            size={40 + (index % 3) * 20} 
          />
        </div>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 pt-24 md:pt-32 pb-16 relative overflow-hidden">
      <FloatingIcons />
      <div className="container mx-auto px-4 md:px-6 text-center relative z-20">
        <div className="inline-block mb-6 px-6 py-2 bg-white rounded-full shadow-lg">
          <span className="text-blue-500 font-semibold text-sm md:text-base">🏆 Award Categories</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Categories
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
          15+ Categories celebrating excellence across digital platforms 🎨
        </p>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      icon: Video,
      title: "Best Content Creator",
      description: "For creators who consistently produce high-quality, engaging content",
      color: "from-red-400 to-pink-400",
      bgColor: "bg-red-50"
    },
    {
      id: 2,
      icon: Music,
      title: "Best Music Creator",
      description: "Celebrating musicians and music content creators",
      color: "from-pink-400 to-purple-400",
      bgColor: "bg-pink-50"
    },
    {
      id: 3,
      icon: Camera,
      title: "Best Photography",
      description: "Outstanding visual storytelling through photography",
      color: "from-purple-400 to-blue-400",
      bgColor: "bg-purple-50"
    },
    {
      id: 4,
      icon: Palette,
      title: "Best Digital Artist",
      description: "Recognizing exceptional digital art and illustration",
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-50"
    },
    {
      id: 5,
      icon: Gamepad2,
      title: "Best Gaming Creator",
      description: "For gaming streamers and esports content creators",
      color: "from-cyan-400 to-teal-400",
      bgColor: "bg-cyan-50"
    },
    {
      id: 6,
      icon: BookOpen,
      title: "Best Educational Content",
      description: "Making learning fun and accessible",
      color: "from-teal-400 to-green-400",
      bgColor: "bg-teal-50"
    },
    {
      id: 7,
      icon: Laugh,
      title: "Best Comedy Creator",
      description: "Spreading joy and laughter through comedy",
      color: "from-green-400 to-yellow-400",
      bgColor: "bg-green-50"
    },
    {
      id: 8,
      icon: Mic,
      title: "Best Podcast",
      description: "Excellence in audio storytelling and discussions",
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-50"
    },
    {
      id: 9,
      icon: TrendingUp,
      title: "Rising Star",
      description: "Breakthrough creator of the year",
      color: "from-orange-400 to-red-400",
      bgColor: "bg-orange-50"
    },
    {
      id: 10,
      icon: Heart,
      title: "Best Lifestyle Influencer",
      description: "Inspiring everyday life and wellness",
      color: "from-red-400 to-pink-400",
      bgColor: "bg-red-50"
    },
    {
      id: 11,
      icon: Film,
      title: "Best Short Film",
      description: "Excellence in short-form filmmaking",
      color: "from-pink-400 to-purple-400",
      bgColor: "bg-pink-50"
    },
    {
      id: 12,
      icon: Users,
      title: "Best Community Impact",
      description: "Creating positive social change",
      color: "from-purple-400 to-blue-400",
      bgColor: "bg-purple-50"
    },
    {
      id: 13,
      icon: Utensils,
      title: "Best Food Creator",
      description: "Culinary content that makes mouths water",
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-50"
    },
    {
      id: 14,
      icon: ShoppingBag,
      title: "Best Fashion Influencer",
      description: "Setting trends and inspiring style",
      color: "from-cyan-400 to-teal-400",
      bgColor: "bg-cyan-50"
    },
    {
      id: 15,
      icon: Trophy,
      title: "Creator of the Year",
      description: "The ultimate recognition for overall excellence",
      color: "from-yellow-400 via-orange-400 to-red-400",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Award <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Categories</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Vote for your favorite creators in these exciting categories 🎯
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
              className={`${category.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer border-4 ${
                selectedCategory === category.id ? 'border-purple-400 scale-105' : 'border-transparent'
              }`}
            >
              <div className={`bg-gradient-to-br ${category.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto`}>
                <category.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 text-center">{category.title}</h3>
              <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
                {category.description}
              </p>
              <button className={`mt-6 w-full py-3 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === category.id 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}>
                {selectedCategory === category.id ? '✅ Selected' : '🗳️ Vote'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToVoteSection() {
  const steps = [
    {
      step: "01",
      title: "Browse Categories",
      description: "Explore all 15+ categories and see the nominees",
      icon: Trophy
    },
    {
      step: "02",
      title: "Select Your Favorites",
      description: "Click on the categories and choose your favorite creators",
      icon: Heart
    },
    {
      step: "03",
      title: "Cast Your Vote",
      description: "Submit your votes before January 31, 2025",
      icon: Star
    },
    {
      step: "04",
      title: "Spread the Word",
      description: "Share and encourage others to vote for their favorites",
      icon: Users
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Vote</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Simple steps to make your voice heard! 📝
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="bg-gradient-to-br from-blue-400 to-purple-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <item.icon className="text-white" size={32} />
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 md:px-16 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl">
            🗳️ Start Voting Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default function CategoriesPage() {
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
      <CategoriesSection />
      <HowToVoteSection />
    </div>
  );
}