// EMBER — menu content. Prices are illustrative; allergen notes are examples for a fictional restaurant.

// Each ingredient position is [x, y, rotation, scale] in the 800 × 600 stage for the three steps.
export const COURSES = [
  {
    no: 'I', name: 'Ash & Cream', dish: 'Leek baked in the embers, smoked cream, hazelnut',
    raw: 'A whole winter leek, cream smoked over beech, and hazelnuts toasted in the pan.',
    fire: 'The leek is buried in the embers for forty minutes until the outside is black. We peel away the burnt layers to reach a silk-soft, steaming heart.',
    plate: 'Served warm on a pool of smoked cream, finished with cracked hazelnut and a few drops of leek-top oil.',
    ings: [
      { id: 'leek', label: 'Leek', note: 'whole, roots on', raw: [220, 286, 0, 0.86], lx: 235, fire: [385, 388, -4, 0.8], plate: [400, 296, -18, 0.85] },
      { id: 'cream', label: 'Cream', note: 'smoked over beech', raw: [470, 283, 0, 1.05], lx: 470, fire: [600, 320, 0, 0.6], plate: [398, 318, 0, 1.3] },
      { id: 'hazelnut', label: 'Hazelnut', note: 'toasted', raw: [636, 280, 0, 1.05], lx: 634, fire: [228, 404, 0, 0.75], plate: [476, 372, 0, 0.5] },
    ],
  },
  {
    no: 'II', name: 'Tide', dish: 'Scallop in its shell, brown butter, apple, sea herbs',
    raw: 'A hand-dived scallop still in its shell, cultured butter, a sharp green apple and salty samphire.',
    fire: 'The scallop goes onto the coals in its own shell. Butter foams and browns beside it, and the meat is basted for barely a minute.',
    plate: 'Returned to the plate with nutty brown butter, matchsticks of raw apple for brightness and a tangle of sea herbs.',
    ings: [
      { id: 'scallop', label: 'Scallop', note: 'in the shell', raw: [198, 291, 0, 1.05], lx: 198, fire: [402, 372, 0, 0.9], plate: [400, 296, 10, 1.05] },
      { id: 'butter', label: 'Butter', note: 'cultured', raw: [354, 295, 0, 1.05], lx: 354, fire: [286, 398, 0, 0.6], plate: [340, 230, 0, 0] },
      { id: 'apple', label: 'Apple', note: 'tart, green', raw: [476, 294, 0, 1.05], lx: 478, fire: [540, 398, 0, 0.6], plate: [296, 352, 0, 0.38] },
      { id: 'samphire', label: 'Samphire', note: 'from the shore', raw: [625, 283, 0, 1.05], lx: 621, fire: [640, 322, 0, 0.6], plate: [500, 372, 20, 0.6] },
    ],
  },
  {
    no: 'III', name: 'Root', dish: 'Beetroot roasted in hay, cultured yoghurt, rye, dill',
    raw: 'Late-season beetroot with its leaves, thick cultured yoghurt, dark rye and a bunch of dill.',
    fire: 'Wrapped in hay and set over a slow fire, the beetroot chars outside while its flesh turns to velvet. The hay perfumes everything it touches.',
    plate: 'Cut into wedges on a swoosh of cold yoghurt, scattered with toasted rye crumbs and torn dill.',
    ings: [
      { id: 'beetroot', label: 'Beetroot', note: 'leaves on', raw: [195, 300, 0, 0.94], lx: 192, fire: [402, 368, 0, 0.82], plate: [396, 292, 0, 0.75] },
      { id: 'yoghurt', label: 'Yoghurt', note: 'cultured', raw: [351, 283, 0, 1.05], lx: 351, fire: [590, 326, 0, 0.55], plate: [420, 312, 0, 1.15] },
      { id: 'rye', label: 'Rye', note: 'for the crumb', raw: [494, 279, 0, 1.05], lx: 494, fire: [268, 398, -70, 0.6], plate: [300, 330, -80, 0] },
      { id: 'dill', label: 'Dill', note: 'just picked', raw: [635, 287, 0, 1.05], lx: 633, fire: [652, 344, 0, 0.5], plate: [478, 246, 30, 0.55] },
    ],
  },
  {
    no: 'IV', name: 'Hearth Bread', dish: 'Sourdough baked on the hearth stone, smoked butter, sea salt',
    raw: 'A three-day sourdough, butter cold-smoked overnight and flaky sea salt.',
    fire: 'The loaf bakes directly on the hearth stone in the falling heat after the coals are pushed back, so the crust blisters and darkens.',
    plate: 'Torn at the table, with a quenelle of smoked butter and a pinch of salt.',
    ings: [
      { id: 'bread', label: 'Sourdough', note: 'three-day ferment', raw: [263, 280, 0, 1.05], lx: 263, fire: [402, 370, 0, 0.85], plate: [380, 298, 0, 0.95] },
      { id: 'butter', label: 'Butter', note: 'cold-smoked', raw: [425, 295, 0, 1.05], lx: 425, fire: [602, 328, 0, 0.6], plate: [504, 364, 0, 0.55] },
      { id: 'salt', label: 'Sea salt', note: 'flakes', raw: [562, 282, 0, 1.05], lx: 562, fire: [238, 402, 0, 0.6], plate: [300, 382, 0, 0.35] },
    ],
  },
  {
    no: 'V', name: 'Forest Floor', dish: 'Ceps grilled over pine, warm egg yolk',
    raw: 'Firm autumn ceps, a single golden yolk and a sprig of young pine.',
    fire: 'The mushrooms are grilled over pine branches for a resinous smoke. The yolk is warmed gently in the residual heat until it just begins to thicken.',
    plate: 'Sliced thick, glossed with the yolk at the table, with a few pine needles for scent.',
    ings: [
      { id: 'mushroom', label: 'Ceps', note: 'autumn', raw: [266, 283, 0, 1.05], lx: 266, fire: [402, 372, 0, 0.85], plate: [368, 306, -10, 0.85] },
      { id: 'yolk', label: 'Egg yolk', note: 'one per guest', raw: [429, 282, 0, 1.05], lx: 429, fire: [592, 330, 0, 0.6], plate: [472, 298, 0, 0.7] },
      { id: 'pine', label: 'Pine', note: 'young tips', raw: [563, 286, 0, 1.05], lx: 563, fire: [278, 400, 80, 0.7], plate: [420, 384, 60, 0.5] },
    ],
  },
  {
    no: 'VI', name: 'Field', dish: 'Lamb shoulder, seven hours over oak, charred onion, black garlic',
    raw: 'A shoulder of hogget on the bone, sweet onions and black garlic aged for weeks until it tastes of liquorice.',
    fire: 'The shoulder hangs high over an oak fire for seven hours, then rests on vine cuttings. Onions are pushed into the coals until their centres collapse.',
    plate: 'Pulled from the bone and laid over the charred onion petals, with black garlic purée and the resting juices.',
    ings: [
      { id: 'lamb', label: 'Lamb shoulder', note: 'on the bone', raw: [225, 284, 0, 1.05], lx: 239, fire: [402, 368, 0, 0.82], plate: [396, 298, -12, 0.85] },
      { id: 'onion', label: 'Onion', note: 'sweet', raw: [422, 284, 0, 1.05], lx: 422, fire: [262, 402, 0, 0.6], plate: [298, 362, 0, 0.45] },
      { id: 'garlic', label: 'Black garlic', note: 'aged', raw: [583, 284, 0, 1.05], lx: 583, fire: [592, 330, 0, 0.55], plate: [502, 372, 0, 0.35] },
    ],
  },
  {
    no: 'VII', name: 'Ember Plum', dish: 'Plum roasted in the dying coals, honey, toasted hay ice cream',
    raw: 'Late plums at their darkest, raw honey and a handful of sweet meadow hay.',
    fire: 'As the fire dies, the plums are nestled into the last coals until their skins split. The hay is toasted and steeped in cream for the ice cream.',
    plate: 'Warm plum halves glazed with honey, beside a quenelle of ice cream that tastes of a summer field.',
    ings: [
      { id: 'plum', label: 'Plums', note: 'late season', raw: [232, 286, 0, 1.05], lx: 243, fire: [402, 374, 0, 0.85], plate: [380, 300, 0, 0.95] },
      { id: 'honey', label: 'Honey', note: 'in the comb', raw: [385, 259, 0, 1.05], lx: 389, fire: [592, 330, 0, 0.55], plate: [484, 248, 0, 0.35] },
      { id: 'hay', label: 'Hay', note: 'for the ice cream', raw: [546, 290, 0, 1.05], lx: 546, fire: [280, 398, -80, 0.7], plate: [470, 370, 20, 0] },
    ],
  },
];

