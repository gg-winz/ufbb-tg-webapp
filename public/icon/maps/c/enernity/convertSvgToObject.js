// eslint-disable-next-line no-undef
const fs = require("fs");
// eslint-disable-next-line no-undef
const path = require("path");

// Директория с SVG-картинками
// eslint-disable-next-line no-undef
const svgDir = __dirname;
const dirName = path.basename(svgDir);
const outputFileName = `${dirName}_svgPack.json`;
const outputFilePath = path.join(svgDir, outputFileName);

const svgIcons = {};

// Регулярное выражение для поиска комментариев
const regex = /<!--[\s\S]*?-->/g;

console.log("Начало выполнения скрипта");
console.log("Директория с SVG-картинками:", svgDir);
console.log("Путь к выходному файлу:", outputFilePath);

fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error("Ошибка при чтении директории:", err);
    return;
  }

  console.log("Файлы в директории:", files);

  files.forEach((file) => {
    if (path.extname(file) === ".svg") {
      const filePath = path.join(svgDir, file);
      console.log("Обработка файла:", filePath);

      let svgContent = fs.readFileSync(filePath, "utf8");

      // Проверка наличия комментариев
      if (regex.test(svgContent)) {
        console.log(`Найден комментарий в файле: ${filePath}`);
        // Удаление комментариев
        svgContent = svgContent.replace(regex, "");
        // Перезапись исправленного файла
        fs.writeFileSync(filePath, svgContent, "utf8");
        console.log(`Комментарии удалены и файл перезаписан: ${filePath}`);
      }

      const iconName = path.basename(file, ".svg");
      svgIcons[iconName] = svgContent;

      console.log(`Добавлена иконка: ${iconName}`);
    }
  });

  const outputContent = JSON.stringify(svgIcons, null, 2);

  try {
    fs.writeFileSync(outputFilePath, outputContent, "utf8");
    console.log(
      "SVG иконки успешно преобразованы и сохранены в",
      outputFilePath
    );
  } catch (writeErr) {
    console.error("Ошибка при записи файла:", writeErr);
  }
});

console.log("Завершение выполнения скрипта");
