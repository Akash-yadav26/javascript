let marks = [87,99,78,98,65];
  let newstudents = marks.filter((val)=>{
    return val>90
})
 console.log(newstudents)

//question number 2
let n = prompt("enter your number : ");
let arr = [];
for( let i = 1 ; i<=n; i++){
    arr[i-1] =i;
}
console.log(arr);
 let sum = arr.reduce((prev,curr) => {
    return prev+curr;
})
console.log( "the total sum of number is = ",sum)

let producte = arr.reduce((prev,curr) => {
    return prev*curr;
})
console.log("the product of number is =",producte
)
