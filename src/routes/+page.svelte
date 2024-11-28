<script lang="ts">
    import myPhoto from '$lib/MyCartoonPhoto.png'
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import services from '$lib/services.json';
    import { myThemeColors } from '$lib/themeUtils';
    import WebDevIcon from '$lib/components/WebDevIcon.svelte';
    import DesignIcon from '$lib/components/DesignIcon.svelte';
    import IntegrationIcon from '$lib/components/IntegrationIcon.svelte';
    import TechConsultingIcon from '$lib/components/TechConsultingIcon.svelte';
    let words = ["Christian", "Father", "Husband", "Developer", "Integrator", "Designer", "Tech Consultant", "Day Trader"]; // Array of all words
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let typedChars = $state("");
    const typingSpeed = 200;
    const erasingSpeed = 100;

    const eraseChar = () => {
        if (currentCharIndex > 0) {
            typedChars = typedChars.slice(0, -1);
            currentCharIndex--;
            setTimeout(eraseChar, erasingSpeed);
        } else {
            // Finished erasing the word, switch to typing the next word
            currentWordIndex = (currentWordIndex + 1) % words.length; // Cycle through words
            currentCharIndex = 0;
            startTyping();
        }
    };

    const startTyping = () => {
        if (currentCharIndex < words[currentWordIndex].length) {
            typedChars += words[currentWordIndex][currentCharIndex]; // Add the next character
            currentCharIndex++;
            setTimeout(startTyping, typingSpeed);
        } else {
            // Finished typing the current word, start erasing
            setTimeout(eraseChar, erasingSpeed);
        }
    };
    // Mouse position for the glassmorphism hover effect
    let m = $state({x:0, y:0});
    function mousemove(event: any) {
      let r = event.currentTarget.getBoundingClientRect();
      m = {x:event.clientX-r.left, y:event.clientY-r.top}
      console.log(m);
    }
    function mouseleave(event: any) {
      m = {x:0, y:0};
      //console.log(m);
    }


    const primaryColorFilter = $derived(getColorFilterValue($myThemeColors.primary));
    const secondaryColorFilter = $derived(getColorFilterValue($myThemeColors.secondary));
    const accentColorFilter = $derived(getColorFilterValue($myThemeColors.accent));

    function getColorFilterValue(hexColor: string) {
        let filterValue = "";
        // Convert hex to RGB
        console.log(hexColor);
        if (hexColor.length === 7) {
            const r = parseInt(hexColor.slice(1, 3), 16);
            const g = parseInt(hexColor.slice(3, 5), 16);
            const b = parseInt(hexColor.slice(5, 7), 16);
            // Calculate filter values
            filterValue = `invert(${r/255*100}%) sepia(${g/255*100}%) saturate(${b/255*100}%) hue-rotate(${Math.atan2(b-r, g-r) * 180 / Math.PI}deg)`;
            console.log("converted filterValue: ", filterValue);
        } else {
           filterValue = hexColor;
           console.log("un-converted filterValue: ", filterValue);
        }
        return filterValue;
    }

    $effect(() => {
        document.documentElement.style.setProperty('--primary-color-filter', getColorFilterValue($myThemeColors.primary));
        document.documentElement.style.setProperty('--secondary-color-filter', getColorFilterValue($myThemeColors.secondary));
    });

    onMount(() => {
        startTyping();
        
    });
    
</script>

