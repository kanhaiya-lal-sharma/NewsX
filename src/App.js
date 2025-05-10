import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/:category" element={<CategoryPage darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
