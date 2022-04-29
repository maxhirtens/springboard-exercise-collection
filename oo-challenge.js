// 1.
class Vehicle {
  constructor(make,model,year){
    this.make = make,
    this.model = model,
    this.year = year
  }
  honk(){
    return 'Beep';
  }
  toString(){
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
  }
}

// 2.
class Car extends Vehicle {
  constructor(make,model,year){
    super(make,model,year);
    this.numWheels = 4;
  }
}

// 3.
class Motorcycle extends Vehicle {
  constructor(make,model,year){
    super(make,model,year);
    this.numWheels = 2;
    }
    revEngine(){
      return 'VROOM!';
}
}

// 4.
class Garage {
  constructor(capacity){
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(vehicle){
    if(this.vehicles.length >= this.capacity){
      throw new Error("Sorry, we're full");
    }
    if((vehicle instanceof Vehicle)){
    this.vehicles.push(vehicle);
    return 'Vehicle added!';
    } else {
      throw new Error('Only vehicles are allowed in here!')
    }
  }

}
