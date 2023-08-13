// Javacript code for Telephone Number Validator project from FreeCodeCamp.
// The user story is they may fill out the form field any way they choose as long as it has the format of a valid US number. 
// This function must pass this US number valid formats:
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555 

function telephoneCheck(str) {
  let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm
  return regex.test(str);
}

// Explanation of the regex pattern step by step:

// ^: This symbol signifies the start of the string.
// 1?: The 1 is optional, represented by the ? symbol. This allows for both numbers with and without a leading '1' (like for country codes).
// \s?: This represents an optional whitespace character (space).
// (\d{3}|\(\d{3}\)): This part captures the area code. It's either three consecutive digits (\d{3}) or enclosed within parentheses \(\d{3}\). The | symbol acts like an OR operator between the two options.
// -?: This represents an optional hyphen.
// \s?: Another optional whitespace character.
// \d{3}: This captures the first three digits of the phone number.
// -?: Another optional hyphen.
// \s?: Yet another optional whitespace character.
// \d{4}: This captures the last four digits of the phone number.
// $: This symbol signifies the end of the string.

console.log(telephoneCheck("555-555-5555"));
