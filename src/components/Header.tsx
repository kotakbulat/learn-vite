import { NavLink } from 'react-router-dom';

interface HeaderProps {
  siteTitle: string;
}

function Header({ siteTitle }: HeaderProps) {
  const linkClass = "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors px-3 py-2 rounded-md";
  const activeLinkClass = "active-link"; // Defined in index.css

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-gray-900 dark:text-white">
          {siteTitle}
        </NavLink>
        <div className="space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/vite-features" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>
            Vite Features
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;