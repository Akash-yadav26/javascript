// async Await
//... if we async---> in any function than that function always return a promise
//... Await --> pauses the execution of its surrounding ASync function until the promise is settled


function api (){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("weather data");
        resolve(200);
     },2000);
    });
}
async function getWeatherData(){
    await api();//1st
    await api();//2nd
}

function getData(DataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("data",DataId);
          resolve("success");
        },3000)
    })    
    }

    async function getAlldata(){
        await getData(1);
        console.log("facting...data2");
        await getData(2);
        console.log("facting...data3");
        await getData(3);
        console.log("facting...data4");
        await getData(4);
        console.log("facting...data5");
        await getData(5);
        console.log("facting...data6");
        await getData(6);
    }
    // IIFE --> iif is fuction that is called immeditely as soon as it defined
    // --> (fun)(){}
    //--> (()=>{})();
    //--> (async()=>{})();
    (async function getAlldata(){
        await getData(1);
        console.log("facting...data2");
        await getData(2);
        console.log("facting...data3");
        await getData(3);
        console.log("facting...data4");
        await getData(4);
        console.log("facting...data5");
        await getData(5);
        console.log("facting...data6");
        await getData(6);
    })();
