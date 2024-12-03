export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "wesley7104.github.io/_app",
	assets: new Set([".nojekyll","chat-bubbles-animation.svg","clipboard-checkmark.svg","favicon.png","images/MyCartoonPhoto.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bq7dxy55.js","app":"_app/immutable/entry/app.Cg2P4h4R.js","imports":["_app/immutable/entry/start.Bq7dxy55.js","_app/immutable/chunks/entry.Bxsd5-eM.js","_app/immutable/chunks/runtime.DZnCwTKo.js","_app/immutable/chunks/index.CFcQ46yQ.js","_app/immutable/chunks/paths.BpCJn6oE.js","_app/immutable/entry/app.Cg2P4h4R.js","_app/immutable/chunks/runtime.DZnCwTKo.js","_app/immutable/chunks/render.Bo6bw0NU.js","_app/immutable/chunks/disclose-version.v0OtyPfv.js","_app/immutable/chunks/if.aALcoW7P.js","_app/immutable/chunks/index-client.DG9SFutC.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
