var assert = require('../test/assert')
var data = require('../data/data')
var expectedArrayOfArrays = require('../data/array-of-arrays')
var expectedFormattedDates = require('../data/formatted-dates')
var filter = require('./index.js').filter
var map = require('./index.js').map
var countIf = require('./index.js').countIf
var getType = require('./getType.js')
var isNumber = require('./index.js').isNumber
var isStringNumber = require('./index.js').isStringNumber
var toNumber = require('./index.js').toNumber
var add = require('./index.js').add
var addStrings = require('./index.js').addStrings
var addStringsOrNumbers = require('./index.js').addStringsOrNumbers
var isEmail = require('./index.js').isEmail
var isString = require('./index.js').isString
var filterStringsWithCommas = require('./index.js').filterStringsWithCommas
var splitStringByCommas = require('./index.js').splitStringByCommas





var meaningOfLife = '42'

function each (func, arr) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}



assert(getType(meaningOfLife), 'string', 'meaningOfLife is a string data type')
assert(getType(data), 'object', 'data is an object')



assert(isNumber(meaningOfLife), false, 'meaningOfLife is not a number datatype')
/*
 * isStringNumber
 */



assert(isStringNumber(meaningOfLife), true, 'meaningOfLife to string number')
assert(isStringNumber('jsksk'), false, 'isStringNumber does not give a false positive')

/*
 * toNumber
 */


 assert(toNumber(meaningOfLife), 42, 'toNumber can convert strings to number if possible')

 /*
  * add
  */



 assert(add(2, 3), 5, 'add successfully adds two numbers')

 /*
  * addStrings
  */



 assert(addStrings(meaningOfLife, '10'), '52', 'addStrings can add number strings and convert them back to a string')



 assert(addStringsOrNumbers(2, 3), 5, 'addStringsOrNumbers can add numbers')
 assert(addStringsOrNumbers('1', '2'), '3', 'addStringsOrNumbers can add strings')
 assert(addStringsOrNumbers('10', 10), '20', 'addStringsOrNumbers can add strings and numbers (returning a string)')

 /*
  * isEmail
  */



 assert(isEmail('thedonald@makeamericagreatagain.com'), true, 'isEmail detects an email')
 assert(isEmail('3333@'), false, 'isEmail does not give a false positive')
 assert(isEmail('johnny.b.good'), false, 'isEmail does not give a false positive')



 var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
 var expectedNumberCount = 4 // do you know which 4 are numbers?
 var expectedStringCount = 2
 var numberCount = countIf(isNumber, mixedArray)
 var stringCount = countIf(isString, mixedArray)

 assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array')
 assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')


 var emails = filter(isEmail, data)
 assert(emails.length, 44, 'filter and isEmail returns the correct number of emails')

 var someNumbers = [2, 4, 6]
 var expectedNumbers = [4, 8, 12]
 var timesTwo = function (num) {
   return num * 2
 }
 var actualNumbers = map(timesTwo, someNumbers)
 for (var i = 0; i < expectedNumbers.length; i++) {
   assert(expectedNumbers[i], actualNumbers[i], 'number mapped correctly')
 }
 /*
  * filterStringsWithCommas
  */


 var stringsWithCommas = filter(filterStringsWithCommas, data)
 assert(stringsWithCommas.length, 62, 'filter and filterStringsWithCommas returns the correct number of commas')


 /*
  * splitStringByCommas
  */


 var arrayOfArrays = map(splitStringByCommas, stringsWithCommas)
 var matchesArrayOfArrays = arrayOfArrays.every(function (arr, i) {
   return arr.every(function (str, j) {
     return str === expectedArrayOfArrays[i][j]
   })
 })

 assert(matchesArrayOfArrays, true, 'the generated array of array of strings matches the expected array')
