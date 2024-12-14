import { themes } from '$lib/themes';
import themeColors from 'daisyui/src/theming/themes';
import type { Theme } from 'daisyui';
import { writable } from 'svelte/store';

//let currentThemeColors: Record<string, string> = {};

interface ThemeColors {
    theme: string;
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    neutralContent: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  // Add other theme properties as needed
}


export const myThemeColors = writable<ThemeColors>({
    theme: '', 
    primary: '', 
    secondary: '', 
    accent: '', 
    neutral: '', 
    neutralContent: '',
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
                    neutral: themeColorValues.neutral || '',
                    neutralContent: themeColorValues.neutralContent || '',
                    success: themeColorValues.success || '',
                    warning: themeColorValues.warning || '',
                    error: themeColorValues.error || '',
                    info: themeColorValues.info || ''
                };
        
                myThemeColors.set(updatedThemeColors);
        
    } else {
        console.error("Invalid theme colors");
    }
}



