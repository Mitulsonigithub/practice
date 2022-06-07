
function mydisplay(result)
{
    console.log(result);
}
function sum(a,b,display)
{
    let res= a+b;
    display(res);
}
sum(4,5,mydisplay);