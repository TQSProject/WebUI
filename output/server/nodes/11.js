import * as server from '../entries/pages/signup/_page.server.js';

export const index = 11;
export const component = async () => (await import('../entries/pages/signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/signup/+page.server.js";
export const imports = ["_app/immutable/nodes/11.5b87f9f0.js","_app/immutable/chunks/index.53c7113e.js","_app/immutable/chunks/Wallpaper.280a27d4.js","_app/immutable/chunks/Navbar.6a3b21d8.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.e2c519f7.js"];
export const stylesheets = ["_app/immutable/assets/11.4c00bc98.css","_app/immutable/assets/Wallpaper.8759ab7f.css","_app/immutable/assets/Navbar.22f88d01.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
