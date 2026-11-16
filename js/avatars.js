// Jan in 24 festive costumes: his cut-out headshot (assets/jan.png) layered with SVG costume pieces
// (viewBox 0 0 100 100). The photo spans x 26..74, y 14.7..76; eyes ~y42, nose ~y52, mouth ~y60.
const SKIN = '#f2c6a4', SKIN_D = '#d9a37f', NAVY = '#1c2340';
const P = (d, f, extra = '') => `<path d="${d}" fill="${f}" ${extra}/>`;
const C = (x, y, r, f, extra = '') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${extra}/>`;
const E = (x, y, rx, ry, f, extra = '') => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}" ${extra}/>`;
const star = (x, y, r, f) => P(`M${x} ${y - r}L${x + r * .3} ${y - r * .3}L${x + r} ${y - r * .2}L${x + r * .45} ${y + r * .25}L${x + r * .6} ${y + r}L${x} ${y + r * .55}L${x - r * .6} ${y + r}L${x - r * .45} ${y + r * .25}L${x - r} ${y - r * .2}L${x - r * .3} ${y - r * .3}Z`, f);
const pom = (x, y, r = 5) => C(x, y, r, '#fff', 'stroke="#e5e9f2" stroke-width=".8"');
const body = (f, extra = '') => P('M8 100Q10 76 36 73L64 73Q90 76 92 100Z', f, extra);
const ears = (f = SKIN) => E(25.5, 46, 4.6, 6.5, f) + E(74.5, 46, 4.6, 6.5, f) + E(25.8, 46, 2, 3.6, SKIN_D, 'opacity=".55"') + E(74.2, 46, 2, 3.6, SKIN_D, 'opacity=".55"');
const antler = (s) => `<g stroke="#7a4a21" stroke-width="3" stroke-linecap="round" fill="none"><path d="M${50 - 15 * s} 24Q${50 - 22 * s} 12 ${50 - 20 * s} 4M${50 - 20 * s} 12Q${50 - 27 * s} 11 ${50 - 30 * s} 5M${50 - 19 * s} 16Q${50 - 14 * s} 10 ${50 - 13 * s} 6"/></g>`;


