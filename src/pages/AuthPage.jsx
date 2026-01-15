// AuthPage.jsx
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from './AuthContext';
import authService from './authService';
import AuthStep from '../components/AuthStep';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    
  } = useForm();

  // Initialize Google Sign-In
  useEffect(() => {
    // Load Google Sign-In script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google Client ID
          callback: handleGoogleResponse,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleGoogleResponse = async (response) => {
    setLoading(true);
    setError('');

    try {
      // Decode JWT token to get user info
      const base64Url = response.credential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const userInfo = JSON.parse(jsonPayload);

      // Call backend API with Google credentials
      const result = await authService.googleLogin(response.credential, {
        email: userInfo.email,
        name: userInfo.name,
        provider_user_id: userInfo.sub,
      });

      // Save user data and token
      login(result.user, result.token);
    } catch (err) {
      setError(err.message || 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');

    try {
      if (isSignIn) {
        // Login
        const result = await authService.login({
          username: data.email,
          password: data.password,
        });

        login(result.user, result.token);
        reset();
      } else {
        // Register
        const result = await authService.register({
          username: data.email,
          password: data.password,
          email: data.email,
          name: data.name,
          phone: '',
          role_id: '2',
        });

        login(result.user, result.token);
        reset();
      }
    } catch (err) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.prompt();
    } else {
      setError('Google Sign-In is not loaded yet. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isSignIn ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-600">
            {isSignIn ? 'Sign in to continue' : 'Sign up to get started'}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {loading && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-600 text-sm">Processing...</p>
          </div>
        )}

        <AuthStep
          register={register}
          errors={errors}
          isSignIn={isSignIn}
          setIsSignIn={setIsSignIn}
          onSubmit={handleSubmit(onSubmit)}
          onGoogleSignIn={handleGoogleSignIn}
        />
      </div>
    </div>
  );
};

export default AuthPage;