//Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [45, 48, 42, 33, 49];
var sum = 0;
//doing sum ,between items of an array.
for (var i = 0; i < grades.length; i++) {
    sum += grades[i];
}
var averge = sum / grades.length;
console.log("SUM:", sum);
console.log("No. Of Grades:", grades.length);
console.log("Average Grade:", averge);
//this task can be done by using reduce method.
//console.log("\n");
console.log("\n");
var sum_by_reduced = grades.reduce(function (previous_value, current_value) { return previous_value + current_value; }, 0);
console.log("sum by reduced method:", sum_by_reduced);
var average_by_reduced_method = sum_by_reduced / grades.length;
console.log("Avergae by reduced method", average_by_reduced_method);
//Author:HUMA MOHSIN
