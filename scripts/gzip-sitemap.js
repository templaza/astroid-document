// scripts/gzip-sitemap.js
const { createGzip } = require('zlib');
const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');

const sitemapPath = join('build', 'sitemap.xml');
const gzipPath = join('build', 'sitemap.xml.gz');

const input = createReadStream(sitemapPath);
const output = createWriteStream(gzipPath);
const gzip = createGzip();

console.log('ℹ️ Gzipping sitemap.xml...');
input.pipe(gzip).pipe(output);

output.on('finish', () => {
    console.log('✅ sitemap.xml.gz created successfully.');
});
output.on('error', (err) => {
    console.error('❌ Failed to create sitemap.xml.gz:', err);
});