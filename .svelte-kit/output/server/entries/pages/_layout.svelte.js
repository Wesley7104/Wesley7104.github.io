import { S as ensure_array_like, T as escape_html, V as bind_props, R as pop, P as push, W as head } from "../../chunks/index2.js";
import { t as themes } from "../../chunks/themes.js";
import { a as attr, s as setThemeColors } from "../../chunks/themeUtils.js";
import "daisyui/src/theming/themes.js";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
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
  $$payload.out += `<div class="navbar bg-primary text-primary-content"><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-neutral-content md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul class="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"><li><a href="#aboutMe">About</a></li> <li><a href="/">Projects</a></li> <li><a href="/">Contact</a></li></ul></div> <a href="/" class="btn btn-ghost hover:bg-neutral hover:text-accent text-xl">RanDev.tech</a></div> <div class="navbar-center hidden md:flex"><ul class="menu menu-horizontal px-1 text-xl"><li><a href="#aboutMe">About</a></li> <li><a href="/">Projects</a></li> <li><a href="/">Contact</a></li></ul></div> <div class="navbar-end">`;
  Theme_select($$payload, {});
  $$payload.out += `<!----></div></div> `;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
