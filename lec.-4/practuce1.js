let marks = [85,97,44,37,76,60];
let sum =0;
for(let val of marks){
    sum += val; // sum + val
}
let avg = sum/marks.length
console.log(`avg marks of student = ${avg}`);

//question 2
let items = [250,645,300,900,50];
/*
let i = 0; // i means item index
for (let val of items){
    let offer = val/10
    items[i]= items[i]-offer;
    console.log(`value after offer = ${items[i]}`);
    i++;

}*/

 //another method using for lopp its easy than for loop

for(i = 0; i<items.length;i++){
    let offer = items[i]/10; // 250/10 --> 25 
    items[i] -= offer; //  645/10 --> 64.5 --> 645-64.5 --> 580.5
}
console.log(items)