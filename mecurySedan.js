//this includes the vehicle class as a module
const VehicleMercury = require("./vehicle").vehicle

//this shows how to call from this module...
let v = new VehicleMercury.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleMercury.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }


    loadPassenger(num) {
        if (this.passenger + num < this.maxPassengers) {
            console.log('You are now in ${this.make} ${this.model}');
                return this.passenger += num;             
            } else {
                console.log('${this.make) + ${this.model} does not have enough space to take all passengers.');

            }
    }

    let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

    myCar.start()
    myCar.loadPassenger(5)
    myCar.stop()
    myCar.checkService()
    
    console.log(myCar)

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }
    