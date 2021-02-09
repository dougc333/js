//promises arent good for events which occur repeatedly //promises only return a single value and are no longer active after firing
//this doesnt work for mouse events, UI......

const events = require('events')
const event_emitter = new events.EventEmitter();

function logger(event){
  console.log("logger here",event);
}
//the event name is firstevent, we are attaching logger to a specific event name
event_emitter.on("firstevent",logger);
event_emitter.emit("firstevent","emitting now")

//we can also add listeners which fire on the event. 
event_emitter.addListener("second_event",logger);
event_emitter.emit("second_event","second event firing!!");



//reactive JS is an altermative to Event emitters



