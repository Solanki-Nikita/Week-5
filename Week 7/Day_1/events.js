//class(EventEmitter)
const EventEmitter = require('events');
// object(emitter)
const emitter = new EventEmitter();


emitter.on ('checkPage',(data,status) => {
    console.log('Event Occur', data.message, status);
})
emitter.emit('checkPage',{message:'Hello World'}, 200 )