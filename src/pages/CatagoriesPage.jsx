import React from 'react';
import { Award, Camera, Music, Laugh, TrendingUp, Heart, Globe, Sparkles, Gamepad2, Star, Mic, Users, Video, Palette, Trophy, Target, Zap } from 'lucide-react';
import { ACTIVE_THEME } from '../config/Theme';

export default function CategoriesPage() {
  const theme = ACTIVE_THEME;

  const categories = [
    {
      icon: Video,
      title: "Storyteller of the Year",
      description: "Honours a creator who consistently tells compelling, original rooted stories from Odisha across digital formats—video, reels, long-form, or mixed media."
    },
    {
      icon: Sparkles,
      title: "Sambalpuri Icon of the Year",
      description: "Celebrates a creator who has elevated Sambalpuri culture—textiles, music, dance, language, foods or traditions—on digital platforms, turning regional identity into contemporary relevance."
    },
    {
      icon: Camera,
      title: "Best Travel Influencer",
      description: "Awarded to a creator who documents places of Odisha with originality and depth, going beyond locations to explore people, culture, and experiences."
    },
    {
      icon: Heart,
      title: "Best Food Creator",
      description: "Recognises a creator who showcases the food culture of Odisha through recipes, reviews, or culinary storytelling with creativity and cultural context."
    },
    {
      icon: Mic,
      title: "Podcast of the Year",
      description: "Honours a podcast that demonstrates strong concept clarity, consistent quality, audience engagement, and meaningful conversations based out of Odisha."
    },
    {
      icon: Camera,
      title: "Photographer of the Year",
      description: "Celebrates a digital photographer whose work stands out for composition, storytelling, and technical excellence—elevating Odisha through lenses."
    },
    {
      icon: TrendingUp,
      title: "Best Sports / Fitness Influencer",
      description: "Awarded to a creator promoting sports, fitness, or wellness through credible information, discipline-driven content, and positive lifestyle influence in Odisha space."
    },
    {
      icon: Laugh,
      title: "Best Comedy Creator",
      description: "Recognises a creator who uses humour intelligently—through sketches, satire, or observational comedy—while maintaining originality, timing, and cultural relevance."
    },
    {
      icon: Sparkles,
      title: "Best Lifestyle / Fashion Influencer",
      description: "Honours a creator who defines lifestyle or fashion trends of Odisha with authenticity, aesthetic consistency, and influence."
    },
    {
      icon: Music,
      title: "Best Music Creator",
      description: "Celebrates a digital creator producing original Odia music, covers, remixes, or experimental sound content that demonstrates musicality and audience resonance."
    },
    {
      icon: Video,
      title: "Best Digital Actor Creator",
      description: "Awarded to a creator who uses digital platforms to showcase acting skills through reels, sketches, or narratives with Odisha/Odia centric environment."
    },
    {
      icon: Trophy,
      title: "Promoter of Heritage Award",
      description: "Honours a creator actively preserving and promoting Odisha's heritage—monuments, rituals, folklore, crafts, or history—through thoughtful digital content."
    },
    {
      icon: Globe,
      title: "Cultural Ambassador of the Year",
      description: "Recognises a creator who represents Odisha's cultural identity beyond state boundaries, acting as a bridge between local traditions and global audiences."
    },
    {
      icon: Gamepad2,
      title: "Best Online Gamer",
      description: "Awarded to a gaming creator who demonstrates skill, consistency, community engagement, and responsible gaming content—taking Odisha's gaming culture to new heights."
    },
    {
      icon: Star,
      title: "Rising Star of the Year",
      description: "Honours an emerging creator who has shown exceptional growth, originality, and audience traction within a short span, indicating strong long-term potential."
    },
    {
      icon: Target,
      title: "Impact Creator of the Year",
      description: "Recognises a creator whose content has driven measurable social impact—awareness, behaviour change, or public discourse—beyond views and likes."
    },
    {
      icon: Award,
      title: "Creator of the Year",
      description: "The highest honour, awarded to a creator who demonstrates excellence across creativity, consistency, influence, audience trust, and platform leadership."
    },
    {
      icon: Globe,
      title: "Global Odia Creator",
      description: "Celebrates an Odia creator based outside Odisha or India who represents Odia language, culture, or identity on a global digital stage."
    },
    {
      icon: Zap,
      title: "Best AI Creator",
      description: "Awarded to a creator using artificial intelligence creatively—in storytelling, art, music, or education—while maintaining originality and ethical use to display Odisha digitally."
    },
    {
      icon: Users,
      title: "Best Dancer Creator",
      description: "Honours a creator who showcases dance of Odisha—classical, folk, contemporary, or fusion—with technical excellence, expression, and digital storytelling finesse."
    },
    {
      icon: Mic,
      title: "Digital Voice of Odisha",
      description: "Recognises a creator who consistently raises important issues, opinions, or narratives shaping Odisha's digital public discourse with responsibility and credibility."
    },
    {
      icon: Laugh,
      title: "Meme Creator of the Year",
      description: "Celebrates a creator who uses memes as a cultural language of Odisha—sharp, timely, relatable, and intelligent—capturing public sentiment with creativity."
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.gradient.hero} py-24 px-4 md:px-6`}>
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>
              Award Categories
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">INSIGHT Creators Awards 2026</p>
          <p className="text-gray-400">Celebrating Excellence Across 22 Categories</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/10 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${theme.primary.from} ${theme.primary.to} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30`}>
                <category.icon className="text-white" size={24} />
              </div>
              <h3 className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} mb-3`}>
                {category.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl p-8 text-center">
          <p className="text-xl md:text-2xl text-black font-bold">
            Each category celebrates the unique voices shaping Odisha's digital landscape
          </p>
        </div>

      </div>
    </div>
  );
}