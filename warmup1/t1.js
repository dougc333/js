var Game = {
  level: 1,
  start: function () {
    console.log("Start level " + this.level);
  },
  finish: function () {
    console.log("this;", this);
    setTimeout(function () {
      //this set to setTimeout
      console.log("setTimout this:", this);
      console.log("Finish level" + this.level);
    }, 5);
  },
  dummy_fn: function () {
    ivar = 10;
    var stuff = function () {
      console.log("stuff this:", this);
    };
    console.log("type stuff:", typeof stuff);
    stuff();
  },
};
Game.start(); // Start level 1
Game.finish(); // Finish level undefined
Game.dummy_fn();
