import { S as fallback, T as escape_html, V as slot, W as bind_props, X as spread_props, Y as sanitize_props, Z as ensure_array_like, R as pop, P as push, _ as head, $ as stringify } from "../../chunks/index2.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr, s as setThemeColors } from "../../chunks/themeUtils.js";
import { t as themes } from "../../chunks/themes.js";
import "daisyui/src/theming/themes.js";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function IconBase($$payload, $$props) {
  let title = fallback($$props["title"], null);
  let viewBox = $$props["viewBox"];
  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg"${attr("viewBox", viewBox)} class="svelte-c8tyih">`;
  if (title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title>${escape_html(title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></svg>`;
  bind_props($$props, { title, viewBox });
}
function FaGithubSquare($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  IconBase($$payload, spread_props([
    { viewBox: "0 0 448 512" },
    $$sanitized_props,
    {
      children: ($$payload2) => {
        $$payload2.out += `<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Theme_select($$payload, $$props) {
  push();
  let current_theme = "";
  function set_theme(event) {
    const select = event.target;
    const theme = select.value;
    if (themes.includes(theme)) {
      const one_year = 60 * 60 * 24 * 365;
      window.localStorage.setItem("theme", theme);
      document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Lax`;
      document.documentElement.setAttribute("data-theme", theme);
      current_theme = theme;
      setThemeColors(theme);
    }
  }
  const each_array = ensure_array_like(themes);
  $$payload.out += `<div class="flex row-auto"><label for="theme" class="label">Theme:</label> <select data-choose-theme="" class="select select-primary bg-primary-content hover:bg-neutral hover:text-neutral-content text-primary capitalize"><option value=""${attr("disabled", current_theme !== "", true)}>Choose a theme</option><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let theme = each_array[$$index];
    $$payload.out += `<option${attr("value", theme)} class="capitalize">${escape_html(theme)}</option>`;
  }
  $$payload.out += `<!--]--></select></div>`;
  bind_props($$props, { set_theme });
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out += `${html(`
        <style>
            :root {
                --primary-color: {myThemeColors.primary};
                --secondary-color: {myThemeColors.secondary};
                --accent-color: {myThemeColors.accent};
            }
        </style>
    `)}`;
  });
  $$payload.out += `<div class="navbar bg-primary text-primary-content"><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-neutral-content md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul class="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"><li><a${attr("href", `${stringify(base)}/#aboutMe`)}>About</a></li> <li><a${attr("href", `${stringify(base)}/`)}>Projects</a></li> <li><a${attr("href", `${stringify(base)}/`)}>Contact</a></li></ul></div> <a${attr("href", `${stringify(base)}/`)} class="btn btn-ghost hover:bg-neutral hover:text-accent text-xl">RanDev.tech</a></div> <div class="navbar-center hidden md:flex"><ul class="menu menu-horizontal px-1 text-xl"><li><a${attr("href", `${stringify(base)}/#aboutMe`)}>About</a></li> <li><a${attr("href", `${stringify(base)}/`)}>Projects</a></li> <li><a${attr("href", `${stringify(base)}/`)}>Contact</a></li></ul></div> <div class="navbar-end">`;
  Theme_select($$payload, {});
  $$payload.out += `<!----></div></div> `;
  children($$payload);
  $$payload.out += `<!----> <footer class="footer footer-center p-4 bg-primary text-primary-content"><div class="flex flex-row items-center justify-center"><a href="https://github.com/wesley7104" class="btn btn-square btn-ghost hover:bg-neutral hover:text-accent m-2">`;
  FaGithubSquare($$payload, {});
  $$payload.out += `<!----></a> <p>Copyright © 2024 - All right reserved by RanDev.tech</p></div></footer>`;
  pop();
}
export {
  _layout as default
};
