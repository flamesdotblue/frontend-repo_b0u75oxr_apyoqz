import { useState } from 'react';
import { Mail, Lock, User, Phone, ArrowLeft, LogIn, UserPlus, Facebook, Chrome } from 'lucide-react';

export default function AuthPages({ onAuthSuccess, onBack }) {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = mode === 'signup' && form.name ? form.name : form.email.split('@')[0] || 'Guest';
    onAuthSuccess({ name: displayName, email: form.email });
  };

  const oauthSignIn = (provider) => {
    const mockUser = { name: provider === 'Google' ? 'Google User' : 'Facebook User', email: provider.toLowerCase() + '@mock.com' };
    onAuthSuccess(mockUser);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-16">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_40%)]" />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <button onClick={onBack} className="mb-4 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
          <ArrowLeft size={18} /> Back
        </button>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
          <div className="text-sm text-slate-400">Doc Dynasty</div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="mb-1 block text-sm text-slate-300">Full name</label>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <User size={16} className="text-slate-300" />
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent text-sm text-white placeholder-slate-400 outline-none"
                  placeholder="John Doe"
                />
              </div>
            </div>
          )}

          {mode === 'signup' && (
            <div>
              <label className="mb-1 block text-sm text-slate-300">Mobile number</label>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <Phone size={16} className="text-slate-300" />
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent text-sm text-white placeholder-slate-400 outline-none"
                  placeholder="(555) 987-6543"
                />
              </div>
            </div>
          )}

          <div>
            <label className="mb-1 block text-sm text-slate-300">Email</label>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <Mail size={16} className="text-slate-300" />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-sm text-slate-300">Password</label>
              {mode === 'login' && (
                <button type="button" className="text-xs text-emerald-300 hover:text-emerald-200">Forgot Password?</button>
              )}
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <Lock size={16} className="text-slate-300" />
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
            {mode === 'login' ? <><LogIn size={18} /> Sign in</> : <><UserPlus size={18} /> Create account</>}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-slate-400">Or continue with</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => oauthSignIn('Google')} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">
            <Chrome size={16} /> Google
          </button>
          <button onClick={() => oauthSignIn('Facebook')} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">
            <Facebook size={16} /> Facebook
          </button>
        </div>

        <div className="mt-5 text-center text-sm text-slate-300">
          {mode === 'login' ? (
            <span>
              Don’t have an account?{' '}
              <button className="text-emerald-300 hover:text-emerald-200" onClick={() => setMode('signup')}>Sign up</button>
            </span>
          ) : (
            <span>
              Have an account?{' '}
              <button className="text-emerald-300 hover:text-emerald-200" onClick={() => setMode('login')}>Sign in</button>
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
