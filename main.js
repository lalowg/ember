// EMBER — tasting stage (ingredient → fire → plate), day at the hearth, menu, pantry, reservations.
import { COURSES, MENU, CATS, PANTRY, DAY, OPEN_DAYS, SLOTS } from './data.js';
import { defs, artFor, scenery, GARNISH, miniPlate } from './art.js';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const STEPS = ['raw', 'fire', 'plate'];
const STEP_K = { raw: 'The ingredients', fire: 'Over the fire', plate: 'On the plate' };

$('#art-defs').insertAdjacentHTML('beforeend', defs());

/* ---------- header ---------- */
const hdr = $('.hdr'), menuBtn = $('.hdr__menu'), nav = $('#nav');
function setMenu(open) {
  menuBtn.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
  hdr.classList.toggle('is-open', open);
  $('.hdr__menu-label').textContent = open ? 'Close' : 'Menu';
}
menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); } });
const onScroll = () => hdr.classList.toggle('is-solid', scrollY > 30);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- tasting stage ---------- */
const stage = $('#stage');
const host = $('#courses');
$('#scenery').innerHTML = scenery();

function courseMarkup(c, idx) {
  const vars = (g, k, a) => { const [x, y, r, s] = g[k]; return `--${a}x:${x}px;--${a}y:${y}px;--${a}r:${r}deg;--${a}s:${s};--${a}o:${s === 0 ? 0 : 1};`; };
  const ings = c.ings.map((g, i) => `<g class="ing" style="--i:${i};${vars(g, 'raw', 'r')}${vars(g, 'fire', 'f')}${vars(g, 'plate', 'p')}">${artFor(g.id)}</g>`).join('');
  const labels = c.ings.map((g, i) => {
    const x = g.lx ?? g.raw[0];
    return `<g class="lbl" style="--i:${i}" transform="translate(${x} 422)"><path d="M0 -18V-5" stroke="#B08D57" stroke-width="1.2"/><text class="lbl__t" y="14" text-anchor="middle">${esc(g.label)}</text><text class="lbl__n" y="32" text-anchor="middle">${esc(g.note)}</text></g>`;
  }).join('');
  return `<g class="garnish">${GARNISH[idx]}</g>${ings}${labels}`;
}

const NS = 'http://www.w3.org/2000/svg';
let ci = -1, si = 0, current = null;
function setCourse(i, dir) {
  const g = document.createElementNS(NS, 'g');
  g.setAttribute('class', 'course-g');
  g.innerHTML = courseMarkup(COURSES[i], i);
  const old = current;
  current = g;
  if (!old || reduced) {
    if (old) old.remove();
    host.appendChild(g);
    return;
  }
  g.classList.add('is-pre');
  g.style.setProperty('--dir', dir >= 0 ? 1 : -1);
  old.style.setProperty('--dir', dir >= 0 ? 1 : -1);
  host.appendChild(g);
  old.classList.add('is-out');
  g.getBoundingClientRect();
  requestAnimationFrame(() => requestAnimationFrame(() => g.classList.remove('is-pre')));
  setTimeout(() => old.remove(), 800);
}

const rail = $('#rail');
rail.innerHTML = COURSES.map((c, i) => `<li><button type="button" class="rail__btn" data-c="${i}"><span class="rail__no">${c.no}</span><span class="rail__name">${esc(c.name)}</span></button></li>`).join('');

