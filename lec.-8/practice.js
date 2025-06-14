let mode = document.querySelectorAll("mode");
 let currMode = "light";

mode.addEventListener("click",()=>{
if(currMode === "light"){
    currMode ="dark";
   
}else{
    currMode ="light";
   
}
console.log(currMode);
})