"use strict"// treat all js code as newer version
 
//number 2 power 52 is range
//String =>""
//boolean => true/false
//null => standalone value
//undefined 
//symbol => unique

//typeof is used to which typeof datatype 
//datatype conversion

let score=null;

let StringToNumber=Number(score)

console.log(typeof StringToNumber)
console.log(StringToNumber);

//convertion any dataytype to number
// "22" => got 22  and type is number 
//"222abc" => got NaN  and type is number
// true => got 1 and type is number || false => got 0 

//convertion any type to boolean
//"" => got false  and type is boolean
//"deepak" => got true 
//1 => got true

let a;
let convertToNumber=Boolean(a)
console.log(convertToNumber);
console.log(typeof convertToNumber);

//conversion any type to String
let b=1234;

let c=String(b);

console.log(c)

console.log(typeof c);