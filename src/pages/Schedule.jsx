
import { Calendar, Clock, MapPin, Users, Star, Mic, Music, Award, Camera, Coffee, Sparkles } from 'lucide-react';

// Using the same theme structure
const ACTIVE_THEME = {
  primary: {
    from: 'from-orange-500',
    to: 'to-red-600',
    text: 'text-orange-500',
    hover: 'hover:from-orange-600 hover:to-red-700'
  },
  secondary: {
    from: 'from-purple-500',
    to: 'to-pink-600'
  },
  accent: {
    from: 'from-yellow-400',
    to: 'to-orange-500',
    text: 'text-yellow-400'
  },
  gradient: {
    hero: 'from-slate-950 via-slate-900 to-black',
    section1: 'from-black via-slate-950 to-slate-900',
    section2: 'from-slate-900 via-slate-950 to-black',
    section3: 'from-black via-slate-900 to-slate-950'
  }
};

function FloatingIcons() {
  const icons = [
    { Icon: Calendar, delay: 0, duration: 3 },
    { Icon: Clock, delay: 0.5, duration: 4 },
    { Icon: Star, delay: 1, duration: 3.5 },
    { Icon: Music, delay: 1.5, duration: 4.5 },
    { Icon: Award, delay: 2, duration: 3 },
    { Icon: Sparkles, delay: 2.5, duration: 4 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {icons.map((item, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-10"
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index % 3) * 25}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`
          }}
        >
          <item.Icon 
            className="text-orange-400"
            size={40 + (index % 3) * 20} 
          />
        </div>
      ))}
    </div>
  );
}

function HeroSection() {
  const theme = ACTIVE_THEME;
  
  return (
    <section className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${theme.gradient.hero} pt-24 md:pt-32 pb-16 relative overflow-hidden`}>
      <FloatingIcons />
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center mb-12">
          <div className={`inline-block mb-6 px-6 py-2 bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} rounded-full shadow-lg shadow-orange-500/30`}>
            <span className="text-white font-semibold text-sm md:text-base">📅 Event Schedule</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>
              Event Schedule
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
            Your complete guide to INSIGHT 2026 Grand Ceremony 🎭
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-orange-500/30 text-center">
            <Calendar className={`${theme.primary.text} mx-auto mb-3`} size={40} />
            <h3 className="text-white font-bold text-xl mb-2">Date</h3>
            <p className="text-gray-300 text-lg">February 15, 2026</p>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-orange-500/30 text-center">
            <Clock className={`${theme.primary.text} mx-auto mb-3`} size={40} />
            <h3 className="text-white font-bold text-xl mb-2">Time</h3>
            <p className="text-gray-300 text-lg">5:00 PM - 10:00 PM</p>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-orange-500/30 text-center">
            <MapPin className={`${theme.primary.text} mx-auto mb-3`} size={40} />
            <h3 className="text-white font-bold text-xl mb-2">Venue</h3>
            <p className="text-gray-300 text-lg">Bhubaneswar, Odisha</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventTimeline() {
  const theme = ACTIVE_THEME;
  
  const schedule = [
    {
      time: "5:00 PM - 5:30 PM",
      title: "Red Carpet & Registration",
      description: "Arrival of nominees, guests, and media. Photo opportunities with creators and influencers.",
      icon: Camera,
      color: "from-orange-500 to-red-600",
      highlights: ["Media Interactions", "Photo Sessions", "Welcome Drinks"]
    },
    {
      time: "5:30 PM - 6:00 PM",
      title: "Opening Ceremony",
      description: "Welcome address by the organizing committee and special guests. Introduction to INSIGHT 2026.",
      icon: Mic,
      color: "from-purple-500 to-pink-600",
      highlights: ["Welcome Speech", "Event Overview", "Sponsor Recognition"]
    },
    {
      time: "6:00 PM - 6:30 PM",
      title: "Networking Session",
      description: "Connect with fellow creators, industry experts, and potential collaborators over refreshments.",
      icon: Coffee,
      color: "from-yellow-400 to-orange-500",
      highlights: ["Creator Meetups", "Light Refreshments", "Collaboration Talks"]
    },
    {
      time: "6:30 PM - 7:00 PM",
      title: "Special Performances",
      description: "Live performances by Odia artists and creators. Entertainment showcase featuring local talent.",
      icon: Music,
      color: "from-orange-500 to-red-600",
      highlights: ["Musical Acts", "Dance Performances", "Special Guests"]
    },
    {
      time: "7:00 PM - 8:30 PM",
      title: "Awards Ceremony - Part 1",
      description: "Announcement of winners in content creator categories. Acceptance speeches and trophy presentations.",
      icon: Award,
      color: "from-purple-500 to-pink-600",
      highlights: ["Category Announcements", "Winner Speeches", "Trophy Distribution"]
    },
    {
      time: "8:30 PM - 9:00 PM",
      title: "Dinner Break",
      description: "Networking dinner with traditional Odia cuisine and continental options for all guests.",
      icon: Coffee,
      color: "from-yellow-400 to-orange-500",
      highlights: ["Buffet Dinner", "Networking", "Live Music"]
    },
    {
      time: "9:00 PM - 9:45 PM",
      title: "Awards Ceremony - Part 2",
      description: "Finale with special awards and recognition. Announcement of major category winners.",
      icon: Star,
      color: "from-orange-500 to-red-600",
      highlights: ["Special Awards", "Major Categories", "Closing Performances"]
    },
    {
      time: "9:45 PM - 10:00 PM",
      title: "Closing & After Party",
      description: "Thank you note and celebration with DJ, photo booth, and networking until late night.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-600",
      highlights: ["DJ Night", "Photo Booth", "Open Networking"]
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-gradient-to-b ${theme.gradient.section1}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Event <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>Timeline</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Minute-by-minute breakdown of the grand ceremony ⏰
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500 to-red-600 h-full"></div>
          
          <div className="space-y-12">
            {schedule.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full border-4 border-slate-900 shadow-lg shadow-orange-500/50 z-10"></div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 p-6 md:p-8 border border-white/10 transform hover:scale-105">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 flex-shrink-0`}>
                          <item.icon className="text-white" size={28} />
                        </div>
                        <div className="flex-grow">
                          <div className={`${theme.accent.text} font-bold text-sm mb-1`}>{item.time}</div>
                          <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-300 text-base mb-4 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, hIndex) => (
                          <span key={hIndex} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for timeline */}
                  <div className="hidden md:block w-6/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function VenueSection() {
  const theme = ACTIVE_THEME;
  
  return (
    <section className={`py-16 md:py-24 bg-gradient-to-b ${theme.gradient.section2}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Venue <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>Information</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about the event location 📍
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white/10">
            <MapPin className={`${theme.primary.text} mb-4`} size={48} />
            <h3 className="text-3xl font-bold text-white mb-6">Main Venue</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-lg font-semibold text-white mb-1">Location</p>
                <p className="text-base">Premium Convention Center, Bhubaneswar</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white mb-1">Address</p>
                <p className="text-base">Janpath, Bhubaneswar, Odisha 751022</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white mb-1">Capacity</p>
                <p className="text-base">500+ attendees with state-of-the-art facilities</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white mb-1">Parking</p>
                <p className="text-base">Ample parking space available for all guests</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white/10">
            <Users className={`${theme.primary.text} mb-4`} size={48} />
            <h3 className="text-3xl font-bold text-white mb-6">What to Expect</h3>
            <ul className="space-y-4">
              {[
                "World-class audio-visual setup",
                "Professional photography & videography",
                "Live streaming for online audience",
                "Dedicated networking lounges",
                "Food & beverage throughout event",
                "Gift hampers for all attendees",
                "Security and valet parking",
                "Accessible facilities for all"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Star className={`${theme.primary.text} flex-shrink-0 mt-1`} size={20} />
                  <span className="text-gray-300 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DressCodeSection() {
  const theme = ACTIVE_THEME;
  
  const dressOptions = [
    {
      title: "Formal Attire",
      description: "Suits, blazers, formal shirts, and dress pants for men. Sarees, suits, or formal dresses for women.",
      recommended: true
    },
    {
      title: "Semi-Formal",
      description: "Smart casuals with a touch of elegance. Avoid overly casual wear like jeans and t-shirts.",
      recommended: true
    },
    {
      title: "Traditional Wear",
      description: "Odia traditional attire is highly encouraged and celebrated at the event.",
      recommended: true
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-gradient-to-b ${theme.gradient.section3}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Dress <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>Code</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Look your best for the grand celebration 👔
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {dressOptions.map((option, index) => (
            <div 
              key={index}
              className="bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/10 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className={`${theme.primary.text}`} size={28} />
                <h3 className="text-2xl font-bold text-white">{option.title}</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4">{option.description}</p>
              {option.recommended && (
                <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold border border-orange-500/30">
                  ✓ Recommended
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const theme = ACTIVE_THEME;
  
  return (
    <section className={`py-16 md:py-24 bg-gradient-to-br ${theme.gradient.hero}`}>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Save the <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>Date!</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Don't miss Odisha's biggest digital creator celebration! 🎊
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className={`bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} ${theme.primary.hover} text-white px-10 md:px-14 py-4 md:py-5 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-orange-500/30`}>
            📅 Add to Calendar
          </button>
          <button className="bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 text-white px-10 md:px-14 py-4 md:py-5 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-xl border border-orange-500/30">
            🎟️ Register Now
          </button>
        </div>
        <div className="max-w-3xl mx-auto bg-slate-900/60 backdrop-blur-sm rounded-3xl p-6 border border-orange-500/30">
          <p className="text-gray-300 text-base md:text-lg">
            <strong className="text-white">Note:</strong> Entry is by invitation or registration only. Limited seats available. Register early to secure your spot at this historic event!
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Schedule() {
  return (
    <div className="bg-black min-h-screen">
      <style>{`
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
      <EventTimeline />
      <VenueSection />
      <DressCodeSection />
      <CTASection />
    </div>
  );
}