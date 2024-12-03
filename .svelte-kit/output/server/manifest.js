export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "wesley7104.github.io/_app",
	assets: new Set([".nojekyll","chat-bubbles-animation.svg","clipboard-checkmark.svg","favicon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CdMLsSBK.js","app":"_app/immutable/entry/app.Bce19fN3.js","imports":["_app/immutable/entry/start.CdMLsSBK.js","_app/immutable/chunks/entry.C8va8Xw5.js","_app/immutable/chunks/runtime.xYmJmHuE.js","_app/immutable/chunks/index.Iz4m9yUR.js","_app/immutable/chunks/paths.CJA7LI29.js","_app/immutable/entry/app.Bce19fN3.js","_app/immutable/chunks/runtime.xYmJmHuE.js","_app/immutable/chunks/render.CMCEtneS.js","_app/immutable/chunks/disclose-version.Ckhth3iH.js","_app/immutable/chunks/if.BTNJ8s4Q.js","_app/immutable/chunks/index-client.DkgOBrhm.js","_app/immutable/chunks/props.CjYUR4wN.js","_app/immutable/chunks/store.Ct6u_tSY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
