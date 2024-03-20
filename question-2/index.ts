// //Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

//solution
 
let mix_items: (string | number)[]=[12,"Pakistan","Australia",32,"China",56,"Dubai",45];//filter method is one of the most important method to filterout something from a list of an array.
let only_strings=mix_items.filter(mix_items=>typeof mix_items==="string")//we use typeof, this indicates what type of data we want to extract from an array strictly.
console.log(only_strings);
//we can only be filter number as 
let only_number=mix_items.filter(mix_items=>typeof mix_items==="number")
console.log(only_number);

//alternate way
let mixed_items: (string | number)[] = [123, "ROBOTICS-AI", "ML", 4567, "DS", "GEN-AI",67];
let string_only: string[] = [];  // Initialize an empty array to store words

for (let item of mixed_items) {
    if (typeof item === "string") {
        string_only.push(item);
    }
}
console.log(string_only);
//Author- HUMA MOHSIN