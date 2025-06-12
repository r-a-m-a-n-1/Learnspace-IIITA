

import React, { useState, useEffect } from 'react';
import { useNavigate }                        from 'react-router-dom';
import { motion }                             from 'framer-motion';
import { Mail, Lock, Loader2 }                from 'lucide-react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider }                     from '../firebase';
import api                                    from '../api/api';
import bgImage                                from './admin.jpg';
import { useAuth }                            from '../context/AuthContext';

const AdminLoginPage = () => {
  const [form, setForm]       = useState({ email: '', password: '' });
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);
  const navigate              = useNavigate();
  const { login, isMainAdmin }= useAuth();

  // If already logged in, redirect
  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      navigate(isMainAdmin ? '/main-admin-home' : '/adminhome', { replace: true });
    }
  }, [navigate, isMainAdmin]);

  // Clear error after 3s
  useEffect(() => {
    if (error) {
      const t = setTimeout(() => setError(''), 3000);
      return () => clearTimeout(t);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    setLoading(true);
    try {
      await api.post('/login', {
        email:    form.email,
        password: form.password,
      });
      // pass only email into OTP page
      navigate('/admin/otp-verification', {
        state: { email: form.email },
        replace: true,
      });
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(''); 
    setLoading(true);
    try {
      const result     = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const googleIdToken = credential.idToken;

      // call backend -> returns { token, isMain, name }
      const { data } = await api.post('/google-login', { token: googleIdToken });
      const registeredName = data.user.name;

      // store token + registeredName + isMain
      login(data.token, registeredName, data.isMain);

      // redirect
      navigate(data.isMain ? '/main-admin-home' : '/adminhome', { replace: true });
    } catch (err) {
      console.error(err);
      setError('Google login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <img
        src={bgImage}
        className="absolute inset-0 w-full h-full object-cover"
        alt="background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative flex flex-col items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
              Admin Portal Login
            </h2>

            {error && (
              <div className="mb-4 p-2 text-red-500 bg-red-100 rounded-md text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    className="w-full pl-10 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    className="w-full pl-10 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                  <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-2 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-md disabled:opacity-50"
              >
                {loading
                  ? <>
                      <Loader2 className="animate-spin" size={18} />
                      Sending OTP...
                    </>
                  : 'Send OTP'}
              </motion.button>

              <div className="flex justify-between mt-4 text-sm">
                <button
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  className="text-green-400 hover:underline"
                >
                  Forgot Password?
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/create-admin')}
                  className="text-green-400 hover:underline"
                >
                  Create a new Admin
                </button>
              </div>
            </form>

            {/* Google Login */}
            <div className="mt-6">
              <button
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition"
              >
                <img
                  src="/google_logo.jpg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </div>
          </div>
        </motion.div>

        {/* Back to Home Page */}
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-sm text-green-400 hover:underline"
          type="button"
        >
          &larr; Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
