//infinte loop 

//for(let i =1; i>=0; i++){
//    console.log("akash")
//}


//while loop
// conditon check at start 
let r = 1;
while( r <=10){
    console.log("roman riengs",r);
    r++;
}

//do while loop

let f = 16; // conditon check after runing atleast one time 
do{
   console.log("roll no : ",f);
   f++;
} while(f<=10);

//for of loop
// help to apply loop on array and string
// in this loop let me jo mante hai for exmaple ham -i- mane hai to i value will automatically update whaen loop run
// i --> also called iterator
let str = "javascript"
let size = 0
for(let i of str ){
    console.log("i = ",i);
    size++;
}
console.log("string size = ",size);
//for in loop
// to access keys of object we use for in loop and we can excess value of keys

let student = {
    name:"akash yadav",
    age:20,
    rollNumber:23,
    cgpa: 3.87
};
for(let key in student){
    console.log("key =",key, "value=",student[key]);
}