function go(nci, nsi, dir = 1) {
  const courseChanged = nci !== ci;
  if (courseChanged) {
    stage.dataset.step = STEPS[nsi];
    setCourse(nci, dir);
  } else stage.dataset.step = STEPS[nsi];
  ci = nci; si = nsi;
  const c = COURSES[ci], step = STEPS[si];
  $('#c-no').textContent = c.no;
  $('#c-name').textContent = c.name;
  $('#c-dish').textContent = c.dish;
  $('#c-step-k').textContent = STEP_K[step];
  $('#c-step').textContent = c[step];
  $$('.step-btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.step === step)));
  $$('.rail__btn').forEach((b, i) => { if (i === ci) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); b.classList.toggle('is-done', i < ci); });
  $('#rail-fill').style.transform = `scaleX(${((ci * 3 + si) / (COURSES.length * 3 - 1)).toFixed(4)})`;
  const last = ci === COURSES.length - 1;
  $('#next-label').textContent = step === 'raw' ? 'Into the fire' : step === 'fire' ? 'To the plate' : last ? 'Begin again' : `Next: ${COURSES[ci + 1].name}`;
  $('#prev').disabled = ci === 0 && si === 0;
  stage.setAttribute('aria-label', `Course ${c.no}, ${c.name}: ${STEP_K[step].toLowerCase()}. ${step === 'raw' ? c.ings.map((g) => g.label).join(', ') : c.dish}.`);
  if (courseChanged && !reduced) {
    const cc = $('#course-copy');
    cc.classList.remove('is-swap');
    void cc.offsetWidth;
    cc.classList.add('is-swap');
  }
}
function next() {
  if (si < 2) go(ci, si + 1);
  else go((ci + 1) % COURSES.length, 0, 1);
}
function prev() {
  if (si > 0) go(ci, si - 1, -1);
  else if (ci > 0) go(ci - 1, 2, -1);
}
$('#next').addEventListener('click', next);
$('#prev').addEventListener('click', prev);
$$('.step-btn').forEach((b) => b.addEventListener('click', () => go(ci, STEPS.indexOf(b.dataset.step))));
rail.addEventListener('click', (e) => { const b = e.target.closest('.rail__btn'); if (b) go(+b.dataset.c, 0, +b.dataset.c >= ci ? 1 : -1); });
stage.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
});
let swipe = null;
stage.addEventListener('pointerdown', (e) => { swipe = { x: e.clientX, y: e.clientY }; });
stage.addEventListener('pointerup', (e) => {
  if (!swipe) return;
  const dx = e.clientX - swipe.x, dy = e.clientY - swipe.y;
  swipe = null;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) { if (dx < 0) next(); else prev(); }
});
stage.addEventListener('pointercancel', () => { swipe = null; });
go(0, 0);

/* ---------- candlelight ---------- */
const glowTargets = [$('#tasting'), $('#room')];
const visible = new Set();
let flickRaf = 0, lastF = 0, phase = Math.random() * 100;
function flick(t) {
  flickRaf = 0;
  if (!visible.size || document.hidden) return;
  if (t - lastF > 70) {
    lastF = t;
    phase += 0.18;
    const v = 0.82 + 0.1 * Math.sin(phase * 1.7) + 0.06 * Math.sin(phase * 4.3 + 1) + Math.random() * 0.04;
    visible.forEach((el) => el.style.setProperty('--flick', v.toFixed(3)));
  }
  flickRaf = requestAnimationFrame(flick);
}
if (!reduced && 'IntersectionObserver' in window) {
  const fio = new IntersectionObserver((es) => {
    es.forEach((en) => { if (en.isIntersecting) visible.add(en.target); else visible.delete(en.target); });
    if (visible.size && !flickRaf) flickRaf = requestAnimationFrame(flick);
  });
  glowTargets.forEach((el) => fio.observe(el));
  document.addEventListener('visibilitychange', () => { if (!document.hidden && visible.size && !flickRaf) flickRaf = requestAnimationFrame(flick); });
  const pio = new IntersectionObserver((es) => es.forEach((en) => stage.classList.toggle('is-paused', !en.isIntersecting)));
  pio.observe(stage);
}

