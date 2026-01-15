import { useState, useEffect, useRef, useCallback } from "react";
import {
  Calendar,
  Award,
  Trophy,
  Instagram,
  Heart,
  Film,
  Star,
  Sparkles,
  Camera,
  Zap,
  Lightbulb,
  User,
  Users,
  ArrowRight,
  VideoIcon,
} from "lucide-react";
import { AuthModal } from '../components/AuthModal';
import { useAuth } from "../context/AuthContext";
import { ACTIVE_THEME } from "../config/Theme";

import SponsorsSection from "../components/SponsorsSection";
import VotingSection from "../components/VotingSection";
import GuestsSection from "../components/GuestsSection";
import gif1 from "../assets/gifs/deal-with-it-sunglasses.gif";
import gif2 from "../assets/images/DSC_0065-scaled.jpg";
import gif6 from "../assets/images/DSC_0065-scaled.jpg";
import gif7 from "../assets/gifs/trophy-winner.gif";
import gif9 from "../assets/gifs/deal-with-it-sunglasses.gif";
import gif10 from "../assets/images/DSC_0065-scaled.jpg";
import gif12 from "../assets/gifs/youtube-superchat.gif";
import gif13 from "../assets/images/DSC_0065-scaled.jpg";
import gif15 from "../assets/gifs/youtube-superchat.gif";
import img1 from "../assets/images/DSC_0065-scaled.jpg";
import img2 from "../assets/images/DSC_0083-scaled.jpg";
import img3 from "../assets/images/DSC_0191-scaled.jpg";
import img4 from "../assets/images/DSC_0225-scaled.jpg";

