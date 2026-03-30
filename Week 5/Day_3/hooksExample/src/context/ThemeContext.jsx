import { createContext } from "react";
// Create a context object

export const ThemeContext = createContext("");

// createContext{"light"}
// "default value"
// If no provider is used, React will return "light"
// as the default theme .
// ThemeContext now contains:

// ThemeContext.Provider  → sends data
// ThemeContext.Consumer  → receives data
