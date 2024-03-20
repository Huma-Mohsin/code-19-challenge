//Find the Average Grade: Given a list of grades, calculate the average grade.

let grades: number[] = [45, 48, 42, 33, 49];
let sum = 0;

//doing sum ,between items of an array.

for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}

let averge = sum / grades.length;
console.log("SUM:", sum);
console.log("No. Of Grades:", grades.length);
console.log("Average Grade:", averge);
//this task can be done by using reduce method.
//console.log("\n");
console.log("\n");
let sum_by_reduced = grades.reduce(
  (previous_value, current_value) => previous_value + current_value,
  0
);
console.log("sum by reduced method:", sum_by_reduced);
let average_by_reduced_method = sum_by_reduced / grades.length;
console.log("Avergae by reduced method", average_by_reduced_method);

//Author:HUMA MOHSIN
