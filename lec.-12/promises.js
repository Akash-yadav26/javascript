//promise --> soln for call back hell
//let promise = new Promise((resolve, reject) =>{
   // console.log("I am a promise");
   // resolve(123);
  // reject("some error");
//});

// promise has three states --> pending, resolve, reject
function getData(dataId,getNextData){
   return new Promise ((resolve,reject)=>{
      setTimeout(() =>{
         console.log("data",dataId);
         //resolve("success");
         reject("error");
         if(getNextData){
            getNextData();
         }
      },5000);
   });
}
//---> go to console type --> let newVal = getData(1234); --> enter--> type --> newVal again press enter
