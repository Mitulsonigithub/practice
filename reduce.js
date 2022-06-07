const arr = [1,2,3,4,5];
let x=arr.reduce(myfun);

function myfun(total,curr){
    return total + curr;
}
console.log(x);