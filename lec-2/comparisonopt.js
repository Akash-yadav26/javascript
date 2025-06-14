// comparion oprator
let a = 4;
let b = 5;
console.log("a == b ",a == b); //false
console.log("a == a",a == a);//true
console.log(" a != b", a != b )//true
// strict version of equal to

  let c = 4; //number
  let d = "4" // strings

console.log("c == d",c == d)// true but this not correct
 
//use strict equal sign === or not euqual to !==
console.log("c === d", c===d); //false
console.log("c !== d ", c !== d); // true

//some other sign
 let e = 5;
 let f = 4;
  console.log("5 > 4", e > f);//true
  console.log("5<4", e < f);//false
  

  let r = 5;
  let y = 5;
 console.log("r >= y", r >= y);//true


 //logical oparator
 //AND
 
 let z = 10;
 let m = 8;
// in and ---> if both statement is true than it return true other all are false 
  let cond1 = z > m;//true
  let cond2 = z === m;//false
  console.log("cond1 && cond2 =",z > m && z===m); //false

  //or

  // if both condition is false than it false other wise it always eturn true
console.log(" cond1 || cond2 = ", z > m || z===m );

//not
// only have one conditon --> f =t and t=f
console.log("!(10 > 8)=", !( z > m));
console.log("!( 10 < 8) =", !(z < m ));

