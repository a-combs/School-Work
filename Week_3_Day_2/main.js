function Car(make, model){
  this.make = make;
  this.model = model;
  this.drive = function(distance = 1) {
    return "You drove " + distance + " miles.";
  };
}

var myCar = new Car("Mercury", "Sable");
myCar.make;
// > Mercury

myCar.drive;
// function(distance){...}
myCar.drive();
// "You drove 1 miles."
myCar.drive(2);
// "You drove 2 miles."

myCar.go = function(){
  // some code that stops the car
};

var yourCar = new Car("Toyota", "Landcruiser");

// yourCar.go()
// Wouldn't work on yourCar because its an instance method only defined on myCar instance.

Car.prototype.stop = function(){

  return "The " + this.make + " has stopped!";
};

myCar.stop();
// "The Mercury has stopped!";

yourCar.stop();
// YourCar.stop();

function Truck(make, model, towingCapacity){
  this.towingCapacity = towingCapacity;
  Car.apply(this, arguments);
}
Truck.prototype = Object.create(Car.prototype);


var myTruck = new Truck("Ford", "150", 6000);

Car.prototype.start = function() {
  return "Started.";
};
