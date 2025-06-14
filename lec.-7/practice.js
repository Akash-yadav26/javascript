let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newBtn)

// question 2
// if write class  over a class by not completely removing previous class
 let para = document.querySelector("p");
para.classList.add("Class");
// --> to reomve aANY CLASS WE TYPE => para.classList.remove()

