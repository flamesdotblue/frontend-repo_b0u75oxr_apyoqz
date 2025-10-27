import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function HeroLanding({ onGetStarted }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/vK0TK9mHEhvY3bf1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft white-to-blue glow overlay that doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.18),_transparent_40%),_linear-gradient(to_bottom,_rgba(255,255,255,0.85),_rgba(240,249,255,0.75))]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 pb-24 pt-28 md:flex-row md:pb-32 md:pt-40">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-50/70 px-3 py-1 text-sky-700">
            <Rocket size={16} />
            <span className="text-xs font-medium">Healthcare, reimagined</span>
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-slate-900 sm:text-6xl">
            Doc Dynasty
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
            Quick and easy access to your health. Discover doctors, book appointments, and manage your care in one elegant place.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              Get Started
              <ArrowRight size={18} />
            </button>
            <a
              href="#learn-more"
              className="text-sm font-medium text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2" aria-hidden>
          {/* Visual handled by Spline background */}
        </div>
      </div>
    </section>
  );
}
