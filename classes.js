class vehical{
    constructor(name,type,age){
        this.name = name;
        this.type = type;
        this.age =age;
    }
    getdetails()
    {
        console.log(this.name +"  " + this.type + " " + this.age);
    }
}
let bike1 = new vehical("mitul","manager",21);
let bike2 = new vehical("karan","product_manager",23);
let bike3 = new vehical("dharmik","employee",22);
console.log(bike1.name);
console.log(bike1.getdetails());