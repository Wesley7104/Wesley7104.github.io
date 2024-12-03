function _page($$payload) {
  $$payload.out += `<main class="bg-neutral min-h-screen"><div class="hero min-h-screen from-neutral via-neutral to-accent bg-gradient-to-tl" aria-label="404 Page Not Found" aria-describedby="404 Page Not Found" role="presentation">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="hero-content text-center"><div class="max-w-md"><h1 class="text-8xl font-bold text-primary mb-4">404</h1> <h2 class="text-4xl font-bold text-neutral-content mb-8">Page Not Found</h2> <p class="text-xl text-neutral-content mb-8">Oops! Looks like you've wandered into uncharted territory.</p> <a href="/" class="btn btn-primary btn-lg">Take Me Home</a></div></div></div></main>`;
}
export {
  _page as default
};
