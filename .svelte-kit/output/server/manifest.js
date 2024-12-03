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
		client: {"start":"_app/immutable/entry/start.z4faC9FZ.js","app":"_app/immutable/entry/app.BJ7MA0ww.js","imports":["_app/immutable/entry/start.z4faC9FZ.js","_app/immutable/chunks/entry.C1ZKLSG5.js","_app/immutable/chunks/runtime.DZnCwTKo.js","_app/immutable/chunks/index.CFcQ46yQ.js","_app/immutable/chunks/paths.CMzK0E7F.js","_app/immutable/entry/app.BJ7MA0ww.js","_app/immutable/chunks/runtime.DZnCwTKo.js","_app/immutable/chunks/render.Bo6bw0NU.js","_app/immutable/chunks/disclose-version.v0OtyPfv.js","_app/immutable/chunks/if.aALcoW7P.js","_app/immutable/chunks/index-client.DG9SFutC.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
