import React, { useState } from 'react';
import { User, Mail, Phone, Camera, Save, X, Check, Shield, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function ProfilePage() {
  const { user, getInitials } = useAuth();
  
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const getUserInitials = () => {
    if (getInitials) {
      return getInitials();
    }
    return formData.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Saving profile:', formData);
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    });
  };

  return (
    <div className="bg-black min-h-screen pt-24 pb-16">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50">
          <Check size={20} />
          <span className="font-semibold">Profile updated successfully!</span>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-gray-400">Manage your personal information</p>
        </div>

        {/* Privacy Notice */}
        <div className="mb-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 flex items-start gap-3">
          <Shield className="text-blue-400 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="text-blue-300 text-sm font-semibold mb-1">Privacy Protected</p>
            <p className="text-blue-200/80 text-sm">Your email address and phone number are private and will not be visible to other users.</p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden">
          {/* Profile Image Section */}
          <div className="p-8 border-b border-slate-800">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-slate-800 overflow-hidden border-2 border-slate-700">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                      {getUserInitials()}
                    </div>
                  )}
                </div>
                <label 
                  htmlFor="profile-upload" 
                  className="absolute bottom-0 right-0 bg-orange-500 hover:bg-orange-600 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors border-2 border-slate-900"
                >
                  <Camera className="text-white" size={14} />
                  <input
                    id="profile-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{formData.name}</h2>
                <p className="text-gray-400 text-sm">Member since {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 space-y-6">
            {/* Name Field */}
            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
                <User size={16} />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-all ${!isEditing && 'cursor-not-allowed opacity-60'}`}
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
                <Mail size={16} />
                Email Address
                <Lock size={12} className="text-gray-500" />
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-all ${!isEditing && 'cursor-not-allowed opacity-60'}`}
                placeholder="Enter your email"
              />
              <p className="text-xs text-gray-500 mt-1">Private - Not visible to others</p>
            </div>

            {/* Phone Field */}
            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
                <Phone size={16} />
                Phone Number
                <Lock size={12} className="text-gray-500" />
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-all ${!isEditing && 'cursor-not-allowed opacity-60'}`}
                placeholder="Enter your phone number"
              />
              <p className="text-xs text-gray-500 mt-1">Private - Not visible to others</p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex gap-3">
              {!isEditing ? (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Save size={18} />
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 border border-slate-700"
                  >
                    <X size={18} />
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Account Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
            <p className="text-gray-400 text-sm mb-1">Votes Cast</p>
            <p className="text-white text-2xl font-bold">0</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
            <p className="text-gray-400 text-sm mb-1">Nominations</p>
            <p className="text-white text-2xl font-bold">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}