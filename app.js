var greet = require("./old_greet");

greet();
var fn = "vishnu";
console.log(fn);

// immediately invoked function. 
(function () {
  var fn = "av";
  console.log(fn);
}());

// import from greet folder

var newGreet = require('./greet');
newGreet.english();
newGreet.spanish();
