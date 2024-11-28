<script lang="ts">
  export let size = "100%";
</script>

<svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g class="code-brackets">
    <!-- Left Bracket -->
    <path 
      class="bracket left"
      d="M25,20 L10,50 L25,80"
      fill="none"
      stroke="currentColor"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Right Bracket -->
    <path 
      class="bracket right"
      d="M75,20 L90,50 L75,80"
      fill="none"
      stroke="currentColor"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- .svelte text -->
    <text
      class="svelte-text"
      x="50"
      y="54"
      text-anchor="middle"
      font-family="monospace"
      font-weight="bold"
      font-size="14"
    >.svelte</text>
  </g>
</svg>

<style>
  .bracket {
    stroke: currentColor;
    stroke-dasharray: 150;
    stroke-dashoffset: 150;
    animation: draw 2s infinite;
  }

  .svelte-text {
    fill: currentColor;
    animation: fade 2s infinite;
  }

  .code-brackets {
    animation: pulse 2s infinite;
  }
  
  .right {
    animation-delay: 0.5s;
  }

  @keyframes draw {
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