/* ---------- the day at the hearth ---------- */
(function day() {
  let bricks = '';
  for (let y = 62, row = 0; y < 440; y += 22, row++) {
    bricks += `<path d="M30 ${y}H370"/>`;
    for (let x = 30 + (row % 2 ? 26 : 0); x < 370; x += 52) bricks += `<path d="M${x} ${y - 22}V${y}"/>`;
  }
  $('#h-bricks').innerHTML = bricks;
  let coals = '';
  for (let i = 0; i < 22; i++) coals += `<circle cx="${110 + ((i * 47) % 180)}" cy="${392 + ((i * 13) % 12)}" r="${6 + ((i * 5) % 7)}" fill="url(#g-coal)"/>`;
  $('#h-coals').innerHTML = coals;
  const list = $('#day');
  list.innerHTML = DAY.map((d, i) => `<li class="day__item" data-i="${i}"><p class="day__t">${d.t}</p><h3 class="day__title">${esc(d.title)}</h3><p class="day__text">${esc(d.text)}</p></li>`).join('');
  const flames = $('#h-flames'), bed = $('#h-glowbed'), coalsG = $('#h-coals');
  function heat(i) {
    const d = DAY[i];
    flames.style.transform = `scaleY(${(0.2 + d.heat * 0.9).toFixed(2)})`;
    flames.style.opacity = (0.35 + d.heat * 0.65).toFixed(2);
    bed.style.opacity = (0.25 + d.heat * 0.75).toFixed(2);
    coalsG.style.opacity = (0.4 + (1 - Math.abs(d.heat - 0.6)) * 0.6).toFixed(2);
    $('#h-time').textContent = d.t;
    $('#h-caption').textContent = `${d.t} · ${d.title}`;
    $$('.day__item').forEach((el, j) => el.classList.toggle('is-active', j === i));
  }
  heat(0);
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) heat(+en.target.dataset.i); }), { rootMargin: '-42% 0px -48% 0px' });
    $$('.day__item').forEach((el) => io.observe(el));
  }
})();

/* ---------- menu ---------- */
const filt = { cat: 'All', diet: new Set() };
$('#mf-cat').innerHTML = CATS.map((c, i) => `<label class="tog tog--radio"><input type="radio" name="cat" value="${esc(c)}"${i === 0 ? ' checked' : ''}><span>${esc(c)}</span></label>`).join('');
const dietWords = (m) => [m.diet === 'v' ? 'vegetarian' : '', m.gf ? 'made without gluten' : '', m.nuts ? 'contains nuts' : ''].filter(Boolean).join(', ');
function okDish(m) {
  if (filt.cat !== 'All' && m.cat !== filt.cat) return false;
  for (const d of filt.diet) {
    if (d === 'v' && m.diet !== 'v') return false;
    if (d === 'pesc' && m.diet === 'm') return false;
    if (d === 'gf' && !m.gf) return false;
    if (d === 'nf' && m.nuts) return false;
  }
  return true;
}
const price = (m) => `$${m.price}${m.unit ? ` <small>${esc(m.unit)}</small>` : ''}`;
function renderMenu() {
  const shown = MENU.filter(okDish);
  const groups = CATS.slice(1).map((cat) => [cat, shown.filter((m) => m.cat === cat)]).filter(([, l]) => l.length);
  $('#menu-list').innerHTML = groups.map(([cat, list]) => `<div class="mcat"><h3 class="mcat__t">${esc(cat)}</h3><ul class="mcat__list">${list.map((m) => `<li><button type="button" class="dishrow" data-id="${m.id}" aria-haspopup="dialog">
<span class="dishrow__name">${esc(m.name)}</span><span class="dishrow__lead" aria-hidden="true"></span><span class="dishrow__price">${price(m)}</span>
<span class="dishrow__desc">${esc(m.desc)}</span>
<span class="dishrow__tags" aria-hidden="true">${m.diet === 'v' ? '<span>V</span>' : ''}${m.gf ? '<span>GF</span>' : ''}${m.nuts ? '<span class="nut">◆</span>' : ''}</span>
<span class="visually-hidden">${dietWords(m) ? ', ' + dietWords(m) : ''}. Open details.</span></button></li>`).join('')}</ul></div>`).join('');
  $('#menu-empty').hidden = shown.length > 0;
  $('#menu-count').textContent = `${shown.length} ${shown.length === 1 ? 'dish' : 'dishes'}`;
  if (!reduced) $$('.dishrow', $('#menu-list')).forEach((b, i) => { b.style.animationDelay = `${Math.min(i, 12) * 35}ms`; b.classList.add('is-in'); });
}
$('#menu-filters').addEventListener('change', (e) => {
  const t = e.target;
  if (t.name === 'cat') filt.cat = t.value;
  if (t.name === 'diet') { if (t.checked) filt.diet.add(t.value); else filt.diet.delete(t.value); }
  renderMenu();
});
$('#menu-filters').addEventListener('submit', (e) => e.preventDefault());
renderMenu();

