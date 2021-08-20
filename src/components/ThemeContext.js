import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
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

  const value = {
    themes,
    languageData,
    language,
    handleChange,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
