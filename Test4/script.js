/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris nuspaudus mygtuką "Show districts" turi atvaizduoti duomenis
iš districts.json failo.
1. Kreiptis į districts.json failą
2. Kiekvienam rajonui sukurti po atskirą kortelę
3. Viršuje atvaizduoti rajono pavadinimą 
4. Atvaizduoti visus rajono miestus talpinant į <li> tagą
5. Pastilizuoti korteles
6. Extra: kiekvienai kortelei priskirti skirtingą spalvą
-------------------------------------------------------------------------- */
const ENDPOINT = "districts.json";
// const renderDistrict = (item) => {
//   const { district, cities } = item;

//   const citiesCont = document.querySelector("#show");
//   citiesCont.addEventListener("click", () => {
//     const districtEl = (document.createElement("h2").textContent = district);
//     const cityEl = (document.createElement("li").textContent = cities);
//     const card = document.createElement("div");
//     card.style.border = "1px solid black";
//     card.append(districtEl, cityEl);

//     document.querySelector("#output").append(card);
//   });
// };

// fetch(ENDPOINT)
//   .then((resp) => resp.json())
//   .then((response) => {
//     console.log(response);
//     response.forEach((item) => renderDistrict(item));
//   })
//   .catch((error) => {
//     console.error(error);
//   });
const ButtonShow = document.querySelector("#show");

const renderCard = (districts) => {
  const { district, cities } = districts;
  const outputDist = (document.createElement("h1").textContent = district);
  const outputCities = document.createElement("ul");
  const output = document.querySelector("#output");
  const card = document.createElement("div");

  cities.forEach((city) => {
    const cityEl = document.createElement("li");
    cityEl.textContent = city;
    outputCities.append(cityEl);
  });

  card.append(outputDist, outputCities);
  output.append(card);
};

ButtonShow.addEventListener("click", () => {
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
      response.forEach((districts) => renderCard(districts));
    })
    .catch((error) => {
      console.error(error);
    });
});

// const showButton = document.getElementById("show");

// const renderCard = (district) => {
//   const card = document.createElement("div");
//   const districtNameEl = document.createElement("h2");
//   const listEl = document.createElement("ul");

//   districtNameEl.textContent = district.district;
//   district.cities.forEach((city) => {
//     const cityEl = document.createElement("li");
//     cityEl.textContent = city;
//     cityEl.style.textAlign = "center";
//     listEl.append(cityEl);
//   });

//   districtNameEl.style.textAlign = "center";
//   card.className = "card";

//   card.append(districtNameEl, listEl);

//   document.getElementById("output").append(card);
// };

// showButton.addEventListener("click", () => {
//   document.querySelector("#output").textContent = "";
//   fetch(ENDPOINT)
//     .then((resp) => resp.json())

//     .then((response) => {
//       console.log(response);

//       response.forEach((district) => renderCard(district));
//     })

//     .catch((error) => {
//       console.error(error);
//     });
// });
