import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.jGqqJy2o.js","_app/immutable/chunks/disclose-version.Ckhth3iH.js","_app/immutable/chunks/runtime.xYmJmHuE.js","_app/immutable/chunks/render.CMCEtneS.js","_app/immutable/chunks/themeUtils.k-mJatQ9.js","_app/immutable/chunks/themes.W-2tcmvw.js","_app/immutable/chunks/index.Iz4m9yUR.js","_app/immutable/chunks/index-client.DkgOBrhm.js","_app/immutable/chunks/paths.Ces52X92.js"];
export const stylesheets = ["_app/immutable/assets/0.Hk-k_pQ4.css"];
export const fonts = [];
