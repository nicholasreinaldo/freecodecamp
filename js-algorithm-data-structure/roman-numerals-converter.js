// Javacript code for Roman Numeral Converter project from FreeCodeCamp.
// A Roman numeral is a numerical representation system in which combinations of letters (I, V, X, L, C, D, and M) are used to represent specific integer values.
// The story is to convert any given number into a roman numeral using the mentioned rules, and the answers should be provided in upper-case.

function convertToRoman(num) {
 let romanNum = { // This is an object that maps Roman numeral characters to their corresponding decimal values. The object contains key-value pairs where the keys represent the Roman numerals and the values represent their decimal equivalents.
   M: 1000, 
   CM: 900,
   D: 500,
   CD: 400,
   C: 100,
   XC: 90,
   L: 50,
   XL: 40,
   X: 10,
   IX: 9,
   V: 5,
   IV: 4,
   I: 1,
 };
 let answer = ""
 for (let prop in romanNum){ // This iterate over the 'romanNum' property. 
   while (num >= romanNum[prop]){ // This checks whether the current Roman numeral's value is less than or equal to the input number.
     answer += prop;
     num -= romanNum[prop]; //  If it is, this code appends the Roman numeral to the answer string and subtracts the corresponding decimal value from num.
   } // The loop continues until num becomes less than the decimal value of the current Roman numeral. It then moves on to the next Roman numeral in the romanNumerals object and repeats the process until all Roman numerals are checked.
 }
 return answer;
}

console.log(convertToRoman(36));
