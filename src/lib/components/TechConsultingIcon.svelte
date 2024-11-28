<script lang="ts">
    export let size = "100%";
    import { myThemeColors } from "$lib/themeUtils";
  
    $: primary = $myThemeColors.primary;
    $: secondary = $myThemeColors.secondary;
    $: accent = $myThemeColors.accent;
    $: neutral = $myThemeColors.neutral;
</script>

<svg width={size} height={size} viewBox="0 0 100 100">
    <!-- Start Node (Rounded Rectangle) -->
    <rect
        x="35" y="10" 
        width="30" height="15" 
        rx="7.5"
        fill="none" 
        stroke={primary} 
        stroke-width="2"
        class="flowchart-element startNode"
    />

    <!-- Decision Diamond -->
    <path 
        d="M50,35 L65,45 L50,55 L35,45 Z" 
        fill="none" 
        stroke={accent} 
        stroke-width="2"
        class="flowchart-element decisionNode"
    />

    <!-- Process Boxes -->
    <rect 
        x="0" y="65" 
        width="30" height="15" 
        fill="none" 
        stroke={neutral} 
        stroke-width="2"
        class="flowchart-element processNode"
    />
    
    <rect 
        x="70" y="65" 
        width="30" height="15" 
        fill="none" 
        stroke={neutral} 
        stroke-width="2"
        class="flowchart-element processNode"
    />

    <!-- Connecting Lines -->
    <path 
        d="M50,25 L50,35 M35,45 L15,45 L15,65 M65,45 L85,45 L85,65" 
        fill="none" 
        stroke={secondary} 
        stroke-width="2"
        class="connector"
    />
</svg>

<style>
    .flowchart-element {
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
        animation: draw 1.5s forwards;
    }

    .decisionNode {
        animation: draw 2s infinite;
    }

    .processNode {
        animation: draw 4s forwards;
    }

    .connector {
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
        animation: draw 5s infinite;
    }

    @keyframes draw {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes fade-in {
        to {
            opacity: 1;
        }
    }

    /* Hover Effects */
    svg:hover .startNode {
        animation: draw 2s infinite;
    }

    svg:hover .decisionNode {
        animation: draw 3s infinite;
    }

    svg:hover .processNode {
        animation: draw 4s infinite;
    }

    svg:hover .connector {
        animation: draw 4s infinite;
    }
</style>
