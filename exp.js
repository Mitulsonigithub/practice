const mypro = new Promise(function(resole,reject){
    setTimeout(function(){
        resole("l love you");
    },3000);
});

mypro.then(function(value){
    console.log(value);
});