import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = sessionStorage.getItem('insight2025_user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }
      } catch (err) {
        console.error('Failed to load user:', err);
        sessionStorage.removeItem('insight2025_user');
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = React.useCallback((userData) => {
    setUser(userData);
    sessionStorage.setItem('insight2025_user', JSON.stringify(userData));
  }, []);

  const logout = React.useCallback(() => {
    setUser(null);
    sessionStorage.removeItem('insight2025_user');
    
    if (window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect();
    }
  }, []);

  const getInitials = React.useCallback(() => {
    if (!user || !user.name) return '??';
    
    const names = user.name.trim().split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    
    const firstInitial = names[0].charAt(0).toUpperCase();
    const lastInitial = names[names.length - 1].charAt(0).toUpperCase();
    
    return firstInitial + lastInitial;
  }, [user]);

  const value = React.useMemo(
    () => ({ user, login, logout, getInitials, isLoading }),
    [user, login, logout, getInitials, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};