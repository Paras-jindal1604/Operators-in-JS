
//* Logical Operators
//? Used to combine multiple conditions.


//^     &&	 :      Logical AND   (Both conditions must be true)	
//^     `	 : 		Logical OR    (At least one condition must be true)
//^     !	 :      Logical NOT   (Reverses the condition)	



//? 1. Logical AND (&&)

console.log(10 > 5 && 20 > 15); 
console.log(10 > 5 && 20 < 15); 
console.log(false && console.log("This won't print")); 


//? 2. Logical OR (||)

console.log(10 > 5 || 20 < 15); 
console.log(10 < 5 || 20 < 15); 
console.log(true || console.log("This won't print")); 


//? 3. Logical NOT (!)

console.log(!true);  
console.log(!false); 
console.log(!(10 > 5));  




