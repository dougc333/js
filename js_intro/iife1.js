var animal = (function () {
  //this is funny var is hoisted but iife prevents visibility
  var name = "bob";

  var private_method = function () {
    console.log("this is a private method");
  };

  return {
    hi: function () {
      //node no this pointer. global object, not a class instance
      console.log(name);
    },
    speak: function () {
      console.log("bark bark bark");
    },
  };
})();

//animal hi
console.log(typeof animal);
animal.hi();
animal.speak();

var fnObj = function (color) {
  this.color = color;
};
fnObj.prototype.getColor = function () {
  return this.color;
};

console.log(typeof fnObj);
f = new fnObj("blue");
console.log(f.getColor());
