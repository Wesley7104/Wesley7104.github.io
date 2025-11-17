<script lang="ts">
    import { scale } from "svelte/transition";
  
    let { 
        zoomFactor = 2.0,
        lensSize = 200,
        isStatic = false,
        position = { x: 200, y: 150 },
        hovering = $bindable(),
        children
    } = $props();
  
    let mousePosition = $state({ x: 100, y: 100 });
    let imageElement: HTMLImageElement | null = $state(null);
    let containerElement: HTMLDivElement | null = $state(null);
  
    $effect(() => {
        // Find the image element within the container reactively
        if (containerElement) {
            imageElement = containerElement.querySelector('img');
        }
    });
  
    function handleMouseMove(e: MouseEvent) {
        if (!imageElement || !containerElement) return;
        
        const imageRect = imageElement.getBoundingClientRect();
        
        // Calculate mouse position relative to the image, not the container
        const x = e.clientX - imageRect.left;
        const y = e.clientY - imageRect.top;
        
        mousePosition = { x, y };
        
        const containerRect = containerElement.getBoundingClientRect();
        position = { x: e.clientX - containerRect.left, y: e.clientY - containerRect.top };
    }
</script>
  
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    bind:this={containerElement}
    class="relative overflow-hidden rounded-2xl z-20 cursor-none flex items-center justify-center"
    onmouseenter={() => {
        hovering = true;
        // Re-find image in case it wasn't ready on mount
        if (!imageElement && containerElement) {
            imageElement = containerElement.querySelector('img');
        }
    }}
    onmouseleave={() => (hovering = false)}
    onmousemove={handleMouseMove}
>
    {@render children()}
    {#if isStatic && hovering && imageElement && containerElement}
        {@const imageRect = imageElement.getBoundingClientRect()}
        {@const containerRect = containerElement.getBoundingClientRect()}
        {@const imageOffsetX = imageRect.left - containerRect.left}
        {@const imageOffsetY = imageRect.top - containerRect.top}
        {@const imageX = position.x - imageOffsetX}
        {@const imageY = position.y - imageOffsetY}
        <div
            in:scale
            out:scale={{ duration: 400 }}
            class="absolute overflow-hidden"
            style="
                left: {imageOffsetX}px;
                top: {imageOffsetY}px;
                width: {imageRect.width}px;
                height: {imageRect.height}px;
                mask-image: radial-gradient(circle {lensSize/2}px at {imageX}px {imageY}px,black 100%, transparent 100%);
                -webkit-mask-image: radial-gradient(circle {lensSize/2}px at {imageX}px {imageY}px,black 100%, transparent 100%);
                transform-origin: {imageX}px {imageY}px;
            "
        >
            <div
                class="absolute inset-0"
                style="transform: scale({zoomFactor}); transform-origin: {imageX}px {imageY}px;"
            >
                {@render children()}
            </div>
        </div>
    {:else if hovering && imageElement && containerElement}
        {@const imageRect = imageElement.getBoundingClientRect()}
        {@const containerRect = containerElement.getBoundingClientRect()}
        {@const imageOffsetX = imageRect.left - containerRect.left}
        {@const imageOffsetY = imageRect.top - containerRect.top}
        <div
            transition:scale={{ duration: 400 }}
            class="absolute overflow-hidden"
            style="
                left: {imageOffsetX}px;
                top: {imageOffsetY}px;
                width: {imageRect.width}px;
                height: {imageRect.height}px;
                mask-image: radial-gradient(circle {lensSize/2}px at {mousePosition.x}px {mousePosition.y}px,black 100%, transparent 100%);
                -webkit-mask-image: radial-gradient(circle {lensSize/2}px at {mousePosition.x}px {mousePosition.y}px,black 100%, transparent 100%);
                transform-origin: {mousePosition.x}px {mousePosition.y}px;
                z-index: 50;
            "
        >
            <div
                class="absolute inset-0"
                style="transform: scale({zoomFactor}); transform-origin: {mousePosition.x}px {mousePosition.y}px;"
            >
                {@render children()}
            </div>
        </div>
    {/if}
</div>
  