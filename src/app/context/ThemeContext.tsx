'use client'

import React, { createContext, useState, ReactNode } from 'react';

interface themeContextType {
    theme: "dark" | "light";
    setTheme: (theme: "dark" | "light") => void;
}

const ThemeContext = createContext<themeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [theme, setTheme] = useState<"dark" | "light">("dark");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
