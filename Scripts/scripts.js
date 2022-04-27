// Comment
console.log('Hello World');

/*
let name = 'Matthew';
console.log(name);
*/
/*
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
*/

const interestRate = 0.3;
console.log(interestRate);




let name = 'Matt'; //String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal (true or false)
let firstName = undefined; // same as let firstName;
let lastName = null; // used to clear the value of a variable - such as clearing selection from drop down list

name = 1;
console.log(name);


// Object Literal
let person = {
    name: 'Matt',
    age: 30
}

console.log(person);
console.log(person.age);
console.log(person['age']);

let varName = 'age';
console.log(person[varName]);

// Empty Array
let selectedElements = []; // Array Literal
let selectedColors = ['red','blue'];
console.log(selectedColors);
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[0]);

// Can access properties of array object
console.log(selectedColors.length);


helloWorld('Matthew', 'Cumbo');

function helloWorld(firstName, lastName){
    console.log('Hello ' + firstName + ' ' + lastName);
}



function add(number1, number2){
    return number1+number2;
}
let result = add(1,2);
console.log(result);
console.log(add(3,4));



function condition(num1, num2){
    if(num1>num2){
        console.log('Num1 is bigger');
    }
    else{
        console.log('Num2 is bigger');
    }
}
condition(1,2);


let carList = ['Ferrari','Lamborghini','Rolls Royce'];
loop(carList);
function loop(cars)
{
    for (let i=0; i<cars.length; i++){
        console.log(cars[i]);
    }
}

// document.getElementById
console.log(document.getElementById('pageTitle'));
console.log(document.getElementById('pageTitle').classList);

// add class to element via id
function addClass (elementId, className){
    document.getElementById(elementId).classList.add(className);
}
addClass('pageTitle','longClassName');

// remove class from element via id
function removeClass(elementId, className){
    document.getElementById(elementId).classList.remove(className);
}
removeClass('pageTitle','longClassName');

// change HTML 
function changeValue(elementId, newValue){
    document.getElementById(elementId).innerHTML = newValue;
}

foreachLoop(carList);

function foreachLoop(arr){

    arr.forEach(function(val){
        alert(val);
    });

    arr.forEach(alertArrVal);
}

function alertArrVal(val){
    alert(val);
}