const dlg = $('#dish');
let lastTrigger = null;
function openDish(id) {
  const m = MENU.find((x) => x.id === id);
  if (!m) return;
  const dietLine = [m.diet === 'v' ? 'Vegetarian' : m.diet === 'f' ? 'Fish or shellfish' : 'Meat', m.gf ? 'made without gluten' : 'contains gluten', m.nuts ? 'contains nuts' : 'no nuts'].join(' · ');
  $('#dish-inner').innerHTML = `<button type="button" class="dish__close" data-close aria-label="Close dish details"><svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 3l10 10M13 3 3 13" stroke="currentColor" stroke-width="1.6" fill="none"/></svg></button>
<div class="dish__art">${miniPlate(m.art)}</div>
<div class="dish__body"><p class="dish__k">${esc(m.cat)}</p><h2 class="dish__title" id="dish-title">${esc(m.name)}</h2><p class="dish__desc">${esc(m.desc)}</p>
<dl class="dish__meta"><div><dt>Price</dt><dd>${price(m)} · illustrative</dd></div><div><dt>Dietary</dt><dd>${dietLine}</dd></div><div><dt>Allergens</dt><dd>${esc(m.allergens.join(', '))}</dd></div><div><dt>To drink</dt><dd>${esc(m.pairing)}</dd></div></dl>
<a class="btn btn--ember" href="#reserve" data-close>Reserve a table</a></div>`;
  if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  $('.dish__close', dlg).focus();
}
function closeDish() {
  if (dlg.close) dlg.close(); else dlg.removeAttribute('open');
}
dlg.addEventListener('close', () => { lastTrigger?.focus(); });
dlg.addEventListener('click', (e) => {
  if (e.target === dlg) { closeDish(); return; }
  const c = e.target.closest('[data-close]');
  if (c) { if (c.tagName === 'A') lastTrigger = null; closeDish(); }
});
$('#menu-list').addEventListener('click', (e) => { const b = e.target.closest('.dishrow'); if (b) { lastTrigger = b; openDish(b.dataset.id); } });

/* ---------- pantry ---------- */
const track = $('#pantry-track');
track.innerHTML = PANTRY.map((p) => `<li class="pan"><div class="pan__art">${miniPlate([p.id], false)}</div><p class="pan__m">${esc(p.months)}</p><h3 class="pan__name">${esc(p.name)}</h3><p class="pan__note">${esc(p.note)}</p></li>`).join('');
const pstep = () => (track.querySelector('.pan')?.getBoundingClientRect().width || 280) + 20;
$('#pantry-prev').addEventListener('click', () => track.scrollBy({ left: -pstep(), behavior: reduced ? 'auto' : 'smooth' }));
$('#pantry-next').addEventListener('click', () => track.scrollBy({ left: pstep(), behavior: reduced ? 'auto' : 'smooth' }));

