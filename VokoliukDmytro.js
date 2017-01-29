'use strict';

let addresses = require('./addresses');

let result = [];

let reg = /(?:[\s\.улперт\-]{0,7})(\d{0,3}[а-яА-Я\s\-\.]{4,30})(?:[\s,\.дом])*([\dа-яА-Я\-]{1,5})*(?:[\/,\.\sкв])*(\d{1,3})*/;

for(let addres of addresses) {
    let addresObj = {};
    let addresStr = '';
    addresStr = reg.exec(addres);
    addresObj.street = addresStr[1];
    addresObj.house = addresStr[2];
    addresObj.flat = addresStr[3];
    result.push(addresObj);
}
// console.log(result);

// ... some good code ...

/*
приклад структури масиву result
>>> result
[
  ...
  {
    "street": 'Юности', //string
    "house": '25',      //string
    "flat": '6'         //string
  }
 ...
]
*/
module.exports = result;








