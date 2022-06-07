//javascript JSON 

let text='{"emp":[{"firstname":"mitul","lastname":"soni","age":21,"address":"talaja"},' +
'{"firstname":"mitul","lastname":"soni","age":21,"address":"talaja"},' +
'{"firstname":"mitul","lastname":"soni","age":21,"address":"talaja"}]}';

const obj=JSON.parse(text);

console.log(obj.emp[1].address);