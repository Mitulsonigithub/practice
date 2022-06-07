const abc = new Map();
abc.set("mitul",25000);
abc.set("karan",40000);
abc.set("dharmik",35000);
abc.set("harsh",34000);

//console.log(abc.get("karan"));
//console.log(abc);
//console.log(abc.has("mitul"));
abc.forEach(function(key,value){
    console.log(key+" "+value);
})

abc.delete("harsh");
console.log(abc);
for(let i of abc.entries()){
    console.log(i);
}

for(let i of abc.keys()){
    console.log(i);
}

for(let i of abc.values())
{
    console.log(i);
}
