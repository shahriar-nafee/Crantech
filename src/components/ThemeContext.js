import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

const ThemeContext = React.createContext();
const LanguageDataContext = React.createContext();
const ToggleContext = React.createContext();
const LanguageContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useLanguageData() {
  return useContext(LanguageDataContext);
}

export function useToggle() {
  return useContext(ToggleContext);
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function ThemeProvider({ children }) {
  const [themes, setThemes] = useState();
  const [languageData, setLanguageData] = useState();
  const [language, setLanguage] = useState("en");

  const handleChange = (e) => {
    setLanguage(e.target.innerText);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.npoint.io/836be77be325d0a34bd8")
        .then((response) => {
          setThemes(response.data.style);
          setLanguageData(response.data.languages);
        })
        .catch((err) => {
          console.log(`err`, err);
        });
    };
    fetchData();
  }, []);

  return (
    <ThemeContext.Provider value={themes}>
      <LanguageDataContext.Provider value={languageData}>
        <ToggleContext.Provider value={handleChange}>
          <LanguageContext.Provider value={language}>
            {children}
          </LanguageContext.Provider>
        </ToggleContext.Provider>
      </LanguageDataContext.Provider>
    </ThemeContext.Provider>
  );
}
