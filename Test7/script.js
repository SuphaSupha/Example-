/* ------------------------------ TASK 7 -----------------------------------
Turimas "computer" objektas.

1. Parašykite funkciją showObjectValues, kuri kaip argumentą priims objectą 
ir grąžins visus jo "values" masyve.

2. Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "keys" masyve.
-------------------------------------------------------------------------- */
const computer = {
  cpu: "Intel Mobile Celeron N3350",
  ram: "4gb",
  resolution: "1366x768",
  battery: "4800 mAh, 7.4 V",
  os: "Windows 10",
};
//final
//1
function showObjectValues(object) {
  return Object.values(object);
}
console.log(showObjectValues(computer));

//2
function showObjectKeys(object) {
  return Object.keys(object);
}
console.log(showObjectKeys(computer));

// console.log(Object.keys(computer));//grazina raktus:melinas tekstas
// console.log(Object.values(computer));//grazina reiksmes: nemelinas tekstas
// console.log(Object.entries(computer));//grazina masyva sus raktas/reiksme
// Object.keys(computer).forEach((key) => {
//   if (key === "ram") {
//     console.log("random access memory");
//   } else if (key === "os") {
//     console.log("Operating system");
//   } else {
//     console.log(key);
//   }
// });
// // Object.entries();

// //1
// function showObjectValues(object) {
//   return Object.values(object);
// }

// console.log(showObjectValues(computer));
// //2
// function showObjectKeys(object) {
//   return Object.keys(object);
// }

// console.log(showObjectKeys(computer));
//pvz
// Object.entries(computer).forEach((entry) => {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// });
// //same
// Object.entries(computer).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });
