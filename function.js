const person={
    firstname:"mitul",
    lastname:"langaliya",
    mitul: function() {
        return this.firstname + " " +this.lastname;
    }
}

const person1={
    firstname:"karan",
    lastname:"langaliya"
}

console.log(person.mitul.call(person1));