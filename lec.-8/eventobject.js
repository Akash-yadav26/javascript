// event properties is used for check properties of object
/*let newbtn = document.querySelector("btn");
btn.onclick = (evt) => {
    console.log(evt)
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);

};*/

// we can only write one function by event  method


//event listner --> we can create  multiple event lsitener bye one event
// node.addEventListener(event,callback) callback --> is called  function or event handler 
// event --> any event like onclick , or onmouseover

let newbtn = document.querySelector("btn");
btn.addEventListener("click",(evt) =>{
    console.log("clicked on button")
    console.log(evt)
    console.log(evt.type)
});
 btn.addEventListener("click",() => {
    console.log("clicked secomd time")
 })
 const three = () =>{
    console.log("clicked three times")
 }

 btn.addEventListener("click",three)

 //remove event --> if we directley remove the function from event it dose not remove beacuse every function take some memeory 
// the callback reference should be same to remove
btn.removeEventListener("click",three);
