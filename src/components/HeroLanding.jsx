import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function HeroLanding({ onGetStarted }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),rgba(15,23,42,1))]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 pb-24 pt-28 md:flex-row md:pb-32 md:pt-40">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">
            <Rocket size={16} />
            <span className="text-xs font-medium">Healthcare, reimagined</span>
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Doc Dynasty
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Quick and Easy access to your Health. Discover doctors, book appointments, and manage your care in one elegant place.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Get Started
              <ArrowRight size={18} />
            </button>
            <a
              href="#learn-more"
              className="text-sm font-medium text-slate-300 underline-offset-4 hover:text-white hover:underline"
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
