/* eslint-disable no-undef */
import { locations } from "./maps/city/enernity/enernity.js";

let playerPosition = { x: 49999, y: 49999 };

function displayMap() {
  const mapContainer = document.getElementById("map");
  mapContainer.innerHTML = "";

  const mapSize = 9;
  const halfSize = Math.floor(mapSize / 2);

  for (let dy = -halfSize; dy <= halfSize; dy++) {
    for (let dx = -halfSize; dx <= halfSize; dx++) {
      const cell = document.createElement("div");
      cell.className = "map-cell";

      const x = playerPosition.x + dx;
      const y = playerPosition.y + dy;
      const coordinates = `X${x}-Y${y}`;

      if (x === playerPosition.x && y === playerPosition.y) {
        cell.classList.add("player-position");
      }

      cell.textContent = coordinates;
      mapContainer.appendChild(cell);
    }
  }
}

function movePlayer(direction) {
  const newPosition = { ...playerPosition };

  switch (direction) {
    case "up":
      newPosition.y -= 1;
      break;
    case "down":
      newPosition.y += 1;
      break;
    case "left":
      newPosition.x -= 1;
      break;
    case "right":
      newPosition.x += 1;
      break;
    default:
      break;
  }

  const newCoordinates = `X${newPosition.x}-Y${newPosition.y}`;
  const newLocation = locations[newCoordinates];

  if (newLocation) {
    playerPosition = newPosition;
    displayMap();
    updateInfoPanel();
    updateControlButtons();
  }
}

function updateInfoPanel() {
  const infoPanel = document.getElementById("info-panel");
  const coordinates = `X${playerPosition.x}-Y${playerPosition.y}`;
  const locationData = locations[coordinates];

  if (locationData) {
    infoPanel.textContent = `Координаты: ${coordinates} | Описание: ${
      locationData.description || "Нет описания"
    }`;
  } else {
    infoPanel.textContent = "Информация о локации отсутствует";
  }
}

function createStarSVG() {
  const svgNS = "http://www.w3.org/2000/svg";
  const star = document.createElementNS(svgNS, "svg");
  star.setAttribute("viewBox", "0 0 24 24");
  star.setAttribute("width", "24");
  star.setAttribute("height", "24");

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute(
    "d",
    "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  );
  star.appendChild(path);

  return star;
}

function checkAvailableDirections() {
  const directions = {
    up: isMovePossible(playerPosition.x, playerPosition.y - 1),
    down: isMovePossible(playerPosition.x, playerPosition.y + 1),
    left: isMovePossible(playerPosition.x - 1, playerPosition.y),
    right: isMovePossible(playerPosition.x + 1, playerPosition.y),
  };
  return directions;
}

// Use the createStarSVG function somewhere in your code to avoid the "defined but never used" error
document.getElementById("someElement").appendChild(createStarSVG());

function isMovePossible(x, y) {
  const coordinates = `X${x}-Y${y}`;
  return !!locations[coordinates];
}

function updateControlButtons() {
  const directions = checkAvailableDirections();
  Object.entries(directions).forEach(([direction, isPossible]) => {
    const button = document.getElementById(`${direction}Button`);
    const iconPath = isPossible
      ? `./interface/icon/cursor_${direction}.svg`
      : "./interface/icon/empty.svg";

    // Проверка существования иконки
    fetch(iconPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Icon not found: ${iconPath}`);
        }
        return response.blob();
      })
      .then(() => {
        button.src = iconPath;
        button.style.opacity = isPossible ? "1" : "0.5";
        button.disabled = !isPossible;
        button.style.pointerEvents = isPossible ? "auto" : "none";
      })
      .catch((error) => {
        console.error(error.message);
        button.src = "./interface/icon/empty.svg";
        button.style.opacity = "0.5";
        button.disabled = true;
        button.style.pointerEvents = "none";
      });
  });
}

// Инициализация игры
function initGame() {
  playerPosition = { x: 49999, y: 49999 }; // Начальная позиция игрока
  displayMap();
  updateInfoPanel();
  updateControlButtons();
}

// Обработчики событий для кнопок управления
document
  .getElementById("upButton")
  .addEventListener("click", () => movePlayer("up"));
document
  .getElementById("downButton")
  .addEventListener("click", () => movePlayer("down"));
document
  .getElementById("leftButton")
  .addEventListener("click", () => movePlayer("left"));
document
  .getElementById("rightButton")
  .addEventListener("click", () => movePlayer("right"));

// Запуск игры
initGame();
