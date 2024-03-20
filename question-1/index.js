// //Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
// Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.
//solution:-
var numbers = [2, 5, 8, 4, 9, 15, 80];
function double_numbers(numbers) {
    var doubled_numbers = []; //creating an array for double number ,when values are doubled they store in it.
    for (var i = 0; i < numbers.length; i++) {
        doubled_numbers.push(numbers[i] * 2); //inserting double values in an array,called doubled_numbers
    }
    return doubled_numbers;
}
var twice_of_numbers = double_numbers(numbers); //we're calling the double_numbers function, passing the numbers array to it, and assigning the result (the array of doubled numbers) to the variable twice_of_numbers
console.log("original array:", numbers);
console.log("double of an array:", twice_of_numbers);
console.log("\n");
//alternate way
//using arrow function, BY USING MAP METHOD we can do it.
var numbers_container = [4, 2, 6, 8, 16, 100, 66];
var doubled_numbes_container = numbers_container.map(function (item) { return item * 2; });
console.log("numbers_container:", numbers_container);
console.log("doubled_numbes_container:", doubled_numbes_container);
//the map() method is often used as a more concise alternative to a for loop when you want to apply a function to each element of an array and create a new array with the results.
// how map() works:
// It iterates over each element of the array.
// For each element, it applies a function that we provide.
// It collects the return value of each function call into a new array.
// It returns this new array containing the results.
//Author:HUMA MOHSIN
