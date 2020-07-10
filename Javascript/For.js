var obj={
    name:'Hoaivan',
    age:28,
    gender:'male'
}
var ar=[2,4,5,2,1,4]

var A=[{name:'Hoaivan',age:28,gender:'male'},
{name:'HoangPhuong',age:27,gender:'female'},
{name:'CongKhanh',age:27,gender:'male'}]
console.log(A);

for (var i in A){
    console.log(A[i].name);
}

var fs = require('fs');
var content=fs.readFileSync('./hello2.txt',{encoding:'utf8'});
fs.writeFileSync('./hello.txt',content);
console.log(content);

