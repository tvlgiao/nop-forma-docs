// Checks the built site (_site): every internal link, image and #anchor resolves, and every <img> has a size.
// Run after `jekyll build`: node scripts/check-links.mjs
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const site = join(dirname(fileURLToPath(import.meta.url)), '..', '_site');
const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) pages.push(p);
  }
})(site);

const idsOf = new Map();
const ids = (file) => {
  if (!idsOf.has(file)) idsOf.set(file, new Set([...readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return idsOf.get(file);
};

function resolve(fromFile, path) {
  const target = path.startsWith('/') ? join(site, path) : join(dirname(fromFile), path);
  if (existsSync(target) && statSync(target).isFile()) return target;
  if (existsSync(join(target, 'index.html'))) return join(target, 'index.html');
  return null;
}

const errors = [];
let checked = 0;
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const where = relative(site, file);
  for (const m of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    const url = m[2];
    if (/^(https?:|mailto:|data:)/.test(url)) continue;
    checked++;
    const [path, hash] = url.split('#');
    const target = path ? resolve(file, path) : file;
    if (!target) { errors.push(`${where}: missing ${url}`); continue; }
    if (hash && target.endsWith('.html') && !ids(target).has(hash)) errors.push(`${where}: missing anchor ${url}`);
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\swidth="\d+"/.test(m[0]) || !/\sheight="\d+"/.test(m[0]) || !/\salt="[^"]+"/.test(m[0])) errors.push(`${where}: img without alt/width/height: ${m[0].slice(0, 120)}`);
  }
}
console.log(`${pages.length} pages, ${checked} internal links/images checked`);
if (errors.length) { console.log(errors.join('\n')); process.exit(1); }
console.log('all internal links, anchors and image paths resolve');
