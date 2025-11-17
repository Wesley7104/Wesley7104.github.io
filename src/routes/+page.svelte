<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { base } from '$app/paths';
    import services from '$lib/services.json';
    import timelineItems from '$lib/components/timeline.json';
    import WebDevIcon from '$lib/components/WebDevIcon.svelte';
    import DesignIcon from '$lib/components/DesignIcon.svelte';
    import IntegrationIcon from '$lib/components/IntegrationIcon.svelte';
    import TechConsultingIcon from '$lib/components/TechConsultingIcon.svelte';
    import Meteors from '$lib/components/Meteors.svelte';
    import MagicCard from '$lib/components/MagicCard.svelte';
    import { myThemeColors } from '$lib/themeUtils';
    import Lens from "$lib/components/Lens.svelte";
    import { inview } from 'svelte-inview';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    let hovering = $state(false);
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
let coinFace = $state(`url(${base}/images/MyCartoonPhoto.jpg)`);
let coinBack = $state(`url(${base}/images/RDTcoinBack.jpg)`);
let coinColor = $state('#896c3b'); //#be9d66 Gold
let coinSideColor = $state('#dbaf36'); //#896c3b Darker Gold
let coinSideDarkColor = $state('#977823'); //#120e08 Darkest Gold
let coinLowlightColor = $state('#111'); //#111 Darkest Shadow
let coinSize = $state('250px');
let coinSpeed = $state('5s');
let coinThickness = $state('1rem');

//Timeline color values
$effect(() => {
    colorAccent = $myThemeColors.accent;
    colorNeutralContent = $myThemeColors.neutralContent;
    colorNeutral = $myThemeColors.neutral;
    colorPrimary = $myThemeColors.primary;
    colorSecondary = $myThemeColors.secondary;
});

let themeColors = $myThemeColors;

let colorAccent: string = $state(themeColors.accent);
let colorNeutralContent: string = $state(themeColors.neutralContent);
let colorNeutral: string = $state(themeColors.neutral);
let colorPrimary: string = $state(themeColors.primary);
let colorSecondary: string = $state(themeColors.secondary);

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
    document.documentElement.style.setProperty('--color-accent', colorAccent);
    document.documentElement.style.setProperty('--color-neutral-content', colorNeutralContent);
    document.documentElement.style.setProperty('--color-neutral', colorNeutral);
    document.documentElement.style.setProperty('--color-primary', colorPrimary);
    document.documentElement.style.setProperty('--color-secondary', colorSecondary);
});

let scrollTriggers: any[] = [];

onMount(() => {
    startTyping();
    myThemeColors.set($myThemeColors);
    
    // Animate hero on page load (not scroll)
    animateHeroOnLoad();
    
    // Initialize GSAP scroll animations
    initScrollAnimations();
    
    return () => {
        // Cleanup ScrollTrigger instances
        scrollTriggers.forEach(st => st.kill());
        scrollTriggers = [];
        ScrollTrigger.getAll().forEach(st => st.kill());
    };
});

function animateHeroOnLoad() {
    const heroContent = document.querySelector('.hero-content');
    const coinContainer = document.querySelector('.coin-container');
    
    if (heroContent) {
        const children = Array.from(heroContent.children);
        gsap.fromTo(children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power2.out',
                delay: 0.3
            }
        );
    }
    
    if (coinContainer) {
        gsap.fromTo(coinContainer,
            { opacity: 0, scale: 0.8, rotation: -15 },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1.2,
                ease: 'back.out(1.7)',
                delay: 0.2
            }
        );
    }
}

