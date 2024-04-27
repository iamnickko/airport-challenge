const airport = {
  capacity: 10, // set to 10 airplanes by default
  airportPlanes: [], // airport is empty by default

  setCapacity: function (newCapacity) {
    this.capacity = newCapacity;
  },
  landPlane: function (plane) {
    this.airportPlanes.push(plane);
  },
};

export default airport;
