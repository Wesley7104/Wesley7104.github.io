<script lang="ts">
	import '../app.css';
	import "tailwindcss/tailwind.css";
  import { base } from '$app/paths';
  import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte'
    import ThemeSelect from "$lib/theme-select.svelte";
    import { getTheme, setThemeColors, myThemeColors } from "$lib/themeUtils";
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const isMobile = writable(false);

    onMount(() => {
        const currentTheme = getTheme();
        if (currentTheme) {
            setThemeColors(currentTheme);
        } else {
            setThemeColors('business');
        } 
        // Set initial value
        $isMobile = window.innerWidth <= 768;
        
        // Add resize listener
        const handleResize = () => {
            $isMobile = window.innerWidth <= 768;
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
        <ul class="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-auto p-2 shadow">
          <li><a href="/#aboutMe">About</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#contact">Contact</a></li>
          {#if $isMobile}
          <div class="navbar-end">
              <ThemeSelect />
          </div>
        {/if}
        </ul>
      </div>
      <a href="{base}/" class="btn btn-ghost hover:bg-neutral hover:text-accent text-xl">RanDev.tech</a>
    </div>
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal px-1 text-xl">
        <li><a href="/#aboutMe">About</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </div>
      {#if !$isMobile}
        <div class="navbar-end">
            <ThemeSelect />
        </div>
      {/if}
  </div>

{@render children()}

<!-- Footer -->
<footer class="footer footer-center p-4 bg-primary text-primary-content">
  <div class="flex flex-row items-center justify-center">
    
    <a href="https://github.com/wesley7104" class="btn btn-square btn-ghost hover:bg-neutral hover:text-accent m-2">
      <FaGithubSquare />
    </a>
    <p>Copyright © 2024 - All right reserved by RanDev.tech</p>

    <!-- Svelte Logo -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="w-11 h-11">
      <path fill={$myThemeColors.accent} d="M110 28a34 34 0 0 0-46-9L38 35a30 30 0 0 0-13 20 32 32 0 0 0 3 20 30 30 0
        0 0-5 12 32 32 0 0 0 6 24c10 15 31 19 46 10l26-17a30 30 0 0 0 13-20 32 32 0
        0 0-3-20 30 30 0 0 0 5-11 32 32 0 0 0-6-25">
      </path> 
      <path fill={$myThemeColors.neutral} d="M62 112a21 21 0 0 1-22-8 19 19 0 0 1-4-15 17 17 0 0 1 1-2v-1l2 1a34 34 0
        0 0 10 5h1v1a6 6 0 0 0 1 4 6 6 0 0 0 7 2 6 6 0 0 0 1-1l26-16a5 5 0 0 0 3-4 6
        6 0 0 0-1-4 6 6 0 0 0-7-3 6 6 0 0 0-2 1l-10 6a19 19 0 0 1-5 3 21 21 0 0
        1-22-8 19 19 0 0 1-3-15 18 18 0 0 1 8-12l26-17a19 19 0 0 1 5-2 21 21 0 0 1
        22 8 19 19 0 0 1 4 15 20 20 0 0 1-1 2v2l-2-1a34 34 0 0 0-10-5l-1-1v-1a6 6 0
        0 0-1-4 6 6 0 0 0-7-2 6 6 0 0 0-1 1L54 57a5 5 0 0 0-3 4 6 6 0 0 0 1 4 6 6 0
        0 0 7 3 6 6 0 0 0 2-1l10-6a19 19 0 0 1 5-3 21 21 0 0 1 22 9 19 19 0 0 1 3 14
        18 18 0 0 1-8 12l-26 17a19 19 0 0 1-5 2">
      </path>
    </svg>
    
  </div>
</footer>