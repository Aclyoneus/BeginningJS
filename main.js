// 1

const width = 30;
const height = 10;

const rectangleArea = width * height;

console.log(rectangleArea);

// 2

let firstNumber = 10;
let secondNumber = 20;
const thirdNumber = firstNumber;

firstNumber = secondNumber;
secondNumber = thirdNumber;

// 3

const physicsGrade = 5;
const mathGrade = 3;
const englishGrade = 4;

const averageGrade = (physicsGrade + mathGrade + englishGrade) / 3;

if (averageGrade >= 4) {
    console.log(`Good job!`);
} else {
    console.log(`Try harder!`);
}

// 4

// const currentAge = 30;
// const retirenmentAgeInPoland = 67;
// let yearsLeftToRetirenment = retirenmentAgeInPoland;
//
// yearsLeftToRetirenment = retirenmentAgeInPoland - currentAge;
//
// console.log(yearsLeftToRetirenment);

// OR shorter one:

const currentAge = 30;
const retirenmentAgeInPoland = 67;
const yearsLeftToRetirenment = retirenmentAgeInPoland - currentAge;

console.log(yearsLeftToRetirenment);

// 5

const isPayingVAT = true;
let vatRateInPoland = 0.23;
const incomeTaxRate = 0.12;
let monthlyIncome = 3500;
let taxToPay = 0;

if (isPayingVAT) {
    taxToPay = monthlyIncome * vatRateInPoland;
}

taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

console.log(`tax to pay: ` + taxToPay);

// 6

const isSunny = true;

if (isSunny === true) {
    console.log(`Don't forget your sunglasses!`);
} else {
    console.log(`You might need an umbrella.`);
}

// 7

const currentMonth = 11;

if (currentMonth < 4) {
    console.log(`It's winter!`);
} else if (currentMonth >= 4 && currentMonth < 7) {
    console.log(`It's spring!`);
} else if (currentMonth >= 7 && currentMonth < 10) {
    console.log(`It's summer!`);
} else if (currentMonth >= 10 && currentMonth < 13) {
    console.log(`It's autumn!`);
} else {
    console.log(`There is no such month!`);
}

// 8

const personWeight = 72;
const personHeight = 1.82;

bodyMassIndex = personWeight / (personHeight * personHeight);
console.log(bodyMassIndex);

// 9

const age = 19;

if (age >= 18) {
    console.log(`A citizen can vote`);
} else {
    console.log(`A citizen can't vote`);
}

// 10

const currentColor = `red`;

if (currentColor === `red`) {
    console.log(`Stop`);
} else if (currentColor === `yellow`) {
    console.log(`Speed up`);
} else if (currentColor === `green`) {
    console.log(`Go`);
} else {
    console.log(`Check your knowledge of traffic lights colors!`);
}

// 11

const month = 1;

if (month === 1) {
    console.log(`January`);
} else if (month === 2) {
    console.log(`February`);
} else if (month === 3) {
    console.log(`March`);
} else if (month === 4) {
    console.log(`April`);
} else if (month === 5) {
    console.log(`May`);
} else if (month === 6) {
    console.log(`June`);
} else if (month === 7) {
    console.log(`July`);
} else if (month === 8) {
    console.log(`August`);
} else if (month === 9) {
    console.log(`September`);
} else if (month === 10) {
    console.log(`October`);
} else if (month === 11) {
    console.log(`November`);
} else if (month === 12) {
    console.log(`December`);
} else {
    console.log(`We have only 12 months!`);
}

// 12

const number = 2;

if (number % 5 === 0 && number % 3 === 0) {
    console.log(`Divisible by 3 and 5`);
} else if (number % 5 === 0) {
    console.log(`Divisible by 5`)
} else if (number % 3 === 0) {
    console.log(`Divisible by 3`)
} else {
    console.log(`Non divisible by 3 or 5`)
}

// 13

