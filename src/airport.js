const airport = {
  capacity: 10, // set to 10 airplanes by default
  airportPlanes: [], // airport is empty by default

  setCapacity: function (newCapacity) {
    this.capacity = newCapacity;
    console.log(`Airport capacity is now: ${this.capacity}.`);
  },

  landPlane: function (plane) {
    if (this.airportPlanes.length < this.capacity) {
      this.airportPlanes.push(plane);
      console.log(`Plane${JSON.stringify(plane)} has just landed.`);
      console.log(
        `The airport now has the following planes on the ground: ${JSON.stringify(
          this.airportPlanes
        )}.`
      );
    } else {
      console.log(
        `The airport is at capacity. Plane${JSON.stringify(
          plane
        )} has been instructed to circle.`
      );
    }
  },

  isPlaneInAirport: function (planeToCheck) {
    if (this.airportPlanes.includes(planeToCheck)) {
      console.log(
        `Plane${JSON.stringify(planeToCheck)} is currently in the airport.`
      );
      return true;
    } else {
      console.log(
        `Plane${JSON.stringify(planeToCheck)} is not at the airport.`
      );
    }
  },

  checkThenLandPlane: function (plane) {
    if (!this.isPlaneInAirport(plane)) {
      this.landPlane(plane);
    } else {
      console.log(
        `Plane${JSON.stringify(
          plane
        )} is already on the ground. Question the pilot.`
      );
    }
  },

  takeOff: function (plane) {
    let updatedList = this.airportPlanes.filter((current) => {
      return current.id !== plane.id;
    });
    this.airportPlanes = updatedList;
  },

  checkThenTakeOff: function (plane) {
    if (this.isPlaneInAirport(plane)) {
      this.takeOff(plane);
      console.log(`Plane${JSON.stringify(plane)} has left the airport.`);
      console.log(
        `The airport now has the following planes on the ground: ${JSON.stringify(
          this.airportPlanes
        )}.`
      );
    } else {
      console.log(
        `Plane${JSON.stringify(
          plane
        )} is not currently at the airport. Check with the pilot.`
      );
    }
  },
};

export default airport;
