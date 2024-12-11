<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { base } from '$app/paths';
    import services from '$lib/services.json';
    import { myThemeColors } from '$lib/themeUtils';
    import WebDevIcon from '$lib/components/WebDevIcon.svelte';
    import DesignIcon from '$lib/components/DesignIcon.svelte';
    import IntegrationIcon from '$lib/components/IntegrationIcon.svelte';
    import TechConsultingIcon from '$lib/components/TechConsultingIcon.svelte';
    import Twinkle from '$lib/components/Twinkle.svelte';
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

/* 
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
            //console.log("converted filterValue: ", filterValue);
        } else {
           filterValue = hexColor;
           //console.log("un-converted filterValue: ", filterValue);
        }
        return filterValue;
    } */

    /* $effect(() => {
        document.documentElement.style.setProperty('--primary-color-filter', getColorFilterValue($myThemeColors.primary));
        document.documentElement.style.setProperty('--secondary-color-filter', getColorFilterValue($myThemeColors.secondary));
    });
 */
// Add these state variables
let coinFace = $state(`url(${base}/images/MyCartoonPhoto.png)`);
let coinBack = $state(`url(${base}/images/RDTcoinBack.png)`);
let coinColor = $state('#896c3b'); //#be9d66 Gold
let coinSideColor = $state('#dbaf36'); //#896c3b Darker Gold
let coinSideDarkColor = $state('#977823'); //#120e08 Darkest Gold
let coinLowlightColor = $state('#111'); //#111 Darkest Shadow
let coinSize = $state('250px');
let coinSpeed = $state('5s');
let coinThickness = $state('1rem');

// You can update these values dynamically as needed
$effect(() => {
    document.documentElement.style.setProperty('--coin-face', coinFace);
    document.documentElement.style.setProperty('--coin-back', coinBack);
    document.documentElement.style.setProperty('--face', coinColor);
    document.documentElement.style.setProperty('--side', coinSideColor);
    document.documentElement.style.setProperty('--side-dark', coinSideDarkColor);
    document.documentElement.style.setProperty('--lowlight', coinLowlightColor);
    document.documentElement.style.setProperty('--coin-size', coinSize);
    document.documentElement.style.setProperty('--coin-speed', coinSpeed);
    document.documentElement.style.setProperty('--coin-thickness', coinThickness);
});


    onMount(() => {
        startTyping();
        
    });
    
</script>

