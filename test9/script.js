/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
//Final
//1
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    // this.wasExpensive = () => {
    //   if (this.budget > 100000000) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
  }
  wasExpensive = () => {
    return this.budget > 10000000;
  };
}
const StarWars = new Movie("Star Wars", "George Lucas", 10000);
console.log(StarWars.wasExpensive());
// class Movie {
//   constructor(title, director, budget) {
//     this.title = title;
//     this.director = director;
//     this.budget = budget;

//     this.wasExpensive = () => {
//       if (budget > 100000000) {
//         return true;
//       } else {
//         return false;
//       }
//     };
//   }
// }

// const newMovie = new Movie("Star Wars", "George lucas", 9999999999);

// console.log(newMovie.wasExpensive());
