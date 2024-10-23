// city-of-enernity.js

const locTitle = "Город Вечности";
const nw = "Северная стена";
const sw = "Южная стена";
const ew = "Восточная стена";
const ww = "Западная стена";

const locations = {
  "X49994-Y49994": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49994-Y49995": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49994-Y49996": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49994-Y49997": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49994-Y49998": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49994-Y49999": {
    title: locTitle,
    description: "Северные Врата",
    specialMark: "GATE",
    gateDirection: "north",
    iconImage: { icon: "./icon/north-gate.svg" },
    backgroundImage: "",
  },

  "X49994-Y50000": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49994-Y50001": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49994-Y50002": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49994-Y50003": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49994-Y50004": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49995-Y49994": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49995-Y49995": {
    title: locTitle,
    description: "Северо-западный угол стены",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49995-Y49996": {
    title: locTitle,
    description: nw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49995-Y49997": {
    title: locTitle,
    description: nw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49995-Y49998": {
    title: locTitle,
    description: nw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49995-Y49999": {
    title: locTitle,
    description: "Северный сад",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49995-Y50000": {
    title: locTitle,
    description: nw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49995-Y50001": {
    title: locTitle,
    description: nw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49995-Y50002": {
    title: locTitle,
    description: nw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49995-Y50003": {
    title: locTitle,
    description: "Северо-восточный угол стены",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49995-Y50004": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49996-Y49994": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49996-Y49995": {
    title: locTitle,
    description: ww,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49996-Y49996": {
    title: locTitle,
    description: "",
    specialMark: "assassin",
    iconImage: { icon: "./icon/assassin-guild.svg" },
    backgroundImage: "",
  },

  "X49996-Y49997": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49996-Y49998": {
    title: locTitle,
    description: "",
    specialMark: "herbalist",
    iconImage: { icon: "./icon/herbalist.svg" },
    backgroundImage: "",
  },

  "X49996-Y49999": {
    title: locTitle,
    description: "Дорога к северным воротам",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49996-Y50000": {
    title: locTitle,
    description: "",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49996-Y50001": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49996-Y50002": {
    title: locTitle,
    description: "",
    specialMark: "berserker",
    iconImage: { icon: "./icon/berserker-guild.svg" },
    backgroundImage: "",
  },

  "X49996-Y50003": {
    title: locTitle,
    description: ew,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49996-Y50004": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49997-Y49994": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49997-Y49995": {
    title: locTitle,
    description: ww,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49997-Y49996": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49997-Y49997": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49997-Y49998": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49997-Y49999": {
    title: locTitle,
    description: "Дорога к Северным Воротам",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49997-Y50000": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49997-Y50001": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49997-Y50002": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49997-Y50003": {
    title: locTitle,
    description: ew,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49997-Y50004": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49998-Y49994": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49998-Y49995": {
    title: locTitle,
    description: ww,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49998-Y49996": {
    title: locTitle,
    description: "",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49998-Y49997": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49998-Y49998": {
    title: locTitle,
    description: "",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49998-Y49999": {
    title: locTitle,
    description: "Площадь Покаяния",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49998-Y50000": {
    title: locTitle,
    description: "",
    specialMark: "shop",
    iconImage: { icon: "./icon/shop.svg" },
    backgroundImage: "",
  },

  "X49998-Y50001": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49998-Y50002": {
    title: locTitle,
    description: "",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49998-Y50003": {
    title: locTitle,
    description: ew,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49998-Y50004": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X49999-Y49994": {
    title: locTitle,
    description: "Западные Врата",
    specialMark: "GATE",
    gateDirection: "west",
    iconImage: { icon: "./icon/west-gate.svg" },
    backgroundImage: "",
  },

  "X49999-Y49995": {
    title: locTitle,
    description: "Сквер Западный",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49999-Y49996": {
    title: locTitle,
    description: "Дорога к Западным Воротам",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49999-Y49997": {
    title: locTitle,
    description: "Дорога к Западным Воротам",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49999-Y49998": {
    title: locTitle,
    description: "Площадь Святых",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49999-Y49999": {
    title: locTitle,
    description: "Звёздный храм",
    specialMark: "ST",
    iconImage: { icon: "createStarSVG", isCustom: true },
    backgroundImage: "",
  },

  "X49999-Y50000": {
    title: locTitle,
    description: "Площадь Духовности",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49999-Y50001": {
    title: locTitle,
    description: "Дорога к Восточным Воротам",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49999-Y50002": {
    title: locTitle,
    description: "Дорога к Восточным Воротам",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49999-Y50003": {
    title: locTitle,
    description: "Восточный Бульвар",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X49999-Y50004": {
    title: locTitle,
    description: "Восточные Врата",
    specialMark: "GATE",
    gateDirection: "east",
    iconImage: { icon: "./icon/east-gate.svg" },
    backgroundImage: "",
  },

  "X50000-Y49994": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50000-Y49995": {
    title: locTitle,
    description: ww,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50000-Y49996": {
    title: locTitle,
    description: "",
    specialMark: "forge",
    iconImage: { icon: "./icon/forge.svg" },
    backgroundImage: "",
  },

  "X50000-Y49997": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50000-Y49998": {
    title: locTitle,
    description: "",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50000-Y49999": {
    title: locTitle,
    description: "Площадь св.Марка",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50000-Y50000": {
    title: locTitle,
    description: "",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50000-Y50001": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50000-Y50002": {
    title: locTitle,
    description: "",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50000-Y50003": {
    title: locTitle,
    description: ew,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50000-Y50004": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50001-Y49994": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50001-Y49995": {
    title: locTitle,
    description: ww,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50001-Y49996": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50001-Y49997": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50001-Y49998": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50001-Y49999": {
    title: locTitle,
    description: "Дорога к южным воротам",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50001-Y50000": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50001-Y50001": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50001-Y50002": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50001-Y50003": {
    title: locTitle,
    description: ew,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50001-Y50004": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50002-Y49994": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50002-Y49995": {
    title: locTitle,
    description: ww,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50002-Y49996": {
    title: locTitle,
    description: "",
    specialMark: "barbarian",
    iconImage: { icon: "./icon/barbarian-guild.svg" },
    backgroundImage: "",
  },

  "X50002-Y49997": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50002-Y49998": {
    title: locTitle,
    description: "",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50002-Y49999": {
    title: locTitle,
    description: "Дорога к Южным Воротам",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50002-Y50000": {
    title: locTitle,
    description: "",
    specialMark: "coliseum",
    iconImage: { icon: "./icon/coliseum.svg" },
    backgroundImage: "",
  },

  "X50002-Y50001": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50002-Y50002": {
    title: locTitle,
    description: "",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50002-Y50003": {
    title: locTitle,
    description: ew,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50002-Y50004": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50003-Y49994": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50003-Y49995": {
    title: locTitle,
    description: "Юго-западный угол стены",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50003-Y49996": {
    title: locTitle,
    description: sw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50003-Y49997": {
    title: locTitle,
    description: sw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50003-Y49998": {
    title: locTitle,
    description: sw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50003-Y49999": {
    title: locTitle,
    description: "Южный Бульвар",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50003-Y50000": {
    title: locTitle,
    description: sw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50003-Y50001": {
    title: locTitle,
    description: sw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50003-Y50002": {
    title: locTitle,
    description: sw,
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50003-Y50003": {
    title: locTitle,
    description: "Юго-восточный угол стены",
    specialMark: "",
    iconImage: "",
    backgroundImage: "",
  },

  "X50003-Y50004": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50004-Y49994": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50004-Y49995": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50004-Y49996": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50004-Y49997": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50004-Y49998": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50004-Y49999": {
    title: locTitle,
    description: "Южные Врата",
    specialMark: "GATE",
    gateDirection: "south",
    iconImage: { icon: "./icon/south-gate.svg" },
    backgroundImage: "",
  },

  "X50004-Y50000": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50004-Y50001": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50004-Y50002": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50004-Y50003": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },

  "X50004-Y50004": {
    title: locTitle,
    description: "",
    specialMark: "BU",
    iconImage: "",
    backgroundImage: "",
  },
};

export { locations };
