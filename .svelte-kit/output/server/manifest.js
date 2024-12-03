export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","chat-bubbles-animation.svg","clipboard-checkmark.svg","favicon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B6Ypq7C_.js","app":"_app/immutable/entry/app.CNXpAxnG.js","imports":["_app/immutable/entry/start.B6Ypq7C_.js","_app/immutable/chunks/entry.DTPei8fs.js","_app/immutable/chunks/runtime.DC-W0gab.js","_app/immutable/chunks/index.DaxGK8jJ.js","_app/immutable/entry/app.CNXpAxnG.js","_app/immutable/chunks/runtime.DC-W0gab.js","_app/immutable/chunks/render.BNLsGbc-.js","_app/immutable/chunks/disclose-version.LF6uEfVi.js","_app/immutable/chunks/if.C3oJOqFo.js","_app/immutable/chunks/proxy.DVFOf8vq.js","_app/immutable/chunks/props.B3I_BOC7.js","_app/immutable/chunks/store.PL20Q_Fj.js","_app/immutable/chunks/index-client.Bwolq2BZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/SVGtesting",
				pattern: /^\/SVGtesting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[...404]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"404","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