// each costume: { back, body, ears, mid, front, face }  (all optional)
const COSTUMES = {
  1: { // Santa
    body: body('#d42d3a') + P('M44 73L56 73L56 100L44 100Z', '#fff', 'opacity=".95"'),
    keepMouth: true,
    mid: P('M28 50Q24 86 50 92Q76 86 72 50Q68 64 58 65Q50 68 42 65Q32 64 28 50Z', '#fff', 'stroke="#e5e9f2" stroke-width="1"') + E(42.5, 57.5, 7.5, 3.2, '#fff', 'stroke="#e5e9f2" stroke-width=".8"') + E(57.5, 57.5, 7.5, 3.2, '#fff', 'stroke="#e5e9f2" stroke-width=".8"'),
    front: P('M24 30Q28 4 52 6Q64 8 70 20L78 36Q50 26 24 34Z', '#d42d3a') + P('M22 30Q50 22 78 32L77 40Q50 31 23 39Z', '#fff') + pom(68, 8, 6),
  },
  2: { // Rudolph
    back: antler(1) + antler(-1).replace(/M(\d+)/, 'M$1'),
    body: body('#8a5530') + P('M34 73Q50 86 66 73', '#c99a6a'),
    front: C(50, 52, 5.6, '#ff2d3d') + C(48.4, 50.2, 1.6, '#fff', 'opacity=".7"'),
  },
  3: { // Frosty
    body: body('#fff', 'stroke="#cfd9ee" stroke-width="1.2"') + C(50, 88, 2, '#222') + C(50, 96, 2, '#222'),
    front: P('M28 22L72 22L70 14Q50 10 30 14Z', '#15151d') + E(50, 22, 26, 4.2, '#15151d') + P('M30 18L70 18L70 14Q50 10 30 14Z', '#c3263a')
      + P('M38 72Q50 80 62 72L62 80Q50 88 38 80Z', '#d42d3a') + P('M58 76L66 92L56 92Z', '#d42d3a')
      + P('M50 50L68 54L50 58Z', '#ff8c1a'),
  },
  4: { // Elf
    body: body('#2f9e57') + P('M36 73L50 86L64 73Z', '#d42d3a'),
    ears: E(25.5, 46, 4.6, 6.5, SKIN) + P('M22 46L8 36L24 52Z', SKIN) + P('M78 46L92 36L76 52Z', SKIN),
    front: P('M26 28Q50 22 74 28Q70 8 60 -4Q58 12 26 28Z', '#2f9e57') + P('M24 29Q50 20 76 29L74 35Q50 27 26 35Z', '#d42d3a') + C(60, -4, 4, '#ffd36b'),
  },
  5: { // Penguin
    back: E(50, 42, 31, 34, '#20222c') + E(50, 46, 26, 29, '#f7f9ff', 'opacity=".0"'),
    body: body('#20222c') + E(50, 92, 20, 18, '#fff'),
    front: P('M38 74Q50 82 62 74L58 80Q50 86 42 80Z', '#ff9a1f'),
  },
  6: { // Mrs. Claus
    back: C(50, 18, 22, '#fff') + C(30, 30, 10, '#fff') + C(70, 30, 10, '#fff') + C(50, 6, 8, '#fff'),
    body: body('#d42d3a') + P('M34 73Q50 84 66 73Q50 78 34 73Z', '#fff'),
    front: `<g fill="none" stroke="#7a4a21" stroke-width="1.6"><circle cx="42" cy="42" r="6.5"/><circle cx="58.5" cy="42" r="6.5"/><path d="M48.5 41.5Q50.3 39.5 52 41.5"/></g>`
      + P('M28 28Q50 14 72 28Q60 22 50 22Q40 22 28 28Z', '#fff') + star(50, 14, 4, '#ffd36b'),
  },
  7: { // Polar bear
    back: C(28, 24, 9, '#fff', 'stroke="#d6dff0" stroke-width="1.5"') + C(72, 24, 9, '#fff', 'stroke="#d6dff0" stroke-width="1.5"') + C(28, 24, 4.5, '#f2b8c0') + C(72, 24, 4.5, '#f2b8c0'),
    body: body('#f7f9ff', 'stroke="#d6dff0" stroke-width="1.2"'),
    front: E(50, 52, 6, 4, '#222a3a'),
  },
  8: { // Arctic fox
    back: P('M22 36L24 4L44 22Z', '#f58a2c') + P('M78 36L76 4L56 22Z', '#f58a2c') + P('M26 30L26 12L38 22Z', '#222') + P('M74 30L74 12L62 22Z', '#222'),
    body: body('#f58a2c') + P('M38 73L50 96L62 73Z', '#fff'),
    front: E(51, 52, 4, 3, '#222'),
  },
  9: { // Teddy
    back: C(27, 25, 9, '#a8693a') + C(73, 25, 9, '#a8693a') + C(27, 25, 4.5, '#e6b98e') + C(73, 25, 4.5, '#e6b98e'),
    body: body('#a8693a') + E(50, 90, 14, 14, '#e6b98e'),
    front: P('M30 74L44 78L38 88Z', '#d42d3a') + P('M70 74L56 78L62 88Z', '#d42d3a') + C(50, 76, 3, '#d42d3a'),
  },
  10: { // Professor Hoot
    back: P('M24 26L18 8L40 20Z', '#8a6240') + P('M76 26L82 8L60 20Z', '#8a6240'),
    body: body('#8a6240') + `<g stroke="#c9a27a" stroke-width="1.6" fill="none"><path d="M34 84Q40 90 46 84M54 84Q60 90 66 84M42 94Q50 100 58 94"/></g>`,
    front: `<g fill="rgba(255,255,255,.18)" stroke="#5b3b22" stroke-width="2.4"><circle cx="42" cy="42" r="7.6"/><circle cx="58.5" cy="42" r="7.6"/></g><path d="M49.6 41.5h1.3" stroke="#5b3b22" stroke-width="2.4"/>`
      + P('M44 50L56 50L50 58Z', '#f2a93b', 'opacity="0"'),
  },
  11: { // Squirrel
    back: P('M72 100Q104 80 92 40Q86 22 76 36Q96 60 70 86Z', '#b4692a') + P('M72 100Q98 82 88 46', 'none', 'stroke="#8a4c1c" stroke-width="2"'),
    body: body('#b4692a'),
    front: P('M26 32L24 10L42 24Z', '#b4692a') + P('M74 32L76 10L58 24Z', '#b4692a') + P('M28 28L28 16L36 24Z', '#e6b98e') + P('M72 28L72 16L64 24Z', '#e6b98e')
      + E(50, 64, 3.4, 4.4, '#fff', 'opacity="0"') + P('M44 92Q50 84 56 92Q56 100 50 102Q44 100 44 92Z', '#a67c3a') + P('M43 90Q50 84 57 90Q50 88 43 90Z', '#6b4a1d'),
  },
  12: { // Tree
    back: P('M50 -2L82 30L18 30Z', '#1f7a43'),
    body: body('#1f7a43') + C(32, 86, 3, '#ffd36b') + C(50, 92, 3, '#d42d3a') + C(68, 86, 3, '#6ec1ff'),
    front: P('M50 -8L72 26L28 26Z', '#2c9a57') + P('M50 0L66 22L34 22Z', '#37b068', 'opacity=".6"') + star(50, -2, 7, '#ffd36b')
      + C(42, 20, 2.4, '#d42d3a') + C(58, 14, 2.4, '#ffd36b') + C(50, 8, 2.2, '#6ec1ff') + C(60, 23, 2, '#6ec1ff'),
  },
  13: { // Snow hare
    back: E(38, 0, 7, 24, '#fff', 'stroke="#d6dff0" stroke-width="1.2"') + E(62, 0, 7, 24, '#fff', 'stroke="#d6dff0" stroke-width="1.2"') + E(38, 2, 3.4, 18, '#f2b8c0') + E(62, 2, 3.4, 18, '#f2b8c0'),
    body: body('#f7f9ff', 'stroke="#d6dff0" stroke-width="1.2"'),
    front: P('M46 52L54 52L50 56Z', '#f08a9a') + `<g stroke="#fff" stroke-width=".9"><path d="M22 54L36 56M22 60L36 58M78 54L64 56M78 60L64 58"/></g>`,
  },
  14: { // Turkey
    back: `<g>${[-60, -35, -12, 12, 35, 60].map((a, i) => `<g transform="rotate(${a} 50 56)">${E(50, 6, 8, 24, ['#d42d3a', '#f58a2c', '#ffd36b', '#2f9e57', '#4e86c9', '#8a4cc9'][i])}</g>`).join('')}</g>`,
    body: body('#7b4a28'),
    front: P('M46 56Q50 70 54 56Q50 60 46 56Z', '#d42d3a') + P('M30 22L70 22L68 10L32 10Z', '#2b2b33') + E(50, 22, 26, 3.6, '#2b2b33') + P('M32 20L68 20L68 17L32 17Z', '#f2c94c') + P('M46 20L54 20L54 17L46 17Z', '#2b2b33', 'opacity=".0"'),
  },
  15: { // Snow wolf
    back: P('M22 38L22 4L46 24Z', '#7c8799') + P('M78 38L78 4L54 24Z', '#7c8799') + P('M27 30L27 12L38 24Z', '#c9d1de') + P('M73 30L73 12L62 24Z', '#c9d1de'),
    body: body('#7c8799') + P('M36 73L50 90L64 73Z', '#e9eef7'),
    front: E(51, 52, 3.8, 2.8, '#222'),
  },
  16: { // Fairy
    back: `<g opacity=".85">${P('M30 80Q-6 60 4 28Q30 36 38 72Z', '#bfe6ff', 'stroke="#fff" stroke-width="1.5"')}${P('M70 80Q106 60 96 28Q70 36 62 72Z', '#bfe6ff', 'stroke="#fff" stroke-width="1.5"')}${P('M32 92Q8 92 10 70Q30 72 38 84Z', '#e6f4ff')}${P('M68 92Q92 92 90 70Q70 72 62 84Z', '#e6f4ff')}</g>`,
    body: body('#e75fa3') + C(34, 84, 2, '#ffd36b') + C(66, 90, 2, '#ffd36b') + C(50, 82, 2, '#fff'),
    front: P('M32 22L38 10L44 20L50 6L56 20L62 10L68 22Q50 26 32 22Z', '#ffd36b', 'stroke="#e0a526" stroke-width="1"')
      + `<g><line x1="82" y1="92" x2="94" y2="56" stroke="#a67c3a" stroke-width="2.4" stroke-linecap="round"/>${star(95, 52, 8, '#ffd36b')}</g>` + C(14, 18, 1.6, '#fff') + C(88, 14, 1.4, '#fff'),
  },
  17: { // Gingerbread
    body: body('#b86a2b') + `<path d="M12 90Q24 84 36 90T60 90T88 90" stroke="#fff" stroke-width="2.4" fill="none"/>` + C(50, 84, 3, '#d42d3a') + C(50, 93, 3, '#2f9e57'),
    front: P('M26 34Q28 14 50 14Q72 14 74 34Q62 24 50 24Q38 24 26 34Z', '#b86a2b') + `<path d="M26 34Q38 24 50 24T74 34" stroke="#fff" stroke-width="2.4" fill="none"/>` + C(32, 18, 2.4, '#d42d3a') + C(68, 18, 2.4, '#2f9e57') + C(50, 14, 2.4, '#ffd36b'),
  },
  18: { // Swan
    back: P('M30 80Q-6 60 6 22Q32 30 38 72Z', '#fff', 'stroke="#cfd9ee" stroke-width="1.5"') + P('M70 80Q106 60 94 22Q68 30 62 72Z', '#fff', 'stroke="#cfd9ee" stroke-width="1.5"'),
    body: body('#fff', 'stroke="#cfd9ee" stroke-width="1.2"') + `<g stroke="#cfd9ee" stroke-width="1.4" fill="none"><path d="M26 86Q32 92 38 86M62 86Q68 92 74 86M44 94Q50 100 56 94"/></g>`,
    front: P('M30 24Q50 6 70 24Q50 16 30 24Z', '#fff', 'stroke="#cfd9ee" stroke-width="1.2"') + P('M42 18Q50 0 60 12Q54 8 50 18Z', '#fff', 'stroke="#cfd9ee" stroke-width="1.2"') + P('M60 12L72 14L60 18Z', '#ff9a1f'),
  },
  19: { // Cardinal
    back: P('M30 80Q-4 66 8 36Q32 42 38 74Z', '#b81f2e') + P('M70 80Q104 66 92 36Q68 42 62 74Z', '#b81f2e'),
    body: body('#d42d3a') + E(50, 92, 16, 12, '#e8606b', 'opacity=".7"'),
    front: P('M30 26Q50 -6 70 26Q50 14 30 26Z', '#d42d3a') + P('M50 -4L56 18L44 18Z', '#d42d3a') + P('M44 24L56 24L50 34Z', '#222', 'opacity="0"')
      + P('M24 42L34 40L34 48Z', '#222', 'opacity="0"') + P('M46 50L54 50L50 58Z', '#ffb02e', 'opacity="0"'),
  },
  20: { // Seal
    body: body('#7e8da4') + E(50, 92, 22, 14, '#a9b6c9', 'opacity=".8"'),
    front: E(50, 52, 5, 3.6, '#222a3a') + `<g stroke="#fff" stroke-width="1" fill="none"><path d="M20 56L36 58M20 62L36 60M80 56L64 58M80 62L64 60"/></g>`
      + C(50, 10, 9, '#d42d3a') + `<path d="M43 10Q50 2 57 10M43 14Q50 22 57 14" stroke="#fff" stroke-width="1.6" fill="none"/>` + P('M12 100Q4 86 16 84Q22 94 20 100Z', '#7e8da4') + P('M88 100Q96 86 84 84Q78 94 80 100Z', '#7e8da4'),
  },
  21: { // Dove
    back: P('M30 82Q-8 64 4 24Q30 32 38 74Z', '#fff', 'stroke="#d6dff0" stroke-width="1.5"') + P('M70 82Q108 64 96 24Q70 32 62 74Z', '#fff', 'stroke="#d6dff0" stroke-width="1.5"'),
    body: body('#f7f9ff', 'stroke="#d6dff0" stroke-width="1.2"'),
    front: E(50, 12, 22, 5, 'none', 'stroke="#ffd36b" stroke-width="3.2"')
      + `<g><path d="M78 88Q88 78 96 80" stroke="#6b8f3a" stroke-width="2" fill="none"/>${E(84, 82, 4, 2, '#7fae44', 'transform="rotate(-30 84 82)"')}${E(91, 79, 4, 2, '#7fae44', 'transform="rotate(20 91 79)"')}</g>`,
  },
  22: { // Old Man Winter
    back: P('M16 78Q8 20 50 8Q92 20 84 78Z', '#2b4f9e'),
    body: body('#2b4f9e') + P('M10 100Q12 76 36 73L64 73Q88 76 90 100Z', '#3a64bf', 'opacity=".5"'),
    keepMouth: true,
    mid: P('M28 50Q24 88 50 94Q76 88 72 50Q68 64 58 65Q50 68 42 65Q32 64 28 50Z', '#e8f4ff', 'stroke="#bcd9f5" stroke-width="1"') + E(42.5, 57.5, 7.5, 3.2, '#e8f4ff') + E(57.5, 57.5, 7.5, 3.2, '#e8f4ff'),
    front: P('M30 26L36 14L42 22L50 8L58 22L64 14L70 26Q50 30 30 26Z', '#bfe6ff', 'stroke="#fff" stroke-width="1.2"') + C(18, 40, 1.6, '#fff') + C(84, 32, 1.4, '#fff') + C(14, 66, 1.4, '#fff') + C(88, 60, 1.6, '#fff'),
  },
  23: { // Sleigh horse
    back: P('M34 22Q30 -2 50 -2Q70 -2 66 22Q50 14 34 22Z', '#4a2a14') + P('M20 30L16 4L38 22Z', '#8a5530') + P('M80 30L84 4L62 22Z', '#8a5530'),
    body: body('#8a5530') + P('M28 73L72 73L72 80L28 80Z', '#d42d3a') + C(36, 82, 3, '#ffd36b') + C(50, 84, 3, '#ffd36b') + C(64, 82, 3, '#ffd36b'),
    front: P('M30 26Q50 14 70 26Q50 20 30 26Z', '#4a2a14') + E(51, 52, 3.6, 2.6, '#3a2010'),
  },
  24: { // Angel
    back: P('M30 82Q-8 70 2 26Q28 30 38 72Z', '#fff', 'stroke="#e8eefb" stroke-width="1.5"') + P('M70 82Q108 70 98 26Q72 30 62 72Z', '#fff', 'stroke="#e8eefb" stroke-width="1.5"')
      + P('M28 90Q4 86 8 60Q28 62 38 80Z', '#f4f7ff') + P('M72 90Q96 86 92 60Q72 62 62 80Z', '#f4f7ff'),
    body: body('#fff', 'stroke="#e1e8f7" stroke-width="1.2"') + P('M36 73Q50 82 64 73', 'none', 'stroke="#ffd36b" stroke-width="2.4"'),
    front: E(50, 11, 20, 4.4, 'none', 'stroke="#ffd36b" stroke-width="3.4"') + E(50, 11, 20, 4.4, 'none', 'stroke="#fff3b0" stroke-width="1" opacity=".8"'),
  },
};

const IMG = (day, extra = '') => `<image href="assets/jan.png" x="26" y="14.7" width="48" height="61.3" preserveAspectRatio="xMidYMid meet" ${extra}/>`;

export function avatar(day) {
  const c = COSTUMES[day] || {};
  const mouth = c.keepMouth
    ? `<clipPath id="jm${day}"><ellipse cx="50" cy="60.5" rx="10.5" ry="5.6"/></clipPath>${IMG(day, `clip-path="url(#jm${day})"`)}`
    : '';
  return `<svg class="jan" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" overflow="visible">`
    + (c.back || '')
    + `<rect x="41" y="60" width="18" height="20" fill="#c8957b"/>`
    + (c.body || body(NAVY) + P('M38 73Q50 82 62 73', 'none', `stroke="#0f1428" stroke-width="2"`))
    + (c.ears || '')
    + IMG(day)
    + (c.mid || '')
    + mouth
    + (c.front || '')
    + `</svg>`;
}
