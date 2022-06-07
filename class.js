class person {
    person(name,id){
        this.name=name;
        this.id=id;
    }
    address(add){
        this.add=add;
    }
    getdetails(){
        console.log(this.name);
    }
}
let person1 = new person("mitul",21);
person1.address("talaja");
person1.getdetails();