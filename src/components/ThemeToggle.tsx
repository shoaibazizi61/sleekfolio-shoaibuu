
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:bg-primary/10 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200" 
           style={{ opacity: isDark ? 0 : 1 }}>
        <Moon className="w-5 h-5" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200" 
           style={{ opacity: isDark ? 1 : 0 }}>
        <Sun className="w-5 h-5" />
      </div>
    </button>
  );
};

export default ThemeToggle;
