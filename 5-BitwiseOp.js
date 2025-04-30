
//* Bitwise Operators
// ? perform operations directly on the binary representation of numbers. These operators treat numbers as 32-bit signed integers.


//^ Bitwise AND   :  ( & )  
//^ Bitwise OR    :  ( | )
//^ Bitwise XOR   :  ( ^ )
//^ Bitwise NOT   :  ( ~ )
//^ Left Shift    :  ( << )
//^ Right Shift   :  ( >> )


//* 1. AND (&) - Compares each bit of two numbers and returns 1 only if both bits are 1.
console.log(5 & 3);


//* 2. OR (|) - Compares each bit of two numbers and returns 1 if at least one of the bits is 1.
console.log(5 | 3);


//* 3. XOR (^) - Returns 1 only if the bits are different.
console.log(5 ^ 3);  


//* 4. NOT (~) - Inverts all bits (flips 0s to 1s and vice versa).
console.log(~5);


//* 5. Left Shift (<<) - Shifts bits to the left by the given number of positions (fills with 0s on the right).
console.log(5 << 1);


//* 6. Right Shift (>>) - Shifts bits to the right while preserving the sign (sign-propagating).
console.log(-8 >> 2);






























