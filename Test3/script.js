/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris atvaizduos TODOS korteles.
1. Išgaukite TODOS iš duoto ENDPOINT.
2. Sukurkite kiekvienam todo kortelę
3. Kortelėje atvaizduokite title ir due_on reikšmes (due_on panaudoti su Date object)
4. Kortelės spalva turi atitikti todo statusą. 
   Jeigu status = pending, kortelė orandžinė 
   Jeigu status = completed, kortelė žalia
5. Pastilizikuote kortelę
-------------------------------------------------------------------------- */

const ENDPOINT = "https://gorest.co.in/public/v2/todos";

// const renderCards = (info) => {
//   const { title, status } = info;
//   console.log(status);
//   const outputTitle = (document.createElement("p").textContent = title);

//   const outputData = (document.createElement("p").textContent = new Date(
//     info.due_on
//   ).toDateString());
//   const outputCard = document.createElement("div");
//   const output = document.querySelector("#output");

//   outputCard.style.width = "30%";
//   outputCard.style.borderRadius = "12px";
//   outputCard.style.padding = "12px";
//   outputCard.style.margin = "12px";
//   output.style.display = "flex";
//   output.style.flexDirection = "row";
//   output.style.flexWrap = "wrap";

//   if (status === "pending") {
//     outputCard.style.background = "#FC2E20";
//     outputCard.style.boxShadow = "4px 8px 12px #FC2E20";
//   } else {
//     outputCard.style.background = "#21B6A8";
//     outputCard.style.boxShadow = "4px 8px 12px #21B6A8";
//   }

//   outputCard.append(outputTitle, outputData);
//   output.append(outputCard);
// };

// fetch(ENDPOINT)
//   .then((resp) => resp.json())
//   .then((response) => {
//     response.forEach((info) => renderCards(info));
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const renderCard = (todo) => {
//   const card = document.createElement("div");
//   card.style.padding = "16px";
//   card.style.borderRadius = "5px";
//   card.style.border = "1px solid grey";
//   card.style.margin = "12px";
//   card.style.display = "flex";
//   card.style.justifyContent = "space-between";

//   const titleEl = document.createElement("h3");
//   titleEl.textContent = todo.title;
//   const dueOnEl = document.createElement("span");
//   dueOnEl.textContent = new Date(todo.due_on).toDateString();

//   card.style.background = todo.status === "pending" ? "orange" : "green";

//   card.append(titleEl, dueOnEl);
//   document.querySelector("#output").append(card);
// };

// fetch(ENDPOINT)
//   .then((resp) => resp.json())
//   .then((response) => {
//     response.forEach((todo) => renderCard(todo));
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const todosCards = (todos) => {
  const { title, status, due_on } = todos;
  const outputTitle = (document.createAttribute("h3").textContent = title);
  const outputDue_on = (document.createAttribute("p").textContent = new Date(
    todos.due_on
  ).toDateString());

  const card = document.createElement("div");
  card.style.width = "30%";
  card.style.borderRadius = "12px";
  card.style.padding = "12px";
  card.style.margin = "12px";
  card.style.display = "flex";

  if (status === "pending") {
    card.style.background = "#FC2E20";
    card.style.boxShadow = "3px 6px 9px #FC2E20";
  } else {
    card.style.background = "#21B6A8";
    card.style.boxShadow = "3px 6px 9px #21B6A8";
  }

  const output = document.querySelector("#output");
  output.style.display = "flex";
  output.style.flexWrap = "wrap";

  card.append(outputTitle, outputDue_on);
  output.append(card);
};

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((todos) => todosCards(todos));
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
