let arr = [757,5769,890];


arr.forEach((val) => {
    console.log(val *val) //or we can use val**2
})


//another method 
let r = [45,56,789]
let calary = (num) => {
    console.log(num**2);
}
r.forEach(calary)