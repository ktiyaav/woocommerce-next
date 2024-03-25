"use client"
import { useEffect, useState } from "react";

export const updateTheme = (mode: string) => {
    localStorage.setItem('theme', mode);
    setThemeClass(mode);
}

const useTheme = () => {
    const [theme, setTheme] = useState<string>();

    useEffect(() => {
        setThe();
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            // const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            // setTheme(prefersDarkMode ? 'dark' : 'light');
            setTheme('light');
        }
    }, [theme]);
    return theme ? theme : '';
}

export const setThe = () => {
    if (localStorage.theme === 'dark') {
        // || (!('theme' in localStorage)) && window.matchMedia('(prefers-color-scheme: dark)').matches
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}
const setThemeClass = (theme: string) => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export default useTheme;