const { DOMParser } = require("xmldom");
const svgIcons = require("../icon/maps/c/enernity/enernity_svgPack.json");

function createSVG(iconName) {
  const svgString = svgIcons[iconName];
  if (!svgString) {
    console.error(`Icon "${iconName}" not found in svgIcons`);
    return null;
  }
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
  return svgDoc.documentElement;
}

// Тестирование функции createSVG
function testCreateSVG() {
  const testIcons = ["coliseum", "north-gate", "nonexistent-icon"];

  testIcons.forEach((iconName) => {
    const svgElement = createSVG(iconName);
    if (svgElement) {
      console.log(
        `SVG элемент для иконки "${iconName}":`,
        svgElement.toString()
      );
    } else {
      console.log(`Иконка "${iconName}" не найдена.`);
    }
  });
}

// Запуск тестирования
testCreateSVG();
