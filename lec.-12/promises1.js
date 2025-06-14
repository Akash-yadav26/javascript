//promises

// const getPromise =()=>{
//  return new Promise((resolve,reject)=>{
//  console.log("i am a promise");
//  //resolve("success");  
//  reject(" network error"); 
// });
// };

/// if we pass the the statement the reject in palce of resolve than nicha nw ala kabhi print nahi hoaga
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled");
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
// });


// promise chain------------------------------------------------

function asyncFun(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("some data1"); 
    resolve("success");   
    },2000);
    })
}

function asyncFun1(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("some data2"); 
    resolve("success");   
    },3000);
    })
}
function asyncFun2(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("some data3"); 
    resolve("success");   
    },4000);
    })
}

//------------------------------------------------this make all function work parallel so this wrong way we wnat function to work 1 after another
// console.log("facting data1")
// let p1 = asyncFun();
// p1.then((res)=>{
//     console.log(res);
// })

// console.log("facting data2")
// let p2 = asyncFun1();
// p2.then((res)=>{
//     console.log(res);
// })
// console.log("facting data3")
// let p3 = asyncFun1();
// p3.then((res)=>{
//     console.log(res);
// })
//------------------------------------------------------------
// let p1 = asyncFun();
// p1.then((res)=>{
// console.log(res);
// console.log("fetching data2....")
// let p2 = asyncFun1();
// p2.then((res)=>{
//     console.log(res);
//     console.log("fetching data3.....");
//     let p3 = asyncFun2();
//     p3.then((res)=>{
//         console.log(res);
//     })
// })
// })

// we can  alsoo write in this way 

asyncFun().then((res)=>{
    console.log(res);
    console.log("fetching data1.....")
    asyncFun1().then((res)=>{
        console.log(res);
        console.log("fetching data2.....");
        asyncFun2().then((res)=>{
            console.log(res)
        })
    })
})