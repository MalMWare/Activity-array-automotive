//this includes the vehicle class as a module
//const VehicleModule = require("./vehicleBaseClass")
//the reason this didnt work is because I put it in an HTML file.

//this shows how to call from this module...
let v = new Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage, maxPassengers, numWheels, maxSpeed, fuel) {
        super(make, model, year, color, mileage)
        this.maxPassengers = maxPassengers;
        this.passengers = 0;
        this.numWheels = numWheels;
        this.maxSpeed = maxSpeed;
        this.fuel = fuel;
        this.scheduleService = false
    }

    start() {
        if (this.fuel > 0) {
            this.started = true;
            console.log("engine started...!!!");
        } else {
            this.started = false;
            console.log("engine cannot start...");
        }
    }

    scheduledService(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true;
            console.log("The vehicle needs a scheduled service.");
        } else {
            this.scheduleService = false;
            console.log("The vehicle does not require a scheduled service at this time.");
        }
    }

    loadPassenger(num) {
        let availableRoom = this.maxPassengers - this.passengers
        if (num <= availableRoom) {
            this.passengers+= num;
            console.log("Loaded Passenger(s)" )
        } else {
            console.log("No room available.")
        }
    }
}

let mer = new Car("Mecury", "Sedan", "1965", "color", "mileage", 5, 4, 160, 12)

mer.loadPassenger(3)
mer.loadPassenger(18)
mer.scheduledService(30001)
mer.scheduledService(30000)
mer.start()