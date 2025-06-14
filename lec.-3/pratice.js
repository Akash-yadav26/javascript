for(let num = 0; num<=100;num++){
    if(num%2 ===0 )
        console.log("num =",num)
    } 

 let gameNum = 25;
 
 let userNum = prompt("guess the game number :");
while( userNum != gameNum){
userNum = prompt("you entered wrong game number. please enter again")
}
console.log("you guess right number congiratulation");
