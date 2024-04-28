import airport from "./airport.js";
import { plane3, plane4, plane5 } from "./plane.js";

console.log(`========================`);
console.log(`Welcome to the airport.`);
console.log(
  `The following planes are currently at the airport: ${JSON.stringify(
    airport.airportPlanes
  )}. Capacity is set to ${airport.capacity}.`
);
console.log(`========================`);
// There are only a couple planes scheduled today so we'll lower the capacity in anticipation of a very slow day.
console.log(
  `There are only a couple planes scheduled today so we'll lower the capacity.`
);
airport.setCapacity(5); // Lower the capacity to 5.
console.log(`------------------------`);
// Plane3 is requesting to land.
console.log(`Plane3 is on approach and requesting to land.`);
airport.checkThenLandPlane(plane3); // Checks plane3 is not at the airport and instructs it to land.
console.log(`------------------------`);
// Plane4 is requesting to land.
console.log(`Plane4 is on approach and requesting to land.`);
airport.checkThenLandPlane(plane4);
console.log(`------------------------`);
// There weren't enough maintenance staff scheduled for today and they're unable to service more planes. The airport can't handle anymore planes at the moment.
console.log(
  `There weren't enough maintenance staff scheduled for today and they're unable to service more planes. The airport can't handle anymore planes at the moment.`
);
airport.setCapacity(2);
console.log(`------------------------`);
// Plane5 is requesting to land.
console.log(`Plane5 is on approach and requesting to land.`);
airport.checkThenLandPlane(plane5);
console.log(`------------------------`);
// Plane3 is requesting to land.
console.log(`Plane3 is requesting to land.`);
airport.checkThenLandPlane(plane3);
console.log(
  `The following planes are currently at the airport: ${JSON.stringify(
    airport.airportPlanes
  )}`
);
console.log(`------------------------`);
// Plane5 is requesting to take off.
console.log(`Plane5 is requesting to take off.`);
airport.checkThenTakeOff(plane5);
console.log(
  `The following planes are currently at the airport: ${JSON.stringify(
    airport.airportPlanes
  )}`
);
console.log(`------------------------`);
