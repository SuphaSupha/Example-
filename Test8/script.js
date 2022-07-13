/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Company" (naudokite ES5), kuri sukuria objektus
su property: name, startYear, founder ir avarageSalary
su metodu: getInfo() - parodo Įmonės pavadinimą, įkurta kuriais metais ir kas įkurėjas pvz. Facebook įkurta 2006, įkurėjas Zuckas
su metodu: getAvarageSalary(sign) - parodo vidutinę algą, sign paduodam ženklą ar žodį pvz. Vidutinė alga 3000$
------------------------------------------------------------------------------------ */
//final
//1
function Company(name, startYear, founder, avarageSalary) {
  this.name = name;
  this.startYear = startYear;
  this.founder = founder;
  this.avarageSalary = avarageSalary;
  this.getInfo = () => {
    return `Company:${this.name} founded:${this.startYear} founder:${this.ounder}`;
  };
  this.getAvarageSalary = (sign) => {
    return `Salary:${sign} ${this.avarageSalary}`;
  };
}
const facebook = new Company("Facebook", 2006, "Zuck", 10000);
console.log(facebook.getInfo());
console.log(facebook.getAvarageSalary("$"));

// function Company(name, startYear, founder, avarageSalary) {
//   this.name = name;
//   this.startYear = startYear;
//   this.founder = founder;
//   this.avarageSalary = avarageSalary;
//   this.getInfo = () => {
//     return `Company:${this.name} Founded:${this.startYear} founder:${founder} `;
//   };
//   this.getAvarageSalary = (sign) => {
//     return `Salary:${sign} ${this.avarageSalary}`;
//   };
// }

// const fbComp = new Company("FaceBook", 2006, "Zuck", "much mooooney");

// console.log(fbComp.getInfo());
// console.log(fbComp.getAvarageSalary("$"));
