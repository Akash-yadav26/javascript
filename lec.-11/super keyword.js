class person{
    constructor(name){
       // console.log("enter parent constructor ")
        this.species = "homo sapiens";
        this.name = name;
      
    }

    eat(){
        console.log("eat");
    }
}

class Engineer extends person{
    constructor(name){
       // console.log("enter child constructor")
        super(name);// to invoke parent class constructor
       // console.log("exit child constructor")
    }
    work(){
        super.eat  //--> then first eat than solve___somenthimg ayega
        // if we use only  type --> eat() then in console it shows error

        console.log("solve problems,build something");
    } }
    let enjObj = new Engineer("akash yadav");
       
    