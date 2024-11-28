<script lang="ts">
  export let size = "100%";
  import { myThemeColors } from "$lib/themeUtils";

  $: primary = $myThemeColors.primary;
  $: secondary = $myThemeColors.secondary;
  $: accent = $myThemeColors.accent;
  $: neutral = $myThemeColors.neutral;

</script>

<svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Tablet Frame -->
  <rect 
    class="tablet"
    x="5" 
    y="10" 
    width="90" 
    height="70" 
    rx="4"
    fill="none"
    stroke={primary}
    stroke-width="6"
  />
  
  <!-- Drawing Area -->
  <clipPath id="screen-mask">
    <rect x="10" y="15" width="80" height="60" rx="2" />
  </clipPath>
  
  <g clip-path="url(#screen-mask)">
    <!-- Mountains being drawn -->
    <path 
      class="mountain"
      d="M10,75 L30,35 L45,55 L60,25 L75,45 L90,75"
      fill="none"
      stroke={secondary}
      stroke-width="4"
      stroke-linecap="round"
    />
    
    <!-- Clouds -->
    <path 
      class="cloud"
      d="M20,30 C20,30 25,25 30,30 S40,30 40,30"
      fill="none"
      stroke={accent}
      stroke-width="2"
      stroke-linecap="round"
    />
    
    <path 
      class="cloud"
      d="M60,25 C60,25 65,20 70,25 S80,25 80,25"
      fill="none"
      stroke={accent}
      stroke-width="2"
      stroke-linecap="round"
    />
  </g>

  <!-- Home Button -->
  <circle 
    class="button"
    cx="50" 
    cy="80" 
    r="3"
    fill={neutral}
  />
</svg>

<style>
  .tablet {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: draw 2s 2.5s infinite;
  }

  .mountain {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: draw 2s 4.5s infinite;
  }

  .cloud {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    animation: draw 2s 0.5s infinite;
  }

  .button {
    animation: pulse 1s ease-in infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
</style> 