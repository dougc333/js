const EventEmitter = require('events')

const myEE = new EventEmitter()

//print out events/listeners

myEE.on('one',()=>{console.log("one callback")})
myEE.on('two',()=>{console.log("two callback")})

//list all events with registered listeners
console.log(myEE.eventNames())
//call listener for event one
myEE.emit('one')

//append another listener to event two
myEE.on('two',()=>console.log("second callback on two"))
myEE.emit('two')



