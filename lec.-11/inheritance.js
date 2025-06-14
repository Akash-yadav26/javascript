class parent{
    constructor(){
        this.species = "homo sapiens";
    }
    hello(){
        console.log("hello");
    }
}
class child extends parent {}
let obj = new child();


/// second 

class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("work");
    } // this is in parent class function
}

class Engineer extends person{
    work(){
        console.log("solve problems,build something");
    } // child  class function ---> if you type in console --> akash.work --> than child work appear not parent 

}
let akash = new Engineer();

//third
class Doctor extends person{
    work(){
        console.log("treatthe patients");
    }}

    let alok = new Doctor();

    let p1 = new parent();