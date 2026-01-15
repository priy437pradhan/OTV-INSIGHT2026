import { Calendar, Award, Trophy, Instagram, Heart, Film, Star, Sparkles, Camera, Zap } from 'lucide-react';
import { ACTIVE_THEME } from '../config/Theme';
function GuestsSection() {
  const theme = ACTIVE_THEME;
  const guests = [
    { id: 1, name: "Rajesh Kumar", role: "Chief Guest", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", colorIndex: 0 },
    { id: 2, name: "INSIGHT Patel", role: "Special Guest", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", colorIndex: 1 },
    { id: 3, name: "Amit Singh", role: "Guest Speaker", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", colorIndex: 2 },
    { id: 4, name: "Sneha Mohanty", role: "Host", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", colorIndex: 0 },
    { id: 5, name: "Vikram Dash", role: "Judge", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", colorIndex: 1 },
    { id: 6, name: "Ananya Roy", role: "Judge", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", colorIndex: 2 }
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
    <section className={`py-20 md:py-28 bg-gradient-to-b ${theme.gradient.section2}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Our <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>Guests</span>
          </h2>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Meet the distinguished guests and judges for Insight 2026 ⭐
          </p>
        </div>

        {/* Guest Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {guests.map((guest) => {
            const gradient = getGradient(guest.colorIndex);
            return (
              <div 
                key={guest.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={guest.image} 
                    alt={guest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${gradient.from} ${gradient.to} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <div className="p-6 text-center relative">
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${gradient.from} ${gradient.to} w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <Star className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 mt-4">{guest.name}</h3>
                  <p className={`text-base md:text-lg font-bold bg-gradient-to-r ${gradient.from} ${gradient.to} bg-clip-text text-transparent`}>{guest.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default GuestsSection