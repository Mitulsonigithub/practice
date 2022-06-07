/*
the javascript spread operator allows us to quickly copy all or part of an existing array or 
object into another array or object.
*/
//spread operator used in concat in two different array
const a=[1,2,3,4,5];

const b=['a','b','c','d','e'];

const c=[...a,...b];

for(let i of c)
{
    console.log(i);
}


//spread operator used in concat two objects
const new1={
    name:"mitul",
    age:21,
    add:"talaja"
}

const new2={
    name:"karan",
    age:23,
    add:"bhavnagar"
}

const new3={...new1,...new2}

console.log(new3);