//conditional statement
//if

//let age = 31;
//if(age > 18 ){
  //  console.log("you can vote now");
//}

let subjectPassed = 4
if(subjectPassed > 3){
    console.log("you are eligibal")
}

// let  mode = "light";
// let color;
// if(mode==="dark"){
//     color = "black";
// }
// if(mode==="light"){
//     color = "white"
// }
// console.log(color);


//if or else

let shop = "gaming";
 let addres;
if(shop === "gaming"){
addres = "shantipuraM";
}else{
    addres = "phaphamau";
}
console.log(addres)
//odd even
let num = 10; // num%2 ==> num is dived by 2
if(num%2 === 0) {
    console.log(num," is even");
} else{
console.log(num,"is odd")
}

//else if
let mode = "dark"
let color;
if (mode === "dark" ){
    color = "black";
}
else if (mode === "blue"){
    color = "blue";
}
else if (mode === "red"){
    color = "red";
}
else {
    color = "white";
}
console.log(color);

//ternary operators [simple  another way to write if eslse satatement

let age = "16";
let result = age >= 18 ? "adult": "not adult";
console.log(result)


let boy = "8"
let classrom = boy >= 15 ? "maths class" : "physics class";
console.log(classrom)