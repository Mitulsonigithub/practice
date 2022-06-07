const arr = [1,2,3,4,5];
let sum=0;
arr.forEach(myfun);

function myfun(value,index){
    return sum+=value;
}
console.log(sum);