const jwt = require('jsonwebtoken');
const token = jwt.sign({name: 'HoaiVan'}, '123123');
const ketqua = jwt.verify(token, '123123');

console.log(token);
console.log(ketqua);

