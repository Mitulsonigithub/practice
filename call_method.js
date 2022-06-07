const person = {
    firstname : "mitul",
    lastame : "langaliya",
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
}
const member = {
    firstname : "mit",
    lastname : "soni",
}

let x=person.fullname.bind(member);
console.log(x());