person = {
    firstname : "mitul",
    lastname : "langaliya",
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
}
console.log(person.fullname());