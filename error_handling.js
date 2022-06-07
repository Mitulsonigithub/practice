try{
    let m=10;
    if(m!=10)   throw "not same";
    if(m==10)  throw "same";
    console.log("ye kya huva");
}
catch(error){
    let ab=error;
    console.log(ab);
}
finally{
    console.log("ye to final print ho ga");
}