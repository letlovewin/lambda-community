import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.3qwQD3BJ.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.paqrU1Cq.js"];
export const stylesheets = [];
export const fonts = [];
