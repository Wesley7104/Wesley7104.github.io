<script lang="ts">
    import { fade } from 'svelte/transition';
    
    // Mouse position for the glassmorphism hover effect
    let m = $state({x:0, y:0});
    function mousemove(event: any) {
      let r = event.currentTarget.getBoundingClientRect();
      m = {x:event.clientX-r.left, y:event.clientY-r.top}
    }
    function mouseleave() {
      m = {x:0, y:0};
    }
</script>

<main class="bg-neutral min-h-screen">
    <div class="hero min-h-screen from-neutral via-neutral to-accent bg-gradient-to-tl" 
         aria-label="404 Page Not Found"
         aria-describedby="404 Page Not Found"
         role="presentation"
         onmousemove={mousemove} 
         onmouseleave={mouseleave}>
        {#if m.x > 0 || m.y > 0}
            <div transition:fade class="blob" style:transform="translate({m.x}px, {m.y}px)"></div>
        {/if}
        
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-8xl font-bold text-primary mb-4">404</h1>
                <h2 class="text-4xl font-bold text-neutral-content mb-8">Page Not Found</h2>
                <p class="text-xl text-neutral-content mb-8">
                    Oops! Looks like you've wandered into uncharted territory.
                </p>
                <a href="/" class="btn btn-primary btn-lg">
                    Take Me Home
                </a>
            </div>
        </div>
    </div>
</main>

<style>
    .blob {
        filter: blur(40px);
        position: absolute;
        top: -100px;
        left: -100px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: rgb(255, 255, 255, 0.5);
        pointer-events: none;
    }
</style> 