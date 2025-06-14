let marks = [34,56,78,90];
console.log(marks);
console.log(marks.length);//4

let marvel = ["thor","x man","deadpool"];
console.log(marvel);

//for loop
for(idx = 0; idx<marvel.length;idx++ ){
    console.log(marvel[idx]);
}

//for of loop

let city = ["praygraj","phaphamau","aligrah"];

for(let name of city){
    console.log(name);
}
let game = ["pubg","bgmi","valorant"]
for(let name of game){
    console.log(name)
}
console.log(game)

let company = ["infoysis","tcs","tata"];
for( let group of company){
    console.log(group.toUpperCase());
}
