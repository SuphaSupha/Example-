// Parašykite JS kodą, kuris nuspaudus mygtuką "Plus one" pridės vieną prie counter skaičiaus
// nuspaudus "Minus one" atims vieną nuo counter skaičiaus
// const plus = document.querySelector("#btn__elementplus");
// const minus = document.querySelector("#btn__elementminus");
// const result = document.querySelector("#btn__state");
// let count = 0;

// plus.addEventListener("click", () => {
//   count++;
//   result.style.color = "white";
//   result.textContent = count;
// });
// minus.addEventListener("click", () => {
//   count--;
//   result.style.color = "white";
//   result.textContent = count;
// });

// result.addEventListener("click", () => {
//   count = 0;
//   result.style.color = "red";
// });

const plus = document.querySelector("#btn__elementplus");
const minus = document.querySelector("#btn__elementminus");
const result = document.querySelector("#btn__state");
result.style.cursor = "pointer";
let count = 0;

plus.addEventListener("click", () => {
  count++;
  result.textContent = count;
  result.style.color = "white";
});
minus.addEventListener("click", () => {
  count--;
  result.textContent = count;
  result.style.color = "white";
});
result.addEventListener("click", () => {
  count = 0;
  result.textContent = 0;
  result.style.color = "red";
});
