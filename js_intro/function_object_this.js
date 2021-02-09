//a javascript object based on function 
//functions are objects in JS
//make it look like a class wo using class
//https://stackoverflow.com/questions/10978311/implementing-events-in-my-own-object

var CustomObject = function () {
    var _this = this;
    _this.events = {};

    _this.addEventListener = function(name, handler) {
        if (_this.events.hasOwnProperty(name))
            _this.events[name].push(handler);
        else
            _this.events[name] = [handler];
    };

    _this.removeEventListener = function(name, handler) {
        /* This is a bit tricky, because how would you identify functions?
           This simple solution should work if you pass THE SAME handler. */
        if (!_this.events.hasOwnProperty(name))
            return;

        var index = _this.events[name].indexOf(handler);
        if (index != -1)
            _this.events[name].splice(index, 1);
    };

    _this.fireEvent = function(name, args) {
        if (!_this.events.hasOwnProperty(name))
            return;

        if (!args || !args.length)
            args = [];

        var evs = _this.events[name];
        console.log("evs:",evs);
	console.log("_this.events:",_this.events);
	console.log("name",name);

        for (let i = 0; i < evs.length; i++) {
          console.log("evs[i]:",evs[i]);  
  	  evs[i].apply(null, args);
        }
    };
}

const c = new CustomObject();
function logger(t){
  console.log(t);
}

c.addEventListener("first",logger);
c.fireEvent("first","first event firing");

