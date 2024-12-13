interface ThemeColors {
    theme: string;
    primary: string;
    secondary: string;
    accent: string;
    neutral: string | null;
    neutral_content: string | null;
    success: string | null;
    warning: string | null;
    error: string | null;
    info: string | null;
}

export const myThemeColors = $state<ThemeColors>({
    theme: '', 
    primary: '', 
    secondary: '', 
    accent: '', 
    neutral: '', 
    neutral_content: '',
    success: '', 
    warning: '', 
    error: '', 
    info: ''
}); 