function doAfter(func, time) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function(data) {
      func();
      resolve(data);
    }, time);
  });
  return promise;
}
function sayHello() {
  console.log('Hello');
}

function sayGoodbye() {
  console.log('Goodbye');
}

doAfter(sayHello, 1000).then();
