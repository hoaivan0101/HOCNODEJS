var jwt = require('jsonwebtoken');
var token = jwt.sign({ name: 'HoaiVan' }, '123123');
var ketqua = jwt.verify(token, '123123')

console.log(token);
console.log(ketqua);

