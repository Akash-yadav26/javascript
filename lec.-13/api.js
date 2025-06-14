// fetch api
//------> Let promise = fetch(url,[options]);


const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");




const getFacts = async ()=>{
    console.log("getting data......");
    let response = await fetch(URL);
    console.log(response); // response.status
    let data =  await response.json(); 
  factPara.innerText = data.fact
};


// w can aslo through promsie chaining but we cant not use beacuse of complex code
// function getFacts (){
//     fetch(URL).then((response) =>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText = data.fact;
//     })
// }


btn.addEventListener("click",getFacts);

