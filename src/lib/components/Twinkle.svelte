<script lang="ts">
  export let size = "100%";
  export let color = "white";
  export let duration = 1500;
</script>

<div class="twinkle-container" style:width={size} style:height={size}>
  <div 
    class="twinkle" 
    style:background={`radial-gradient(circle, ${color} 0%, transparent 80%)`}
    style:animation-duration="{duration}ms"
  >
    <div class="streaks" style:background-color={color}></div>
    <div class="streaks rotated" style:background-color={color}></div>
  </div>
  <div 
    class="twinkle secondary" 
    style:background={`radial-gradient(circle, ${color} 0%, transparent 80%)`}
    style:animation-duration="{duration}ms"
  >
  </div>
</div>

<style>
  .twinkle-container {
    position: relative;
    overflow: hidden;
    pointer-events: none;
  }

  .twinkle {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: scale(0.2);
    animation: twinkle linear infinite;
  }

  .streaks {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 2px;
    transform-origin: center;
    transform: translate(-50%, -50%) scale(0);
    animation: streakGrow linear infinite;
    animation-duration: inherit;
  }

  .rotated {
    transform: translate(-50%, -50%) rotate(90deg) scale(0);
    animation-name: streakGrowRotated;
  }

  .secondary {
    animation-delay: calc(var(--animation-duration) * 0.5);
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 0;
      transform: scale(0.2) rotate(0deg);
    }
    35%, 65% {
      opacity: 1;
      transform: scale(0.4) rotate(180deg);
    }
    50% {
      opacity: 0.8;
      transform: scale(0.5) rotate(90deg);
    }
  }

  @keyframes streakGrow {
    0%, 100% {
      transform: translate(-50%, -50%) scale(0.2);
    }
    35%, 65% {
      transform: translate(-50%, -50%) scale(1.2);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  @keyframes streakGrowRotated {
    0%, 100% {
      transform: translate(-50%, -50%) rotate(90deg) scale(0.2);
    }
    35%, 65% {
      transform: translate(-50%, -50%) rotate(90deg) scale(1.2);
    }
    50% {
      transform: translate(-50%, -50%) rotate(90deg) scale(1.5);
    }
  }
</style> 