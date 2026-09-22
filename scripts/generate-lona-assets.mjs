import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Star shape generator for SVG (4-pointed sparkle star with concave curves)
function makeSparkle(cx, cy, rOuter, rInner, fill) {
  const points = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4 - Math.PI / 2;
    const r = i % 2 === 0 ? rOuter : rInner;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return `<polygon points="${points.join(' ')}" fill="${fill}" />`;
}

// Sparkle using quadratic bezier curves for true diamond flare
function makeFlareStar(cx, cy, r, fill) {
  const top = `${cx},${cy - r}`;
  const right = `${cx + r},${cy}`;
  const bottom = `${cx},${cy + r}`;
  const left = `${cx - r},${cy}`;
  const innerFactor = 0.22;
  const inR = r * innerFactor;

  const d = `
    M ${top}
    Q ${cx + inR} ${cy - inR} ${right}
    Q ${cx + inR} ${cy + inR} ${bottom}
    Q ${cx - inR} ${cy + inR} ${left}
    Q ${cx - inR} ${cy - inR} ${top}
    Z
  `;
  return `<path d="${d}" fill="${fill}" />`;
}

// The official Lona Emblem SVG
function getEmblemSvg(size = 512, options = { starColor: '#E8B84B', bg: true, bgColor: '#183D73', fgColor: '#FFFFFF' }) {
  const { starColor, bg, bgColor, fgColor } = options;

  // viewBox: 0 0 512 512
  // Center of the dome: (256, 250), radius approx 180
  const bgRect = bg ? `<rect width="512" height="512" rx="96" fill="${bgColor}" />` : '';

  // Arch: Semi-circular ribbon/dome
  // Outer radius ~175, inner radius ~145
  // Arc spans from ~170 deg to ~10 deg
  const archPath = `
    M 86 280
    A 170 170 0 0 1 426 280
    L 396 280
    A 140 140 0 0 0 116 280
    Z
  `;

  // Open book at bottom:
  // Two open pages sweeping upwards on each side and dipping in the middle
  const bookPath = `
    M 256 425
    C 210 405 130 400 45 320
    L 45 285
    C 130 365 210 370 256 390
    C 302 370 382 365 467 285
    L 467 320
    C 382 400 302 405 256 425
    Z
  `;

  // Sparkle stars
  const mainStar = makeFlareStar(256, 290, 68, starColor);
  const rightStar = makeFlareStar(312, 205, 48, starColor);
  const leftStar = makeFlareStar(196, 230, 32, starColor);

  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="${size}" height="${size}">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FCE082" />
        <stop offset="50%" stop-color="#E8B84B" />
        <stop offset="100%" stop-color="#C58E22" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#D4A338" flood-opacity="0.5"/>
      </filter>
    </defs>
    ${bgRect}
    <g fill="${fgColor}">
      <path d="${archPath}" />
      <path d="${bookPath}" />
    </g>
    <g filter="url(#glow)">
      ${mainStar}
      ${rightStar}
      ${leftStar}
    </g>
  </svg>
  `;
}

// Full horizontal logo: "Fondation Lona" + Emblem
function getHorizontalLogoSvg(width = 800, height = 240, mode = 'normal') {
  const isWhite = mode === 'white';
  const textColor = isWhite ? '#FFFFFF' : '#183D73';
  const starColor = 'url(#goldGrad)';
  const fgColor = '#FFFFFF';
  const emblemBgColor = isWhite ? 'transparent' : '#183D73';

  // Left text: "Fondation Lona"
  // Right emblem: dome + book + stars

  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" width="${width}" height="${height}">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEE28F" />
        <stop offset="45%" stop-color="#E8B84B" />
        <stop offset="100%" stop-color="#C58E22" />
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.15" />
      </filter>
    </defs>

    <!-- Typography Left Side -->
    <g transform="translate(40, 0)">
      <!-- "Fondation" -->
      <text x="0" y="86" fill="${textColor}" font-family="'Montserrat', 'Plus Jakarta Sans', 'Segoe UI', sans-serif" font-size="44" font-weight="500" letter-spacing="2">
        Fondation
      </text>

      <!-- "Lona" with elegant swoosh on L -->
      <text x="0" y="195" fill="${textColor}" font-family="'Montserrat', 'Plus Jakarta Sans', 'Segoe UI', sans-serif" font-size="116" font-weight="800" letter-spacing="-1">
        Lona
      </text>
      <!-- Stylized underline curve for Lona -->
      <path d="M 0 205 C 50 203, 110 207, 160 216 C 110 219, 50 216, 0 205 Z" fill="${textColor}" opacity="0.9" />
    </g>

    <!-- Right Side Emblem -->
    <g transform="translate(560, 15) scale(0.41)">
      <!-- Circle backdrop if normal mode -->
      ${!isWhite ? '<circle cx="256" cy="256" r="240" fill="#183D73" />' : ''}
      
      <!-- Arch -->
      <path d="
        M 86 280
        A 170 170 0 0 1 426 280
        L 396 280
        A 140 140 0 0 0 116 280
        Z
      " fill="${fgColor}" />

      <!-- Open Book -->
      <path d="
        M 256 425
        C 210 405 130 400 45 320
        L 45 285
        C 130 365 210 370 256 390
        C 302 370 382 365 467 285
        L 467 320
        C 382 400 302 405 256 425
        Z
      " fill="${fgColor}" />

      <!-- Sparkles -->
      ${makeFlareStar(256, 290, 68, starColor)}
      ${makeFlareStar(312, 205, 48, starColor)}
      ${makeFlareStar(196, 230, 32, starColor)}
    </g>
  </svg>
  `;
}

