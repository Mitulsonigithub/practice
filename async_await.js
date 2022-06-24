function display(some){
    console.log(some);
}

async function myfunction(){
    return "hello";
}

myfunction().then(function(value){
    display(value);
},function(error){
    display(error);
});
