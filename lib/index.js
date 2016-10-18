/*
 * filter
 */
 var getType = require('./getType.js')



function filter (func, arr) {
  var emailArr = []
  for (var i = 0; i < arr.length; i++) {
    if(func(arr[i])){
      emailArr.push(arr[i]);
    }
  }
  return emailArr; //not working, 'undefined'
}

/*
 * map
 */

function map (func, arr) {
  var resultArr = [];
  for (var i = 0; i < arr.length; i++) {
    resultArr.push(func(arr[i]));
  }
  return resultArr
}
//is number?
function isNumber (thing) {
  var type = getType(thing)
  if (type === 'number'){
    return true;
  }else{
    return false;
  }
}

//COUNT IF

function countIf (testFunc, arr) {
  var count = 0
  for (var i = 0; i < arr.length; i++) {
    if(testFunc(arr[i])){
      count++
    }
  }
  return count
}
function isStringNumber (str) {
  var num = Number(str)
  var type = getType(num)
  if (isNaN(num)){
    return false;
  }else if (type === "number"){
    return true;
  }
  else {
    return false;
  }
}
function toNumber (str) {
  return Number(str);
}
function add (a, b) {
  return a+b;
}
function addStrings (a, b) {
  if (isStringNumber(a) && isStringNumber(b)){
    var number = toNumber(a) + toNumber(b);
    return number.toString();
  }
}
function addStringsOrNumbers (a, b) {
  if (isNumber(a) && isNumber(b)){
    return add(a, b)
  }
  else {
    return addStrings(a,b);
  }
}
function isEmail (str) {
  var email = /\S+@\S+\.\S+/; //anystring@anystring.anystring
  return email.test(str);

}
function isString(s) {
   return typeof s === 'string'
 }
 function filterStringsWithCommas (str) {
   var numCommas = []
   var strArr = str.split('')
   for (var i = 0; i < strArr.length; i++) {
     if (strArr[i] === ','){
       numCommas.push(strArr[i])
       return numCommas
     }
   }
 }
 function splitStringByCommas (str) {
   return str.split(',');
 }
module.exports = {
  filter: filter,
  map: map,
  countIf: countIf,
  isStringNumber: isStringNumber,
  toNumber: toNumber,
  add: add,
  addStrings: addStrings,
  addStringsOrNumbers: addStringsOrNumbers,
  isEmail: isEmail,
  isString: isString,
  filterStringsWithCommas: filterStringsWithCommas,
  splitStringByCommas: splitStringByCommas
}
module.exports.isNumber = isNumber;
