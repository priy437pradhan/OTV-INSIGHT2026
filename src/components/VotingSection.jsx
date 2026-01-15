import { ACTIVE_THEME } from '../config/Theme';
import { Calendar, Award, Trophy, Instagram, Heart, Film, Star, Sparkles, Camera, Zap } from 'lucide-react';
function VotingSection() {
  const theme = ACTIVE_THEME;

  const cards = [
    {
      icon: Calendar,
      title: "Voting Period",
      description: "January 1 - January 31, 2026",
      gradient: { from: theme.primary.from, to: theme.primary.to },
      border: theme.primary.border
    },
    {
      icon: Trophy,
      title: "Categories",
      description: "15+ Award Categories",
      gradient: { from: theme.secondary.from, to: theme.secondary.to },
      border: theme.secondary.border
    },
    {
      icon: Award,
      title: "Grand Event",
      description: "February 15, 2026",
      gradient: { from: theme.accent.from, to: theme.accent.to },
      border: theme.accent.border
    }
  ];

  return (
    <section className={`py-20 md:py-28 bg-gradient-to-b ${theme.gradient.section1}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Voting <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>Information</span>
          </h2>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Cast your vote and support your favorite digital creators from Odisha 💫
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 ${card.border}`}
            >
              <div className={`bg-gradient-to-br ${card.gradient.from} ${card.gradient.to} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                <card.icon className="text-white" size={36} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-white text-lg md:text-xl font-medium">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default VotingSection;