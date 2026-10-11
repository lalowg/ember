# EMBER — Taste the Story

A chef-led wood-fire restaurant presented as a candlelit, illustrated menu. The first screen is the tasting itself: seven courses you can follow from the **raw ingredient**, **into the fire** and **onto the plate**, each drawn by hand in SVG and choreographed with CSS.

Production URL: `https://ember-pearl-eta.vercel.app`

> Fictional concept brand, built as a portfolio project. EMBER is not a real restaurant; menu, prices, allergens, address and hours are illustrative.

---

## Concept

Restaurant sites usually lead with a photo of a dining room and a PDF menu. EMBER leads with the story of a dish. Every course on the seven-course Fire Menu has three states on one stage:

| Step | The stage | The words |
|---|---|---|
| **Ingredient** | Raw ingredients laid out on a slate, each with a hand-set label | What each ingredient is and where it comes in |
| **Fire** | The same ingredients move onto a grill over glowing coals; flames flicker, smoke rises and the food visibly chars | The technique: embers, hay, pine smoke, seven hours over oak |
| **Plate** | A stoneware plate swings in; the ingredients settle into the finished dish while sauces draw themselves on and garnishes appear | How it is served |

Moving to the next course slides the whole table sideways, so the menu becomes a horizontal journey from *Ash & Cream* to *Ember Plum*.

## Brand & positioning

- **Promise:** one hearth, lit every morning, cooks everything. No gas line.
- **Chef:** Isla Varga (fictional), who turned a disused foundry into a 32-seat dining room around a single fire.
- **Tone:** warm, sensory and exact about technique; no awards, reviews or press quotes.
- **Conversion:** a reservation inquiry with honest feedback: the request is not sent and no table is held.

## Audience

Food-curious diners (28–60) who choose restaurants for the experience and the craft, read menus closely and care about how things are cooked, as well as guests with dietary needs who want clarity before they book.

## Art direction

- **Palette:** char `#120D0A`, ember `#D9572B`, cream `#F3E9DC`, brass `#B08D57`, with ember-hot `#F08A3A` for glow and cream-dim `#CDBFAE` for secondary text.
- **Light:** candlelight is the only light source. The hero and the room illustration carry a warm radial glow that flickers subtly (a scripted noise value written to a CSS variable). A fine warm grain sits over the page.
- **Illustration:** 22 ingredients drawn in SVG with layered gradients, highlights and cast shadows (leek, smoked cream, hazelnuts, scallop, apple, butter, samphire, beetroot, yoghurt, rye, dill, sourdough, sea salt, ceps, egg yolk, pine, lamb shoulder, onion, black garlic, plums, honeycomb and hay). Each has a "char" layer (grill marks, sear or crackled skin) that fades in over the fire.
- **Layout:** an editorial menu with dotted leaders, brass double rules and Roman numerals; generous dark space; one accent colour.
- **Logo:** an original mark (a flame inside a brass plate ring) with a stroke-built serif wordmark, so it renders without web fonts. `favicon.svg` is the flame on char.

## Typography

- **Gloock** (400) for display: headlines, course names, dish names, numerals, prices and stage labels.
- **Work Sans** (300–600, with italics) for text, descriptions and controls.
- Loaded from Google Fonts with `display=swap`. Headings use `text-wrap: balance` and never break mid-word.

## Motion language

- **Cook, don't fade:** ingredients travel between their raw, fire and plate positions on a slow-in, fast-out curve with a small stagger, the plate swings in with a quarter turn, sauces draw on and char layers bloom.
- **Horizontal service:** a new course slides in from the side as the previous one leaves.
- **Ignite reveals:** headings appear from an ember-orange blur and cool to cream, like a coal catching.
- **The day at the hearth:** as you scroll the timeline, the sticky hearth's flames grow and settle from first light (06:30) to the banked embers (23:00).
- **Candles:** gentle flicker in the hero glow and the room illustration, paused when off-screen or when the tab is hidden.

## Signature interaction: how to use it

1. On the stage, choose **Ingredient**, **Fire** or **Plate**, or press the ember button (**Into the fire → To the plate → Next: …**). The back arrow goes the other way.
2. Jump to any course on the numbered rail along the bottom (I–VII).
3. With the stage focused, use **← / →**. On touch screens, **swipe** left or right on the stage.
4. The text beside the stage (course, dish, step and description) updates with every move and is announced to screen readers.

## Other features

- **The fire:** the chef's story and a five-moment timeline of the hearth's day, with a sticky hearth that responds.
- **Menu:** fifteen à la carte dishes in five courses, filterable by course and by dietary need (vegetarian, pescatarian, without gluten, without nuts; combinable). Each dish opens a dialog with its illustration, price, dietary line, allergens and a drink pairing.
- **Pantry:** a horizontal, snap-scrolling track of seasonal ingredients with prev / next buttons.
- **The room:** an illustrated candlelit dining room with address, hours, private dining and access notes.
- **Reservations:** date (tomorrow to 90 days ahead, open Wednesday to Sunday, with clear errors for closed days), times that change with the day (Sunday lunch, evening service otherwise), a guest stepper (more than eight requires the private kiln room), menu choice, name, email and notes. All validation is inline and accessible.

## Tech

- Static HTML, CSS and native ES modules, no build step and no libraries.
- `art.js` (ingredient illustrations, scenery, garnishes, mini plates), `data.js` (courses with per-step coordinates, menu, pantry, timeline), `main.js` (stage, menu, dialog, form and reveals).
- Stage transitions are pure CSS: each ingredient carries its three positions as custom properties (`--rx … --ps`) and the stage's `data-step` selects which set applies.

## Local development

```bash
npx serve .
```

Then open the printed local URL.

## Accessibility & performance

- Landmarks, one `<h1>`, skip link and visible focus rings. Every stage action is a real button; the stage region also accepts arrow keys and has a dynamic accessible description.
- The dish dialog uses the native `<dialog>` element (focus is moved in, Escape closes it, and focus returns to the dish).
- Live regions announce course changes and menu counts; form errors are linked with `aria-describedby` and `aria-invalid`.
- `prefers-reduced-motion: reduce`: course changes and step changes happen instantly, with no flame, smoke or candle animation and no ignite blur.
- Flame and smoke animations run only on the Fire step and only while the stage is on screen; the candle loop runs only while its section is visible.
- Contrast: ember on char is 4.8:1 and brass on char 6.2:1; ember buttons use char text.

## Known limitations

- Illustrations are stylised, not photographic, by design.
- Availability is not checked; any open-day slot can be requested because nothing is booked.
- Allergen information is illustrative for a fictional kitchen.

## Credit

Designed & built by Saad Bashir — https://www.linkedin.com/in/saadbashirmarketing/
