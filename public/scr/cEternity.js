import svgIcons from "../icon/maps/c/enernity/enernity_svgPack.json";

function createSVG(iconName) {
  console.log(`Creating SVG for icon: ${iconName}`);
  const svgString = svgIcons[iconName];
  if (!svgString) {
    console.error(`Icon "${iconName}" not found in svgIcons`);
    return null;
  }
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
  return svgDoc.documentElement;
}

const locTitle = "Город Вечности";
const nw = "Северная стена";
const sw = "Южная стена";
const ew = "Восточная стена";
const ww = "Западная стена";

const locations = {
  "X49994-Y49999": {
    title: locTitle,
    description: "Северные Врата",
    specialTeg: "north-gate",
    backgroundImage: "",
  },

  "X49996-Y49996": {
    title: locTitle,
    description: "",
    specialTeg: "assassin-guild",
    backgroundImage: "",
  },

  "X49996-Y49998": {
    title: locTitle,
    description: "",
    specialTeg: "herbalist",
    backgroundImage: "",
  },

  "X49996-Y50002": {
    title: locTitle,
    description: "",
    specialTeg: "berserker-guild",
    backgroundImage: "",
  },

  "X49998-Y50000": {
    title: locTitle,
    description: "",
    specialTeg: "shop",
    backgroundImage: "",
  },

  "X49999-Y49994": {
    title: locTitle,
    description: "Западные Врата",
    specialTeg: "west-gate",
    backgroundImage: "",
  },

  "X49999-Y49999": {
    title: locTitle,
    description: "Звёздный храм",
    specialTeg: "star",
    backgroundImage: "",
  },
  "X49999-Y50004": {
    title: locTitle,
    description: "Восточные Врата",
    specialTeg: "east-gate",
    backgroundImage: "",
  },
  "X50002-Y49996": {
    title: locTitle,
    description: "",
    specialTeg: "barbarian-guild",
    backgroundImage: "",
  },

  "X50002-Y50000": {
    title: locTitle,
    description: "Колизей",
    specialTeg: "coliseum",
    backgroundImage: "",
  },

  "X50004-Y49999": {
    title: locTitle,
    description: "Южные Врата",
    specialTeg: "south-gate",
    backgroundImage: "",
  },

  "X50002-Y49997": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49994-Y49994": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49994-Y49995": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49994-Y49996": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49994-Y49997": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49994-Y49998": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49994-Y50000": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49994-Y50001": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49994-Y50002": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49994-Y50003": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49994-Y50004": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49995-Y49994": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49995-Y49995": {
    title: locTitle,
    description: "Северо-западный угол стены",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49995-Y49996": {
    title: locTitle,
    description: nw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49995-Y49997": {
    title: locTitle,
    description: nw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49995-Y49998": {
    title: locTitle,
    description: nw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49995-Y49999": {
    title: locTitle,
    description: "Северный сад",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49995-Y50000": {
    title: locTitle,
    description: nw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49995-Y50001": {
    title: locTitle,
    description: nw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49995-Y50002": {
    title: locTitle,
    description: nw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49995-Y50003": {
    title: locTitle,
    description: "Северо-восточный угол стены",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49995-Y50004": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49996-Y49994": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49996-Y49995": {
    title: locTitle,
    description: ww,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49996-Y49997": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49996-Y49999": {
    title: locTitle,
    description: "Дорога к северным воротам",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49996-Y50000": {
    title: locTitle,
    description: "",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49996-Y50001": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49996-Y50003": {
    title: locTitle,
    description: ew,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49996-Y50004": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49997-Y49994": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49997-Y49995": {
    title: locTitle,
    description: ww,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49997-Y49996": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49997-Y49997": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49997-Y49998": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49997-Y49999": {
    title: locTitle,
    description: "Дорога к Северным Воротам",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49997-Y50000": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49997-Y50001": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49997-Y50002": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49997-Y50003": {
    title: locTitle,
    description: ew,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49997-Y50004": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49998-Y49994": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49998-Y49995": {
    title: locTitle,
    description: ww,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49998-Y49996": {
    title: locTitle,
    description: "",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49998-Y49997": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49998-Y49998": {
    title: locTitle,
    description: "",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49998-Y49999": {
    title: locTitle,
    description: "Площадь Покаяния",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49998-Y50001": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49998-Y50002": {
    title: locTitle,
    description: "",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49998-Y50003": {
    title: locTitle,
    description: ew,
    specialTeg: "",
    backgroundImage: "",
  },

  "X49998-Y50004": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X49999-Y49995": {
    title: locTitle,
    description: "Сквер Западный",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49999-Y49996": {
    title: locTitle,
    description: "Дорога к Западным Воротам",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49999-Y49997": {
    title: locTitle,
    description: "Дорога к Западным Воротам",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49999-Y49998": {
    title: locTitle,
    description: "Площадь Святых",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49999-Y50000": {
    title: locTitle,
    description: "Площадь Духовности",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49999-Y50001": {
    title: locTitle,
    description: "Дорога к Восточным Воротам",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49999-Y50002": {
    title: locTitle,
    description: "Дорога к Восточным Воротам",
    specialTeg: "",
    backgroundImage: "",
  },

  "X49999-Y50003": {
    title: locTitle,
    description: "Восточный Бульвар",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50000-Y49994": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50000-Y49995": {
    title: locTitle,
    description: ww,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50000-Y49996": {
    title: locTitle,
    description: "",
    specialTeg: "forge",
    backgroundImage: "",
  },

  "X50000-Y49997": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50000-Y49998": {
    title: locTitle,
    description: "",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50000-Y49999": {
    title: locTitle,
    description: "Площадь св.Марка",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50000-Y50000": {
    title: locTitle,
    description: "",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50000-Y50001": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50000-Y50002": {
    title: locTitle,
    description: "",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50000-Y50003": {
    title: locTitle,
    description: ew,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50000-Y50004": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50001-Y49994": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50001-Y49995": {
    title: locTitle,
    description: ww,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50001-Y49996": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50001-Y49997": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50001-Y49998": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50001-Y49999": {
    title: locTitle,
    description: "Дорога к южным воротам",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50001-Y50000": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50001-Y50001": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50001-Y50002": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50001-Y50003": {
    title: locTitle,
    description: ew,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50001-Y50004": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50002-Y49994": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50002-Y49995": {
    title: locTitle,
    description: ww,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50002-Y49998": {
    title: locTitle,
    description: "",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50002-Y49999": {
    title: locTitle,
    description: "Дорога к Южным Воротам",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50002-Y50001": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50002-Y50002": {
    title: locTitle,
    description: "",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50002-Y50003": {
    title: locTitle,
    description: ew,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50002-Y50004": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50003-Y49994": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50003-Y49995": {
    title: locTitle,
    description: "Юго-западный угол стены",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50003-Y49996": {
    title: locTitle,
    description: sw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50003-Y49997": {
    title: locTitle,
    description: sw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50003-Y49998": {
    title: locTitle,
    description: sw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50003-Y49999": {
    title: locTitle,
    description: "Южный Бульвар",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50003-Y50000": {
    title: locTitle,
    description: sw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50003-Y50001": {
    title: locTitle,
    description: sw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50003-Y50002": {
    title: locTitle,
    description: sw,
    specialTeg: "",
    backgroundImage: "",
  },

  "X50003-Y50003": {
    title: locTitle,
    description: "Юго-восточный угол стены",
    specialTeg: "",
    backgroundImage: "",
  },

  "X50003-Y50004": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50004-Y49994": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50004-Y49995": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50004-Y49996": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50004-Y49997": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50004-Y49998": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50004-Y50000": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50004-Y50001": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50004-Y50002": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50004-Y50003": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },

  "X50004-Y50004": {
    title: locTitle,
    description: "",
    specialTeg: "BU",
    backgroundImage: "",
  },
};
console.log("Locations loaded:", locations);
export { locations, createSVG };
