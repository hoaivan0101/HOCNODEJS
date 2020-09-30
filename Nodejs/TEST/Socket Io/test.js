/* eslint-disable require-jsdoc */
a = 'abcde3ghztk';
b = 'tbcdeopwtk';
result = ['bc', 'tk'];

function test(a, b) {
  const result = [''];
  for (let i = 0; i < a.length; i++) {
    let queue = a.charAt(i);
    for (let j = i + 1; j < a.length; j++) {
      queue = queue + a.charAt(j);
      if (b.includes(queue)) {
        console.log(queue);
      }
    }
  }
  return result;
}

console.log(test(a, b));
