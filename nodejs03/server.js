var events=require('events') // import the event
var eventEmiter =new events.EventEmitter(); // create emiter

var myHandler = function() { // create method
    console.log("Hello");
    eventEmiter.emit("event2");
}

var myHandler2 = function() {
    console.log("Hello2");
}

var myHandler3 = function(message) {
    console.log("param "+message);
}

eventEmiter.on("event1",myHandler); // register the event
eventEmiter.on("event2",myHandler2);
eventEmiter.on("event3",myHandler3);

eventEmiter.emit("event1"); // fire the event
eventEmiter.emit("event3","loudcloud"); // passing pararmeter to event

