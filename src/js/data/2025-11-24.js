dataSetVersion = "2025-11-24"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Race",
    key: "race",
    tooltip: "Check this to restrict to certain races.",
    checked: false,
    sub: [
      { name: "sprite", key: "sprite" },
      { name: "werebeast", key: "werebeast" },
      { name: "Elf", key: "elf" },
      { name: "Witch", key: "witch" },
      { name: "Dragon", key: "dragon" },
      { name: "Phantom", key: "phantom" },
      { name: "Elemental", key: "elem" },
      { name: "Mystic", key: "mystic", tooltip: "Yomi"},
    ]
  },

  {
    name: "Filter by Personality",
    key: "personality",
    tooltip: "Check this to restrict to certain personalities (element).",
    checked: false,
    sub: [  
      { name: "Innocent", key: "innocent" },
      { name: "Composed", key: "composed" },
      { name: "Mad", key: "madness" },
      { name: "Depressed", key: "depressed" },
      { name: "Vivacious", key: "vivacious" },
      { name: "Resonance", key: "resonance", tooltip: "Uros" },
    ]
  },

  {
    name: "Global only",
    key: "global",
    tooltip: "Check this to remove units not yet released on Global.",
    checked: false
  },

  {
    name: "Remove Alts",
    key: "alt",
    tooltip: "Check this to remove alternative versions of characters.",
    checked: true
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "amelia",
    img: "amelia.webp",
    opts: {
        race: "elf",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "asia",
    img: "asia.webp",
    opts: {
        race: "elf",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "aya",
    img: "aya.webp",
    opts: {
        race: "witch",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "barong",
    img: "barong.webp",
    opts: {
        race: "phantom",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "benny",
    img: "benny.webp",
    opts: {
        race: "werebeast",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "caesar",
    img: "caesar.webp",
    opts: {
        race: "elemental",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "canta",
    img: "canta.webp",
    opts: {
        race: "sprite",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "diana-heyday",
    img: "diana-heyday.webp",
    opts: {
        race: "werebeast",
        personality: "composed",
        global: false,
        alt: true
    }
}, {
    name: "ed",
    img: "ed.webp",
    opts: {
        race: "elf",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "elena",
    img: "elena.webp",
    opts: {
        race: "elf",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "espi",
    img: "espi.webp",
    opts: {
        race: "phantom",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "fricle",
    img: "fricle.webp",
    opts: {
        race: "witch",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "gwynn",
    img: "gwynn.webp",
    opts: {
        race: "werebeast",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "jade",
    img: "jade.webp",
    opts: {
        race: "dragon",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "kommy-swimsuit",
    img: "kommy-swimsuit.webp",
    opts: {
        race: "werebeast",
        personality: "composed",
        global: false,
        alt: true
    }
}, {
    name: "layze",
    img: "layze.webp",
    opts: {
        race: "elf",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "lethe",
    img: "lethe.webp",
    opts: {
        race: "phantom",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "meluna",
    img: "meluna.webp",
    opts: {
        race: "elemental",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "patula",
    img: "patula.webp",
    opts: {
        race: "sprite",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "picora",
    img: "picora.webp",
    opts: {
        race: "witch",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "ricotta",
    img: "ricotta.webp",
    opts: {
        race: "sprite",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "sylla",
    img: "sylla.webp",
    opts: {
        race: "elemental",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "velvet",
    img: "velvet.webp",
    opts: {
        race: "witch",
        personality: "composed",
        global: true,
        alt: false
    }
},

{
    name: "asana",
    img: "asana.webp",
    opts: {
        race: "witch",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "ashur",
    img: "ashur.webp",
    opts: {
        race: "sprite",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "barie",
    img: "barie.webp",
    opts: {
        race: "witch",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "blanchet",
    img: "blanchet.webp",
    opts: {
        race: "elemental",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "chopi",
    img: "chopi.webp",
    opts: {
        race: "werebeast",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "festa",
    img: "festa.webp",
    opts: {
        race: "elf",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "hilde",
    img: "hilde.webp",
    opts: {
        race: "elf",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "joan",
    img: "joan.webp",
    opts: {
        race: "sprite",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "kidian",
    img: "kidian.webp",
    opts: {
        race: "dragon",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "kommy",
    img: "kommy.webp",
    opts: {
        race: "werebeast",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "leone",
    img: "leone.webp",
    opts: {
        race: "werebeast",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "levi",
    img: "levi.webp",
    opts: {
        race: "witch",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "orr",
    img: "orr.webp",
    opts: {
        race: "elf",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "posher",
    img: "posher.webp",
    opts: {
        race: "witch",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "rim",
    img: "rim.webp",
    opts: {
        race: "phantom",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "risty",
    img: "risty.webp",
    opts: {
        race: "elf",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "rohne-mayor",
    img: "rohne-mayor.webp",
    opts: {
        race: "elf",
        personality: "depressed",
        global: false,
        alt: true
    }
}, {
    name: "shasha",
    img: "shasha.webp",
    opts: {
        race: "sprite",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "snorky",
    img: "snorky.webp",
    opts: {
        race: "witch",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "veroo",
    img: "veroo.webp",
    opts: {
        race: "phantom",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "xxionx",
    img: "xxionx.webp",
    opts: {
        race: "phantom",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "yomi",
    img: "yomi.webp",
    opts: {
        race: "mystic",
        personality: "depressed",
        global: true,
        alt: false
    }
},

{
    name: "allet",
    img: "allet.webp",
    opts: {
        race: "elf",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "bigwood",
    img: "bigwood.webp",
    opts: {
        race: "elemental",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "daya",
    img: "daya.webp",
    opts: {
        race: "dragon",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "erpin",
    img: "erpin.webp",
    opts: {
        race: "sprite",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "gabia",
    img: "gabia.webp",
    opts: {
        race: "elemental",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "haley",
    img: "haley.webp",
    opts: {
        race: "elf",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "kathy",
    img: "kathy.webp",
    opts: {
        race: "elf",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "kyarot",
    img: "kyarot.webp",
    opts: {
        race: "sprite",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "kyuri",
    img: "kyuri.webp",
    opts: {
        race: "sprite",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "mago",
    img: "mago.webp",
    opts: {
        race: "werebeast",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "mayo-cool",
    img: "mayo-cool.webp",
    opts: {
        race: "sprite",
        personality: "innocence",
        global: false,
        alt: true
    }
}, {
    name: "mute",
    img: "mute.webp",
    opts: {
        race: "elemental",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "naia",
    img: "naia.webp",
    opts: {
        race: "elemental",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "opal",
    img: "opal.webp",
    opts: {
        race: "dragon",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "raika",
    img: "raika.webp",
    opts: {
        race: "elemental",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "ran",
    img: "ran.webp",
    opts: {
        race: "werebeast",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "rohne",
    img: "rohne.webp",
    opts: {
        race: "elf",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "sari",
    img: "sari.webp",
    opts: {
        race: "phantom",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "sherum",
    img: "sherum.webp",
    opts: {
        race: "witch",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "silphir",
    img: "silphir.webp",
    opts: {
        race: "dragon",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "speaki",
    img: "speaki.webp",
    opts: {
        race: "phantom",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "vivi",
    img: "vivi.webp",
    opts: {
        race: "dragon",
        personality: "innocence",
        global: true,
        alt: false
    }
},

{
    name: "alice",
    img: "alice.webp",
    opts: {
        race: "phantom",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "annette",
    img: "annette.webp",
    opts: {
        race: "dragon",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "belita",
    img: "belita.webp",
    opts: {
        race: "witch",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "chloe",
    img: "chloe.webp",
    opts: {
        race: "sprite",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "diana",
    img: "diana.webp",
    opts: {
        race: "werebeast",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "ifrit",
    img: "ifrit.webp",
    opts: {
        race: "elemental",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "leets",
    img: "leets.webp",
    opts: {
        race: "dragon",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "maestromk2",
    img: "maestromk2.webp",
    opts: {
        race: "elf",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "maison",
    img: "maison.webp",
    opts: {
        race: "phantom",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "mayo",
    img: "mayo.webp",
    opts: {
        race: "sprite",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "ner",
    img: "ner.webp",
    opts: {
        race: "sprite",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "neti",
    img: "neti.webp",
    opts: {
        race: "dragon",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "pira",
    img: "pira.webp",
    opts: {
        race: "dragon",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "polan",
    img: "polan.webp",
    opts: {
        race: "sprite",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "renewa",
    img: "renewa.webp",
    opts: {
        race: "elf",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "rim-chaos",
    img: "rim-chaos.webp",
    opts: {
        race: "phantom",
        personality: "madness",
        global: false,
        alt: true
    }
}, {
    name: "rollet",
    img: "rollet.webp",
    opts: {
        race: "witch",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "shaydi",
    img: "shaydi.webp",
    opts: {
        race: "phantom",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "sist",
    img: "sist.webp",
    opts: {
        race: "dragon",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "tig-hero",
    img: "tig-hero.webp",
    opts: {
        race: "werebeast",
        personality: "madness",
        global: false,
        alt: true
    }
}, {
    name: "yumimi",
    img: "yumimi.webp",
    opts: {
        race: "werebeast",
        personality: "madness",
        global: true,
        alt: false
    }
},

{
    name: "arco",
    img: "arco.webp",
    opts: {
        race: "elemental",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "bana",
    img: "bana.webp",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "beni",
    img: "beni.webp",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "butter",
    img: "butter.webp",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "canna",
    img: "canna.webp",
    opts: {
        race: "elf",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "carren",
    img: "carren.webp",
    opts: {
        race: "sprite",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "epica",
    img: "epica.webp",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "jubee",
    img: "jubee.webp",
    opts: {
        race: "elemental",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "makasha",
    img: "makasha.webp",
    opts: {
        race: "witch",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "marie",
    img: "marie.webp",
    opts: {
        race: "sprite",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "miro",
    img: "miro.webp",
    opts: {
        race: "elemental",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "momo",
    img: "momo.webp",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "mynx",
    img: "mynx.webp",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "rudd",
    img: "rudd.webp",
    opts: {
        race: "dragon",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "rufo",
    img: "rufo.webp",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "selline",
    img: "selline.webp",
    opts: {
        race: "phantom",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "shoupan",
    img: "shoupan.webp",
    opts: {
        race: "sprite",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "shuro",
    img: "shuro.webp",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "speaki-maid",
    img: "speaki-maid.webp",
    opts: {
        race: "phantom",
        personality: "vivacious",
        global: false,
        alt: true
    }
}, {
    name: "taida",
    img: "taida.webp",
    opts: {
        race: "elf",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "tig",
    img: "tig.webp",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "ui",
    img: "ui.webp",
    opts: {
        race: "elemental",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "vela",
    img: "vela.webp",
    opts: {
        race: "phantom",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "uros",
    img: "uros.webp",
    opts: {
        race: "werebeast",
        personality: "resonance",
        global: false,
        alt: false
    }
}
];
