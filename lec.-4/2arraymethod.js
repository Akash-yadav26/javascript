//push last me add hota hai 

let games = ["green","red","yellow","violet"];
games.push("free","get") // add in last line in array
console.log(games)
let hack = ["free","quiz"];
hack.push("green")
console.log(hack)

//pop last me delete hota hai
let college = ["iit bombay","gl bajaj","galgotia","niet","akgec"];
let deletedItems = college.pop();
console.log("deleted items = ",deletedItems );//akgec

// to strings
let school = ["rpvm","mpvm","rudra"]
console.log(school.toString());// convert arry into string
console.log(college.toString());
 

//conact joint multiple array and return anew array

let flipkart = ["headphone","dreeses","fashion"];
let amazon = ["wrr","rtt","yttt"];
let shoping = flipkart.concat(amazon);
console.log(shoping);

let t = [43,56,67,89,9]; //order for printing array -->1
let r= [34,4,5,67,8,9];// order--> 2
let g = [45,67,89,0,2,0]//order-->3
let total = [t.concat(r,g)]; //multiple add keya hu
console.log(total);

//unshift() method ------ WORK AS PUSH METHOD add string on font side 

let y =["freefir","bgmi","cod ware zone"]

y.unshift("antman");
console.log(y);

//shift use to delete strings on font side 

let v = ["gg","ft","opp",]
 let val = v.shift();
console.log("deleted part = ",val);
console.log(v);

// slice method----- do not change in array, form new array

let messho = ["table","fan","bomb"];
console.log(messho.slice(1,3)); // 1 se 3 matalb ki 1 number wala exclude aur 2 aue 3 number ko print

//splice method --------- splice()----- change in original array ( add , rmove , replace)
let rol = [45,67,89,0,1];
rol.splice(1,2,501);
console.log(rol) // splice  1 ka matalb  1se suru  , 2 ka matalb  hai 2 element delete honge 1 ke bad , 501  matalb  ye number add honge

//only addd
let arrrh =[34,56,78,98];
arrrh.splice(1,0,402);
console.log(arrrh);

//only delete

/*rol.splice(3,1)
console.log(rol);*/

//replace
//rol.splice(2,1,304);
//console.log(rol);

//some other  if we pass only index number than
 let ssd = rol.splice(1); // 1 ka matalb 1 ke bad sarre array print karo
console.log(ssd);


