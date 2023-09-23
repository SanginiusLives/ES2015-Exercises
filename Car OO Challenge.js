
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep"
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
};

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOM!!!"
    }
};

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = []
    }

    add (newVehicle){
        if (!newVehicle instanceof Vehcile) {
            return "Only vehicles are allowed in here!"
        }

        if(this.vehciles >= this.capacity) {
            "Vehicle added!"
        }

        this.push(newVehicle);
        return "Vehicle Added!"
    }
}