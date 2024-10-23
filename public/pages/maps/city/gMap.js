// globalMaps.js
export const globalMaps = [];
for (let i = 1; i <= 100; i++) {
  const row = [];
  for (let j = 1; j <= 1000; j++) {
    row.push(`Y${String(i).padStart(5, "0")}-X${String(j).padStart(5, "0")}`);
  }
  globalMaps.push(row);
}

// Пример использования
//console.log(globalMaps[0][0]); // Y00001-X00001
//console.log(globalMaps[99][999]); // Y00100-X100000
