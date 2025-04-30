
//* Comparison Operators
//? Used to compare values and return a Boolean (true or false).


//^    ==	:   Equal to  ( only checks value )
//^    ===	:   Strict equal (checks both value and type)	 
//^    !=	:   Not equal to	 
//^    !==	:   Strict not equal	 
//^    >	:   Greater than	 
//^    <	:   Less than	  
//^    >=	:   Greater than or equal to	
//^    <=	:   Less than or equal to



//* Number to Number Comparison

console.log(1 == 2);
console.log(1 > 2);
console.log(1 < 2);
console.log(1 != 2);
console.log(1 >= 2);
console.log(1 <= 2);





let num = 10;
let str = "10";
console.log(num == str);
// "==" follows type conversion of string to number.

// However, "===" checks type first then compare values.  
console.log(num === str);




//^   Rules for comparison of null and undefined -   


//* Null comparison

//?    null == undefined  --> true
//?    null === undefined  --> false
//?    null and undefined are not comaparable to any other datatype, returns false.
//?    null can only be equivalent to undefined.


console.log(null == undefined);
console.log(null === undefined);

//? For other comparisons, null is type converted in number to "0".

console.log(null == 0);  /*  null is only comparable to undefined  */
console.log(null > 0);
console.log(null < 0);
console.log(null <= 0);
console.log(null >= 0);




//* Undefined comparison

//? undefined can only be equivalent to null.
//? For other comparisons, undefined is type converted to "NaN".


console.log( undefined == 0);
console.log( undefined > 0);
console.log( undefined < 0);
console.log( undefined <= 0);
console.log( undefined >= 0);


//? "NaN" is not comparable to even itself.

console.log(NaN == NaN);


//^ NOTE - For null and undefined in "==" case, there will be no type conversion as they are only comparable to each other.

// Sample Example 1 -

let abc1 = 123;
let abc2 = "123";
let abc3 = 123;

console.log(abc1 == abc2 == abc3);



// Sample Example 2 - 

console.log(undefined != null);

//? undefined == null → true (due to type coercion).
//? undefined != null → false (because != is the opposite of ==).
//? undefined === null → false (strict comparison, different types).
//? undefined !== null → true.


