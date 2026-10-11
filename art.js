// EMBER — hand-built SVG ingredient illustrations. Each is drawn around (0, 0); `.char` groups show heat.
const R = (cx, cy, stops, extra = '') => `<radialGradient id="${cx}" ${cy}${extra}>${stops}</radialGradient>`;
const S = (o, c, a = 1) => `<stop offset="${o}" stop-color="${c}"${a !== 1 ? ` stop-opacity="${a}"` : ''}/>`;
const L = (id, attrs, stops) => `<linearGradient id="${id}" ${attrs}>${stops}</linearGradient>`;

export function defs() {
  return `<defs>
${L('g-leek', 'x1="0" y1="0" x2="1" y2="0"', S(0, '#F6F1E2') + S(0.42, '#E9EDC9') + S(0.72, '#9DBA6A') + S(1, '#4F7A3A'))}
${L('g-leaf', 'x1="0" y1="0" x2="1" y2="1"', S(0, '#7CA552') + S(1, '#2F5A2E'))}
${R('g-cream', 'cx=".42" cy=".38" r=".7"', S(0, '#FFF9EE') + S(1, '#E6D4B8'))}
${R('g-yog', 'cx=".42" cy=".38" r=".7"', S(0, '#FFFFFF') + S(1, '#ECE4D8'))}
${L('g-bowl', 'x1="0" y1="0" x2="0" y2="1"', S(0, '#4A3A30') + S(1, '#1C1411'))}
${R('g-nut', 'cx=".38" cy=".35" r=".75"', S(0, '#C48A52') + S(1, '#5A3519'))}
${R('g-shell', 'cx=".5" cy=".8" r=".9"', S(0, '#F6E2CF') + S(0.6, '#E2AE8C') + S(1, '#B97556'))}
${R('g-scallop', 'cx=".42" cy=".38" r=".7"', S(0, '#FFF7EA') + S(1, '#E5CCA6'))}
${R('g-sear', 'cx=".5" cy=".5" r=".5"', S(0.35, '#C98A44', 0) + S(0.8, '#A0581F', 0.75) + S(1, '#5A2A0E', 0.95))}
${R('g-apple', 'cx=".36" cy=".32" r=".8"', S(0, '#DCEA9A') + S(0.55, '#86AA3E') + S(1, '#4C6D20'))}
${L('g-butter', 'x1="0" y1="0" x2="0" y2="1"', S(0, '#FCEAB0') + S(1, '#E5C063'))}
${R('g-beet', 'cx=".38" cy=".34" r=".8"', S(0, '#C24470') + S(0.55, '#7A1640') + S(1, '#3C0920'))}
${R('g-yolk', 'cx=".38" cy=".34" r=".75"', S(0, '#FFD066') + S(0.7, '#F09A2A') + S(1, '#D27218'))}
${R('g-egg', 'cx=".45" cy=".4" r=".7"', S(0, '#FFFDF7') + S(1, '#E7DBC5'))}
${R('g-cap', 'cx=".4" cy=".3" r=".8"', S(0, '#B67645') + S(1, '#55301A'))}
${L('g-stem', 'x1="0" y1="0" x2="1" y2="0"', S(0, '#F6EBD8') + S(1, '#CDB58E'))}
${R('g-lamb', 'cx=".45" cy=".5" r=".7"', S(0, '#CF6A5A') + S(0.7, '#9A3A30') + S(1, '#6E2420'))}
${R('g-onion', 'cx=".5" cy=".5" r=".55"', S(0, '#FBF0DC') + S(0.8, '#E8CFA6') + S(1, '#B57A44'))}
${R('g-plum', 'cx=".36" cy=".32" r=".8"', S(0, '#9C5596') + S(0.55, '#4C1F50') + S(1, '#240C28'))}
${R('g-flesh', 'cx=".5" cy=".5" r=".6"', S(0, '#F7C565') + S(1, '#D9572B'))}
${L('g-honey', 'x1="0" y1="0" x2="0" y2="1"', S(0, '#F9C356') + S(1, '#C46F16'))}
${L('g-hay', 'x1="0" y1="0" x2="1" y2="1"', S(0, '#EED58E') + S(1, '#B08D57'))}
${R('g-bread', 'cx=".42" cy=".36" r=".75"', S(0, '#E2AE72') + S(0.6, '#A8652F') + S(1, '#5E3214'))}
${R('g-plate', 'cx=".45" cy=".4" r=".65"', S(0, '#F6EEE2') + S(0.8, '#E3D4BE') + S(1, '#C9B596'))}
${R('g-coal', 'cx=".5" cy=".5" r=".5"', S(0, '#FFE19A') + S(0.35, '#FF8A3A') + S(0.75, '#8E2A0E') + S(1, '#1C0D08'))}
${R('g-flame', 'cx=".5" cy=".9" r=".9"', S(0, '#FFE6A8') + S(0.4, '#FFA444') + S(1, '#D9572B', 0))}
${R('g-slate', 'cx=".5" cy=".45" r=".7"', S(0, '#2B221C') + S(1, '#140F0C'))}
${R('g-glow', 'cx=".5" cy=".5" r=".5"', S(0, '#FF9A4A', 0.55) + S(1, '#D9572B', 0))}
</defs>`;
}

