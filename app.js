class ParkingLot {
    constructor(totalSmallSpots, totalMediumSpots, totalLargeSpots) {
        this.totalSmallSpots = totalSmallSpots;
        this.availableSmallSpots = totalSmallSpots;
        this.totalMediumSpots = totalMediumSpots;
        this.availableMediumSpots = totalMediumSpots;
        this.totalLargeSpots = totalLargeSpots;
        this.availableLargeSpots = totalLargeSpots;
    }

    /**
     * Add's a vehicle 
     * @param vehicleType
    */
    addVehicle(vehicleType) {
        if (vehicleType === "motorcycle") {
            if (this.availableSmallSpots > 0) {
                this.availableSmallSpots--;
                console.log("Motorcycle parked in a small spot.");
            } else {
                console.log("No small spots available.");
            }
        } else if (vehicleType === "car") {
            if (this.availableMediumSpots > 0) {
                this.availableMediumSpots--;
                console.log("Car parked in a medium spot.");
            } else if (this.availableLargeSpots > 0) {
                this.availableLargeSpots--;
                console.log("Car parked in a large spot.");
            } else {
                console.log("No spots available.");
            }
        } else if (vehicleType === "van") {
            if (this.availableLargeSpots > 0) {
                this.availableLargeSpots--;
                console.log("Van parked in a large spot.");
            } else {
                console.log("No large spots available.");
            }
        } else {
            console.log("Invalid vehicle type.");
        }
    }

    /**
     * Gets the total number of spots
    */
    getTotalSpots() {
        return {
            smallSpots: this.totalSmallSpots,
            mediumSpots: this.totalMediumSpots,
            largeSpots: this.totalLargeSpots,
        };
    }

    /**
     * Gets the total number of available spots
    */
    getAvailableSpots() {
        return {
            smallSpots: this.availableSmallSpots,
            mediumSpots: this.availableMediumSpots,
            largeSpots: this.availableLargeSpots,
        };
    }

    /**
     * Checks to see if the parking lot is full
    */
    isFull() {
        return (
            this.availableSmallSpots === 0 &&
            this.availableMediumSpots === 0 &&
            this.availableLargeSpots === 0
        );
    }
}

// Example usage: The parking lot starts with 10 small spots, 5 medium spots, and 3 large spots
const parkingLot = new ParkingLot(10, 5, 3);

parkingLot.addVehicle("car"); // Park a car in a medium spot
parkingLot.addVehicle("van"); // Park a van in a large spot
parkingLot.addVehicle("motorcycle"); // Park a motorcycle in a small spot

// Now the parking lot has 9 small spots, 4 medium spots, and 2 large spots
console.log(parkingLot.getAvailableSpots());
console.log(parkingLot.isFull());