// À la carte. diet: v = vegetarian, f = fish/shellfish, m = meat. gf = no gluten-containing ingredients. nuts = contains nuts.
export const MENU = [
  { id: 'almonds', cat: 'Snacks', name: 'Ember-roasted almonds', desc: 'Smoked salt, rosemary', price: 6, diet: 'v', gf: true, nuts: true, art: ['hazelnut', 'salt'], pairing: 'A dry fino sherry', allergens: ['Nuts'] },
  { id: 'bread', cat: 'Snacks', name: 'Hearth bread', desc: 'Three-day sourdough, smoked butter', price: 7, diet: 'v', gf: false, nuts: false, art: ['bread', 'butter'], pairing: 'Our house cider', allergens: ['Gluten', 'Milk'] },
  { id: 'oyster', cat: 'Snacks', name: 'Oyster', desc: 'Fermented apple, dill oil', price: 5, unit: 'each', diet: 'f', gf: true, nuts: false, art: ['apple', 'dill'], pairing: 'A crisp Muscadet', allergens: ['Molluscs'] },
  { id: 'padron', cat: 'Snacks', name: 'Charred padrón peppers', desc: 'Whey, flaked salt', price: 8, diet: 'v', gf: true, nuts: false, art: ['samphire', 'salt'], pairing: 'A pale ale', allergens: ['Milk'] },
  { id: 'leek', cat: 'From the fire', name: 'Leek baked in the embers', desc: 'Smoked cream, hazelnut, leek-top oil', price: 16, diet: 'v', gf: true, nuts: true, art: ['leek', 'cream', 'hazelnut'], pairing: 'An oaked Chardonnay', allergens: ['Milk', 'Nuts'] },
  { id: 'beet', cat: 'From the fire', name: 'Beetroot roasted in hay', desc: 'Cultured yoghurt, rye crumb, dill', price: 15, diet: 'v', gf: false, nuts: false, art: ['beetroot', 'yoghurt', 'dill'], pairing: 'A chilled Gamay', allergens: ['Milk', 'Gluten'] },
  { id: 'ceps', cat: 'From the fire', name: 'Ceps over pine', desc: 'Warm egg yolk, pine salt', price: 19, diet: 'v', gf: true, nuts: false, art: ['mushroom', 'yolk', 'pine'], pairing: 'An aged Nebbiolo', allergens: ['Egg'] },
  { id: 'scallop', cat: 'Sea', name: 'Scallop in its shell', desc: 'Brown butter, apple, sea herbs', price: 22, diet: 'f', gf: true, nuts: false, art: ['scallop', 'apple', 'samphire'], pairing: 'A mineral Chablis', allergens: ['Molluscs', 'Milk'] },
  { id: 'mackerel', cat: 'Sea', name: 'Mackerel over vine cuttings', desc: 'Roasted rhubarb, horseradish cream', price: 21, diet: 'f', gf: true, nuts: false, art: ['onion', 'cream'], pairing: 'A dry Riesling', allergens: ['Fish', 'Milk'] },
  { id: 'lamb', cat: 'Field', name: 'Lamb shoulder, seven hours', desc: 'Charred onion, black garlic, resting juices', price: 34, diet: 'm', gf: true, nuts: false, art: ['lamb', 'onion', 'garlic'], pairing: 'A Syrah from the northern Rhône', allergens: ['Sulphites'] },
  { id: 'rib', cat: 'Field', name: 'Dry-aged beef rib, for two', desc: 'Bone-marrow butter, ember potatoes', price: 78, unit: 'for two', diet: 'm', gf: true, nuts: false, art: ['lamb', 'butter'], pairing: 'A structured Cabernet blend', allergens: ['Milk'] },
  { id: 'celeriac', cat: 'Field', name: 'Coal-roasted celeriac', desc: 'Brown butter, walnut, sage', price: 24, diet: 'v', gf: true, nuts: true, art: ['onion', 'hazelnut', 'butter'], pairing: 'A white Burgundy', allergens: ['Milk', 'Nuts'] },
  { id: 'plum', cat: 'Sweet', name: 'Ember plum', desc: 'Honey, toasted hay ice cream', price: 12, diet: 'v', gf: true, nuts: false, art: ['plum', 'honey', 'hay'], pairing: 'A late-harvest Riesling', allergens: ['Milk', 'Egg'] },
  { id: 'tart', cat: 'Sweet', name: 'Burnt honey tart', desc: 'Cultured cream', price: 11, diet: 'v', gf: false, nuts: false, art: ['honey', 'cream'], pairing: 'A ten-year tawny port', allergens: ['Gluten', 'Milk', 'Egg'] },
  { id: 'choc', cat: 'Sweet', name: 'Smoked chocolate', desc: 'Hazelnut, sea salt', price: 12, diet: 'v', gf: true, nuts: true, art: ['hazelnut', 'salt'], pairing: 'A Pedro Ximénez', allergens: ['Milk', 'Nuts', 'Soy'] },
];

