class person{
    constructor(name){
        this.name= name;
    }
    toString(){
        return this.name;
    }
}
class student extends person{
    constructor(name,id){
        super(name);
        this.id=id;
    }
    toString(){
        return super.toString();
    }
}

let student1 = new student("mitul",21);
console.log(student1.toString());
console.log(student1.id);