const char = (inner) => `<g class="char">${inner}</g>`;
const marks = (x0, x1, y0, y1, n = 4) => {
  let d = '';
  for (let i = 0; i < n; i++) { const x = x0 + ((x1 - x0) * (i + 0.5)) / n; d += `M${(x - 8).toFixed(0)} ${y0}L${(x + 8).toFixed(0)} ${y1}`; }
  return `<path d="${d}" stroke="#1a0f0a" stroke-width="5" stroke-linecap="round" opacity=".75"/>`;
};

const ART = {
  leek: () => `<path d="M-120 -4l-14 -7M-120 0l-17 2M-120 4l-13 9M-120 -8l-9 -12" stroke="#D9CCAF" stroke-width="1.6" stroke-linecap="round"/>
<path d="M42 -12C80 -40 118 -50 152 -66C124 -32 92 -14 52 -3Z" fill="url(#g-leaf)"/><path d="M46 -3C92 -6 132 -2 174 6C132 12 92 10 46 7Z" fill="url(#g-leaf)"/><path d="M42 9C80 30 110 46 142 66C104 56 72 36 46 18Z" fill="#3B6631"/>
<rect x="-122" y="-17" width="172" height="34" rx="16" fill="url(#g-leek)"/><path d="M-112 -9H34" stroke="#fff" stroke-opacity=".55" stroke-width="3" stroke-linecap="round"/><path d="M-60 12H40" stroke="#6E8F4C" stroke-opacity=".35" stroke-width="2"/>
${char(`<rect x="-122" y="-17" width="172" height="34" rx="16" fill="#2a1a10" opacity=".45"/>${marks(-110, 40, -15, 15, 5)}`)}`,
  cream: () => `<ellipse cy="6" rx="58" ry="56" fill="#000" opacity=".25"/><circle r="56" fill="url(#g-bowl)"/><circle r="56" fill="none" stroke="#6A564A" stroke-width="2"/><circle r="45" fill="url(#g-cream)"/>
<path d="M-22 -4C-10 -18 16 -16 18 0C20 14 4 20 -8 12C-16 6 -10 -4 0 -2" fill="none" stroke="#DCC5A2" stroke-width="3" stroke-linecap="round"/><ellipse cx="-16" cy="-20" rx="9" ry="5" fill="#fff" opacity=".7"/>
${char('<circle r="45" fill="#8a5a2a" opacity=".18"/>')}`,
  yoghurt: () => `<ellipse cy="6" rx="58" ry="56" fill="#000" opacity=".25"/><circle r="56" fill="url(#g-bowl)"/><circle r="56" fill="none" stroke="#6A564A" stroke-width="2"/><circle r="45" fill="url(#g-yog)"/>
<path d="M-26 6C-18 -16 18 -20 24 2" fill="none" stroke="#E2D8C8" stroke-width="5" stroke-linecap="round"/><ellipse cx="-14" cy="-20" rx="10" ry="5" fill="#fff"/>${char('')}`,
  hazelnut: () => {
    const nut = (x, y, r) => `<g transform="translate(${x} ${y}) rotate(${r})"><ellipse cy="3" rx="18" ry="21" fill="#000" opacity=".25"/><ellipse rx="17" ry="20" fill="url(#g-nut)"/><path d="M-16 -7C-9 -23 9 -23 16 -7C9 -12 -9 -12 -16 -7Z" fill="#DDBF94"/><path d="M-6 -2V14M2 -3V15" stroke="#4A2A12" stroke-opacity=".35" stroke-width="1.4"/><ellipse cx="-7" cy="3" rx="4" ry="8" fill="#fff" opacity=".22"/></g>`;
    return nut(-26, 8, -20) + nut(16, -12, 15) + nut(22, 24, 40) + char('<circle r="40" fill="#3a1e0c" opacity=".2"/>');
  },
  scallop: () => {
    let ribs = '';
    for (let k = -4; k <= 4; k++) ribs += `M0 62L${k * 17} ${-62 + Math.abs(k) * 7}`;
    return `<path d="M0 72L-14 60C-72 42 -84 -20 -52 -56C-20 -82 20 -82 52 -56C84 -20 72 42 14 60Z" fill="url(#g-shell)"/><path d="${ribs}" stroke="#A9694F" stroke-opacity=".45" stroke-width="2.2"/>
<path d="M-24 72H24L15 60H-15Z" fill="#C2805F"/><ellipse cy="-4" rx="31" ry="28" fill="url(#g-scallop)"/><path d="M23 10C36 18 32 35 17 37C25 29 27 20 23 10Z" fill="#E98B2C"/><ellipse cx="-10" cy="-13" rx="10" ry="6" fill="#fff" opacity=".55"/>
${char('<ellipse cy="-4" rx="31" ry="28" fill="url(#g-sear)"/>')}`;
  },
  apple: () => `<ellipse cy="6" rx="46" ry="44" fill="#000" opacity=".25"/><circle r="46" fill="url(#g-apple)"/><path d="M0 -40C2 -54 6 -62 12 -68" stroke="#5a3a1c" stroke-width="4.5" fill="none" stroke-linecap="round"/>
<path d="M10 -60C24 -74 44 -68 50 -56C34 -50 20 -50 10 -60Z" fill="#5F8A34"/><ellipse cx="-17" cy="-16" rx="10" ry="17" fill="#fff" opacity=".3" transform="rotate(-30 -17 -16)"/>
${char('<ellipse cx="14" cy="16" rx="20" ry="14" fill="#7a4a1a" opacity=".55"/>')}`,
  butter: () => `<ellipse cy="30" rx="54" ry="10" fill="#000" opacity=".25"/><path d="M-48 -18L-34 -32H48L34 -18Z" fill="#FFF2C6"/><path d="M34 -18L48 -32V18L34 32Z" fill="#E2BC5C"/><rect x="-48" y="-18" width="82" height="50" rx="3" fill="url(#g-butter)"/>
<path d="M-6 -42C14 -58 40 -50 36 -34C30 -42 14 -46 -6 -42Z" fill="#F6DE92"/><path d="M-40 -8H24" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>
${char('<rect x="-48" y="-18" width="82" height="50" rx="3" fill="#9a5a1c" opacity=".5"/>')}`,
  samphire: () => `<g stroke="#5B8A38" stroke-width="7" stroke-linecap="round" fill="none"><path d="M-40 44C-30 12 -20 -10 -24 -42"/><path d="M-27 4C-12 -6 -4 -18 -2 -38"/><path d="M-34 22C-50 8 -56 -6 -60 -22"/><path d="M2 48C10 18 22 0 36 -22"/><path d="M16 12C30 10 42 4 52 -8"/></g>
<g stroke="#9CC06A" stroke-width="2" stroke-linecap="round"><path d="M-30 20h8M-24 -12h7M-6 -24h7M14 20h8M28 -4h7M-52 -6h7"/></g>${char('<g stroke="#2a1a0c" stroke-width="7" stroke-linecap="round" opacity=".35"><path d="M-40 44C-30 12 -20 -10 -24 -42"/><path d="M2 48C10 18 22 0 36 -22"/></g>')}`,
  beetroot: () => `<path d="M-6 -46C-14 -80 -30 -100 -44 -120" stroke="#A3305A" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M6 -46C12 -84 26 -104 34 -126" stroke="#A3305A" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M-44 -120C-74 -124 -88 -100 -72 -84C-58 -92 -48 -104 -44 -120Z" fill="#4E6B34"/><path d="M34 -126C64 -134 82 -112 68 -94C54 -100 42 -112 34 -126Z" fill="#5C7A3A"/>
<ellipse cy="10" rx="52" ry="54" fill="#000" opacity=".25"/><path d="M0 -50C36 -50 54 -18 50 12C46 40 22 58 0 60C-22 58 -46 40 -50 12C-54 -18 -36 -50 0 -50Z" fill="url(#g-beet)"/>
<path d="M0 60C2 76 -4 90 -14 104" stroke="#5E1030" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="-18" cy="-16" rx="10" ry="18" fill="#fff" opacity=".18" transform="rotate(-20 -18 -16)"/>
${char('<path d="M0 -50C36 -50 54 -18 50 12C46 40 22 58 0 60C-22 58 -46 40 -50 12C-54 -18 -36 -50 0 -50Z" fill="#160608" opacity=".5"/><path d="M-30 -10l14 8 10 -12M10 20l14 -6 8 12M-20 30l12 -4" stroke="#C9706A" stroke-opacity=".4" stroke-width="1.5" fill="none"/>')}`,
  rye: () => {
    let k = '';
    for (let i = 0; i < 8; i++) { const y = -46 + i * 12; k += `<ellipse cx="-7" cy="${y}" rx="5" ry="10" transform="rotate(-24 -7 ${y})" fill="url(#g-hay)"/><ellipse cx="7" cy="${y + 6}" rx="5" ry="10" transform="rotate(24 7 ${y + 6})" fill="url(#g-hay)"/><path d="M-9 ${y - 9}l-12 -22M9 ${y - 3}l12 -22" stroke="#D8BE84" stroke-width="1"/>`; }
    return `<path d="M0 90V-50" stroke="#B08D57" stroke-width="3"/>${k}${char('<path d="M0 90V-50" stroke="#2a1a0c" stroke-width="10" opacity=".3"/>')}`;
  },
  dill: () => {
    let d = '';
    const branch = (x, y, a, len) => { const ex = x + Math.cos(a) * len, ey = y + Math.sin(a) * len; d += `M${x.toFixed(1)} ${y.toFixed(1)}L${ex.toFixed(1)} ${ey.toFixed(1)}`; for (let t = 0.25; t < 1; t += 0.12) { const px = x + (ex - x) * t, py = y + (ey - y) * t; d += `M${px.toFixed(1)} ${py.toFixed(1)}l${(Math.cos(a - 0.9) * 12).toFixed(1)} ${(Math.sin(a - 0.9) * 12).toFixed(1)}M${px.toFixed(1)} ${py.toFixed(1)}l${(Math.cos(a + 0.9) * 12).toFixed(1)} ${(Math.sin(a + 0.9) * 12).toFixed(1)}`; } };
    branch(0, 60, -1.57, 110); branch(0, 20, -2.3, 60); branch(0, 0, -0.8, 60); branch(0, -20, -2.1, 46); branch(0, -36, -1.0, 40);
    return `<path d="${d}" stroke="#6E9A48" stroke-width="2" stroke-linecap="round" fill="none"/>${char('')}`;
  },
  bread: () => {
    let dust = '';
    for (let i = 0; i < 26; i++) { const a = i * 2.4, r = 20 + (i * 37) % 50; dust += `<circle cx="${(Math.cos(a) * r).toFixed(0)}" cy="${(Math.sin(a) * r * 0.8).toFixed(0)}" r="${(1 + (i % 3)).toFixed(0)}" fill="#FFF6E6" opacity=".55"/>`; }
    return `<ellipse cy="10" rx="84" ry="70" fill="#000" opacity=".3"/><ellipse rx="82" ry="68" fill="url(#g-bread)"/><path d="M-46 -30C-14 -54 22 -54 50 -28" stroke="#F2D9AE" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M-52 4C-18 -16 26 -16 56 6" stroke="#F2D9AE" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M-40 34C-10 20 22 20 44 34" stroke="#F2D9AE" stroke-width="6" fill="none" stroke-linecap="round"/>${dust}
${char('<ellipse rx="82" ry="68" fill="none" stroke="#2a1408" stroke-width="16" opacity=".55"/><path d="M-46 -30C-14 -54 22 -54 50 -28M-52 4C-18 -16 26 -16 56 6" stroke="#5a2a0c" stroke-width="3" fill="none" opacity=".6"/>')}`;
  },
  salt: () => {
    let f = '';
    for (let i = 0; i < 16; i++) { const a = i * 2.1, r = (i * 13) % 26; const x = Math.cos(a) * r, y = Math.sin(a) * r * 0.7 - 4; f += `<path d="M${(x - 5).toFixed(0)} ${(y + 3).toFixed(0)}l5 -7 6 4 -3 6Z" fill="#FFFFFF" opacity="${(0.7 + (i % 3) * 0.1).toFixed(1)}"/>`; }
    return `<ellipse cy="8" rx="46" ry="30" fill="#000" opacity=".3"/><ellipse rx="44" ry="28" fill="url(#g-bowl)"/><ellipse cy="-2" rx="34" ry="20" fill="#2B211C"/>${f}${char('')}`;
  },
  mushroom: () => {
    const m = (x, y, s, r) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><path d="M-15 0C-19 30 -21 52 -12 66H14C23 52 21 30 15 0Z" fill="url(#g-stem)"/><ellipse cy="2" rx="58" ry="10" fill="#3a2010" opacity=".35"/><path d="M-60 4C-60 -42 -26 -60 0 -60C26 -60 60 -42 60 4C30 14 -30 14 -60 4Z" fill="url(#g-cap)"/><ellipse cx="-22" cy="-32" rx="15" ry="7" fill="#fff" opacity=".2"/>${char(`<path d="M-40 -30l12 30M-14 -44l12 40M14 -44l12 40M40 -30l10 26" stroke="#1a0c06" stroke-width="5" stroke-linecap="round" opacity=".7"/>`)}</g>`;
    return m(-22, 0, 0.9, -8) + m(34, 14, 0.7, 10);
  },
  yolk: () => `<ellipse cy="6" rx="44" ry="38" fill="#000" opacity=".25"/><ellipse rx="42" ry="36" fill="url(#g-egg)"/><circle r="22" fill="url(#g-yolk)"/><ellipse cx="-8" cy="-9" rx="7" ry="5" fill="#fff" opacity=".6"/>${char('<circle r="22" fill="#B05A10" opacity=".25"/>')}`,
  pine: () => {
    let n = '';
    for (let i = 0; i < 16; i++) { const y = -60 + i * 8; n += `M0 ${y}l-${16 + (i % 3) * 3} ${-10}M0 ${y}l${16 + (i % 2) * 4} ${-10}`; }
    return `<path d="M0 80V-70" stroke="#6B4A2A" stroke-width="3.5"/><path d="${n}" stroke="#3E6B3A" stroke-width="2.2" stroke-linecap="round"/>${char('<path d="M0 80V-70" stroke="#1a0c06" stroke-width="12" opacity=".25"/>')}`;
  },
  lamb: () => `<ellipse cy="12" rx="96" ry="64" fill="#000" opacity=".3"/><rect x="38" y="-9" width="74" height="18" rx="9" fill="#EFE3D0"/><circle cx="112" cy="-10" r="11" fill="#F3E9DC"/><circle cx="112" cy="10" r="11" fill="#F3E9DC"/>
<path d="M-82 -20C-72 -62 0 -72 50 -52C92 -36 98 10 72 42C42 72 -42 72 -72 42C-92 22 -90 0 -82 -20Z" fill="url(#g-lamb)"/><path d="M-82 -20C-72 -62 0 -72 50 -52C28 -54 -42 -52 -74 -10Z" fill="#F1DCC4"/>
<path d="M-50 10C-30 0 -10 20 10 8M-30 34C-10 26 14 40 34 26M0 -24C14 -30 30 -24 40 -10" stroke="#F3D9C4" stroke-opacity=".55" stroke-width="2.5" fill="none" stroke-linecap="round"/>
${char('<path d="M-82 -20C-72 -62 0 -72 50 -52C92 -36 98 10 72 42C42 72 -42 72 -72 42C-92 22 -90 0 -82 -20Z" fill="#2a0c06" opacity=".55"/>' + marks(-70, 70, -40, 40, 5))}`,
  onion: () => `<ellipse cy="6" rx="48" ry="46" fill="#000" opacity=".25"/><circle r="47" fill="#A8683A"/><circle r="43" fill="url(#g-onion)"/><g fill="none" stroke="#E0C49A" stroke-width="2"><circle r="35"/><circle r="27"/><circle r="19"/><circle r="11"/></g><circle r="4" fill="#E8D2AE"/>
${char('<circle r="43" fill="#1a0c06" opacity=".35"/><circle r="22" fill="#120804" opacity=".5"/>')}`,
  garlic: () => `<ellipse cy="10" rx="46" ry="48" fill="#000" opacity=".25"/><path d="M0 -54C10 -42 42 -32 46 0C50 32 24 52 0 52C-24 52 -50 32 -46 0C-42 -32 -10 -42 0 -54Z" fill="#EAE0D0"/>
<path d="M0 -40C-14 -20 -14 30 0 50M0 -40C14 -20 14 30 0 50M0 -40C-32 -14 -36 26 -18 46M0 -40C32 -14 36 26 18 46" stroke="#C9BBA4" stroke-width="2" fill="none"/>
<path d="M-12 -2C-6 -14 6 -14 12 -2C14 12 6 22 0 24C-6 22 -14 12 -12 -2Z" fill="#2A1A14"/><path d="M-6 -6C-4 -10 0 -10 2 -8" stroke="#6A5048" stroke-width="2" fill="none"/>${char('')}`,
  plum: () => `<ellipse cx="-14" cy="8" rx="44" ry="42" fill="#000" opacity=".25"/><circle cx="-14" r="42" fill="url(#g-plum)"/><path d="M-14 -42C-18 -18 -16 18 -14 42" stroke="#1E0A22" stroke-width="2" opacity=".5"/><ellipse cx="-28" cy="-14" rx="15" ry="11" fill="#D6B8E0" opacity=".28"/><path d="M-14 -40C-12 -52 -8 -58 -2 -62" stroke="#4a3018" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<g transform="translate(46 26)"><ellipse cy="4" rx="34" ry="32" fill="#000" opacity=".25"/><circle r="32" fill="#3A1440"/><circle r="27" fill="url(#g-flesh)"/><ellipse cx="2" cy="1" rx="9" ry="12" fill="#8A4A22"/></g>
${char('<circle cx="-14" r="42" fill="#120408" opacity=".35"/><path d="M-30 -20l20 12M-34 10l24 -6" stroke="#F7C565" stroke-opacity=".5" stroke-width="2"/>')}`,
  honey: () => {
    let h = '';
    const hex = (x, y) => `<path d="M${x} ${y - 14}l12 7v14l-12 7l-12 -7v-14Z" fill="url(#g-honey)" stroke="#8A4A10" stroke-width="2"/>`;
    [[-24, -12], [0, -12], [24, -12], [-12, 9], [12, 9], [36, 9], [-36, 9], [0, 30], [24, 30]].forEach(([x, y]) => { h += hex(x, y); });
    return `<ellipse cy="14" rx="56" ry="40" fill="#000" opacity=".25"/>${h}<path d="M24 44C26 54 22 62 24 70" stroke="#E89A2A" stroke-width="5" stroke-linecap="round"/><circle cx="24" cy="72" r="5" fill="#E89A2A"/><path d="M-30 -18l8 -4" stroke="#fff" stroke-opacity=".6" stroke-width="3" stroke-linecap="round"/>${char('<rect x="-50" y="-30" width="100" height="70" fill="#5a2a08" opacity=".2"/>')}`;
  },
  hay: () => {
    let s = '';
    for (let i = 0; i < 22; i++) { const a = -0.5 + (i / 21) * 1; s += `M${(Math.sin(a) * 8).toFixed(1)} 6L${(Math.sin(a) * 70).toFixed(1)} ${(-Math.cos(a) * 80).toFixed(1)}M${(Math.sin(a) * 8).toFixed(1)} 14L${(Math.sin(a) * 60).toFixed(1)} ${(Math.cos(a) * 70).toFixed(1)}`; }
    return `<path d="${s}" stroke="url(#g-hay)" stroke-width="2.4" stroke-linecap="round"/><path d="M-12 4H12V16H-12Z" fill="#6E4A22"/><path d="M-14 7H14M-14 13H14" stroke="#3a2410" stroke-width="1.4"/>${char('<path d="M0 0L-40 -60M0 0L40 -60M0 0L0 -76" stroke="#3a1c08" stroke-width="10" opacity=".25"/>')}`;
  },
};

export const artFor = (id) => (ART[id] ? ART[id]() : '');

/* ---------- stage scenery ---------- */
export function scenery() {
  let coals = '';
  for (let i = 0; i < 46; i++) {
    const x = 200 + ((i * 53) % 400), y = 438 + ((i * 29) % 34), r = 10 + ((i * 7) % 14);
    coals += `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#g-coal)" opacity="${(0.65 + ((i * 11) % 35) / 100).toFixed(2)}"/>`;
  }
  let flames = '';
  [[250, 0.8], [320, 1.1], [395, 1.3], [470, 1], [545, 0.85], [600, 0.6]].forEach(([x, s], i) => {
    flames += `<path class="flame" style="--d:${(i * 0.37).toFixed(2)}s" d="M${x - 22 * s} 450C${x - 26 * s} ${450 - 50 * s} ${x - 4 * s} ${450 - 70 * s} ${x} ${450 - 110 * s}C${x + 6 * s} ${450 - 70 * s} ${x + 28 * s} ${450 - 48 * s} ${x + 22 * s} 450Z" fill="url(#g-flame)"/>`;
  });
  let smoke = '';
  [[330, 0], [430, 1.6], [520, 3.1], [610, 4.4]].forEach(([x, d]) => {
    smoke += `<path class="smoke" style="--d:${d}s" d="M${x} 330C${x - 20} 290 ${x + 24} 260 ${x} 220C${x - 24} 180 ${x + 18} 150 ${x} 110" fill="none" stroke="#F3E9DC" stroke-width="16" stroke-linecap="round"/>`;
  });
  let specks = '';
  for (let i = 0; i < 40; i++) specks += `<circle cx="${110 + ((i * 97) % 580)}" cy="${170 + ((i * 61) % 290)}" r="${(0.8 + (i % 3) * 0.6).toFixed(1)}" fill="#F3E9DC" opacity=".12"/>`;
  return `
<g class="sc sc--board"><rect x="70" y="140" width="660" height="350" rx="18" fill="url(#g-slate)"/><rect x="70" y="140" width="660" height="350" rx="18" fill="none" stroke="#3a2e26" stroke-width="2"/>${specks}</g>
<g class="sc sc--fire"><ellipse cx="400" cy="470" rx="300" ry="70" fill="url(#g-glow)"/>${coals}<g class="flames">${flames}</g><g fill="none" stroke="#2a221e" stroke-width="7" stroke-linecap="round"><path d="M170 420H630"/><path d="M190 438H610M180 404H620"/></g><g stroke="#4a3e36" stroke-width="2"><path d="M170 418H630"/></g><g class="smokes" opacity=".1">${smoke}</g></g>
<g class="sc sc--plate"><ellipse cx="406" cy="318" rx="236" ry="230" fill="#000" opacity=".45"/><circle cx="400" cy="300" r="232" fill="url(#g-plate)"/><circle cx="400" cy="300" r="176" fill="#F1E7D8"/><circle cx="400" cy="300" r="176" fill="none" stroke="#CDBA9C" stroke-width="2"/><path d="M230 210A196 196 0 0 1 400 104" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="5" stroke-linecap="round"/>${specklePlate()}</g>`;
}
function specklePlate() {
  let s = '';
  for (let i = 0; i < 60; i++) { const a = i * 2.39996, r = 178 + ((i * 17) % 50); s += `<circle cx="${(400 + Math.cos(a) * r).toFixed(0)}" cy="${(300 + Math.sin(a) * r).toFixed(0)}" r="${(0.8 + (i % 3) * 0.5).toFixed(1)}" fill="#8A6A48" opacity=".35"/>`; }
  return s;
}

