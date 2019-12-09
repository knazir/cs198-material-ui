const codeString = `
/**
 * File: Luhn.js
 * -------------
 * This program exports the isValid predicate method, which returns true
 * if and only if the number supplied as an argument could be a valid credit
 * card number according to Luhn's algorithm.
 */

"use strict";
const NUMBERS = [ 4460246643298726, 4460246643298627, 4460246643298727 ]; //given test numbers

/* Main program */
function TestLuhnAlgorithm() {
	for (let i = 0; i < NUMBERS.length; i++) {
		console.log("Account number " + NUMBERS[i] + " -> " + (isValid(NUMBERS[i]) ? "valid" : "invalid"));
	}
}

/**
 * Function: isValid
 * -----------------
 * Returns true if and only if the supplied number meets the requirements imposed by Luhn;s algorithm.
 */
function isValid(number) {
   // Initialize sum and counter variables to store the Luhn's sum and to control whether digit being assessed is even or odd respectively
   
   let sum = 0
   let counter = 1

   //while loop takes the last variable, checks if it is even or odd and determines calculation per Luhn's algorithm

   while (number>0){ 
      if (counter % 2 === 0 && 2*(number % 10) > 9){ //checks if even AND if multiplication by 2 returns more than 9.
         sum += (number % 10)*2 - 9 //If so, multiply by 2 and subtract 9 and add to running total
      } else if (counter % 2 === 0) {
         sum += (number % 10)*2 //If only even, but multiplication by 2 is less than 9, just multiply by 2 and add to running total
      } else {
         sum += (number % 10) //if not even, just add to running total
      }
      number = Math.floor(number/10) //Divide number by 10 and prep next digit
      counter +=1 //Increase counter by 1 (if current digit is even, next is odd and vice versa)
   }
   let status = sum % 10 === 0 //Check if it ends in 0 - if yes then valid
   return status;
}
`.trim();

export default codeString;
