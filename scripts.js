// // 1) Sum of an array
// // Write a function that will take an array of numbers as a parameter and return the sum of those numbers. 
// // Hint: Try using a loop! Declare the function, then call the function in the same JavaScript file, inside a console.log() statement. Open the Console to display your results.

let Sum = (array) => {
    let total1 = 0;
    for (let i = 0; i < array.length; i++){
        total1 += array[i];
    }
    console.log(`Sum of an array: ${total1}`);

}
// Examples:
Sum([3, 4, 5]); // returns 12
Sum([10, 5, 9]); // returns 24


// 2) Average of an array
// Write code that takes an array of numbers as a parameter and returns the average of those numbers.
// Hint: calculating the average requires only one more step after finding the sum.

let averageSum = (array) => {
    let total2 = 0;
    for (let i = 0; i < array.length; i++){
        total2 += array[i];
    }
    let averageSum = total2 / array.length;
    console.log(`Average of an array: ${averageSum}`);

}
// Examples:
averageSum([3, 4, 5]); // returns 4
averageSum([10, 5, 9]); // returns 8


// Bonus 1: Refactor your code to re-use a function
// Now, rewrite your average function so it calls your sum function  to add the numbers up. This is an example of using a function to reuse code.

const averageSum2 = (array) => {
    let total3 = 0;
    for (let i = 0; i < array.length; i++){
        total3 += array[i];
    
    }
    let averageSum2 = total3 /array.length;   
    console.log(`Refactor value is ${averageSum2}`);
    

   
}

// // Examples:
averageSum2([3, 4, 5]); // returns 4
averageSum2([10, 5, 9]) // returns 8


// Bonus 2:
// Write a function that takes an array of numbers and returns the largest number.

let max = (array) => {
    let largest = Math.max(...array);
    console.log(`Largest: ${largest}`);

}
// Examples:
max([7,10, 30, 1]); // returns 30

 

// Bonus 3:
// Write a function that takes two different arrays as parameters, finds the largest number in each array and returns the sum of those two numbers.

let largestNum = (array1, array2) => {
    let largestA = Math.max(...array1);
    let largestB = Math.max(...array2);
    console.log(largestA + largestB);
}
// Example:
largestNum([3, 2, 8], [4, 9, 1]); // returns 17






















