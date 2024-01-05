import * as server from '../entries/pages/signin/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/signin/+page.server.js";
export const imports = ["_app/immutable/nodes/3.BV7pdGze.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.paqrU1Cq.js"];
export const stylesheets = [];
export const fonts = [];
