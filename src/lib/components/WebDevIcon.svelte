<script lang="ts">
  export let size = "100%";
  import { myThemeColors } from "$lib/themeUtils";

  $: primary = $myThemeColors.primary;
  $: secondary = $myThemeColors.secondary;
  $: accent = $myThemeColors.accent;
  $: neutral = $myThemeColors.neutral;

</script>

<svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g class="code-brackets">

    <!-- Left bracket outline -->
    <path 
      class="bracket-outline"
      d="M25,20 L10,50 L25,80"
      fill="none"
      stroke={neutral}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Left Bracket -->
    <path 
      class="bracketLeft"
      d="M25,20 L10,50 L25,80"
      fill="none"
      stroke={accent}
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Right bracket outline -->
    <path 
      class="bracket-outline"
      d="M75,20 L90,50 L75,80"
      fill="none"
      stroke={neutral}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Right Bracket -->
    <path 
      class="bracketRight"
      d="M75,20 L90,50 L75,80"
      fill="none"
      stroke={accent}
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- drop shadow -->
    <text
      class="svelte-text-shadow"
      x="52"
      y="56"
      color={neutral}
      text-anchor="middle"
      font-family="monospace"
      font-size="18"
    >.CODE</text>
    <!-- .svelte text -->
    <text
      class="svelte-text"
      x="50"
      y="54"
      color={secondary}
      text-anchor="middle"
      font-family="monospace"
      font-weight="bold"
      font-size="18"
    >.CODE</text>
  </g>
</svg>

<style>
  .bracketLeft {
    stroke: "";
    stroke-dasharray: 150;
    stroke-dashoffset: 150;
    animation: drawLeft 2s infinite;
  }

  .bracketRight {
    stroke: "";
    stroke-dasharray: 150;
    stroke-dashoffset: 0;
    animation: drawRight 2s infinite;
  }

  .svelte-text {
    fill: currentColor;
    animation: fade 2s infinite;
  }

  .svelte-text-shadow {
    fill: currentColor;
    animation: fade 2s infinite;
  }

  .code-brackets {
    animation: pulse 2s forwards;
  }
  

  @keyframes drawLeft {
    0% {
      stroke-dashoffset: 150;
    }
    50% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 150;
    }
  }

  @keyframes drawRight {
    0% {
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dashoffset: 150;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes fade {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
  }
</style> 