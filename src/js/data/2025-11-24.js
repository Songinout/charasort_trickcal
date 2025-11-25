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
      { name: "Elemental", key: "elemental" },
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
    img: "amelia.jpg",
    opts: {
        race: "elf",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "asia",
    img: "asia.jpg",
    opts: {
        race: "elf",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "aya",
    img: "aya.jpg",
    opts: {
        race: "witch",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "barong",
    img: "barong.jpg",
    opts: {
        race: "phantom",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "benny",
    img: "benny.jpg",
    opts: {
        race: "werebeast",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "caesar",
    img: "caesar.jpg",
    opts: {
        race: "elemental",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "canta",
    img: "canta.jpg",
    opts: {
        race: "sprite",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "diana-heyday",
    img: "diana-heyday.jpg",
    opts: {
        race: "werebeast",
        personality: "composed",
        global: false,
        alt: true
    }
}, {
    name: "ed",
    img: "ed.jpg",
    opts: {
        race: "elf",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "elena",
    img: "elena.jpg",
    opts: {
        race: "elf",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "espi",
    img: "espi.jpg",
    opts: {
        race: "phantom",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "fricle",
    img: "fricle.jpg",
    opts: {
        race: "witch",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "gwynn",
    img: "gwynn.jpg",
    opts: {
        race: "werebeast",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "jade",
    img: "jade.jpg",
    opts: {
        race: "dragon",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "kommy-swimsuit",
    img: "kommy-swimsuit.jpg",
    opts: {
        race: "werebeast",
        personality: "composed",
        global: false,
        alt: true
    }
}, {
    name: "layze",
    img: "layze.jpg",
    opts: {
        race: "elf",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "lethe",
    img: "lethe.jpg",
    opts: {
        race: "phantom",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "meluna",
    img: "meluna.jpg",
    opts: {
        race: "elemental",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "patula",
    img: "patula.jpg",
    opts: {
        race: "sprite",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "picora",
    img: "picora.jpg",
    opts: {
        race: "witch",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "ricotta",
    img: "ricotta.jpg",
    opts: {
        race: "sprite",
        personality: "composed",
        global: false,
        alt: false
    }
}, {
    name: "sylla",
    img: "sylla.jpg",
    opts: {
        race: "elemental",
        personality: "composed",
        global: true,
        alt: false
    }
}, {
    name: "velvet",
    img: "velvet.jpg",
    opts: {
        race: "witch",
        personality: "composed",
        global: true,
        alt: false
    }
},

{
    name: "asana",
    img: "asana.jpg",
    opts: {
        race: "witch",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "ashur",
    img: "ashur.jpg",
    opts: {
        race: "sprite",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "barie",
    img: "barie.jpg",
    opts: {
        race: "witch",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "blanchet",
    img: "blanchet.jpg",
    opts: {
        race: "elemental",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "chopi",
    img: "chopi.jpg",
    opts: {
        race: "werebeast",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "festa",
    img: "festa.jpg",
    opts: {
        race: "elf",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "hilde",
    img: "hilde.jpg",
    opts: {
        race: "elf",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "joan",
    img: "joan.jpg",
    opts: {
        race: "sprite",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "kidian",
    img: "kidian.jpg",
    opts: {
        race: "dragon",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "kommy",
    img: "kommy.jpg",
    opts: {
        race: "werebeast",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "leone",
    img: "leone.jpg",
    opts: {
        race: "werebeast",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "levi",
    img: "levi.jpg",
    opts: {
        race: "witch",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "orr",
    img: "orr.jpg",
    opts: {
        race: "elf",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "posher",
    img: "posher.jpg",
    opts: {
        race: "witch",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "rim",
    img: "rim.jpg",
    opts: {
        race: "phantom",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "risty",
    img: "risty.jpg",
    opts: {
        race: "elf",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "rohne-mayor",
    img: "rohne-mayor.jpg",
    opts: {
        race: "elf",
        personality: "depressed",
        global: false,
        alt: true
    }
}, {
    name: "shasha",
    img: "shasha.jpg",
    opts: {
        race: "sprite",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "snorky",
    img: "snorky.jpg",
    opts: {
        race: "witch",
        personality: "depressed",
        global: false,
        alt: false
    }
}, {
    name: "veroo",
    img: "veroo.jpg",
    opts: {
        race: "phantom",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "xxionx",
    img: "xxionx.jpg",
    opts: {
        race: "phantom",
        personality: "depressed",
        global: true,
        alt: false
    }
}, {
    name: "yomi",
    img: "yomi.jpg",
    opts: {
        race: "mystic",
        personality: "depressed",
        global: true,
        alt: false
    }
},

{
    name: "allet",
    img: "allet.jpg",
    opts: {
        race: "elf",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "bigwood",
    img: "bigwood.jpg",
    opts: {
        race: "elemental",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "daya",
    img: "daya.jpg",
    opts: {
        race: "dragon",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "erpin",
    img: "erpin.jpg",
    opts: {
        race: "sprite",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "gabia",
    img: "gabia.jpg",
    opts: {
        race: "elemental",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "haley",
    img: "haley.jpg",
    opts: {
        race: "elf",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "kathy",
    img: "kathy.jpg",
    opts: {
        race: "elf",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "kyarot",
    img: "kyarot.jpg",
    opts: {
        race: "sprite",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "kyuri",
    img: "kyuri.jpg",
    opts: {
        race: "sprite",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "mago",
    img: "mago.jpg",
    opts: {
        race: "werebeast",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "mayo-cool",
    img: "mayo-cool.jpg",
    opts: {
        race: "sprite",
        personality: "innocence",
        global: false,
        alt: true
    }
}, {
    name: "mute",
    img: "mute.jpg",
    opts: {
        race: "elemental",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "naia",
    img: "naia.jpg",
    opts: {
        race: "elemental",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "opal",
    img: "opal.jpg",
    opts: {
        race: "dragon",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "raika",
    img: "raika.jpg",
    opts: {
        race: "elemental",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "ran",
    img: "ran.jpg",
    opts: {
        race: "werebeast",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "rohne",
    img: "rohne.jpg",
    opts: {
        race: "elf",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "sari",
    img: "sari.jpg",
    opts: {
        race: "phantom",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "sherum",
    img: "sherum.jpg",
    opts: {
        race: "witch",
        personality: "innocence",
        global: false,
        alt: false
    }
}, {
    name: "silphir",
    img: "silphir.jpg",
    opts: {
        race: "dragon",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "speaki",
    img: "speaki.jpg",
    opts: {
        race: "phantom",
        personality: "innocence",
        global: true,
        alt: false
    }
}, {
    name: "vivi",
    img: "vivi.jpg",
    opts: {
        race: "dragon",
        personality: "innocence",
        global: true,
        alt: false
    }
},

{
    name: "alice",
    img: "alice.jpg",
    opts: {
        race: "phantom",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "annette",
    img: "annette.jpg",
    opts: {
        race: "dragon",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "belita",
    img: "belita.jpg",
    opts: {
        race: "witch",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "chloe",
    img: "chloe.jpg",
    opts: {
        race: "sprite",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "diana",
    img: "diana.jpg",
    opts: {
        race: "werebeast",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "ifrit",
    img: "ifrit.jpg",
    opts: {
        race: "elemental",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "leets",
    img: "leets.jpg",
    opts: {
        race: "dragon",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "maestromk2",
    img: "maestromk2.jpg",
    opts: {
        race: "elf",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "maison",
    img: "maison.jpg",
    opts: {
        race: "phantom",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "mayo",
    img: "mayo.jpg",
    opts: {
        race: "sprite",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "ner",
    img: "ner.jpg",
    opts: {
        race: "sprite",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "neti",
    img: "neti.jpg",
    opts: {
        race: "dragon",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "pira",
    img: "pira.jpg",
    opts: {
        race: "dragon",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "polan",
    img: "polan.jpg",
    opts: {
        race: "sprite",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "renewa",
    img: "renewa.jpg",
    opts: {
        race: "elf",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "rim-chaos",
    img: "rim-chaos.jpg",
    opts: {
        race: "phantom",
        personality: "madness",
        global: false,
        alt: true
    }
}, {
    name: "rollet",
    img: "rollet.jpg",
    opts: {
        race: "witch",
        personality: "madness",
        global: false,
        alt: false
    }
}, {
    name: "shaydi",
    img: "shaydi.jpg",
    opts: {
        race: "phantom",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "sist",
    img: "sist.jpg",
    opts: {
        race: "dragon",
        personality: "madness",
        global: true,
        alt: false
    }
}, {
    name: "tig-hero",
    img: "tig-hero.jpg",
    opts: {
        race: "werebeast",
        personality: "madness",
        global: false,
        alt: true
    }
}, {
    name: "yumimi",
    img: "yumimi.jpg",
    opts: {
        race: "werebeast",
        personality: "madness",
        global: true,
        alt: false
    }
},

{
    name: "arco",
    img: "arco.jpg",
    opts: {
        race: "elemental",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "bana",
    img: "bana.jpg",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "beni",
    img: "beni.jpg",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "butter",
    img: "butter.jpg",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "canna",
    img: "canna.jpg",
    opts: {
        race: "elf",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "carren",
    img: "carren.jpg",
    opts: {
        race: "sprite",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "epica",
    img: "epica.jpg",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "jubee",
    img: "jubee.jpg",
    opts: {
        race: "elemental",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "makasha",
    img: "makasha.jpg",
    opts: {
        race: "witch",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "marie",
    img: "marie.jpg",
    opts: {
        race: "sprite",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "miro",
    img: "miro.jpg",
    opts: {
        race: "elemental",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "momo",
    img: "momo.jpg",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "mynx",
    img: "mynx.jpg",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "rudd",
    img: "rudd.jpg",
    opts: {
        race: "dragon",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "rufo",
    img: "rufo.jpg",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "selline",
    img: "selline.jpg",
    opts: {
        race: "phantom",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "shoupan",
    img: "shoupan.jpg",
    opts: {
        race: "sprite",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "shuro",
    img: "shuro.jpg",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "speaki-maid",
    img: "speaki-maid.jpg",
    opts: {
        race: "phantom",
        personality: "vivacious",
        global: false,
        alt: true
    }
}, {
    name: "taida",
    img: "taida.jpg",
    opts: {
        race: "elf",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "tig",
    img: "tig.jpg",
    opts: {
        race: "werebeast",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "ui",
    img: "ui.jpg",
    opts: {
        race: "elemental",
        personality: "vivacious",
        global: true,
        alt: false
    }
}, {
    name: "vela",
    img: "vela.jpg",
    opts: {
        race: "phantom",
        personality: "vivacious",
        global: false,
        alt: false
    }
}, {
    name: "uros",
    img: "uros.jpg",
    opts: {
        race: "werebeast",
        personality: "resonance",
        global: false,
        alt: false
    }
}
];
