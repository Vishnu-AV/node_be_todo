function Greet3() {
  this.greeting = "third way!";
  this.greet = function () {
    console.log(this.greeting);
  };
}

module.exports = new Greet3();