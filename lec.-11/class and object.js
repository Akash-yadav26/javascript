//objects

const student ={
    fullName : "akash yadav",
    class : 12,
    marks : 90,
    printMarks: function() {
  console.log("marks =", this.marks) // wahi obejct ka marks  0r student.marks
    }
    
}

//prototype -> it is prebulid . which have some properties and methods which are in general
// when any object made the protoype properties and methofd come 
const employee ={
   calcTax1(){
     console.log("tax rate is 10%")
    },
    //or
   // calcTax: function() {
     //   console.log("tax rate is 10%")
    //}
};
const karanArjun = {
  salary:50000,
};
const karanArjun1 = {
  salary:50000,
  calcTax(){
console.log('tax rate is 20%')
  }
};
const karanArjun2 = {
  salary:50000,
};
const karanArjun3 = {
  salary:50000,
};
const karanArjun4 = {
  salary:50000,
};
//  syntax --> karanArjun.__proto__ use to set a prototype
karanArjun.__proto__ = employee ;
karanArjun1.__proto__ = employee ;
karanArjun2.__proto__ = employee ;
karanArjun3.__proto__ = employee ;
karanArjun4.__proto__ = employee ;
// in  console type --> karanArjun than atype karanArjun.calcTax

// ---- if clash occur between prototype and object than object will win beacuse object is more nearer  to the function

// classes

// we write two or multiple function  we not to need add , in the class
class ToyotaCar {
  start(){
    console.log("start");
  }
  stop(){
    console.log("stop");
  }
  setBrand(Brand){
    this.brandName = Brand;
  }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner")
let wagnor = new ToyotaCar();
let lexus = new ToyotaCar();
lexus.setBrand("lexus");



