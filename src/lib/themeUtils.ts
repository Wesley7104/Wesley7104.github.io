import { themes } from '$lib/themes';
import  themeColors from 'daisyui/src/theming/themes';
import type { Theme } from 'daisyui';
import { writable } from 'svelte/store';

//let currentThemeColors: Record<string, string> = {};

interface ThemeColors {
    theme: string;
    primary: string;
    secondary: string;
    accent: string;
    neutral: string | null;
    success: string | null;
    warning: string | null;
    error: string	| null;
    info: string	| null;
  // Add other theme properties as needed
}


export const myThemeColors = writable<ThemeColors>({
    theme: '', 
    primary: '', 
    secondary: '', 
    accent: '', 
    neutral: '', 
    success: '', 
    warning: '', 
    error: '', 
    info: ''
});

export function getTheme() {
    if (typeof window !== 'undefined') {
        const theme = window.localStorage.getItem('theme');
        if (theme && themes.includes(theme)) {
            document.documentElement.setAttribute('data-theme', theme);
            return theme;
        }
    } else {
        return 'business';
    }
}

export function setThemeColors(theme: string) {
    let newTheme = theme as Theme;
    let themeColorValues = themeColors[newTheme];

    if (themeColorValues) {
        // Create an object that matches ThemeColors interface
        const updatedThemeColors: ThemeColors = {
            theme,
            primary: themeColorValues.primary || '',
            secondary: themeColorValues.secondary || '',
            accent: themeColorValues.accent || '',
            neutral: themeColorValues.neutral || null,
            success: themeColorValues.success || null,
            warning: themeColorValues.warning || null,
            error: themeColorValues.error || null,
            info: themeColorValues.info || null
        };

        myThemeColors.set(updatedThemeColors);
    } else {
        console.error("Invalid theme colors");
    }
}

// If you need to log changes, do it outside the setThemeColors function
/* myThemeColors.subscribe((color: ThemeColors) => {
    console.log(color);
    console.log(color.primary);
}); */
