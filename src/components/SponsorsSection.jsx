import { ACTIVE_THEME } from '../config/Theme';
import { Calendar, Award, Trophy, Instagram, Heart, Film, Star, Sparkles, Camera, Zap } from 'lucide-react';
function SponsorsSection() {

  const theme = ACTIVE_THEME;
  const sponsors = [
    { id: 1, name: "TechCorp", tier: "Platinum", icon: Star, colorIndex: 0 },
    { id: 2, name: "MediaPro", tier: "Gold", icon: Trophy, colorIndex: 1 },
    { id: 3, name: "Creative Studios", tier: "Gold", icon: Camera, colorIndex: 2 },
    { id: 4, name: "Digital Hub", tier: "Silver", icon: Sparkles, colorIndex: 0 },
    { id: 5, name: "Brand Co", tier: "Silver", icon: Heart, colorIndex: 1 },
    { id: 6, name: "Innovation Lab", tier: "Silver", icon: Award, colorIndex: 2 }
  ];

  const getGradient = (index) => {
    const gradients = [
      { from: theme.primary.from, to: theme.primary.to },
      { from: theme.secondary.from, to: theme.secondary.to },
      { from: theme.accent.from, to: theme.accent.to }
    ];
    return gradients[index % 3];
  };

  return (
    <section className={`py-20 md:py-28 bg-gradient-to-b ${theme.gradient.section3}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Our <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>Sponsors</span>
          </h2>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Proud partners supporting Odisha's digital creator community 🤝
          </p>
        </div>

        {/* Sponsor Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor) => {
            const gradient = getGradient(sponsor.colorIndex);
            return (
              <div 
                key={sponsor.id}
                className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center group"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${gradient.from} ${gradient.to} rounded-2xl flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <sponsor.icon className="text-white" size={32} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white text-center mb-2">{sponsor.name}</h3>
                <span className={`text-xs md:text-sm font-bold bg-gradient-to-r ${gradient.from} ${gradient.to} bg-clip-text text-transparent`}>{sponsor.tier} Sponsor</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default SponsorsSection;