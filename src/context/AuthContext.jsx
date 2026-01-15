import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = sessionStorage.getItem('insight2026_user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }
      } catch (err) {
        console.error('Failed to load user:', err);
        sessionStorage.removeItem('insight2026_user');
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

const login = React.useCallback((response) => {
  const userData = response.user || response;

  setUser(userData);
  sessionStorage.setItem("insight2026_user", JSON.stringify(userData));

  const roleId = Number(userData.role_id);

  if (roleId === 1) {
    window.location.replace("/admin");
  }
}, []);




  const logout = React.useCallback(() => {
    setUser(null);
    sessionStorage.removeItem('insight2026_user');
    sessionStorage.removeItem('insight2026_token');
    
    if (window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect();
    }
    
    // Redirect to home after logout
    window.location.href = '/';
  }, []);

  const getInitials = React.useCallback(() => {
    if (!user) return '??';
    
    // Get name from either direct property or nested user object
    const name = user?.name || user?.user?.name;
    if (!name) return '??';
    
    const names = name.trim().split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    
    const firstInitial = names[0].charAt(0).toUpperCase();
    const lastInitial = names[names.length - 1].charAt(0).toUpperCase();
    
    return firstInitial + lastInitial;
  }, [user]);

  const getUserRole = React.useCallback(() => {
    const roleId = user?.role_id || user?.user?.role_id;
    
    switch (roleId) {
      case '1':
        return 'Admin';
      case '2':
        return 'Creator';
      case '3':
        return 'Public';
      default:
        return 'User';
    }
  }, [user]);

  const value = React.useMemo(
    () => ({ 
      user, 
      login, 
      logout, 
      getInitials, 
      getUserRole,
      isLoading 
    }),
    [user, login, logout, getInitials, getUserRole, isLoading]
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