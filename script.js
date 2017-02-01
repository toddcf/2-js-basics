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

/*
function calculateAge (yearOfBirth) {
	var age = 2017 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
console.log("John is " + ageJohn + " years old.");

var ageMike = calculateAge(1940);
console.log("Mike is " + ageMike + " years old.");

var ageAnnie = calculateAge(2000);
console.log("Annie is " + ageAnnie + " years old.");


function yearsUntilRetirement(name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	if (retirement >= 0) {
		console.log(name + " has " + retirement + " years until retirement.");
	}
	else {
		console.log(name + " has already retired.");
	}
}

yearsUntilRetirement("John", 1990);
yearsUntilRetirement("Mike", 1940);
yearsUntilRetirement("Annie", 2000);
*/

// Statements and Expressions

// Arrays

/*
var names = ["John", "Jane", "Mark"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(years);

var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue");
john.unshift("Mr.");
john.pop();
john.shift();
console.log(john);

alert(john.indexOf("Smith"));

if (john.indexOf("teacher") === -1) {
	console.log("John is NOT a teacher.");
}
else {
	console.log("John is a teacher.");
}
*/

// Objects

/*
var john = {
	name: "John",
	lastName: "Smith",
	yearOfBirth: 1990,
	job: "teacher",
	isMarried: false
};

console.log(john);
console.log(john.lastName);
console.log(john["lastName"]);

var xyz = "job";
console.log(john[xyz]);

john.lastName = "Miller";
john["job"] = "programmer";
console.log("John's new last name is " + john.lastName + ".");
console.log("John's new job is " + john.job + ".");

console.log(john);


var jane = new Object();
jane.name = "Jane";
jane.lastName = "Smith";
jane["yearOfBirth"] = 1969;
jane["job"] = "retired";
jane["isMarried"] = true;

console.log(jane);
*/

// Objects and Methods

// v1.0
/*
var john = {
	name: "John",
	lastName: "Smith",
	yearOfBirth: 1990,
	job: "teacher",
	isMarried: false,
	family: ["Jane", "Mark", "Bob"],
	calculateAge: function() {
		return 2017 - this.yearOfBirth;
	}
};

console.log(john.calculateAge());

var age = john.calculateAge();

// Add the age data into the john object:
john.age = age;
console.log(john);
*/

// v2.0
/*
var john = {
	name: "John",
	lastName: "Smith",
	yearOfBirth: 1990,
	job: "teacher",
	isMarried: false,
	family: ["Jane", "Mark", "Bob"],
	calculateAge: function() {
		this.age = 2017 - this.yearOfBirth;
	}
};

john.calculateAge();
console.log(john);
*/

// Loops & Iterations
/*
// For Loop:
for (var i = 0; i < 10; i++) {
	console.log(i + 1);
}
*/

var names = ["John", "Jane", "Mary", "Mark", "Bob"];

/*
for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

// Reverse order:
for (var i = names.length - 1; i >= 0; i--) {
	console.log(names[i]);
}
*/

// While Loop:
/*
var i = 0;
while (i < names.length) {
	console.log(names[i]);
	i++;
}

for (var i = 1; i <= 5; i++) {
	console.log(i);
	if (i === 3) {
		break;
	}
}

for (var i = 1; i <= 5; i++) {
	if (i === 3) {
		continue;
	}
	console.log(i);
}
*/

// Coding Challenge 2:
var birthYear = [1949, 1951, 1978, 1979, 1983, 2016];

/*
for (var i = 0; i < birthYear.length; i++) {
	ages.push(2017 - birthYear[i]);
}

console.log(ages);

for (var i = 0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		console.log(true + ": " + ages[i]);
	}
	else {
		console.log(false + ": " + ages[i]);
	}
}
*/


function printFullAge() {
	var ages = [];
	var fullAge = [];

	for (var i = 0; i < birthYear.length; i++) {
		ages[i] = 2017 - birthYear[i];
	}

	console.log(ages);

	for (var i = 0; i < ages.length; i++) {
		if (ages[i] >= 18) {
			console.log("Person " + (i + 1) + " is " + ages[i] + " years old and IS of full age.");
			fullAge.push(true);
		}
		else {
			console.log("Person " + (i + 1) + " is " + ages[i] + " years old and is NOT of full age.");
			fullAge.push(false);
		}
	}

	return fullAge;

}


var full_1 = printFullAge(birthYear);
// var full_2 = printFullAge([2012, 1915, 1999]);






