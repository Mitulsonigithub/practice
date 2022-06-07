setTimeout(function(){
    func("i love you");
}, 3000);

function func(value){
    console.log(value);
}



const mypromise = new Promise(function(resolve,reject){
    setTimeout(function(){resolve("i love you");
},5000);
});
mypromise.then(function(value){
    console.log(value);
});