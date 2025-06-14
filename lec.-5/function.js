//redundancy ---  means code repeat hona

//myfunction called function definition --  used to define function
function myFunction() { // function input called parameter-- like (msg)
console.log("hello world");
}

// this called function call --  used to print or run command
myFunction(); //this
myFunction();
// to see hello world result comment out rest codes



//next

function myFunction(msg){ // function input called as parameter 
    console.log(msg);
}
myFunction("shradha kaphra"); // fuction call input --- argument


//function --> 2number,sum--------

/*function sum(X,Y){
    console.log(x + y);
    //console.log(x) ---- it is write --->  function parameter are like local variable of function -----> block scope means thay valid only for function block

}*/

//-------------

function sum(x,y){
//local variable ---> scope
 s = x + y;
 console.log("before return");
 return s;
} 

let val = sum(3,4)
//console.log(x)------ not print beacuse this local variable
 console.log(val);

function add(x,y){
    s = x+y;
return s;
}
add(12,34);
console.log(s)

