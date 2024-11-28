<script lang="ts">
    export let size = "100%";
    import { myThemeColors } from "$lib/themeUtils";
  
    $: primary = $myThemeColors.primary;
    $: secondary = $myThemeColors.secondary;
    $: accent = $myThemeColors.accent;
    $: neutral = $myThemeColors.neutral;
</script>

<svg width={size} height={size} viewBox="0 0 100 100">
    <!-- Socket housing -->
    <rect 
        class="socket"
        x="60" y="30" width="35" height="40" rx="4"
        fill="none" stroke={primary} stroke-width="4"
    />
    
    <!-- Socket holes -->
    <rect 
        class="socket-hole"
        x="70" y="40" width="15" height="6" rx="1"
        fill={neutral} stroke={secondary} stroke-width="2"
    />
    <rect 
        class="socket-hole"
        x="70" y="54" width="15" height="6" rx="1"
        fill={neutral} stroke={secondary} stroke-width="2"
    />
    
    <!-- Plug -->
    <g class="plug">
        <!-- Plug housing -->
        <path 
            d="M5,50 L20,50 L25,40 L45,40 L45,60 L25,60 L20,50"
            fill="none" stroke={accent} stroke-width="4"
            stroke-linejoin="round"
        />
        
        <!-- Plug prongs -->
        <rect 
            class="prong"
            x="47" y="40" width="13" height="6"
            fill={secondary} stroke="" stroke-width="2"
        />
        <rect 
            class="prong"
            x="47" y="54" width="13" height="6"
            fill={secondary} stroke="" stroke-width="2"
        />
        
        <!-- Cable -->
        <path 
            class="cable"
            d="L45,60 L25,60 L20,50"
            fill="none" stroke={accent} stroke-width="4"
            stroke-linecap="round"
        />
        
    </g>
</svg>

<style>
    .socket, .socket-hole {
        stroke-dasharray: 400;
        animation: draw 2s linear forwards;
    }

    .plug {
        animation: plugIn 3s ease-in-out infinite;
    }

    .prong {
        stroke-dasharray: 100;
        animation: draw 1s linear forwards;
    }

    .cable {
        stroke-dasharray: 50;
        animation: draw 2s linear forwards;
    }

    svg:hover .socket,
    svg:hover .socket-hole,
    svg:hover .prong,
    svg:hover .cable {
        animation: draw 2s linear forwards;
    }

    svg:hover .plug {
        animation: plugIn 1.5s ease-in-out infinite;
    }

    @keyframes draw {
        from {
            stroke-dashoffset: 400;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes plugIn {
        0% {
            transform: translateX(-15px);
        }
        50% {
            transform: translateX(15px);
        }
        100% {
            transform: translateX(-15px);
        }
    }
</style> 