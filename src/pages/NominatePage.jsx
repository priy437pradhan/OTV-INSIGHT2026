// NominatePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Video, Music, Camera, Palette, Gamepad2, BookOpen, 
  Mic, Laugh, TrendingUp, Heart, Film, Users, 
  Utensils, ShoppingBag, Trophy, AlertCircle, CheckCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ACTIVE_THEME } from '../config/Theme';

export default function NominatePage() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState(user?.nominations || []);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const theme = ACTIVE_THEME;

  const categories = [
    { id: 1, icon: Video, title: "Best Content Creator", description: "High-quality, engaging content", colorIndex: 0 },
    { id: 2, icon: Music, title: "Best Music Creator", description: "Musicians and music content", colorIndex: 1 },
    { id: 3, icon: Camera, title: "Best Photography", description: "Visual storytelling through photos", colorIndex: 2 },
    { id: 4, icon: Palette, title: "Best Digital Artist", description: "Exceptional digital art", colorIndex: 0 },
    { id: 5, icon: Gamepad2, title: "Best Gaming Creator", description: "Gaming and esports content", colorIndex: 1 },
    { id: 6, icon: BookOpen, title: "Best Educational Content", description: "Making learning accessible", colorIndex: 2 },
    { id: 7, icon: Laugh, title: "Best Comedy Creator", description: "Spreading joy through comedy", colorIndex: 0 },
    { id: 8, icon: Mic, title: "Best Podcast", description: "Audio storytelling excellence", colorIndex: 1 },
    { id: 9, icon: TrendingUp, title: "Rising Star", description: "Breakthrough creator", colorIndex: 2 },
    { id: 10, icon: Heart, title: "Best Lifestyle Influencer", description: "Inspiring everyday life", colorIndex: 0 },
    { id: 11, icon: Film, title: "Best Short Film", description: "Short-form filmmaking", colorIndex: 1 },
    { id: 12, icon: Users, title: "Best Community Impact", description: "Creating positive change", colorIndex: 2 },
    { id: 13, icon: Utensils, title: "Best Food Creator", description: "Culinary content excellence", colorIndex: 0 },
    { id: 14, icon: ShoppingBag, title: "Best Fashion Influencer", description: "Setting trends and style", colorIndex: 1 },
    { id: 15, icon: Trophy, title: "Creator of the Year", description: "Overall excellence", colorIndex: 2 }
  ];

  const getGradient = (index) => {
    const gradients = [
      { from: theme.primary.from, to: theme.primary.to },
      { from: theme.secondary.from, to: theme.secondary.to },
      { from: theme.accent.from, to: theme.accent.to }
    ];
    return gradients[index % 3];
  };

  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
      setShowError(false);
    } else if (selectedCategories.length < 3) {
      setSelectedCategories([...selectedCategories, categoryId]);
      setShowError(false);
    } else {
      setErrorMessage('Maximum 3 categories allowed!');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleSubmit = () => {
    if (selectedCategories.length === 0) {
      setErrorMessage('Please select at least one category');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    // Update user context with nominations
    updateUser({ nominations: selectedCategories });
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/profile');
    }, 2000);
  };

  return (
    <div className="bg-black min-h-screen pt-24 pb-16">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-slide-in">
          <CheckCircle size={20} />
          <span className="font-semibold">Nominations saved successfully!</span>
        </div>
      )}

      {/* Error Message */}
      {showError && (
        <div className="fixed top-24 right-4 bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-slide-in">
          <AlertCircle size={20} />
          <span className="font-semibold">{errorMessage}</span>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className={`inline-block mb-6 px-6 py-2 bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} rounded-full shadow-lg shadow-orange-500/30`}>
            <span className="text-white font-semibold">🏆 Self Nomination</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Nominate <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary.from} ${theme.primary.to}`}>Yourself</span>
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Select up to 3 categories where you'd like to be nominated for the INSIGHT Awards
          </p>
          
          {/* Selection Counter */}
          <div className="flex items-center justify-center gap-2">
            <div className={`px-8 py-4 rounded-2xl transition-all duration-300 ${
              selectedCategories.length === 3 
                ? 'bg-green-500/20 border-2 border-green-500 shadow-lg shadow-green-500/20' 
                : 'bg-orange-500/20 border-2 border-orange-500 shadow-lg shadow-orange-500/20'
            }`}>
              <div className="flex items-center gap-3">
                <Trophy className={selectedCategories.length === 3 ? 'text-green-400' : 'text-orange-400'} size={24} />
                <span className={`font-bold text-2xl ${selectedCategories.length === 3 ? 'text-green-400' : 'text-orange-400'}`}>
                  {selectedCategories.length} / 3 Selected
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category.id);
            const gradient = getGradient(category.colorIndex);
            
            return (
              <div 
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`bg-slate-900/60 backdrop-blur-sm p-6 rounded-3xl shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 ${
                  isSelected 
                    ? `border-orange-500 scale-[1.02] shadow-2xl shadow-orange-500/30` 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className={`bg-gradient-to-br ${gradient.from} ${gradient.to} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30 mx-auto transform transition-transform ${
                  isSelected ? 'scale-110' : ''
                }`}>
                  <category.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base text-center mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className={`w-full py-3 rounded-full font-bold text-center transition-all transform ${
                  isSelected 
                    ? `bg-gradient-to-r ${gradient.from} ${gradient.to} text-white shadow-lg shadow-orange-500/30` 
                    : 'bg-slate-800/80 text-gray-400 hover:bg-slate-700/80'
                }`}>
                  {isSelected ? '✓ Selected' : 'Select'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/profile')}
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all transform hover:scale-105 border border-slate-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={selectedCategories.length === 0}
            className={`px-12 py-4 rounded-full font-bold transition-all transform hover:scale-105 ${
              selectedCategories.length === 0 
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                : `bg-gradient-to-r ${theme.primary.from} ${theme.primary.to} text-white shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50`
            }`}
          >
            {selectedCategories.length === 0 ? 'Select Categories to Continue' : `Submit ${selectedCategories.length} Nomination${selectedCategories.length > 1 ? 's' : ''}`}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}