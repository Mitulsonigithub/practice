//spread operator used in combination with destructing
const number=[1,2,3,4,5,6,7,8,9];

const [one, two, ...rest]=number;
console.log(one);
console.log(two);
for(let i of rest)
{
    console.log(i);
}