<main class="bg-neutral">
    <!-- Hero Section -->
    <div class="hero min-h-auto p-10 from-neutral via-neutral to-accent bg-gradient-to-tl">
        <div class="hero-content flex-col lg:flex-row">
        <img
            alt="Wesley's Professional Headshot"
            src= {myPhoto}
            class="max-w-sm rounded-full shadow-lg" />
        <div>
            <h1 class="m-2 text-4xl font-bold text-neutral-content">My name is Wesley Randolph</h1>
            <p class="m-2 py-4 text-3xl font-bold text-neutral-content">
                I am a 
                <span class="text-3xl font-black from-neutral to-neutral-content bg-gradient-to-r">
                    <span class=" text-5xl font-bold from-accent via-neutral to-primary bg-gradient-to-r bg-clip-text text-transparent">
                        {typedChars}
                    </span>
                </span>
            </p>
            <p class="m-2 pb-4 text-xl font-bold text-neutral-content">
              A man of many talents and yet a Master of none! 🤣
            </p>
            <button class="m-2 btn btn-accent shadow-md">See my work.</button>
            <button class="m-2 btn btn-primary shadow-md">Setup a Meeting!</button>
        </div>
        </div>
    </div>

    <!-- Services Section -->
    <div class="divider divider-accent opacity-50 w-3/4 mx-auto"></div>
    
    <div class="flex w-full p-4 flex-col lg:flex-row from-neutral via-neutral to-accent bg-gradient-to-br on:enter={mousemove} on:leave={mouseleave}">
      {#if m.x > 0 || m.y > 0}
        <div transition:fade  class="blob" style:transform="translate({m.x}px, {m.y}px)"></div>
      {/if}
       {#each services as service}
        <div class="card m-3 p-0 bg-primary bg-opacity-35 rounded-box grid flex-grow place-items-center">
            <div class="card-header">
                  {#if service.icon === 'WebDevIcon'}
                    <WebDevIcon size="144px" />
                  {:else if service.icon === 'IntegrationIcon'}
                    <IntegrationIcon size="196px" />
                  {/if}
            </div>
            <div class="card-body">
                <h3 class="card-title text-3xl font-bold text-neutral-content">{service.title}</h3>
                <div class="divider divider-secondary w-1/2"></div>
                <p class="text-lg text-primary-content">
                    {service.description}
                </p>
            </div>
            <div class="card-footer">
              {#if service.icon === 'DesignIcon'}
                <DesignIcon size="144px" />
              {:else if service.icon === 'TechConsultingIcon'}
                <TechConsultingIcon size="196px" />
              {/if}
        </div>
        </div>
        {/each}
    </div>

    <!-- About Me Section -->

    <div id="aboutMe" class="p-10 bg-secondary bg-opacity-75">
      <div class="divider divider-primary w-3/4 mx-auto"></div>
        <h2 class="text-3xl font-bold text-neutral-content text-center">About Me</h2>
        <p class="text-2xl text-neutral-content text-center">
          I am a Follower of Christ, a Husband to the love of my life, and a Father to two beautiful daughters.
        </p>
    </div>

    <div class="divider-accent"></div>
    <!-- Projects Section -->
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-start mb-10 md:text-end">
            <time class="font-mono italic">1984</time>
            <div class="text-lg font-black">First Macintosh computer</div>
            The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
            personal computer. It played a pivotal role in establishing desktop publishing as a general
            office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
            in a beige case with integrated carrying handle; it came with a keyboard and single-button
            mouse.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-end mb-10">
            <time class="font-mono italic">1998</time>
            <div class="text-lg font-black">iMac</div>
            iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
            been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
            and has evolved through seven distinct forms
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-start mb-10 md:text-end">
            <time class="font-mono italic">2001</time>
            <div class="text-lg font-black">iPod</div>
            The iPod is a discontinued series of portable media players and multi-purpose mobile devices
            designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
            8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
            million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
            over 20 years, the iPod brand is the oldest to be discontinued by Apple
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-end mb-10">
            <time class="font-mono italic">2007</time>
            <div class="text-lg font-black">iPhone</div>
            iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
            operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
            January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
            of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
            accounts for 15.6% of global smartphone market share
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-start mb-10 md:text-end">
            <time class="font-mono italic">2015</time>
            <div class="text-lg font-black">Apple Watch</div>
            The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
            tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
            iOS and other Apple products and services
          </div>
        </li>
      </ul>


</main>


<style>
  .blob {
  filter: blur(40px);
  position: absolute;
  top: -100px;
  left: -100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgb(255, 255, 255, 0.5);
	pointer-events:none;
}

:global(.svg-icon) {
  filter: var(--primary-color-filter);
}
:global(.svg-icon .secondary) {
  filter: var(--secondary-color-filter);
}
</style>



