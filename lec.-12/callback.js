function sum(a,b){
console.log(a+b);
}

function calculator(a,b,sumCallback){ // IF WE CAN NOT TYPE CALLBACK THAN ASLO SUM ALONE IS CONSIDER AS CALLBACK
sumCallback(a,b);
}

calculator(1,2,sum); // never pas callback on `()` 

// callback -- > a function which pass as argument in another function is call calback


const hello = ()=>{
    console.log("hello");
};

setTimeout(hello,3000);