function initScrollAnimations() {
    // Services section cards - fade in/out on scroll
    const servicesSection = document.querySelector('.flex.w-full.p-4.flex-col');
    if (servicesSection) {
        const serviceCards = servicesSection.querySelectorAll('.card');
        serviceCards.forEach((card, index) => {
            const st = gsap.fromTo(card,
                { opacity: 0, y: 60, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play pause restart pause',
                        markers: false // Set to true for debugging
                    }
                }
            );
            if (st.scrollTrigger) scrollTriggers.push(st.scrollTrigger);
        });
    }
    
    // About Me section
    const aboutMeSection = document.querySelector('#aboutMe');
    if (aboutMeSection) {
        const aboutMeChildren = Array.from(aboutMeSection.children);
        aboutMeChildren.forEach((element, index) => {
            const st = gsap.fromTo(element,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play none none reverse',
                        markers: false
                    }
                }
            );
            if (st.scrollTrigger) scrollTriggers.push(st.scrollTrigger);
        });
    }
    
    // Meteors containers
    const meteorContainers = document.querySelectorAll('.relative.flex.h-fit.w-full');
    meteorContainers.forEach((container) => {
        const st = gsap.fromTo(container,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: container,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse',
                    markers: false
                }
            }
        );
        if (st.scrollTrigger) scrollTriggers.push(st.scrollTrigger);
    });
    
    // Projects Timeline section
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
        const sectionTitle = projectsSection.querySelector('h2');
        const sectionDesc = projectsSection.querySelector('p');
        const timelineItems = projectsSection.querySelectorAll('.timeline-item');
        
        if (sectionTitle) {
            const st = gsap.fromTo(sectionTitle,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionTitle,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play none none reverse',
                        markers: false
                    }
                }
            );
            if (st.scrollTrigger) scrollTriggers.push(st.scrollTrigger);
        }
        
        if (sectionDesc) {
            const st = gsap.fromTo(sectionDesc,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionDesc,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play none none reverse',
                        markers: false
                    }
                }
            );
            if (st.scrollTrigger) scrollTriggers.push(st.scrollTrigger);
        }
        
        timelineItems.forEach((item, index) => {
            const st = gsap.fromTo(item,
                { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play none none reverse',
                        markers: false
                    }
                }
            );
            if (st.scrollTrigger) scrollTriggers.push(st.scrollTrigger);
        });
    }
    
    // Divider elements
    const dividers = document.querySelectorAll('.divider');
    dividers.forEach((divider) => {
        const st = gsap.fromTo(divider,
            { opacity: 0, scaleX: 0 },
            {
                opacity: 1,
                scaleX: 1,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: divider,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse',
                    markers: false
                }
            }
        );
        if (st.scrollTrigger) scrollTriggers.push(st.scrollTrigger);
    });
    
    // Contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        const contactChildren = Array.from(contactSection.children);
        contactChildren.forEach((element, index) => {
            const st = gsap.fromTo(element,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play none none reverse',
                        markers: false
                    }
                }
            );
            if (st.scrollTrigger) scrollTriggers.push(st.scrollTrigger);
        });
    }
}
    
  let activeItems = $state(Array(timelineItems.length).fill(false));

  // Helper function to prepend base path to image URLs
  function getImagePath(imagePath: string): string {
    if (!imagePath || imagePath === '') return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
    if (imagePath.startsWith('/')) return `${base}${imagePath}`;
    return imagePath;
  }
  //$inspect(activeItems);
</script>

