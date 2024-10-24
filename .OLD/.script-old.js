/* eslint-disable no-undef */
import { locations } from "./city-of-enernity.js";

let playerPosition = { x: 49999, y: 49999 };

function displayMap() {
  const mapContainer = document.getElementById("map");
  mapContainer.innerHTML = "";

  const mapSize = 9;
  const halfSize = Math.floor(mapSize / 2);

  for (let dy = -halfSize; dy <= halfSize; dy++) {
    for (let dx = -halfSize; dx <= halfSize; dx++) {
      const x = playerPosition.x + dx;
      const y = playerPosition.y + dy;

      const cell = document.createElement("div");
      cell.classList.add("cell");

      const coordinates = `X${x}-Y${y}`;
      const locationData = locations[coordinates];

      if (locationData) {
        if (locationData.specialMark === "BU") {
          cell.classList.add("bu");
        }

        if (locationData.iconImage) {
          if (locationData.iconImage.isCustom) {
            if (typeof createStarSVG === "function") {
              const customIcon = createStarSVG();
              cell.appendChild(customIcon);
            } else {
              console.error("Function createStarSVG is not defined");
            }
          } else {
            const img = document.createElement("img");
            img.src = locationData.iconImage.icon;
            img.classList.add("cell-icon");
            cell.appendChild(img);
          }
        }

        const value = document.createElement("span");
        value.classList.add("value");
        value.textContent = locationData.specialMark === "BU" ? "BU" : "";
        cell.appendChild(value);

        const coords = document.createElement("span");
        coords.classList.add("coordinates");
        coords.textContent = coordinates;
        cell.appendChild(coords);
      } else {
        cell.classList.add("bu");
        const value = document.createElement("span");
        value.classList.add("value");
        value.textContent = "BU";
        cell.appendChild(value);
      }

      if (dx === 0 && dy === 0) {
        const player = document.createElement("div");
        player.classList.add("player");
        cell.appendChild(player);
      }

      mapContainer.appendChild(cell);
    }
  }
}

function movePlayer(direction) {
  const newPosition = { ...playerPosition };

  switch (direction) {
    case "up":
      newPosition.y--;
      break;
    case "down":
      newPosition.y++;
      break;
    case "left":
      newPosition.x--;
      break;
    case "right":
      newPosition.x++;
      break;
  }

  const newCoordinates = `X${newPosition.x}-Y${newPosition.y}`;
  const newLocation = locations[newCoordinates];

  if (newLocation && newLocation.specialMark !== "BU") {
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
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  );
  path.setAttribute("fill", "gold");

  svg.appendChild(path);
  return svg;
}

function checkAvailableDirections() {
  return {
    up: isMovePossible(playerPosition.x, playerPosition.y - 1),
    down: isMovePossible(playerPosition.x, playerPosition.y + 1),
    left: isMovePossible(playerPosition.x - 1, playerPosition.y),
    right: isMovePossible(playerPosition.x + 1, playerPosition.y),
  };
}

function isMovePossible(x, y) {
  const coordinates = `X${x}-Y${y}`;
  const location = locations[coordinates];
  return location && location.specialMark !== "BU";
}

function updateControlButtons() {
  const directions = checkAvailableDirections();
  Object.entries(directions).forEach(([direction, isPossible]) => {
    const button = document.getElementById(`${direction}Button`);
    if (isPossible) {
      button.src = `icon/controls/cursor_${direction}.svg`;
      button.style.opacity = "1";
      button.disabled = false;
      button.style.pointerEvents = "auto";
    } else {
      button.src = "icon/controls/empty.svg";
      button.style.opacity = "0.5";
      button.disabled = true;
      button.style.pointerEvents = "none";
    }
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