export const CATS = ['All', 'Snacks', 'From the fire', 'Sea', 'Field', 'Sweet'];

export const PANTRY = [
  { id: 'leek', name: 'Leek', months: 'Oct–Mar', note: 'Buried whole in the embers. The outer layers burn so the heart can steam.' },
  { id: 'scallop', name: 'Scallop', months: 'Oct–Mar', note: 'Cooked in its own shell, which becomes the pan and then the plate.' },
  { id: 'beetroot', name: 'Beetroot', months: 'Jul–Dec', note: 'Wrapped in hay for a slow roast that tastes faintly of summer grass.' },
  { id: 'mushroom', name: 'Ceps', months: 'Aug–Nov', note: 'Grilled over pine for resin and smoke, then glossed with yolk.' },
  { id: 'plum', name: 'Plum', months: 'Aug–Oct', note: 'Nestled into the last coals of the night until the skins split.' },
  { id: 'apple', name: 'Apple', months: 'Sep–Feb', note: 'Kept raw and sharp to cut through brown butter and smoke.' },
  { id: 'honey', name: 'Honey', months: 'All year', note: 'Burnt deliberately for the tart, raw for glazing plums.' },
  { id: 'hay', name: 'Hay', months: 'All year', note: 'Toasted and steeped in cream. It is the taste of a field in June.' },
];

export const DAY = [
  { t: '06:30', title: 'The wood arrives', text: 'Oak for long heat, beech for smoke, vine cuttings for a quick, fragrant flame. Each is stacked by the hearth according to what it will cook.', heat: 0.1 },
  { t: '11:00', title: 'The fire is laid', text: 'Isla lights the hearth herself. For the first hours it is all flame and noise, too fierce to cook on. The bread dough rests beside it.', heat: 0.95 },
  { t: '15:00', title: 'The white hour', text: 'The flames settle into a bed of glowing coals. This is when the lamb goes up and the leeks go into the ashes.', heat: 0.7 },
  { t: '18:30', title: 'First guests', text: 'Coals are raked into zones: fierce for searing, gentle for warming, dying embers for the plums. Every dish has its place on the fire.', heat: 0.55 },
  { t: '23:00', title: 'Embers banked', text: 'The last coals are covered in ash to keep them alive overnight. Tomorrow’s bread will bake in what remains.', heat: 0.2 },
];

export const OPEN_DAYS = [0, 3, 4, 5, 6]; // Sun, Wed–Sat
export const SLOTS = {
  evening: ['18:00', '18:30', '19:00', '20:30', '21:00'],
  lunch: ['12:30', '13:00', '13:30', '14:00'],
};
