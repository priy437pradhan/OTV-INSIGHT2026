import { useEffect, useRef, useCallback } from 'react';
import { Calendar, Award, Trophy, Instagram, Heart, Film, Star, Sparkles, Camera } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function FloatingIcons() {
  const icons = [
    { Icon: Instagram, delay: 0, duration: 3 },
    { Icon: Heart, delay: 0.5, duration: 4 },
    { Icon: Film, delay: 1, duration: 3.5 },
    { Icon: Star, delay: 1.5, duration: 4.5 },
    { Icon: Sparkles, delay: 2, duration: 3 },
    { Icon: Camera, delay: 2.5, duration: 4 }
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
            className="text-orange-400/20 hover:text-orange-400/40 transition-colors" 
            size={40 + (index % 3) * 20} 
          />
        </div>
      ))}
    </div>
  );
}

function HeroSection({ googleButtonRef }) {
  const { user } = useAuth();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 pt-16 md:pt-20 relative overflow-hidden">
      <FloatingIcons />

      <div className="container mx-auto px-4 md:px-6 text-center relative z-20">
        <div className="inline-block mb-6 px-6 py-2 bg-white rounded-full shadow-lg">
          <span className="text-orange-500 font-semibold text-sm md:text-base">✨ First Ever in Odisha</span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
            INSIGHT
          </span>
          <br />
          <span className="text-gray-800">2025</span>
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
          Odisha's 1st Creators Awards
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 font-medium">
          Celebrating Digital Excellence
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-500 mb-8 md:mb-12">
          Where Creativity Meets Recognition 🎉
        </p>
        
        {!user ? (
          <div className="flex justify-center">
            <div ref={googleButtonRef} id="google-signin-button"></div>
          </div>
        ) : (
          <button 
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 md:px-14 py-4 md:py-5 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50"
          >
            🗳️ Vote Now
          </button>
        )}
      </div>
    </section>
  );
}

function VotingSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Voting <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Information</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Cast your vote and support your favorite digital creators from Odisha 💫
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-orange-200">
            <div className="bg-gradient-to-br from-orange-400 to-pink-400 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Calendar className="text-white" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Voting Period</h3>
            <p className="text-gray-600 text-base md:text-lg font-medium">January 1 - January 31, 2025</p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-pink-200">
            <div className="bg-gradient-to-br from-pink-400 to-purple-400 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Trophy className="text-white" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Categories</h3>
            <p className="text-gray-600 text-base md:text-lg font-medium">15+ Award Categories</p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-purple-200">
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Grand Event</h3>
            <p className="text-gray-600 text-base md:text-lg font-medium">February 15, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuestsSection() {
  const guests = [
    { id: 1, name: "Rajesh Kumar", role: "Chief Guest", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", color: "from-orange-400 to-pink-400" },
    { id: 2, name: "Priya Patel", role: "Special Guest", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", color: "from-pink-400 to-purple-400" },
    { id: 3, name: "Amit Singh", role: "Guest Speaker", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", color: "from-purple-400 to-blue-400" },
    { id: 4, name: "Sneha Mohanty", role: "Host", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", color: "from-blue-400 to-cyan-400" },
    { id: 5, name: "Vikram Dash", role: "Judge", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", color: "from-cyan-400 to-teal-400" },
    { id: 6, name: "Ananya Roy", role: "Judge", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", color: "from-teal-400 to-green-400" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Guests</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Meet the distinguished guests and judges for Insight 2025 ⭐
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {guests.map((guest) => (
            <div 
              key={guest.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:rotate-1"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={guest.image} 
                  alt={guest.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${guest.color} opacity-20`}></div>
              </div>
              <div className="p-6 text-center relative">
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${guest.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg`}>
                  <Star className="text-white" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 mt-4">{guest.name}</h3>
                <p className={`text-base md:text-lg font-bold bg-gradient-to-r ${guest.color} bg-clip-text text-transparent`}>{guest.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SponsorsSection() {
  const sponsors = [
    { id: 1, name: "TechCorp", tier: "Platinum", icon: Star },
    { id: 2, name: "MediaPro", tier: "Gold", icon: Trophy },
    { id: 3, name: "Creative Studios", tier: "Gold", icon: Camera },
    { id: 4, name: "Digital Hub", tier: "Silver", icon: Sparkles },
    { id: 5, name: "Brand Co", tier: "Silver", icon: Heart },
    { id: 6, name: "Innovation Lab", tier: "Silver", icon: Award }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-orange-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Sponsors</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Proud partners supporting Odisha's digital creator community 🤝
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => {
            const colors = [
              'from-orange-400 to-pink-400',
              'from-pink-400 to-purple-400',
              'from-purple-400 to-blue-400',
              'from-blue-400 to-cyan-400',
              'from-cyan-400 to-teal-400',
              'from-teal-400 to-green-400'
            ];
            return (
              <div 
                key={sponsor.id}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-2 flex flex-col items-center justify-center"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <sponsor.icon className="text-white" size={32} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-2">{sponsor.name}</h3>
                <span className={`text-xs md:text-sm font-bold bg-gradient-to-r ${colors[index]} bg-clip-text text-transparent`}>{sponsor.tier} Sponsor</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">IN</span>
              <span className="text-gray-800">SIGHT</span>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              Celebrating Odisha's digital creators and their incredible journey in the digital age. ✨
            </p>
          </div>

          <div>
            <h3 className="text-gray-800 font-bold mb-4 text-base md:text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About</a></li>
              <li><a href="#categories" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Categories</a></li>
              <li><a href="#vote" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Vote</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-bold mb-4 text-base md:text-lg">Contact Us</h3>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li>📧 info@insight2025.com</li>
              <li>📱 +91 1234567890</li>
              <li>📍 Bhubaneswar, Odisha</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 md:pt-8 text-center text-gray-600 text-xs md:text-sm">
          <p>&copy; 2025 INSIGHT. All rights reserved. Made with ❤️ in Odisha</p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const { login } = useAuth();
  const googleButtonRef = useRef(null);
  const isInitializedRef = useRef(false);

  // Define handleCredentialResponse BEFORE useEffect
  const handleCredentialResponse = useCallback((response) => {
    try {
      const base64Url = response.credential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      const userData = JSON.parse(jsonPayload);
      
      const userInfo = {
        name: userData.name,
        email: userData.email,
        picture: userData.picture,
        sub: userData.sub
      };

      login(userInfo);
      
    } catch (error) {
      console.error('Error processing sign-in:', error);
      alert('Sign-in failed. Please try again.');
    }
  }, [login]);

  useEffect(() => {
    // Load Google Sign-In script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      if (window.google && !isInitializedRef.current) {
        try {
          window.google.accounts.id.initialize({
            client_id: '881133482472-4ckamgbvg4ipr373uqfl3jg94rh6dmlb.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            ux_mode: 'popup',
            auto_select: false,
          });

          // Render the button
          if (googleButtonRef.current) {
            window.google.accounts.id.renderButton(
              googleButtonRef.current,
              {
                theme: 'filled_blue',
                size: 'large',
                text: 'signin_with',
                shape: 'pill',
                logo_alignment: 'left',
                width: 280
              }
            );
          }

          isInitializedRef.current = true;
        } catch (error) {
          console.error('Error initializing Google Sign-In:', error);
        }
      }
    };

    script.onerror = () => {
      console.error('Failed to load Google Sign-In script');
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [handleCredentialResponse]);

  return (
    <div className="bg-white min-h-screen">
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
      
      <HeroSection googleButtonRef={googleButtonRef} />
      <VotingSection />
      <GuestsSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}