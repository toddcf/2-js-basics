// Variables:
/*
var name = "John";
console.log(name);

var lastName = "Smith";
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Variables 2:
/*
var name = "John";
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;

job = "teacher";
isMarried = false;

console.log(name + " is " + age + " years old and works as a " + job + ".");
console.log("If you were to say that he is married, that statement would be " + isMarried + ".");

age = "thirty-six";
job = "driver";

console.log(name + " is " + age + " years old and works as a " + job + ".");

var lastName = prompt("What is the last name?");
console.log(lastName);

alert(name + " is " + age + " years old and works as a " + job + ".");
*/

// Operators

/*var now = 2017;
var birthYear = now - 26;
birthYear = now - 26 * 2;
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageJohn = ageJohn + 1;

ageMark *= 2;

console.log("John is " + ageJohn);
console.log("Mark is " + ageMark);
*/

// If/Else Statements

/*
var name = "John";
var age = 26;
var isMarried = true;

if (isMarried) {
	console.log(name + " is married!");
}
else {
	console.log(name + " will hopefully get married soon.");
}
*/

// Boolean Logic & Switch Statements
/*
var name = "John";
var age = 124;

if (age < 1) {
	console.log(name + " is a baby.");
}
else if ((age >= 1) && (age <= 4)) {
	console.log(name + " is a toddler.");
}
else if ((age > 4) && (age <= 7)) {
	console.log(name + " is a little kid.");
}
else if ((age > 7) && (age <= 12)) {
	console.log(name + " is a kid.");
}
else if ((age > 12) && (age <= 19)) {
	console.log(name + " is a teenager.");
}
else if ((age > 19) && (age <= 30)) {
	console.log(name + " is a young adult.");
}
else if ((age > 30) && (age <= 40)) {
	console.log(name + " is an adult.");
}
else if ((age > 40) && (age <= 65)) {
	console.log(name + " is middle-aged.");
}
else if ((age > 65) && (age <= 123)) {
	console.log(name + " is a senior citizen.");
}
else if (age > 123) {
	console.log(name + " is dead.");
}



var job = "teacher";

job = prompt("What is John's job?");

switch(job) {
	case "teacher":
		console.log(name + " teaches kids.");
		break;
	case "driver":
		console.log(name + " drives a cab.");
		break;
	case "cop":
		console.log(name + " helps fight crime.");
		break;
	default:
		console.log(name + " does something else.");
}
*/

// Coding Challenge

/*
var johnAge = 25
var johnHeight = 176

var peterAge = 25
var peterHeight = 176

var annieAge = 23
var annieHeight = 155

// height + (age * 5)

var johnScore = johnHeight + (johnAge * 5);
var peterScore = peterHeight + (peterAge * 5);
var annieScore = annieHeight + (annieAge * 5);

if ((johnScore > peterScore) && (johnScore > annieScore)) {
	console.log("John wins with a score of " + johnScore + "!");
}
else if ((peterScore > johnScore) && (peterScore > annieScore)) {
	console.log("Peter wins with a score of " + peterScore + "!");
}
else if ((annieScore > johnScore) && (annieScore > peterScore)) {
	console.log("Annie wins with a score of " + annieScore + "!");
}
else if ((johnScore === peterScore) && (johnScore > annieScore)) {
	console.log("John and Peter tied with a score of " + johnScore + "!");
}
else if ((johnScore === annieScore) && (johnScore > peterScore)) {
	console.log("John and Annie tied with a score of " + johnScore + "!");
}
else if ((johnScore === peterScore) && (peterScore === annieScore)) {
	console.log("All three players tied with a score of " + johnScore + "!");
}
else if ((peterScore === annieScore) && (peterScore > johnScore)) {
	console.log("Peter and Annie tied with a score of " + peterScore + "!");
}
else {
	console.log("Something must be wrong in the universe. Nobody won. How is that possible?");
}
*/

// Functions

function calculateAge (yearOfBirth) {
	var age = 2017 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageAnnie = calculateAge(2000);
console.log("John is " + ageJohn + " years old.");
console.log("Mike is " + ageMike + " years old.");
console.log("Annie is " + ageAnnie + " years old.");
