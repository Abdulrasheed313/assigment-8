// 1
// // function power(a,b){
// // return Math.pow(a, b)

// // }
// // console.log(power(7,3))


// // 1. Power Function
// function power(a, b) {
//     return Math.pow(a, b);
// }
// console.log("Power(2, 3):", power(2, 3));

// // 2. Leap Year Check
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }
// console.log("Is 2024 a leap year?", isLeapYear(2024));

// // 3. Area of Triangle
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     var S = calculateS(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }
// console.log("Area of triangle (3, 4, 5):", calculateArea(3, 4, 5));

// // 4. Marks Average and Percentage
// function getAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }

// function getPercentage(m1, m2, m3) {
//     var totalMarks = 300; // Assuming 100 per subject
//     return ((m1 + m2 + m3) / totalMarks) * 100;
// }

// function mainFunction(m1, m2, m3) {
//     var avg = getAverage(m1, m2, m3);
//     var perc = getPercentage(m1, m2, m3);
//     console.log("Average: " + avg);
//     console.log("Percentage: " + perc + "%");
// }
// mainFunction(85, 90, 95);

// // 5. Custom indexOf
// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log("Index of 'e' in 'hello':", customIndexOf("hello", "e"));

// // 6. Delete All Vowels
// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, '');
// }
// console.log("Remove vowels from 'Hello World':", removeVowels("Hello World"));

// // 7. Count Two Vowels in Succession (Using switch)
// function countSuccessiveVowels(text) {
//     var count = 0;
//     for (var i = 0; i < text.length - 1; i++) {
//         var first = text[i].toLowerCase();
//         var second = text[i + 1].toLowerCase();
//         switch (first) {
//             case 'a': case 'e': case 'i': case 'o': case 'u':
//                 switch (second) {
//                     case 'a': case 'e': case 'i': case 'o': case 'u':
//                         count++;
//                         break;
//                 }
//                 break;
//         }
//     }
//     return count;
// }
// console.log("Successive vowels in 'Pleases read this application and give me gratuity':", countSuccessiveVowels("Pleases read this application and give me gratuity"));

// // 8. Distance Converter
// function toMeters(km) {
//     return km * 1000;
// }

// function toFeet(km) {
//     return km * 3280.84;
// }

// function toInches(km) {
//     return km * 39370.1;
// }

// function toCentimeters(km) {
//     return km * 100000;
// }
// console.log("5 km in meters:", toMeters(5));
// console.log("5 km in feet:", toFeet(5));
// console.log("5 km in inches:", toInches(5));
// console.log("5 km in centimeters:", toCentimeters(5));

// // 9. Overtime Pay
// function calculateOvertime(hoursWorked) {
//     if (hoursWorked > 40) {
//         return (hoursWorked - 40) * 12;
//     } else {
//         return 0;
//     }
// }
// console.log("Overtime pay for 45 hours:", calculateOvertime(45));

// // 10. Cashier Currency Notes
// function calculateNotes(amount) {
//     var hundreds = Math.floor(amount / 100);
//     var remainder = amount % 100;

//     var fifties = Math.floor(remainder / 50);
//     remainder = remainder % 50;

//     var tens = Math.floor(remainder / 10);

//     console.log("Amount:", amount);
//     console.log("100s: " + hundreds);
//     console.log("50s: " + fifties);
//     console.log("10s: " + tens);
// }
// calculateNotes(760);
