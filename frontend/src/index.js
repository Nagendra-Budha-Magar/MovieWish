import { sleep } from './async-utils.js';

console.log('start');
await sleep(100); // top-level await works in ESM
console.log('done after 100ms');