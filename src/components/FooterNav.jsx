import { Home, Calendar, MessageCircle, User as UserIcon, LogOut } from 'lucide-react';

export default function FooterNav({ activeTab, onChange, onSignOut }) {
  const item = (key, label, Icon) => (
    <button
      onClick={() => onChange(key)}
      className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-xl px-3 py-2 text-xs ${activeTab===key ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white'}`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  return (
    <nav className="sticky bottom-0 z-20 border-t border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2">
        {item('home','Home',Home)}
        {item('schedule','Schedule',Calendar)}
        {item('chat','Chat',MessageCircle)}
        {item('profile','Profile',UserIcon)}
        <button onClick={onSignOut} className="ml-2 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs text-slate-300 hover:bg-white/10">
          <LogOut size={16}/> Sign out
        </button>
      </div>
    </nav>
  );
}
