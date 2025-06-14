//dom manipulation // link html2 file to see result 

//--- selecting with id -----  => document.getElementByid("myid")
 let header = document.getElementById("heading");
 console.dir(header);


//selecting with class ==> document.getElementsByClassName("my class")
let heading = document.getElementsByClassName("heading-class");
console.dir(heading); // console.dir used to display the properties of object
console.log(heading);


//SELECTING BY TAGS 
let para = document.getElementsByTagName("p");
console.log(para)
let p = document.getElementsByTagName("h")
console.log(p)



