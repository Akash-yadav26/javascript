//quary slector can print (myid,myclass,tag)
let para = document.querySelector("p"); // print only first element
console.dir(para);

let allpr= document.querySelectorAll("p");
 console.dir(allpr);
 // queryselector for class
 let cl = document.querySelector(".heading-class")
 console.dir(cl)
 let allcl = document.querySelectorAll(".heading-class")

 // for id 
 let newid = document.querySelectorAll("#myid") // THREE TYPE NODE 1. TEXT 2. COMMENT 3.ELEMENT
 console.log(newid)
 
 //firstchild

console.dir(document.body.firstChild); // first child like first eleemnt of that paRT
 console.dir(document.querySelector("div").children)// CHILDREN LIKE HOW MANY TAG ARE THER IN SINGLE ATG\


//INNERTEXT --> PROPERTIES  RETURN THE TEXT CONENT OF ELEMENT AND ALL ITS CHILDREN
let div = document.querySelector("div");
console.dir(div);
 let n= div.innerText // or you can directley type div.innertext in console to see result 
 console.dir(n)

 let c = div.innerHTML// print word with html tag
 console.dir(c)

 // go to console and type  
 //if you want to can the text ---->  
 let heading = document.querySelector("h1") // in console type heading.innerText --> heading.innerHTML to
// we can also wirte --> document.innerHTML = "<i>akash</I> " --> in this we can aslo change the font of text also 

 
 //innercontent --> return textual content even for hidden elements
 




                                                                                                        