/* ---------- reveals ---------- */
const ign = $$('.ignite, .pan, .day__item');
if (reduced || !('IntersectionObserver' in window)) ign.forEach((el) => el.classList.add('is-lit'));
else {
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-lit'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' });
  ign.forEach((el) => io.observe(el));
}
const navLinks = $$('.hdr__nav a');
if ('IntersectionObserver' in window) {
  const sio = new IntersectionObserver((es) => es.forEach((en) => {
    if (en.isIntersecting) navLinks.forEach((a) => { if (a.getAttribute('href') === '#' + en.target.id) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main > section[id]').forEach((s) => sio.observe(s));
}

/* ---------- reservations ---------- */
(function reserve() {
  const f = $('#res-form');
  const F = (k) => f.elements[k];
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const min = new Date(today); min.setDate(min.getDate() + 1);
  const max = new Date(today); max.setDate(max.getDate() + 90);
  F('date').min = iso(min);
  F('date').max = iso(max);
  const parse = (v) => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v || ''); return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null; };
  const slotsHost = $('#r-slots');
  function renderSlots() {
    const d = parse(F('date').value);
    const prevSel = f.querySelector('input[name="time"]:checked')?.value;
    if (!d || !OPEN_DAYS.includes(d.getDay()) || d < min || d > max) { slotsHost.innerHTML = '<p class="slots__empty">Choose an open date to see times.</p>'; return; }
    const list = d.getDay() === 0 ? SLOTS.lunch : SLOTS.evening;
    slotsHost.innerHTML = list.map((t) => `<label class="slot"><input type="radio" name="time" value="${t}"${t === prevSel ? ' checked' : ''}><span>${t}</span></label>`).join('');
  }
  const rules = {
    date: () => {
      const v = F('date').value;
      const d = parse(v);
      if (!d) return 'Choose a date for your visit.';
      if (d < min) return 'Please choose a date from tomorrow onwards.';
      if (d > max) return 'We take requests up to 90 days ahead.';
      if (!OPEN_DAYS.includes(d.getDay())) return `We are closed on ${DAYS[d.getDay()]}s. Please choose Wednesday to Sunday.`;
      return '';
    },
    time: () => (f.querySelector('input[name="time"]:checked') ? '' : 'Choose a time.'),
    guests: () => {
      const v = F('guests').value.trim();
      if (!/^\d+$/.test(v) || +v < 1 || +v > 12) return 'Guests must be a whole number from 1 to 12.';
      if (+v > 8 && f.querySelector('input[name="menu"]:checked')?.value !== 'kiln') return 'For more than eight guests, please choose the kiln room below.';
      return '';
    },
    name: () => (F('name').value.trim().length >= 2 ? '' : 'Please add the name for the booking.'),
    email: () => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(F('email').value.trim()) ? '' : 'Please enter an email address like name@example.com.'),
  };
  const errs = { date: '#r-date-err', time: '#r-time-err', guests: '#r-guests-err', name: '#r-name-err', email: '#r-email-err' };
  let tried = false;
  function check(k) {
    const m = rules[k]();
    const el = $(errs[k]);
    el.textContent = m;
    el.closest('.field').classList.toggle('is-invalid', !!m);
    const inputs = k === 'time' ? $$('input[name="time"]', f) : [F(k)];
    inputs.forEach((i) => (m ? i.setAttribute('aria-invalid', 'true') : i.removeAttribute('aria-invalid')));
    return !m;
  }
  F('date').addEventListener('change', () => { renderSlots(); check('date'); if (tried) check('time'); });
  f.addEventListener('change', (e) => { if (!tried) return; if (e.target.name === 'time') check('time'); if (e.target.name === 'menu') check('guests'); });
  ['name', 'email', 'guests'].forEach((k) => F(k).addEventListener('input', () => { if (tried) check(k); }));
  $$('.stepper__btn', f).forEach((b) => b.addEventListener('click', () => {
    const v = Math.min(12, Math.max(1, (parseInt(F('guests').value, 10) || 0) + +b.dataset.d));
    F('guests').value = v;
    if (tried || v > 8) check('guests');
  }));
  const notes = F('notes');
  notes.addEventListener('input', () => { $('#r-notes-count').textContent = `${notes.value.length} / 400`; });
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    tried = true;
    const bad = Object.keys(rules).filter((k) => !check(k));
    const done = $('#res-done');
    if (bad.length) {
      done.hidden = true;
      const k = bad[0];
      (k === 'time' ? (f.querySelector('input[name="time"]') || F('date')) : F(k)).focus();
      return;
    }
    const d = parse(F('date').value);
    const g = +F('guests').value;
    const menu = f.querySelector('input[name="menu"]:checked').nextElementSibling.textContent;
    done.innerHTML = `<p class="res__done-k">Request not sent</p><h3>Thank you, ${esc(F('name').value.trim().split(' ')[0])}.</h3><p>This is a portfolio demo, so nothing was sent and <strong>no table has been held</strong>.</p><p class="res__summary">${DAYS[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()]} · ${f.querySelector('input[name="time"]:checked').value} · ${g} ${g === 1 ? 'guest' : 'guests'} · ${esc(menu)}</p>`;
    done.hidden = false;
    done.focus();
  });
})();

window.emberReady = true;
