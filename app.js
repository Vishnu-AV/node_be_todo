var greet = require("./greet1");
var greet2 = require("./greet2").greet;


greet();
greet2();

var greet3 = require("./greet3");
greet3.greet();
greet3.greeting = "changed text";

var greet3b = require("./greet3");
greet3b.greet();

var Greet4 = require("./greet4");
var grtr = new Greet4();
grtr.greet();

var Greet5 = require("./greet5");
Greet5.greet();
