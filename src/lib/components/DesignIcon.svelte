<script lang="ts">
    export let size = "100%";
    import { myThemeColors } from "$lib/themeUtils";
  
    $: primary = $myThemeColors.primary;
    $: secondary = $myThemeColors.secondary;
    $: accent = $myThemeColors.accent;
    $: neutral = $myThemeColors.neutral;
</script>
  
<svg width={size} height={size} viewBox="0 0 100 100">
    <rect 
        class="tablet"
        x="5" y="10" width="90" height="70" rx="4"
        fill="none" stroke={primary} stroke-width="6"
    />
    
    <clipPath id="screen-mask">
        <rect x="10" y="15" width="80" height="60" rx="2" />
    </clipPath>
    
    <g clip-path="url(#screen-mask)">
        <path 
            class="mountain"
            d="M10,75 L30,35 L45,55 L60,25 L75,45 L90,75"
            fill="none" stroke={secondary} stroke-width="4"
            stroke-linecap="round"
        />
        
        <path 
            class="cloud"
            d="M20,30 C20,30 25,25 30,30 S40,30 40,30"
            fill="none" stroke={accent} stroke-width="2"
            stroke-linecap="round"
        />
        
        <path 
            class="cloud"
            d="M60,25 C60,25 65,20 70,25 S80,25 80,25"
            fill="none" stroke={accent} stroke-width="2"
            stroke-linecap="round"
        />
    </g>

    <circle 
        class="button"
        cx="50" cy="80" r="3"
        fill={accent}
    />
</svg>
  
<style>
    .tablet {
        stroke-dasharray: 400;
        animation: draw 2s linear forwards;
    }

    .mountain {
        stroke-dasharray: 300;
        animation: draw 2s linear forwards;
    }

    .cloud {
        stroke-dasharray: 50;
        animation: draw 8s linear infinite;
    }

    .button {
        transform-origin: center;
        transform-box: fill-box;
        animation: pulse 2s linear 6s infinite;
    }

     /* Add hover restart behavior */
    svg:hover .tablet {
        animation: draw 2s linear forwards;
    }
    svg:hover .mountain {
        animation: draw 2s linear forwards;
    }

    svg:hover .cloud {
        animation: draw 8s linear forwards;
    }

    svg:hover .button {
        animation: pulse 2s linear infinite;
    }

    @keyframes draw {
        from {
            stroke-dashoffset: 400;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes pulse {
        50% {
            transform: scale(0.5);
        }
    }

    @keyframes redraw {
        from {
            stroke-dashoffset: 400;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    svg:hover .tablet {
        animation-name: redraw;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }

    svg:hover .mountain {
        animation-name: redraw;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }
</style> 