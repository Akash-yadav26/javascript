const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select")
const tocurr = document.querySelector(".to select")




for(let select of dropdowns){
  for(currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if(select.name === "from" && currCode === "USD"){
      newOption.selected = true;
    }else if( select.name ==="to"&& currCode ==="INR"){
      newOption.selected = true;
    }
   select.append(newOption);
  }
  select.addEventListener("change",(evt)=>{
    updateflag(evt.target);// when any change happen target pass information about that
  })
};

const updateflag = (element) =>{
let currcode = element.value;
let countrycode =countryList[currcode];
let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src = newsrc;
}
btn.addEventListener("click",async(evt)=>{
evt.preventDefault();// stops the defalut function of form 
let amount = document.querySelector(".amount input");
let amtval = amount.value;
if(amtval === "" || amtval < 1){
  amtval = 1;
  amount.value = "1";
}
 let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
 console.log(URL)
  // let response = await fetch(URL);
  // console.log(response);
  // const data=await response.json();
  // let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  // console.log(rate)
})