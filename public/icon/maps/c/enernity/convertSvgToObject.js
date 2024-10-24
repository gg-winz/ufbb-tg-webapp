const fs = require("fs");
const path = require("path");

// Директория с SVG-картинками
const svgDir = __dirname;
const outputFilePath = path.join(svgDir, "svgIcons.json");

const svgIcons = {};

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

      const svgContent = fs.readFileSync(filePath, "utf8");
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
