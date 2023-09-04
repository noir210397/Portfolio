import { createContext } from "react";

export const ThemeContext = createContext();
const item = 2;

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ item }}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
