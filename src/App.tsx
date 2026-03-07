import HomePage from '@/pages/HomePage';
import IndustriesPage from '@/pages/IndustriesPage';

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';

  if (pathname === '/industries') {
    return <IndustriesPage />;
  }

  return <HomePage />;
}

export default App;
