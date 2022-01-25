function Greet3() {
  this.greeting = "fourth way!";
  this.greet = function () {
    console.log(this.greeting);
  };
}

module.exports = Greet3;
