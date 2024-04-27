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
};

export default airport;
