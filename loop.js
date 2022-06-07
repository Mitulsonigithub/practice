const i = [1,2,3,4,5,6,7,8,9,10];
for(let a of i)
{
    if((a%2)==0)
    {
        console.log("Even number:" +a);
    }
    else
    {
        console.log("Odd number:" +a);
    }
}

for(let a in i)
{
    if(i[a]%2 == 0)
    {
        console.log("Even number:" +i[a]);
    }
    else
    {
        console.log("Odd number:" +i[a]);
    }
}