<script lang="ts">
	import '../app.css';
	import "tailwindcss/tailwind.css";
    import ThemeSelect from "$lib/theme-select.svelte";
    import { getTheme, setThemeColors } from "$lib/themeUtils";
    import { onMount } from 'svelte';

    onMount(() => {
        const currentTheme = getTheme();
        setThemeColors(currentTheme);
    });

	let { children } = $props();
</script>



<svelte:head>
    {@html `
        <style>
            :root {
                --primary-color: {myThemeColors.primary};
                --secondary-color: {myThemeColors.secondary};
                --accent-color: {myThemeColors.accent};
            }
        </style>
    `}
</svelte:head>

<div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-neutral-content md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul class="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a href="#aboutMe">About</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
      <a href="/" class="btn btn-ghost hover:bg-neutral hover:text-accent text-xl">RanDev.tech</a>
    </div>
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal px-1 text-xl">
        <li><a href="#aboutMe">About</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
    <div class="navbar-end">
        <ThemeSelect />
    </div>
  </div>

{@render children()}
