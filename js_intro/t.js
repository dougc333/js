var Game = {
  level: 1,
  start: function() {
    console.log("this:",this)
    console.log(‘Start level ‘ + this.level);
  },
  finish: function() {
    setTimeout(function() {
      console.log(‘Finish level ‘ + this.level);
    }, 5);
  }
}
Game.start(); // Start level 1
Game.finish(); // Finish level undefined
