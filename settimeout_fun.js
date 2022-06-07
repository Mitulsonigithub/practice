console.log("We can use set time out function");
setTimeout(fun,2000);

function fun(){
    console.log("i love you");
}


setInterval(func, 1000);
function func()
{
    const dt=new Date();
    console.log(dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds());
}
