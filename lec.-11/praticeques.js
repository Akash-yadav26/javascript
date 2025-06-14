let DATA = "secret information"

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
viewData(){
    console.log("Data =",DATA);
}

}

class Admin extends user{
    constructor(name,email){
 super(name,email);
    }
    editData(){
DATA = "some new value"
    }
}


let student1 = new user("akash","akashyada123@gmail.com");
let student2 = new user("alok yadav","alok12@gmail,com");
let teacher1 = new user("manoj kumar yadav","manojya234@gmail.com");
let teacher2 = new user("shiv kumar yadav","manojya234@gmail.com");

 let admin1 = new Admin("admin","admin123@gmail.com");