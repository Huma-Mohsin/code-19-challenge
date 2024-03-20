// //Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.
//solution
var mix_items = [12, "Pakistan", "Australia", 32, "China", 56, "Dubai", 45]; //filter method is one of the most important method to filterout something from a list of an array.
var only_strings = mix_items.filter(function (mix_items) { return typeof mix_items === "string"; }); //we use typeof, this indicates what type of data we want to extract from an array strictly.
console.log(only_strings);
//we can only be filter number as 
var only_number = mix_items.filter(function (mix_items) { return typeof mix_items === "number"; });
console.log(only_number);
//alternate way
var mixed_items = [123, "ROBOTICS-AI", "ML", 4567, "DS", "GEN-AI", 67];
var string_only = []; // Initialize an empty array to store words
for (var _i = 0, mixed_items_1 = mixed_items; _i < mixed_items_1.length; _i++) {
    var item = mixed_items_1[_i];
    if (typeof item === "string") {
        string_only.push(item);
    }
}
console.log(string_only);
//Author- HUMA MOHSIN