// plate garnish per course (shown on the Plate step)
export const GARNISH = [
  `<path class="draw" pathLength="1" d="M300 360C340 400 420 404 470 372" stroke="#5E8C3A" stroke-width="5" fill="none" stroke-linecap="round"/><g fill="#7A4A22">${dots([[455, 350], [470, 395], [488, 360], [440, 404], [505, 382]], 4)}</g><g fill="#6E9A48">${dots([[322, 250], [338, 236], [312, 270]], 3.5)}</g>`,
  `<path class="draw" pathLength="1" d="M300 250C360 220 470 226 520 270C540 290 530 320 500 330" stroke="#C47A2A" stroke-width="9" fill="none" stroke-linecap="round" opacity=".85"/><g stroke="#B5D27A" stroke-width="4" stroke-linecap="round">${[[300, 330, 320, 344], [310, 360, 334, 352], [288, 346, 300, 368]].map(([a, b, c, d]) => `<path d="M${a} ${b}L${c} ${d}"/>`).join('')}</g>`,
  `<path class="draw" pathLength="1" d="M280 330C330 270 450 260 520 300" stroke="#FFFFFF" stroke-width="22" fill="none" stroke-linecap="round" opacity=".9"/><g fill="#6A4220">${dots([[300, 300], [320, 360], [470, 360], [500, 340], [350, 380], [440, 384], [480, 380]], 3.5)}</g>`,
  `<g fill="#FFFFFF">${dots([[280, 360], [290, 372], [272, 350], [300, 352]], 2.4)}</g><path class="draw" pathLength="1" d="M320 400C360 420 430 420 470 404" stroke="#B08D57" stroke-width="2" fill="none" stroke-dasharray="1" stroke-linecap="round"/>`,
  `<path class="draw" pathLength="1" d="M330 380C380 400 450 396 500 360" stroke="#F09A2A" stroke-width="7" fill="none" stroke-linecap="round" opacity=".85"/><g stroke="#3E6B3A" stroke-width="2.4" stroke-linecap="round">${[[300, 260], [310, 250], [500, 250], [512, 262], [470, 400]].map(([x, y]) => `<path d="M${x} ${y}l10 -8"/>`).join('')}</g>`,
  `<path class="draw" pathLength="1" d="M290 250C340 220 450 216 520 250" stroke="#5A1C14" stroke-width="10" fill="none" stroke-linecap="round" opacity=".8"/><g fill="#1E120E">${dots([[470, 330], [490, 312], [508, 336], [456, 350]], 6)}</g>`,
  `<path class="draw" pathLength="1" d="M290 380C320 330 300 270 340 240C380 214 430 226 470 210" stroke="#E89A2A" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="478" cy="368" rx="42" ry="28" fill="#FBF3E2"/><ellipse cx="470" cy="360" rx="16" ry="8" fill="#fff"/><path d="M450 376C470 384 494 380 510 370" stroke="#E7D9BE" stroke-width="2" fill="none"/>`,
];
function dots(pts, r) { return pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join(''); }

// small static plate illustration for the menu dialog and pantry
export function miniPlate(ids, plate = true) {
  const pos = ids.length === 1 ? [[0, 0, 0, 1]] : ids.length === 2 ? [[-26, 6, -8, 0.62], [36, -14, 6, 0.5]] : [[-6, 4, -10, 0.6], [44, -34, 0, 0.42], [-48, 40, 0, 0.4]];
  const inner = ids.map((id, i) => { const [x, y, r, s] = pos[i]; return `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">${artFor(id)}</g>`; }).join('');
  const base = plate ? '<circle r="132" fill="#000" opacity=".4" cx="6" cy="12"/><circle r="130" fill="url(#g-plate)"/><circle r="98" fill="#F1E7D8"/>' : '';
  return `<svg viewBox="-150 -150 300 300" aria-hidden="true" focusable="false"><g class="mini">${base}${inner}</g></svg>`;
}
