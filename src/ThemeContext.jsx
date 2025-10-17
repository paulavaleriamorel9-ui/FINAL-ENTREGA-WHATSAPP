import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState('light');

const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
};

const contextValue = {
    theme,
    toggleTheme,
};

return (
    <ThemeContext.Provider value={contextValue}>
    {children}
    </ThemeContext.Provider>
);
};

export const useTheme = () => {
return useContext(ThemeContext);
};