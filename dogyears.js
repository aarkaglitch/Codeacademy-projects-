//my age 
let myAge=19;
//accelarated growth time
let earlyYears=2;
earlyYears*=21/2;
myAge-=2;
//my later years
let laterYears=myAge-2;
laterYears*=4;
console.log(earlyYears)
console.log(laterYears)
//this is my age in dog years
let myAgeInDogYears=earlyYears+laterYears;
//My name
let myName='Aarka'.toLowerCase();
console.log(`My name is ${myName}
I am ${myAge+2} years old in human years which is ${myAgeInDogYears}
years old in dog years.`)
