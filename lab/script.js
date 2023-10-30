
// 1. (provided)
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

let maxOfThree = function(a,b,c) {
  if (a >= b && a >= c) {
    return a;
  }
  else if (b >= c) {
    return b;
  }
  else {
    return c;
  }
}

console.log(maxOfThree(1,7,88));
  
// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
  let vowels = ['a','e','i','o','u'];

  if (vowels.includes(char)) {
    return true
  }
  else if (char === 'y') {
    return "I guess";
  }
  else {
    return false;
  }
}

console.log(isCharAVowel('a'), isCharAVowel('y'), isCharAVowel('f'));

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

let sumArray = function(array) {
  let sum = 0;
  for (num of array) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([2, 4, 5]));

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(array) {
  let product = 1;
  for (num of array) {
    product *= num;
  }
  return product;
}

console.log(multiplyArray([2, 4, 5]));

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

let numArgs = function() {
  return arguments.length;
}

console.log(numArgs('a',10,'dawgs',false));

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(string) {
  return string.split("").reverse();
}

console.log(reverseString('rockstar'));

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

let longestStringInArray = function(arrayOfStrings) {
  longestString = "";
  for (string of arrayOfStrings) {
    if (string.length > longestString.length) {
      longestString = string;
    }
  }
  return longestString;
}

console.log(longestStringInArray(['buddy','I','like','Halloween']));

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(arrayOfStrings, num) {
  longerThanNum = [];
  for (string of arrayOfStrings) {
    if (string.length > num) {
      longerThanNum.push(string);
    }
  }
  return longerThanNum;
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));