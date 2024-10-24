import React, { useState } from "react";
import ReactDOM from "react-dom";
import { locations, createSVG } from "./cEternity.js";

const Cell = ({ coordinates, locationData, isPlayer }) => {
  return (
    <div className={`cell ${locationData?.specialTeg === "BU" ? "bu" : ""}`}>
      {locationData?.specialTeg && (
        <div className="cell-icon">{createSVG(locationData.specialTeg)}</div>
      )}
      {isPlayer && <div className="player"></div>}
      <span className="coordinates">{coordinates}</span>
    </div>
  );
};

const Map = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 49999, y: 49999 });

  const displayMap = () => {
    const mapSize = 9;
    const halfSize = Math.floor(mapSize / 2);
    const cells = [];

    for (let dy = -halfSize; dy <= halfSize; dy++) {
      for (let dx = -halfSize; dx <= halfSize; dx++) {
        const x = playerPosition.x + dx;
        const y = playerPosition.y + dy;
        const coordinates = `X${x}-Y${y}`;
        const locationData = locations[coordinates];

        cells.push(
          <Cell
            key={coordinates}
            coordinates={coordinates}
            locationData={locationData}
            isPlayer={dx === 0 && dy === 0}
          />
        );
      }
    }

    return cells;
  };

  const movePlayer = (direction) => {
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
      default:
        break;
    }

    const newCoordinates = `X${newPosition.x}-Y${newPosition.y}`;
    const newLocation = locations[newCoordinates];

    if (newLocation && newLocation.specialTeg !== "BU") {
      setPlayerPosition(newPosition);
    }
  };

  return (
    <div>
      <div id="map" className="map">
        {displayMap()}
      </div>
      <Controls movePlayer={movePlayer} />
    </div>
  );
};

const Controls = ({ movePlayer }) => {
  return (
    <div id="controls">
      <div className="control-row">
        <img
          id="upButton"
          className="control-button"
          src="public/icon/interface/c_up.svg"
          alt="Up"
          onClick={() => movePlayer("up")}
        />
      </div>
      <div className="control-row control-row-center">
        <img
          id="leftButton"
          className="control-button control-button-side"
          src="public/icon/interface/c_left.svg"
          alt="Left"
          onClick={() => movePlayer("left")}
        />
        <img
          id="emptyButton"
          className="control-button control-button-empty"
          src="public/icon/interface/empty.svg"
          alt="Empty"
        />
        <img
          id="rightButton"
          className="control-button control-button-side"
          src="public/icon/interface/c_right.svg"
          alt="Right"
          onClick={() => movePlayer("right")}
        />
      </div>
      <div className="control-row">
        <img
          id="downButton"
          className="control-button"
          src="public/icon/interface/c_down.svg"
          alt="Down"
          onClick={() => movePlayer("down")}
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Вечный город</h1>
      <Map />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
