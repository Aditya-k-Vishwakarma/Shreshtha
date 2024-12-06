import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { isValidEmail } from '../../utils/auth';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!isValidEmail(email)) {
      setError('Invalid email domain');
      setIsLoading(false);
      return;
    }

    try {
      await login(email, password);
      const from = location.state?.from?.pathname || getDashboardPath(email);
      navigate(from, { replace: true });
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const getDashboardPath = (email: string): string => {
    if (email.endsWith('.nsh')) return '/nsh-dashboard';
    if (email.endsWith('.ich')) return '/ich-dashboard';
    if (email.endsWith('.spo')) return '/spo-dashboard';
    return '/';
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="flex justify-center mb-6">
        <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
          <LogIn className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Login to E-DakConnect
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your email"
            disabled={isLoading}
            required
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your password"
            disabled={isLoading}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-8 text-gray-500 dark:text-gray-400"
            disabled={isLoading}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <span>Logging in...</span>
          ) : (
            <>
              <LogIn size={20} />
              <span>Login</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};