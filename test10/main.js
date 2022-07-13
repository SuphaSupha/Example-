// Susikurti folderį modules ir jame sukurti string.js modulį bei object.js modulį.
// string.js faile turi būti išeksportuojama dvi funkcijos: stringUppercase, stringLowerCase
// object.js faile turi būti išeksportuojama funkcijos iš 7 užduoties: showObjectValues, showObjectKeys
// importuoti main.js faile visas funkcijas ir panaudoti
import { stringLowercase, stringUppercase } from "./modules/string.js";
import { showObjectValues, showObjectKeys } from "./modules/object.js";

console.log(stringLowercase("LABAS"));
console.log(stringUppercase("vakaras"));

const computer = {
  cpu: "Intel Mobile Celeron N3350",
  ram: "4gb",
  resolution: "1366x768",
  battery: "4800 mAh, 7.4 V",
  os: "Windows 10",
};

console.log(showObjectValues(computer));
console.log(showObjectKeys(computer));
