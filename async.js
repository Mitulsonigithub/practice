async function abc(){
    return "hello mitul";
}

let m=abc().then(function(value){
    console.log("you did it" + value);
},
function(error){
    console.log("you are fail" + Error);
});
console.log(m);