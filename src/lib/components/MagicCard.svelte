<script lang="ts">
    //import { animate } from '@motionone/svelte';
    import { onMount } from "svelte";
    import { cn } from "$lib/utils";
  
    const { gradientSize = 200, gradientColor = "#010101", gradientOpacity = 0.8, class: className = "", children } = $props();
  
    let mouseX = $state(-gradientSize);
    let mouseY = $state(-gradientSize);
    let gradSize = $state(gradientSize);
    let gradColor = $state(gradientColor);
  
    $effect(() => {
        bg = `radial-gradient(${gradSize}px circle at ${mouseX}px ${mouseY}px, ${gradColor}, transparent 100%)`;
    });

    let bg = $state<string>('');
  
    function handleMouseMove(e: MouseEvent) {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    }
  
    function handleMouseLeave() {
        mouseX = -gradientSize;
        mouseY = -gradientSize;
    }
  
    onMount(() => {
        mouseX = -gradientSize;
        mouseY = -gradientSize;
    });
</script>
  
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    onmousemove={handleMouseMove}
    onmouseleave={handleMouseLeave}
    class={cn(
        "group relative flex size-full",
        className
    )}
>
    <div class="relative z-10">
        {@render children()}
    </div>
    
    <div
        style:background={bg}
        style:opacity={gradientOpacity}
        class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    ></div>
</div>
  
<style>
    .size-full {
        width: 100%;
        height: 100%;
    }
</style>
  