async function run() {
  console.log('✨ Generating Fondation Lona Official Assets...');

  // 1. logolona-png.png (Standard normal logo for header on light bg)
  const normalLogoSvg = getHorizontalLogoSvg(800, 240, 'normal');
  await sharp(Buffer.from(normalLogoSvg))
    .png()
    .toFile(path.join(PUBLIC_DIR, 'logolona-png.png'));
  console.log('✔ public/logolona-png.png created');

  // 2. logolona-white-png.png (White logo for footer on #183D73 bg)
  const whiteLogoSvg = getHorizontalLogoSvg(800, 240, 'white');
  await sharp(Buffer.from(whiteLogoSvg))
    .png()
    .toFile(path.join(PUBLIC_DIR, 'logolona-white-png.png'));
  console.log('✔ public/logolona-white-png.png created');

  // 3. pwa-512x512.png
  const pwa512Svg = getEmblemSvg(512, { starColor: '#FFFFFF', bg: true, bgColor: '#183D73', fgColor: '#FFFFFF' });
  await sharp(Buffer.from(pwa512Svg))
    .png()
    .toFile(path.join(PUBLIC_DIR, 'pwa-512x512.png'));
  console.log('✔ public/pwa-512x512.png created');

  // 4. pwa-192x192.png
  await sharp(path.join(PUBLIC_DIR, 'pwa-512x512.png'))
    .resize(192, 192)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'pwa-192x192.png'));
  console.log('✔ public/pwa-192x192.png created');

  // 5. apple-touch-icon.png
  await sharp(Buffer.from(getEmblemSvg(180, { starColor: '#FFFFFF', bg: true, bgColor: '#183D73', fgColor: '#FFFFFF' })))
    .png()
    .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
  console.log('✔ public/apple-touch-icon.png created');

  // 6. favicon.svg & icon.svg
  const favSvg = getEmblemSvg(128, { starColor: '#E8B84B', bg: true, bgColor: '#183D73', fgColor: '#FFFFFF' });
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), favSvg.trim());
  fs.writeFileSync(path.join(PUBLIC_DIR, 'icon.svg'), favSvg.trim());
  console.log('✔ public/favicon.svg & public/icon.svg created');

  // 7. favicon-32x32.png
  await sharp(path.join(PUBLIC_DIR, 'pwa-512x512.png'))
    .resize(32, 32)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'));
  console.log('✔ public/favicon-32x32.png created');

  // 8. Open Graph Images (og-image.jpg, og-square.jpg, og-square.png)
  // Square 800x800 for WhatsApp
  await sharp(path.join(PUBLIC_DIR, 'pwa-512x512.png'))
    .resize(800, 800)
    .jpeg({ quality: 92 })
    .toFile(path.join(PUBLIC_DIR, 'og-square.jpg'));
  await sharp(path.join(PUBLIC_DIR, 'pwa-512x512.png'))
    .resize(800, 800)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'og-square.png'));

  console.log('🎉 All Fondation Lona brand assets generated successfully!');
}

run().catch(console.error);
