// Download every photograph used by the site into public/assets/img/
// so the site no longer depends on Wikimedia's servers.
//   node tools/fetch-images.mjs && IMAGE_MODE=local node tools/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { IMAGES } from '../src/data/images.mjs';
process.env.IMAGE_MODE = 'remote';
const { srcFor } = await import('./lib.mjs');

const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public/assets/img');
fs.mkdirSync(OUT, { recursive: true });
const UA = 'SpitiOdysseySite/1.0 (image localisation script; contact: dev@demigodhouse.com)';
let ok = 0, fail = 0;
for (const [id, im] of Object.entries(IMAGES)) {
  // Only needed for photos added later: the bundled set already ships with the project.
  for (const [w, name] of [[960, 800], [1920, 1600]]) {
    const dest = path.join(OUT, `${id}-${name}.jpg`);
    if (fs.existsSync(dest)) { ok++; continue; }
    const url = srcFor(id, w); // remote URL (run this script without IMAGE_MODE=local)
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA } });
      if (!r.ok) throw new Error(r.status);
      fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer())); ok++;
      process.stdout.write('.');
      await new Promise((s) => setTimeout(s, 150)); // be polite to Wikimedia
    } catch (e) { fail++; console.error(`\n✗ ${id} @${w}: ${e.message}`); }
  }
}
console.log(`\nDone: ${ok} files ready, ${fail} failed. Now run: npm run build`);
