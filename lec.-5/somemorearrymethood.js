//map   this type of arr  gives new arry and this mainly use for value  for call back but arry and index can also be included

let num = [454,67,88,89]
 let newArr = num.map((val) => {
    return val *2;
});
console.log(newArr)

 let dev = [45,56,78,89,];
 let newdev = dev.map((indx)=>{     //
    return indx*2
 })
 console.log(newdev);  

//filter method

let arr = [45,56,787,2,24,244,44]
 let newEven = arr.filter((val) => {
    return val%2 === 0 //val>3 ye ccondition be apply kar sakte hai 
})
console.log(newEven)

///

let f= [23,45,66,88,22,11,33,55,66,77,99]
let newF = f.filter((val) => { 
    return val%2 !== 0 // only print values which  is not divisible by 2
})
console.log(newF)
let atif =[489,67,90,234,67];
let newatif = atif.filter((val)=>{
    return val%3 !== 0
})
console.log(newatif);                                     

//reduce method  => two parameter are pass in this method  (accumelator is => like called as result,currentvalue)
let rtt = [1,2,3,4,5,6,7,8];
const newOutput = rtt.reduce((res,curr) => {
    return res + curr // 36
})
console.log(newOutput);

//greater than

let opp = [1,2,3,4,5,6,101,8];
const newGtt = opp.reduce((res,curr) =>{
    return res > curr ? res : curr  // agar res current se bada hai to res return kardo  nahi to current ko return karo
})
console.log(newGtt);

// in the place of result we can also privious

//smaller than

