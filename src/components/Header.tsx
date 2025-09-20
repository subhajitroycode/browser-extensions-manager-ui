import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const mode: boolean = localStorage.getItem("darkMode") === "true";
    setDarkMode(mode);
    if (mode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const toggle: boolean = !darkMode;
    setDarkMode(toggle);
    localStorage.setItem("darkMode", toggle.toString());
    document.documentElement.classList.toggle("dark", toggle);
  };

  return (
    <header className="flex justify-between items-center p-3 mt-4 bg-neutral-0 dark:bg-neutral-800 rounded-2xl shadow-md">
      <img
        src={darkMode ? "/logo-dark.svg" : "/logo.svg"}
        alt="logo"
        className="w-32"
      />
      <button
        onClick={toggleDarkMode}
        className="bg-neutral-100 dark:bg-neutral-700 p-2 rounded-lg cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-600 transition focus:outline-2 focus:outline-offset-2 focus:outline-red-400"
      >
        {darkMode ? (
          <img src="/icon-sun.svg" alt="icon of sun" className="w-4" />
        ) : (
          <img src="/icon-moon.svg" alt="icon of moon" className="w-4" />
        )}
      </button>
    </header>
  );
};

export default Header;
