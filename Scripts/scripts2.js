console.log('hello');
// alert('hello');

// variable declaration
let firstName;
console.log(firstName);

// variable instantiation
let lastName = "Cumbo";
console.log(lastName);

firstName = "Matthew";
console.log(firstName);

console.log(typeof(firstName));

firstName = 1;
console.log(typeof(firstName));


let number1, number2;
let num3 = 3, num4;

let num5;
let num6;



const  interestRate = 0.3;
//interestRate = 1;


// Objects
let person = {
    firstName : 'Matt',
    lastName : 'Cumbo',
    age : 30
};

console.log(person);

// Dot Notation
console.log(person.age);
// Bracket Notation
console.log(person['age']);

let propertyName = 'wheels';
let car= {
    wheels: 4,
    doors:4
};
console.log(car[propertyName]);


let colors = ['green','blue'];
console.log(colors);

colors[0] = 'red';
console.log(colors);
console.log(colors[1]);



function alertName(firstName) {
    alert(firstName);
}


/*
let heading = document.getElementById('pageTitle');
console.log(heading);
console.log(heading.innerHTML);

heading.innerHTML = "Profile Name";
*/



function changeColor(){
    console.log(heading.classList);
    heading.classList.remove('blueHeading');
    console.log(heading.classList);
    heading.classList.add('redHeading');
    console.log(heading.classList);
}


let cars = ['Ferrari', 'Lamborghini', 'Rolls Royce'];
console.log(cars.length);

for (let counter = 0; counter < cars.length; counter++){
    console.log(cars[counter]);
}

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

/*
for (let counter = 0; counter < 10; counter++){
    console.log(counter);
}
*/
/*
cars.forEach(function(carName){
    alert(carName);
});
*/


/*
let teams = ['Team A', 'Team B', 'Team C'];
let div = document.getElementById('jsLoopContent');
teams.forEach(function(teamName){
    div.innerHTML = div.innerHTML + "<h1>" + teamName + "</h1>";
});
*/






// new notes:

// parse int for when we need to enforce changing from string to number
//let num2 = parseInt(document.getElementById('val2').value);


let ex1 = 1;
let ex2 = 2;
if (ex1 > ex2) {
    console.log('ex1 is bigger');
}
else {
    console.log('ex2 is bigger');
}

let ex3 = 50;
if (ex3 > 50){
    console.log('ex3 is bigger than 50');
}
else if (ex3 < 50){
    console.log('ex3 is smaller than 50');
}
else if (ex3 < 50){
    console.log('ex3 is smaller than 50');
}
else if (ex3 < 50){
    console.log('ex3 is smaller than 50');
}
else if (ex3 < 50){
    console.log('ex3 is smaller than 50');
}
else if (ex3 < 50){
    console.log('ex3 is smaller than 50');
}
else {
    console.log('ex3 is exactly equal to 50');
}






let fruit = 'banana';
if (fruit == 'grape'){
    console.log('color = purple');
}
else if (fruit == 'apple'){
    console.log*'color = red/green';
}
else if (fruit == 'orange'){
    console.log*'color = orange';
}
else if (fruit == 'banana'){
    console.log*'color = yellow';
}
else{
    console.log('sorry, no clue');
}





let Name;

function loginPrompts(inputName){
    Name = prompt('Please enter your name:');
}

function retreival(){
    alert(Name);
}