import * as server from '../entries/pages/login/_page.server.js';

export const index = 9;
export const component = async () => (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.js";
export const imports = ["_app/immutable/nodes/9.6949e0bf.js","_app/immutable/chunks/index.53c7113e.js"];
export const stylesheets = [];
export const fonts = [];
