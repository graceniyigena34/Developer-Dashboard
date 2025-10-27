import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav
      className={`w-full px-6 py-4 flex items-center justify-between rounded-b-2xl shadow-lg transition-all duration-300 ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900 text-yellow-300"
          : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
      }`}
    >
      <h1
        className={`text-2xl md:text-3xl font-extrabold tracking-wide transition-colors duration-300`}
      >
        Developer Dashboard.
      </h1>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className={`flex items-center gap-2 px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 ${
          isDarkMode
            ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
            : "bg-white text-blue-700 hover:bg-blue-100"
        }`}
      >
        {isDarkMode ? (
          <>
            <FaSun size={18} />
            <span className="hidden md:inline font-medium">Light Mode</span>
          </>
        ) : (
          <>
            <FaMoon size={18} />
            <span className="hidden md:inline font-medium">Dark Mode</span>
          </>
        )}
      </button>
    </nav>
  );
}

