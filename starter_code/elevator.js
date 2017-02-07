var counter;
const Person = require('./person.js');



class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = 'up';
  }

  start() {
    //calls update every second to prompt the execution
    counter = setInterval(() => this.update(), 1000);
  }

  stop() {
    //ceases the elevator's listening for requests
    console.log("stop it!");
    clearInterval(counter);
  }

  update() {
    //display in the console the actual status of the elevator by calling the log function
    this.log();
    // this.floorUp();
    //List of floors that the elevator should serve.
    if (this.floor < Doug.originFloor) {
      this.floorUp();
    }
    else if (this.floor > Doug.originFloor){
      this.floorDown();
    }
  }

  _passengersEnter() {
      // add their floor to the destinationFloors
      // let queue = this.requests;
      // queue.push(Person.destinationFloor);
      // queue.sort();
  }

  _passengersLeave() {
      // remove their floor from the destinationFloors
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor = this.floor + 1;
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor = this.floor - 1;
    }
  }

  call() {
    // call method. This method should add a request into
    // the elevator’s queue. A good idea would be to add
    // the whole person object to the requests collection.
    this.requests.push(Doug.originFloor);
    console.log(this.requests);
    console.log("callinngggg")
    if (this.floor < Doug.originFloor) {
      this.floorUp();
    }
    else if (this.floor < Doug.originFloor) {
      this.floorDown();
    }
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;

var hotelCalifornia = new Elevator();
var Doug = new Person("Doug", 3, 7);


hotelCalifornia.start();
hotelCalifornia.call();

// setTimeout(function(){ hotelCalifornia.stop()},  5000);
