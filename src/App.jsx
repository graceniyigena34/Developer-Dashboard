import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

const THEME_STORAGE_KEY = 'developer_dashboard_theme';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
    } catch (error) {
      console.log('Error loading theme:', error);
    }
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  }, [isDarkMode]);

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        <Dashboard isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;
