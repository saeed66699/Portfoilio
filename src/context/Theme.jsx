import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

// Get contrast color (for text)
const getContrastColor = (hexcolor) => {
  // Add validation
  if (!hexcolor || !/^#?[0-9A-F]{6}$/i.test(hexcolor)) {
    return "#FFFFFF";
  }
  
  hexcolor = hexcolor.replace("#", "");
  if (hexcolor.length !== 6) return "#FFFFFF";
  
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000000" : "#FFFFFF";
};

// Darken color for gradient
const darkenColor = (hexcolor, percent) => {
  if (!hexcolor || percent < 0 || percent > 100) return hexcolor;
  
  const hex = hexcolor.replace("#", "");
  if (hex.length !== 6) return hexcolor;
  
  const num = parseInt(hex, 16);
  const amt = Math.round(2.55 * percent);
  
  const R = Math.max(0, ((num >> 16) & 0xff) - amt);
  const G = Math.max(0, ((num >> 8) & 0xff) - amt);
  const B = Math.max(0, (num & 0xff) - amt);
  
  return `#${((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1).toUpperCase()}`;
};

// Create gradient from accent color
const createGradientFromColor = (accentColor) => {
  const dark1 = darkenColor(accentColor, 60);
  const dark2 = darkenColor(accentColor, 75);
  const dark3 = darkenColor(accentColor, 85);
  return `linear-gradient(135deg, ${dark1}, ${dark2}, ${dark3})`;
};

// Improved hex to filter function
const hexToFilter = (hexColor) => {
  if (!hexColor || !/^#?[0-9A-F]{6}$/i.test(hexColor)) {
    return 'invert(35%) sepia(90%) saturate(1000%) hue-rotate(320deg) brightness(90%) contrast(90%)';
  }
  
  hexColor = hexColor.replace("#", "").toUpperCase();
  
  // Special case for default color
  if (hexColor === 'EA384C') {
    return 'invert(35%) sepia(90%) saturate(1000%) hue-rotate(320deg) brightness(90%) contrast(90%)';
  }
  
  // Convert hex to RGB
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);
  
  // Calculate hue rotation
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let hue = 0;
  
  if (max !== min) {
    if (max === r) {
      hue = ((g - b) / (max - min)) * 60;
    } else if (max === g) {
      hue = (2 + (b - r) / (max - min)) * 60;
    } else {
      hue = (4 + (r - g) / (max - min)) * 60;
    }
  }
  
  if (hue < 0) hue += 360;
  
  return `invert(35%) sepia(90%) saturate(1000%) hue-rotate(${hue}deg) brightness(90%) contrast(90%)`;
};

export const ThemeProvider = ({ children }) => {
  const [accentColor, setAccentColor] = useState("#EA384C");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [darkBgGradient, setDarkBgGradient] = useState("");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolioTheme");
    if (savedTheme) {
      try {
        const theme = JSON.parse(savedTheme);
        setAccentColor(theme.accentColor || "#EA384C");
        setTextColor(theme.textColor || "#FFFFFF");
        setDarkBgGradient(theme.darkBgGradient || createGradientFromColor(theme.accentColor || "#EA384C"));
        updateCSSVariables(theme);
      } catch (error) {
        console.error("Error loading theme:", error);
        resetToDefault();
      }
    } else {
      resetToDefault();
    }
  }, []);

  // Apply CSS variables globally
  const updateCSSVariables = (theme) => {
    const root = document.documentElement;
    const iconFilter = hexToFilter(theme.accentColor);

    root.style.setProperty("--accent-color", theme.accentColor);
    root.style.setProperty("--text-color", theme.textColor);
    root.style.setProperty("--dark-bg-gradient", theme.darkBgGradient);
    root.style.setProperty("--icon-filter", iconFilter);
    root.style.setProperty("--border-color", theme.accentColor);
  };

  // Update accent color and regenerate gradient
  const updateAccentColor = (newColor) => {
    if (!newColor || !/^#?[0-9A-F]{6}$/i.test(newColor)) return;
    
    const contrastColor = getContrastColor(newColor);
    const newGradient = createGradientFromColor(newColor);

    const newTheme = {
      accentColor: newColor,
      textColor: contrastColor,
      darkBgGradient: newGradient,
    };

    setAccentColor(newColor);
    setTextColor(contrastColor);
    setDarkBgGradient(newGradient);
    updateCSSVariables(newTheme);
    localStorage.setItem("portfolioTheme", JSON.stringify(newTheme));
  };

  // Reset theme to default
  const resetToDefault = () => {
    const defaultAccent = "#EA384C";
    const defaultTheme = {
      accentColor: defaultAccent,
      textColor: getContrastColor(defaultAccent),
      darkBgGradient: createGradientFromColor(defaultAccent),
    };

    setAccentColor(defaultTheme.accentColor);
    setTextColor(defaultTheme.textColor);
    setDarkBgGradient(defaultTheme.darkBgGradient);
    updateCSSVariables(defaultTheme);
    localStorage.setItem("portfolioTheme", JSON.stringify(defaultTheme));
  };

  const value = {
    accentColor,
    textColor,
    darkBgGradient,
    updateAccentColor,
    resetToDefault,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};