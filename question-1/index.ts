// //Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

// Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.

//solution:-
let numbers: number[] = [2, 5, 8, 4, 9, 15, 80];

function double_numbers(numbers: number[]): number[] {//It takes an array of numbers as an argument and returns an array where each number has been doubled.

    let doubled_numbers: number[] = [];//creating an array for double number ,when values are doubled they store in it.
    for (let i = 0; i < numbers.length; i++) {
        doubled_numbers.push(numbers[i] * 2);//inserting double values in an array,called doubled_numbers
    }
    return doubled_numbers;
}

let twice_of_numbers: number[] = double_numbers(numbers);//we're calling the double_numbers function, passing the numbers array to it, and assigning the result (the array of doubled numbers) to the variable twice_of_numbers
console.log("original array:",numbers);
console.log("double of an array:",twice_of_numbers);
console.log("\n");

//alternate way
//using arrow function, BY USING MAP METHOD we can do it.
let numbers_container:number[]=[4,2,6,8,16,100,66]
let doubled_numbes_container=numbers_container.map(item=>item*2);
console.log("numbers_container:",numbers_container);
console.log("doubled_numbes_container:",doubled_numbes_container);
//Author:HUMA MOHSIN

//the map() method is often used as a more concise alternative to a for loop when you want to apply a function to each element of an array and create a new array with the results.
// how map() works:
// It iterates over each element of the array.
// For each element, it applies a function that we provide.
// It collects the return value of each function call into a new array.
// It returns this new array containing the results.
