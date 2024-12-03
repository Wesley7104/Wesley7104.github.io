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
		client: {"start":"_app/immutable/entry/start.XVNFymbv.js","app":"_app/immutable/entry/app.B7j0N1dy.js","imports":["_app/immutable/entry/start.XVNFymbv.js","_app/immutable/chunks/entry.l1iQSmb3.js","_app/immutable/chunks/runtime.DLWVGSGY.js","_app/immutable/chunks/index.B8y-Dni1.js","_app/immutable/entry/app.B7j0N1dy.js","_app/immutable/chunks/runtime.DLWVGSGY.js","_app/immutable/chunks/render.2Pw97x9W.js","_app/immutable/chunks/disclose-version.d1ELcqIQ.js","_app/immutable/chunks/if.gUaNAAbk.js","_app/immutable/chunks/index-client.4IiP3a9h.js","_app/immutable/chunks/props.CPse87Go.js","_app/immutable/chunks/store.CHDFash4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
