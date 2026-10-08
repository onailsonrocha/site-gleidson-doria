import { useState, useEffect } from 'react';
import { Home } from './pages/Home/Home';
import { ClientLogin } from './pages/ClientLogin/ClientLogin';
import { ClientDashboard } from './pages/ClientDashboard/ClientDashboard';
import { AdminLogin } from './pages/AdminLogin/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard/AdminDashboard';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.hash || '#inicio');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#inicio');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentRoute === '#cliente/login') return <ClientLogin />;
  if (currentRoute === '#cliente/dashboard') return <ClientDashboard />;
  if (currentRoute === '#admin/login') return <AdminLogin />;
  if (currentRoute === '#admin/dashboard') return <AdminDashboard />;

  return <Home />;
}

export default App;