function FloatingIcons() {
  const icons = [
    { Icon: Instagram, delay: 0, duration: 3 },
    { Icon: Heart, delay: 0.5, duration: 4 },
    { Icon: Film, delay: 1, duration: 3.5 },
    { Icon: Star, delay: 1.5, duration: 4.5 },
    { Icon: Sparkles, delay: 2, duration: 3 },
    { Icon: Camera, delay: 2.5, duration: 4 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {icons.map((item, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-10"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + (index % 3) * 25}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          <item.Icon className="text-gray-400" size={40 + (index % 3) * 20} />
        </div>
      ))}
    </div>
  );
}

function HeroSection({ openModal, isLoggedIn }) {
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 4,
    y: window.innerHeight / 3,
  });
  
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);
  const theme = ACTIVE_THEME;

  const gifs = [
    { src: gif1, position: { x: "10%", y: "15%" } },
    { src: gif2, position: { x: "30%", y: "15%" } },
    { src: img3, position: { x: "50%", y: "15%" } },
    { src: img4, position: { x: "70%", y: "15%" } },
    { src: img1, position: { x: "90%", y: "15%" } },

    { src: gif6, position: { x: "10%", y: "40%" } },
    { src: gif7, position: { x: "30%", y: "40%" } },
    { src: img2, position: { x: "50%", y: "40%" } },
    { src: gif9, position: { x: "70%", y: "40%" } },
    { src: gif10, position: { x: "90%", y: "40%" } },

    { src: img2, position: { x: "10%", y: "65%" } },
    { src: gif12, position: { x: "30%", y: "65%" } },
    { src: gif13, position: { x: "50%", y: "65%" } },
    { src: img1, position: { x: "70%", y: "65%" } },
    { src: gif15, position: { x: "90%", y: "65%" } },
  ];

  useEffect(() => {
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop && !hasMouseMoved) {
        setMousePos({ x: window.innerWidth / 4, y: window.innerHeight / 3 });
      }
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, [hasMouseMoved]);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setHasMouseMoved(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop]);

  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const getClosestGifIndex = () => {
    let minDistance = Infinity;
    let closestIndex = 0;

    gifs.forEach((gif, idx) => {
      const gifX = (window.innerWidth * parseFloat(gif.position.x)) / 100;
      const gifY = (window.innerHeight * parseFloat(gif.position.y)) / 100;
      const distance = calculateDistance(mousePos.x, mousePos.y, gifX, gifY);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    return closestIndex;
  };

  const closestGifIndex = isDesktop ? getClosestGifIndex() : -1;

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${theme.gradient.hero} pt-16 md:pt-20 relative overflow-hidden`}
    >
      <FloatingIcons />

      {isDesktop && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
          <Lightbulb
            size={48}
            className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] animate-pulse"
            fill="rgba(251,191,36,0.3)"
          />
        </div>
      )}

      {isDesktop && (
        <svg
          className="fixed inset-0 z-5 pointer-events-none"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient id="lightRay" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(251,191,36,0.3)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(251,191,36,0)", stopOpacity: 0 }}
              />
            </linearGradient>
          </defs>
          <path
            d={`M ${window.innerWidth / 2} 56 L ${mousePos.x - 80} ${
              mousePos.y
            } L ${mousePos.x + 80} ${mousePos.y} Z`}
            fill="url(#lightRay)"
            opacity="0.4"
          />
        </svg>
      )}

      {isDesktop && (
        <div
          className="pointer-events-none fixed inset-0 z-10 transition-all duration-200"
          style={{
            background: `radial-gradient(circle 450px at ${mousePos.x}px ${mousePos.y}px, rgba(255,200,100,0.3) 0%, rgba(255,150,100,0.15) 30%, transparent 70%)`,
          }}
        />
      )}

      {isDesktop && (
        <div className="absolute inset-0 z-0">
          {gifs.map((gif, idx) => {
            const isVisible = idx === closestGifIndex;
            return (
              <div
                key={idx}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
                style={{
                  left: gif.position.x,
                  top: gif.position.y,
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="relative w-48 h-48 overflow-hidden rounded-2xl group cursor-pointer">
                  <img
                    src={gif.src}
                    alt={`Creator ${idx + 1}`}
                    className="w-full h-full object-cover shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
                      mixBlendMode: "multiply",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 text-center relative z-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} drop-shadow-2xl`}
          >
            INSIGHT
          </span>
          <br />
          <span className="text-white drop-shadow-lg">2026</span>
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight drop-shadow-md">
          Odisha's 1st Creators Awards
        </h2>

        <p
          className={`text-lg md:text-xl lg:text-2xl ${theme.accent.text} mb-3 font-medium max-w-3xl mx-auto drop-shadow-md`}
        >
          Celebrating Digital Excellence
        </p>
        <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Where Creativity Meets Recognition 🎉
        </p>

        {/* Only show buttons if user is not logged in */}
        {!isLoggedIn && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal("public")}
              className="group relative px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Users size={24} />
              <span>Sign Up / Login</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            
            <button
              onClick={() => openModal("creator")}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
            >
              <VideoIcon size={24} />
              <span>Register as Creator</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function HomePage() {
  const { login, user } = useAuth();
  const googleButtonRef = useRef(null);
  const isInitializedRef = useRef(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [userType, setUserType] = useState(null);

  const openModal = (type) => {
    setUserType(type);
    setModalOpen(true);
  };

  const handleCredentialResponse = useCallback(
    (response) => {
      try {
        const base64Url = response.credential.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map((c) => {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );

        const userData = JSON.parse(jsonPayload);

        const userInfo = {
          name: userData.name,
          email: userData.email,
          picture: userData.picture,
          sub: userData.sub,
          userType: userType || "public",
        };

        login(userInfo);
        setModalOpen(false);
      } catch (error) {
        console.error("Error processing sign-in:", error);
        alert("Sign-in failed. Please try again.");
      }
    },
    [login, userType]
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.google && !isInitializedRef.current) {
        try {
          window.google.accounts.id.initialize({
            client_id:
              "881133482472-4ckamgbvg4ipr373uqfl3jg94rh6dmlb.apps.googleusercontent.com",
            callback: handleCredentialResponse,
            ux_mode: "popup",
            auto_select: false,
          });

          if (googleButtonRef.current) {
            window.google.accounts.id.renderButton(googleButtonRef.current, {
              theme: "filled_blue",
              size: "large",
              text: "signin_with",
              shape: "pill",
              logo_alignment: "left",
              width: 280,
            });
          }

          isInitializedRef.current = true;
        } catch (error) {
          console.error("Error initializing Google Sign-In:", error);
        }
      }
    };

    script.onerror = () => {
      console.error("Failed to load Google Sign-In script");
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [handleCredentialResponse]);

  return (
    <div className="bg-white min-h-screen" style={{ marginTop: "60px" }}>
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

      <HeroSection openModal={openModal} isLoggedIn={!!user} />
      <VotingSection />
      <GuestsSection />
      <SponsorsSection />
   
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        userType={userType}
      />
    </div>
  );
}