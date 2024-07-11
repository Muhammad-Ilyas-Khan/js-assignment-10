// JAVASCRIPT PRACTICE PROBLEMS - 2

// NOTE: HAR PROGRAM KLYE (JAHA ARRAY REQUIRED HA) ARRAY USER SE LE JIS ME 5 ELEMENTS HO

// 6. FIND THE SMALLEST NUMBER IN AN ARRAY
// var numbers = [];
// var smallestNum = 0;
// for (var i = 0; i < 5; i++) {
//     var userInput = +prompt("Enter number");
//     numbers.push(userInput);
//     userInput = numbers[i];
//     if (userInput < numbers) {
//         smallestNum = userInput;
//     }
// }
// console.log("These are numbers:", numbers);
// console.log("This is smallest number:", smallestNum);
// 7. CONVERT CELCIUS TO FAHRENHEIT
// var tempInF = 0;
// var userInput = +prompt("Enter temperature in C");
//     tempInF = (9/5 * userInput) + 32;
// console.log("Temperature in Fahrenheit:", tempInF);
// 8. CONVERT FAHRENHEIT TO CELCIUS
// var tempInC = 0;
// var userInput = +prompt("Enter temperature in C");
// tempInC = (userInput -32) * 5/9;
// console.log("Temperature in Celcius:", tempInC); 
// 9. REVERSE AN ARRAY
// var arr = [1, 2, 3, 4, 5];
// var reversedArr = [];
// for (var i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
// }
// console.log(reversedArr);
// 10. CALCULATE AVERAGE OF AN ARRAY
var arr = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
var average = sum/arr.length;
console.log("The average is:", average);