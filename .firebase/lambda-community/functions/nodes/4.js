import * as server from '../entries/pages/signup/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/signup/+page.server.js";
export const imports = ["_app/immutable/nodes/4.do8P9zZc.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.paqrU1Cq.js"];
export const stylesheets = [];
export const fonts = [];