<main class="bg-neutral">
    <!-- Hero Section -->
    <div class="hero min-h-auto p-10 from-neutral via-neutral to-accent bg-gradient-to-tl">
        <div class="hero-content flex-col lg:flex-row">
        <div class="relative coin-container">
            <div class="coin">
                <!-- <div class="side front">
                    <img
                        alt="Wesley's Professional Headshot"
                        src="{base}/images/MyCartoonPhoto.png"
                        class="w-full h-full object-cover" />
                </div>
                <div class="side edge"></div>
                <div class="side back">
                    <img
                        alt="Wesley's Professional Headshot"
                        src="{base}/images/MyCartoonPhoto.png"
                        class="w-full h-full object-cover" />
                </div> -->
            </div>
            <!-- <div class="absolute top-[5%] right-[5%] w-[40px] h-[40px]">
                <Twinkle size="100%" color={$myThemeColors.secondary} duration={1200} />
            </div> -->
        </div>
        <div>
            <h1 class="m-2 text-4xl font-bold text-neutral-content">My name is Wesley Randolph</h1>
            <p class="m-2 py-4 text-3xl font-bold text-neutral-content">
                I am a
                <span class="text-3xl font-black from-neutral to-neutral-content bg-gradient-to-r">
                    <span class="text-5xl font-bold from-accent via-neutral to-primary bg-gradient-to-r bg-clip-text text-transparent">
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
                    <WebDevIcon size="196px" />
                  {:else if service.icon === 'IntegrationIcon'}
                    <IntegrationIcon size="196px" />
                  {/if}
            </div>
            <div class="card-body">
                <h3 class="card-title text-3xl font-bold text-neutral-content">{service.title}<Twinkle size="100%" color="rgba(255,255,255,0.8)" duration={1200} /></h3>
                
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

    <div id="aboutMe" class="p-10 bg-secondary bg-opacity-10">
      <div class="divider divider-primary w-3/4 mx-auto"></div>
        <h2 class="text-5xl font-bold text-neutral-content text-center m-4">About Me</h2>
        <p class="text-2xl text-neutral-content text-center">
          I am a Follower of Christ, a Husband to the love of my life, and a Father to two beautiful daughters.
        </p>

        <div class="divider divider-accent w-3/4 mx-auto"></div>

        <p class="text-2xl text-neutral-content text-center lg:px-20">
          I am a mostly self taught developer who really enjoys researching new technologies and building new things. My wife and I are now both self employed in our own business <a href="https://kickinandscreenin.com" class="bg-neutral/70 text-accent px-2 rounded-md" target="_blank"> Kickin &amp; Screenin </a>, Misty has been since 2014. I on the other hand just recently took the leap and left my full-time career of over 10 years with and International scale company as a Field Service Rep/ Software Developer. We are both excited for the future as we have been constantly adding to new products to our own eCommerce store and exploring our creative side by launching new products in our newest endeavor <a href="https://hunnybabe.com" class="bg-neutral/70 text-accent px-2 rounded-md" target="_blank">Hunny &amp; Babe Company</a>.&nbsp;<br><br>I do have an Associates degree in Computer Information Systems from a two year college, and am only lacking one semester to complete my Bachelors degree. What I found is that I was spending so much time in school and on my full-time job that I couldn't work on projects and the things I wanted to learn...
        </p>
        <span class="flex justify-center items-center from-primary via-neutral to-accent bg-gradient-to-r m-4 rounded-md">
        <h3 class="text-5xl text-center font-bold text-neutral-content m-4">
          So I Quit!
        </h3>
      </span>
        <p class="text-2xl text-neutral-content text-center lg:px-20">
          I have honestly never been happier! I am proud to say I have accomplished so much in such a short amount of time that I am now questioning why I didn't take the leap several years ago. Which, was the original plan when we purchased an inflatable rental company named <a href="https://www.justaddkidzrentals.com" class="bg-neutral/70 text-accent px-2 rounded-md" target="_blank">Just Add Kidz</a> from a friend who had been in the business for 15 years. In retrospect what I believe happened was the comfort and financial security of my full-time job at <a href="https://www.mt.com" class="bg-neutral/70 text-accent px-2 rounded-md" target="_blank">Mettler Toledo Inc</a>. made me question why I would leave in the first place. Even knowing this, it wasn't what I wanted to do with my life, I just felt unfulfilled knowing that I wanted to work for our businesses full-time.&nbsp;
        </p>
        <p class="text-2xl text-neutral-content text-center lg:px-20">
          At this point my wife pointed out the fact that over the 6 years we have owned and operated <a href="https://kickinandscreenin.com" class="bg-neutral/70 text-accent px-2 rounded-md" target="_blank">Kickin &amp; Screenin</a>&nbsp;as a hobby, instead of a business, we had set ourselves up for me to make my exit. And that's what I did. I quit my full-time position at the scale company and we got to work!
        </p>
      </div>

    <div class="divider-accent w-3/4 mx-auto"></div>

    <!-- Projects Section -->
    <div id="projects" class="p-10 bg-primary/25 bg-opacity-50">
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
    </div>

</main>


<style>
    :root {
  --face: #977b4a;
  --lowlight: #111;
  --side: #dbaf36;
  --side-dark: #977823;
  --coin-size: 1rem;
  --coin-face: none;
  --coin-back: none;
}
/*
  everything above is positioning and variables.
  this is where the real fun begins...
*/

.coin {
  height: var(--coin-size);
  width: var(--coin-size);
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 15px 15px var(--lowlight));
}

