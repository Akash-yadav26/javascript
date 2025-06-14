function countVol(str){
let count = 0;
for(  const char of str){
    if( char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"

    ){
        count++;
    }
}
return count;
}

// maine retry keya hai

/*
function countvolel(str){
    let count = 0;
    for(let vl of str){
        if(
            vl === "a" ||
             vl === "e" ||
            vl === "i" ||
             vl === "o" ||
             vl === "u"
            ){
                count++ ;
            }
        

    }
    console.log(count)
}
*/

const countVow = (str) => {
 let count = 0;
 for(const char of str){
if(char =="a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" 

){ count++;
}
 }
 return count;
}
