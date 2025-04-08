import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ViteFeaturesPage from './pages/ViteFeaturesPage';

// Accessing Environment Variable
const appTitle = import.meta.env.VITE_APP_TITLE || 'Vite Portfolio';

function App() {
  React.useEffect(() => {
    document.title = appTitle; // Set page title from .env
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header siteTitle={appTitle} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/vite-features" element={<ViteFeaturesPage />} />
          {/* Add a 404 Route later if needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;