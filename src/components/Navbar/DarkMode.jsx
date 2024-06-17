import React, { useEffect, useState } from 'react'
import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'

const DarkMode = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);


  return (
    <div>
      <img src={LightButton} alt="light png" className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,10] transition-all duration-300 absolute z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
      <img src={DarkButton} alt="light png" className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,10] transition-all duration-300' onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
    </div>
  )
}

export default DarkMode
