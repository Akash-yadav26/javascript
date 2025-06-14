//nesting

let age = 19;
if (age >= 18){ //-----------------------------------
if(age>=60){
    console.log("old")
}else{
    console.log("adult")
} //--------------------------------------whole part called nesting
}else{
    console.log("child")
}

// looop
for(let i = 0; i<=5; i++ ){
    let str = "";
    for( let j = 0 ; j<=5; j++){
        console.log(j);
        str= str+j ;
    }
    console.log(i,str);

}

//callback hell ---> nested callback
//function getData(dataId){
//console.log("data",dataId);
//}

// let p1 = getData(1);
// p1.then((res)=>{
//     console.log(res);
// });

// wahat acutal formate of promise writing

//----- promise chain
getData(1).then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log("success")
})

//callback hell-----

// getData( 1, ()=>{
//     getData(2,()=>{
//      getData(3,()=>{
//         getData(4);
//      });   
//     })
// });
