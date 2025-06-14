//inster element
// let newBtn =  document.createElement("button");
// newBtn.innerText = "click here";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn); if you want inster in ending of node

//div.prepend(newBtn)  if you want to insert in starting of node

//div.after(newBtn) --> inster after the node

//div.before(newBtn); ---> inster before div

// let newHeading = document.createElement("h1");
// newHeading.innerText = "niet college";

document.querySelector("body").prepend(newHeading)

let newHeading = document.createElement("h2")
newHeading.innerText = "niet eng college";
document.querySelector("body").append(newHeading)

// delete node element -->
let para = document.querySelector("p");
para.remove()

//child --> returnchild nodes (element nodes,text nodes,and comment nodes)

// let newBtn = document.createElement("Button");
// newBtn.innerText ="click here";
// newBtn.style.backgroundColor = "red";
// console.log(newBtn);

let div = document.querySelector("div")


