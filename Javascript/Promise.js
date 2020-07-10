// var fs = require('promise-fs');
// var tam = fs.readFile('./hello.txt', {encoding:'utf8'})
// .then(function(data){console.log(data);
// })
// .catch(function(err){console.log('Lỗi');
// })


function Readfile()

function countfrom(a,b){
     return new Promise(function(resolve,reject){
            var x = setInterval(function(){
                if (a<=b){console.log(a);
                a++;} else {
                    clearInterval(x);
                    console.log('Hoàn thành:');
                    resolve();
                }
            },10)
    })
}

countfrom(2,5)
.then(function(){
    console.log('Done');
})