import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

export type UserRole = 'entrepreneur' | 'mentor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  location?: string;
  interests?: string[];
  skillLevel?: 'beginner' | 'intermediate' | 'advanced';
  startupStage?: 'idea' | 'development' | 'launch';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, location: string, skillLevel: string, startupStage: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load from local storage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('ravya_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await api.post('/auth/login', { email, password });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('ravya_user', JSON.stringify(userData));
    } catch (err: any) {
      throw new Error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, location: string, skillLevel: string, startupStage: string) => {
    setLoading(true);
    try {
      // Map frontend values to backend enums
      const mappedStage = startupStage.toLowerCase() === 'mvp' ? 'development' : 
                          startupStage.toLowerCase() === 'growth' ? 'launch' : 
                          startupStage.toLowerCase();

      const response = await api.post('/auth/register', { 
        name, 
        email, 
        password, 
        location, 
        skillLevel: skillLevel.toLowerCase(), 
        startupStage: mappedStage,
        role: 'entrepreneur' 
      });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('ravya_user', JSON.stringify(userData));
    } catch (err: any) {
      throw new Error(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    // Mocking Google login but storing in set format
    try {
      const response = await api.post('/auth/register', {
        name: 'Google User',
        email: 'user' + Math.floor(Math.random() * 1000) + '@gmail.com',
        password: 'google_oauth_mock',
        role: 'entrepreneur'
      });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('ravya_user', JSON.stringify(userData));
    } catch (err: any) {
      throw new Error(err.response?.data?.message || 'Google login failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ravya_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
