import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CNMuXBqM.js","_app/immutable/chunks/disclose-version.v0OtyPfv.js","_app/immutable/chunks/runtime.DZnCwTKo.js","_app/immutable/chunks/render.Bo6bw0NU.js","_app/immutable/chunks/themeUtils.D5CD13M9.js","_app/immutable/chunks/themes.W-2tcmvw.js","_app/immutable/chunks/index.CFcQ46yQ.js","_app/immutable/chunks/index-client.DG9SFutC.js","_app/immutable/chunks/paths.CMzK0E7F.js","_app/immutable/chunks/legacy.Bv2jVEOJ.js","_app/immutable/chunks/if.aALcoW7P.js"];
export const stylesheets = ["_app/immutable/assets/0.Dl0LKlRf.css"];
export const fonts = [];