.coin::before {
  content: '';
  display: block;
  position: relative;
  height: var(--coin-size);
  width: var(--coin-size);
  border-radius: 50%;
  background-color: var(--face);
  animation: spin var(--coin-speed) linear infinite;
  background-size: 100% 100%;
  background-position: center;
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

/* animation definitions */

.coin {
  /* ... existing styles ... */
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes spin {
  /* Front face of coin (0%) */

  0% {
    width: 0.2rem; /* This controls how "thin" the coin looks when viewing the edge */
    /* Multiple box shadows create the "ridged" edge effect */
    box-shadow:
      0.05rem 0 var(--side),
      0.1rem 0 var(--side),
      0.15rem 0 var(--side),
      0.2rem 0 var(--side),
      0.25rem 0 var(--side),
      0.3rem 0 var(--side),
      0.35rem 0 var(--side),
      0.4rem 0 var(--side),
      0.45rem 0 0 var(--side),
      0.5rem 0 0 var(--side),
      0.55rem 0 0 var(--side),
      0.6rem 0 0 var(--side),
      0.65rem 0 0 var(--side),
      0.7rem 0 0 var(--side),
      0.75rem 0 0 var(--side),
      0.8rem 0 0 var(--side),
      0.85rem 0 0 var(--side),
      0.9rem 0 0 var(--side),
      0.95rem 0 0 var(--side),
      1rem 0 0 var(--side),
      var(--coin-thickness) 0 0 var(--side);
      transform: translateX(calc(var(--coin-thickness) * -0.5));
      background-color: var(--side);
      background-image: var(--coin-face);
  }
  
  25% {
    width: var(--coin-size); /* Full width */
    box-shadow: 0 0 0 var(--lowlight); /* No side shadow */
    background-color: var(--face);
    background-image: var(--coin-face);
  }

  49.999% {
    width: 0.2rem; /* This controls how "thin" the coin looks when viewing the edge */
    /* Multiple box shadows create the "ridged" edge effect */
    box-shadow:
      0.05rem 0 var(--side-dark),
      0.1rem 0 var(--side-dark),
      0.15rem 0 var(--side-dark),
      0.2rem 0 var(--side-dark),
      0.25rem 0 var(--side-dark),
      0.3rem 0 var(--side-dark),
      0.35rem 0 var(--side-dark),
      0.4rem 0 var(--side-dark),
      0.45rem 0 0 var(--side-dark),
      0.5rem 0 0 var(--side-dark),
      0.55rem 0 0 var(--side-dark),
      0.6rem 0 0 var(--side-dark),
      0.65rem 0 0 var(--side-dark),
      0.7rem 0 0 var(--side-dark),
      0.75rem 0 0 var(--side-dark),
      0.8rem 0 0 var(--side-dark),
      0.85rem 0 0 var(--side-dark),
      0.9rem 0 0 var(--side-dark),
      0.95rem 0 0 var(--side-dark),
      1rem 0 0 var(--side-dark),
      var(--coin-thickness) 0 0 var(--side-dark);
      transform: translateX(calc(var(--coin-thickness) * -0.5));
      background-color: var(--lowlight);
      background-image: var(--coin-face);
  }
  
  50% {
    width: 0.2rem; /* This controls how "thin" the coin looks when viewing the edge */
    /* Multiple box shadows create the "ridged" edge effect */
    box-shadow:
      -0.05rem 0 0 var(--side-dark),
      -0.1rem 0 0 var(--side-dark),
      -0.15rem 0 0 var(--side-dark),
      -0.2rem 0 0 var(--side-dark),
      -0.25rem 0 0 var(--side-dark),
      -0.3rem 0 0 var(--side-dark),
      -0.35rem 0 0 var(--side-dark),
      -0.4rem 0 0 var(--side-dark),
      -0.45rem 0 0 var(--side-dark),
      -0.5rem 0 0 var(--side-dark),
      -0.55rem 0 0 var(--side-dark),
      -0.6rem 0 0 var(--side-dark),
      -0.65rem 0 0 var(--side-dark),
      -0.7rem 0 0 var(--side-dark),
      -0.75rem 0 0 var(--side-dark),
      -0.8rem 0 0 var(--side-dark),
      -0.85rem 0 0 var(--side-dark),
      -0.9rem 0 0 var(--side-dark),
      -0.95rem 0 0 var(--side-dark),
      -1rem 0 0 var(--side-dark),
      calc(var(--coin-thickness) * -1) 0 0 var(--side-dark);
      transform: translateX(calc(var(--coin-thickness) * 0.5));
    background-color: var(--lowlight);
    background-image: var(--coin-back);
  }
  
  /* Back to front face (100%) */
  75% {
    width: var(--coin-size);
    box-shadow: 0 0 0 var(--lowlight);
    background-color: var(--face);
    background-image: var(--coin-back);
  }


 100% {
  width: 0.2rem; /* This controls how "thin" the coin looks when viewing the edge */
    /* Multiple box shadows create the "ridged" edge effect */
    box-shadow:
      -0.05rem 0 0 var(--side),
      -0.1rem 0 0 var(--side),
      -0.15rem 0 0 var(--side),
      -0.2rem 0 0 var(--side),
      -0.25rem 0 0 var(--side),
      -0.3rem 0 0 var(--side),
      -0.35rem 0 0 var(--side),
      -0.4rem 0 0 var(--side),
      -0.45rem 0 0 var(--side),
      -0.5rem 0 0 var(--side),
      -0.55rem 0 0 var(--side),
      -0.6rem 0 0 var(--side),
      -0.65rem 0 0 var(--side),
      -0.7rem 0 0 var(--side),
      -0.75rem 0 0 var(--side),
      -0.8rem 0 0 var(--side),
      -0.85rem 0 0 var(--side),
      -0.9rem 0 0 var(--side),
      -0.95rem 0 0 var(--side),
      -1rem 0 0 var(--side),
      calc(var(--coin-thickness) * -1) 0 0 var(--side);
      transform: translateX(calc(var(--coin-thickness) * 0.5));
    background-color: var(--side);
    background-image: var(--coin-back);
 }
}

/* pause animation on hover */
.coin:hover::before {
  animation-play-state: paused;
}

</style>


<!-- Almost working version, but the animation is not smooth. Looks like it is flopping back and forth. -->
<!-- @keyframes spin {
  /* Front face of coin (0%) */
  0% {
    width: 0.2rem; /* This controls how "thin" the coin looks when viewing the edge */
    /* Multiple box shadows create the "ridged" edge effect */
    box-shadow:
      0.05rem 0 var(--side),
      0.1rem 0 var(--side),
      0.15rem 0 var(--side),
      0.2rem 0 var(--side),
      0.25rem 0 var(--side),
      0.3rem 0 var(--side),
      0.35rem 0 var(--side),
      0.4rem 0 var(--side),
      0.45rem 0 0 var(--side),
      0.5rem 0 0 var(--side),
      0.55rem 0 0 var(--side),
      0.6rem 0 0 var(--side),
      0.65rem 0 0 var(--side),
      0.7rem 0 0 var(--side),
      0.75rem 0 0 var(--side),
      0.8rem 0 0 var(--side),
      0.85rem 0 0 var(--side),
      0.9rem 0 0 var(--side),
      0.95rem 0 0 var(--side),
      1rem 0 0 var(--side),
      var(--coin-thickness) 0 0 var(--side);
      transform: translateX(calc(var(--coin-thickness) * -0.5));
      background-color: var(--lowlight);
      background-image: var(--coin-face);
  }
  
  49.999% {
    width: var(--coin-size); /* Full width */
    box-shadow: 0 0 0 var(--lowlight); /* No side shadow */
    background-color: var(--face);
    background-image: var(--coin-face);
  }
  
  50.001% {
    width: 0.2rem; /* This controls how "thin" the coin looks when viewing the edge */
    /* Multiple box shadows create the "ridged" edge effect */
    box-shadow:
      -0.05rem 0 0 var(--side),
      -0.1rem 0 0 var(--side),
      -0.15rem 0 0 var(--side),
      -0.2rem 0 0 var(--side),
      -0.25rem 0 0 var(--side),
      -0.3rem 0 0 var(--side),
      -0.35rem 0 0 var(--side),
      -0.4rem 0 0 var(--side),
      -0.45rem 0 0 var(--side),
      -0.5rem 0 0 var(--side),
      -0.55rem 0 0 var(--side),
      -0.6rem 0 0 var(--side),
      -0.65rem 0 0 var(--side),
      -0.7rem 0 0 var(--side),
      -0.75rem 0 0 var(--side),
      -0.8rem 0 0 var(--side),
      -0.85rem 0 0 var(--side),
      -0.9rem 0 0 var(--side),
      -0.95rem 0 0 var(--side),
      -1rem 0 0 var(--side),
      calc(var(--coin-thickness) * -1) 0 0 var(--side);
      transform: translateX(calc(var(--coin-thickness) * 0.5));
    background-color: var(--lowlight);
    background-image: var(--coin-back);
  }
  
  /* Back to front face (100%) */
  100% {
    width: var(--coin-size);
    box-shadow: 0 0 0 var(--lowlight);
    background-color: var(--face);
    background-image: var(--coin-back);
  }
} -->