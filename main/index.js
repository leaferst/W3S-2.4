/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 !== 0) {
        console.log('Fizz');
    }
    if (number % 5 === 0 && number % 3 !== 0) {
        console.log('Buzz');
    }
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz');
    }
    if (number % 3 !== 0 && number % 5 !== 0) {
        console.log('Pop');
    }
}

fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz

/* Q2. Create a function called averager that gets the average of an array. */
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];

function averager(array) {
    let sum = 0;
    array.forEach((number) => {
        sum += number;
    });
    return sum / array.length;
}

let result = averager(prices);
console.log(result);


/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 


*/

function celToFah(celDegrees) {
    let fahDegrees = celDegrees * (9/5) + 32;
    console.log(`Farenheight: ${fahDegrees.toFixed(2)}`);
}

function celToKel(celDegrees) {
    let kelDegrees = celDegrees + 273.15;
    console.log(`Kelvin: ${kelDegrees.toFixed(2)}`);
}

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);

/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/

function pow(a,b) {
    let powerValue = a;
    for (x = 0; x < b - 1; x++) {
        powerValue *= a;
    }
    return powerValue;
}

console.log(pow(2,3));