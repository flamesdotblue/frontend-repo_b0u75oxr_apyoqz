import { useState } from 'react';
import HeroLanding from './components/HeroLanding.jsx';
import AuthPages from './components/AuthPages.jsx';
import Dashboard from './components/Dashboard.jsx';
import FooterNav from './components/FooterNav.jsx';

function App() {
  const [route, setRoute] = useState('landing'); // 'landing' | 'auth' | 'dashboard'
  const [user, setUser] = useState(null); // { name, email }
  const [activeTab, setActiveTab] = useState('home'); // for footer nav within dashboard

  const handleStart = () => setRoute('auth');

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    setRoute('dashboard');
  };

  const handleSignOut = () => {
    setUser(null);
    setRoute('landing');
    setActiveTab('home');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {route === 'landing' && (
        <HeroLanding onGetStarted={handleStart} />
      )}

      {route === 'auth' && (
        <AuthPages onAuthSuccess={handleAuthSuccess} onBack={() => setRoute('landing')} />)
      }

      {route === 'dashboard' && (
        <div className="flex min-h-screen flex-col">
          <Dashboard user={user} activeTab={activeTab} setActiveTab={setActiveTab} />
          <FooterNav activeTab={activeTab} onChange={setActiveTab} onSignOut={handleSignOut} />
        </div>
      )}
    </div>
  );
}

export default App;
