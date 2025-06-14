//let heading = document.querySelector("h2");
 //console.dir(heading.innerText);
 //heading.innerText = heading.innerText + "from apna college students";


 // question 2
 let divs = document.querySelectorAll(".box");
 //divs[0].innerText ="hello guys this div1";
 //divs[1].innerText = "gg guys weldone";
 //divs[2].innerText = "hhrlo ppragi"; // this write but at beggner level

//second method
let idx = 1;
for(div of divs){
    div.innerText = `new unique number${idx}`;
    idx++;
}

