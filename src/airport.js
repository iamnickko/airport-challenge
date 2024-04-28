const airport = {
  capacity: 10, // set to 10 airplanes by default
  airportPlanes: [], // airport is empty by default

  setCapacity: function (newCapacity) {
    this.capacity = newCapacity;
  },
  landPlane: function (plane) {
    if (this.airportPlanes.length < this.capacity) {
      this.airportPlanes.push(plane);
    }
  },
  isPlaneInAirport: function (planeToCheck) {
    if (this.airportPlanes.includes(planeToCheck)) {
      return true;
    }
  },
  checkThenLandPlane: function (plane) {
    if (!this.isPlaneInAirport(plane)) {
      this.landPlane(plane);
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
    }
  },
};

export default airport;