<main class="bg-neutral">
    <!-- Hero Section -->
      <div class="hero min-h-auto md:min-h-[70vh] p-10 from-neutral via-neutral to-accent bg-gradient-to-tl">
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
              <h1 class="m-2 text-2xl md:text-4xl font-bold text-neutral-content">My name is Wesley Randolph</h1>
              <p class="m-2 py-4 text-xl md:text-3xl font-bold text-neutral-content">
                  I am a
                  <span class="font-black from-neutral to-neutral-content bg-gradient-to-r">
                      <span class="text-2xl md:text-4xl font-bold from-accent via-neutral to-primary bg-gradient-to-r bg-clip-text text-transparent">
                        {typedChars}
                      </span>
                  </span>
              </p>
              <p class="m-2 pb-4 text-xl font-bold text-neutral-content">
                A man of many talents and yet a Master of none! 🤣
              </p>
              <button class="m-2 btn btn-lg btn-accent shadow-md" onclick={() => { window.location.href = `${base}/#projects`; }}>See my work.</button>
              <button class="m-2 btn btn-lg btn-primary shadow-md" onclick={() => { window.location.href = `${base}/#contact`; }}>Setup a Meeting!</button>
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
     <!-- Meteors Animation -->
    <div class="relative flex h-fit w-full items-center justify-center overflow-hidden">
      <Meteors number={50} />

      <div id="aboutMe" class="flex flex-col p-10 md:p-2 bg-secondary bg-opacity-10">
        
          <div class="divider divider-primary w-3/4 mx-auto {hovering ? 'blur-[2px]' : ''} transition-all duration-300 ease-linear"></div>
            <h2 class="text-5xl font-bold text-neutral-content text-center m-4 {hovering ? 'blur-[2px]' : ''} transition-all duration-300 ease-linear">About Me</h2>
          <p class="text-2xl text-neutral-content text-center {hovering ? 'blur-[2px]' : ''} transition-all duration-300 ease-linear">
            I am a Follower of Christ, a Husband to the love of my life, and a Father to two beautiful daughters.
          </p>
          <!-- <img src="{base}/images/family-with-weapons-2020-1836x788.png" alt="Wesley's Epic Family Pic" class="w-[80%] h-auto justify-center object-cover rounded-md m-4" /> -->

        <div class="divider divider-accent w-3/4 mx-auto {hovering ? 'blur-[2px]' : ''} transition-all duration-300 ease-linear"></div>

        <Lens bind:hovering={hovering}>
          <img 
            src="{base}/images/family-with-weapons-2020-1836x788.jpg" 
            alt="Wesley's Epic Family Pic" 
            class="w-[100%] h-auto md:w-[80%] md:h-[400px] object-contain md:object-cover object-[center_90%] rounded-lg shadow-md m-1 md:m-4 mx-auto"
          >
        </Lens>

        <p class="text-2xl text-neutral-content text-center lg:px-20 {hovering ? 'blur-[2px]' : ''} transition-all duration-300 ease-linear">
          I am a mostly self taught developer who really enjoys researching new technologies and building new things. My wife and I are now both self employed in our own business <a href="https://kickinandscreenin.com" class="bg-neutral/70 text-accent px-2 rounded-md" target="_blank"> Kickin &amp; Screenin </a>, Misty has been since 2014. I on the other hand just recently took the leap and left my full-time career of over 10 years with and International scale company as a Field Service Rep/ Software Developer. We are both excited for the future as we have been constantly adding to new products to our own eCommerce store and exploring our creative side by launching new products in our newest endeavor <a href="https://hunnybabe.com" class="bg-neutral/70 text-accent px-2 rounded-md" target="_blank">Hunny &amp; Babe Company</a>.&nbsp;<br><br>I do have an Associates degree in Computer Information Systems from a two year college, and am only lacking one semester to complete my Bachelors degree. What I found is that I was spending so much time in school and on my full-time job that I couldn't work on projects and the things I wanted to learn...
        </p>
        <div class="flex w-[95%] flex-col h-[100px] lg:flex-row m-4 mx-auto {hovering ? 'blur-[2px]' : ''} transition-all duration-300  ease-linear">
          <MagicCard
            class="flex-col items-center justify-center from-primary via-neutral to-secondary bg-gradient-to-r m-4 rounded-md group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:text-10xl"
            gradientColor={colorAccent || "#010101"}
            gradientSize={200}
          >
              <h3 class="text-5xl text-center font-bold text-neutral-content m-4">
                So I Quit!
              </h3>
          </MagicCard>
        </div>

    <!-- Meteors Animation -->
    <div class="relative flex h-fit w-full items-center justify-center overflow-hidden">
      <Meteors number={10} />

        <p class="text-2xl text-neutral-content text-center lg:px-20 m-4">
          I have honestly never been happier! I am proud to say I have accomplished so much in such a short amount of time that I am now questioning why I didn't take the leap several years ago. Which, was the original plan when we purchased an inflatable rental company named <a href="https://www.justaddkidzrentals.com" class="bg-neutral/70 text-accent px-2 rounded-md" target="_blank">Just Add Kidz</a> from a friend who had been in the business for 15 years. In retrospect what I believe happened was the comfort and financial security of my full-time job at <a href="https://www.mt.com" class="bg-neutral/70 text-accent px-2 rounded-md" target="_blank">Mettler Toledo Inc</a>. made me question why I would leave in the first place. Even knowing this, it wasn't what I wanted to do with my life, I just felt unfulfilled knowing that I wanted to work for our businesses full-time.&nbsp;
        </p>
        </div>
        <p class="text-2xl text-neutral-content text-center lg:px-20">
          At this point my wife pointed out the fact that over the 6 years we have owned and operated <a href="https://kickinandscreenin.com" class="bg-neutral/70 text-accent px-2 rounded-md" target="_blank">Kickin &amp; Screenin</a>&nbsp;as a hobby, instead of a business, we had set ourselves up for me to make my exit. And that's what I did. I quit my full-time position at the scale company and we got to work!
        </p>
      </div>
      
    </div>

    <div class="divider-accent w-3/4 mx-auto"></div>

    <!-- Projects Timeline Section -->
    <div id="projects" class="p-10 bg-primary/25 bg-opacity-50">
        <h2 class="text-4xl font-bold text-neutral-content text-center mb-8">My Development Journey</h2>
        <p class="text-xl text-neutral-content text-center mb-10">
            Building things while working a full-time job along with owning and operating two small businesses has caused my development progression to be very slow and methodical. The one thing this has allowed me to do is learn many different technologies and how to integrate pretty much anything.
        </p>
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {#each timelineItems as item, i}
            <li 
              use:inview={{ threshold: 0.5, rootMargin: "-100px" }}
              oninview_enter={() => {
                activeItems[i] = true;
              }}
              oninview_leave={() => {
                activeItems[i] = false;
              }}
              class="timeline-item {activeItems[i] ? 'active' : ''}"
              > 
            
              <div class="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
              </div>
              {#if i % 2 === 0}
                <div class="timeline-start md:text-end mb-10">
                    <time class="font-mono italic">{item.date}</time>
                    <div class="text-lg font-black">{item.title}</div>
                  <div class="text-base">{item.description}</div>
                  {#if item.link && item.link !== ''}
                    <a href="{item.link}" class="text-blue-500 m-2" target="_blank">View Project - {item.link}</a>
                  {/if}
                  {#if item.image && item.image !== ''}
                    <img src="{getImagePath(item.image)}" alt="{item.title}" class="w-full h-auto rounded-lg shadow-lg mt-2" />
                  {/if}
                </div>
              {:else}
                <div class="timeline-end md:text-start mb-10">
                    <time class="font-mono italic">{item.date}</time>
                    <div class="text-lg font-black">{item.title}</div>
                  <div class="text-base">{item.description}</div>
                  {#if item.link && item.link !== ''}
                    <a href="{item.link}" class="text-blue-500 m-2" target="_blank">View Project - {item.link}</a>
                  {/if}
                  {#if item.image && item.image !== ''}
                    <img src="{getImagePath(item.image)}" alt="{item.title}" class="w-full h-auto rounded-lg shadow-lg mt-2" />
                  {/if}
                </div>
              {/if}
              <hr />
            </li>
          {/each}
        </ul>
    </div>

    <!-- Contact Section -->
    <div class="divider divider-accent opacity-50 w-3/4 mx-auto"></div>
    
    <div id="contact" class="p-10 bg-secondary bg-opacity-10">
        <h2 class="text-4xl font-bold text-neutral-content text-center mb-8">Get In Touch</h2>
        <p class="text-xl text-neutral-content text-center mb-10">
            I'd love to hear from you! Feel free to reach out via phone or email, let's talk about your next project or idea.
        </p>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div class="flex flex-col items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-accent">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+12568726439" class="text-2xl font-semibold text-neutral-content hover:text-accent transition-colors">
                    (256)872-6439
                </a>
            </div>
            
            <div class="flex flex-col items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-accent">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:wesley@randev.tech" class="text-2xl font-semibold text-neutral-content hover:text-accent transition-colors">
                    wesley@randev.tech
                </a>
            </div>
        </div>
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

  --color-accent: #977b4a;
  --color-neutral-content: #111;
  --color-neutral: #dbaf36;
  --color-primary: #977b4a;
  --color-secondary: #dbaf36;
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

/* Timeline animation Style */
.timeline-middle svg {
  color: var(--color-neutral-content);
  transition: all 0.6s ease;
}

.timeline li.active .timeline-middle svg {
  color: var(--color-secondary);
}

.timeline hr {
  transition: background-size 0.6s ease;
  background: linear-gradient(to right, var(--color-accent) 50%, var(--color-neutral-content) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
}

.timeline li {
  opacity: 0.2;
  transition: opacity 0.6s ease;
}

.timeline li.active {
  opacity: 1;
}

.timeline li.active hr {
  background-position: left bottom;
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