import { T as escape_html } from "./index2.js";
import themeColors from "daisyui/src/theming/themes.js";
import { w as writable } from "./index.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const myThemeColors = writable({
  theme: "",
  primary: "",
  secondary: "",
  accent: "",
  neutral: "",
  success: "",
  warning: "",
  error: "",
  info: ""
});
function setThemeColors(theme) {
  let newTheme = theme;
  let themeColorValues = themeColors[newTheme];
  if (themeColorValues) {
    const updatedThemeColors = {
      theme,
      primary: themeColorValues.primary || "",
      secondary: themeColorValues.secondary || "",
      accent: themeColorValues.accent || "",
      neutral: themeColorValues.neutral || null,
      success: themeColorValues.success || null,
      warning: themeColorValues.warning || null,
      error: themeColorValues.error || null,
      info: themeColorValues.info || null
    };
    myThemeColors.set(updatedThemeColors);
  } else {
    console.error("Invalid theme colors");
  }
}
export {
  attr as a,
  myThemeColors as m,
  setThemeColors as s
};
