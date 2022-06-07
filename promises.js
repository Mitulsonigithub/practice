function display(some)
{
    console.log(some);
}
let mypromise=new Promise(function(resolve,reject){
    let x=3;
    if(x==0)
    {
        resolve("ok");
    }
    else
    {
        reject("error");
    }
});
mypromise.then(function(value)
{
    display(value);
},
function(error){
    display(error);
});