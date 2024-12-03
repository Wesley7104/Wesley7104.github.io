<script lang="ts">
	//import  themeColors from 'daisyui/src/theming/themes';
    import { themes } from '$lib/themes';
	//import type { Theme } from 'daisyui';
	import { onMount } from 'svelte';
	//import { writable } from 'svelte/store';
	import { getTheme, setThemeColors } from '$lib/themeUtils';

	let current_theme = $state('');
	//let theme: Theme;
    let myTheme: string = '';
	//let currentThemeColors: Record<string, string> = {};
  
    // Assuming ThemeColors is defined somewhere with the correct type
    /* interface ThemeColors {
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
  
    // Step 2: Initialize myThemeColors as a prop
	export const myThemeColors = writable<ThemeColors>({theme: '', primary: '', secondary: '', accent: '', neutral: '', success: '', warning: '', error: '', info: ''}); */

	

	onMount(() => {
		 //myTheme = getTheme();
		//setThemeColors(myTheme);
	});

	$effect(() => {
		if (typeof window !== 'undefined') {
			const theme = window.localStorage.getItem('theme');
			if (theme && themes.includes(theme)) {
				document.documentElement.setAttribute('data-theme', theme);
				current_theme = theme;
			} else {
				current_theme = 'business';
				set_theme(current_theme);
			}
		}
	});

	export function set_theme(event: Event) {
		const select = event.target as HTMLSelectElement;
		const theme = select.value;
		if (themes.includes(theme)) {
			
			const one_year = 60 * 60 * 24 * 365;
			window.localStorage.setItem('theme', theme);
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Lax`;
			
            document.documentElement.setAttribute('data-theme', theme);
			current_theme = theme;
			setThemeColors(theme);
		}
	}

	/* export function setThemeColors(theme: string) {
		let newTheme = theme as Theme;

		// Using type assertion to assure TypeScript that themeColors[newTheme] matches ThemeColors
			let themeColorValues = themeColors[newTheme];

			if (themeColorValues) {
				//Update myThemeColors store with the new elements from themeColorValues using the spread operator
				for (const key in themeColorValues) {
					if (Object.prototype.hasOwnProperty.call(themeColorValues, key)) {
						const element = themeColorValues[key];
						currentThemeColors[key] = element;
						myThemeColors.update((value: any) => {
							return {...value, [key]: element};
						});
					}
				}
				
				//myThemeColors.set(themeColorValues.);
			} else {
				console.error("Invalid theme colors");
			}
		// debugging	
		myThemeColors.subscribe((color: any) => {
			console.log(color);
			console.log(color.primary);
		});
	
		//return myThemeColorsState; // Note: Returning a Svelte store from a function might not be necessary
	};

	/* function isThemeColors(obj: any): obj is ThemeColors {
		return 'theme' in obj && 'primary' in obj && 'secondary' in obj && 'accent' in obj;
		
	} */

	/*
	export function getTheme() {
		if (typeof window !== 'undefined') {
			const theme = window.localStorage.getItem('theme');
			if (theme && themes.includes(theme)) {
				document.documentElement.setAttribute('data-theme', theme);
				current_theme = theme;
			}
		}
		myTheme = current_theme;
		return myTheme;
	};	 */

	/* export function getThemeColors() {

		let myThemeColorsState = $state(currentThemeColors)
		
		return {
			get myThemeColorsState() {
				return myThemeColorsState;
			}
		}
	} */
	
</script>


<div class="flex row-auto"> <!-- select select-bordered select-primary w-full max-w-3xl text-xl capitalize -->
	<label for="theme" class="label">Theme:</label>
	<select
		bind:value={current_theme}
		data-choose-theme
		class="select select-primary bg-primary-content hover:bg-neutral hover:text-neutral-content text-primary capitalize"  
		onchange={set_theme}
	>
		<option value="" disabled={current_theme !== ''}>
			Choose a theme
		</option>
		{#each themes as theme}
			<option value={theme} class="capitalize">{theme}</option>
		{/each}
	</select>
</div>

