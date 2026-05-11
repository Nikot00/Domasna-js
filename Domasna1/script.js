// 1. If/else flows

let poeni = 91;

if (poeni >= 91 && poeni <= 100) {
  console.log("Студентот има поени за оцена 5");
} else if (poeni >= 81 && poeni <= 90) {
  console.log("Студентот има поени за оцена 4");
} else if (poeni >= 71 && poeni <= 80) {
  console.log("Студентот има поени за оцена 3");
} else if (poeni >= 61 && poeni <= 70) {
  console.log("Студентот има поени за оцена 2");
} else if (poeni < 60) {
  console.log("Студентот има поени за оцена 1");
}

// 2. Switch

let key = "w";

switch (key) {
  case "w":
    console.log("Движиме напред");
    break;

  case "a":
    console.log("Движиме лево");
    break;

  case "s":
    console.log("Движиме доле");
    break;

  case "d":
    console.log("Движиме десно");
    break;

  default:
    console.log("Непознато копче");
    break;
}

// 3. Paren ili Neparen

let num = 46;

if (num % 2 == 0) {
  console.log("Бројот е парен");
} else {
  console.log("Бројот е непарен");
}

// 4. Zbir, Razlika, Proizvod

let a = 36;
let b = 9;

let zbir = a + b;
let razlika = a - b;
let proizvod = a * b;

console.log (`Збирот на овие два броја е ${zbir}, разликата ${razlika} додека производот е ${proizvod}`);

// 5. X broj deliv so Y

let x = 78
let y = 26

if(x % y == 0) {
    console.log('Бројот х е делив со у');
    
} else {
    console.log('Бројот х не е делив со у');
}

