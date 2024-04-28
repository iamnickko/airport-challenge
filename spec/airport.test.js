import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js";
import { plane, plane3, plane4 } from "../src/plane.js";

// TEST FUNCTIONS
// Test headers for console.log formatting
const testHeader = (testNum, description) => {
  console.log(`===========================`);
  console.log(`Test ${testNum}:`);
  console.log(`${description}`);
};

// Clean up function AFTER EACH test
const cleanUp = () => {
  expected = undefined;
  actual = undefined;
  result = undefined;
  airport.capacity = 10;
  airport.airportPlanes = [];
};

// TEST 1
// Change the default capacity of 10 with setCapacity() and expect the capacity to equal the new integer
testHeader(
  1,
  `Change the default capacity of 10 with setCapacity() and expect the capacity to equal the new integer`
);
// Arrange
let expected = 15;
let actual, result;
// Act
airport.setCapacity(expected);
actual = airport.capacity;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(`Expected value: ${expected} | Actual value: ${actual}`);
// Clean up
cleanUp();
// END of TEST 1

// TEST 2
// Check if the airport is not full by checking if airportPlanes length doesn't equal capacity
testHeader(
  2,
  `Check if the airport is not full by checking if airportPlanes length doesn't equal capacity`
);
// Arrange
expected = airport.capacity;
// Act
actual = airport.airportPlanes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(!result ? `TEST PASSED` : `TEST FAILED`);
console.log(
  `Capacity value: ${expected} | airportPlanes length value: ${actual}`
);
// Clean up
cleanUp();
// END of TEST 2

// TEST 3
// Check if a plane can be added to the airport with landPlane()
testHeader(3, `Check if a plane can be added to the airport with landPlane()`);
// Arrange
expected = airport.airportPlanes.length + 1;
let plane1;
// Act
airport.landPlane(plane1);
actual = airport.airportPlanes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(`Expected value: ${expected} | Actual value: ${actual}`);
// Clean up
cleanUp();
// END of TEST 3

// TEST 4
// Check a plane cannot be landed if capacity is full
testHeader(4, `Check a plane cannot be landed if capacity is full`);
// Arrange
airport.capacity = 1;
plane1;
let plane2;
airport.airportPlanes = [plane1];
expected = airport.airportPlanes.length;
// Act
airport.landPlane(plane2);
actual = airport.airportPlanes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(
  `Capacity value: ${airport.capacity}, Expected airportPlanes: ${expected} | Actual airportPlanes: ${actual}`
);
// Clean up
cleanUp();
// END of TEST 4

// TEST 5
// Check if a specific plane is in the airport
testHeader(5, `Check if a specific plane is in the airport`);
// Arrange
plane;
airport.airportPlanes = [plane];
expected = true;
// Act
actual = airport.isPlaneInAirport(plane);
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(
  `Plane in airport: ${airport.airportPlanes[0]}, Expected: ${expected} | Checking the plane: ${plane} Actual: ${actual}`
);
// Clean up
cleanUp();
// END of TEST 5

// TEST 6
// Check if a specific plane can be added to the airport array
testHeader(6, `Check if a specific plane can be added to the airport array.`);
// Arrange
plane;
airport.airportPlanes = ["plane3"];
expected = airport.airportPlanes.length + 1;
// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(
  `Airport expected planes: ${expected} | Airport actually contains: ${actual}`
);
// Clean up
cleanUp();
// END of TEST 6

// TEST 7
// Check if a plane with id = 3 can be added to airport already with a plane with id = 4
testHeader(
  7,
  `Check if a plane with id = 3 can be added to airport already with a plane with id = 4`
);
// Arrange
plane3;
plane4;
airport.airportPlanes = [plane4];
expected = airport.airportPlanes.length + 1;
// Act
airport.landPlane(plane3);
actual = airport.airportPlanes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(
  `Airport expected to contain ${expected} | Airport actually contains ${actual}`
);
// Clean up
cleanUp();
// END of TEST 7

// TEST 8
// Check if airport actually contains a plane with id = 3 after landing plane of id = 3 using landPlane()
testHeader(
  8,
  `Check if airport actually contains a plane with id = 3 after landing plane of id = 3 using landPlane()`
);
// Arrange
plane3;
expected = true;
// Act
airport.landPlane(plane3);
actual = airport.airportPlanes.includes(plane3);
// Assert
result = assertEquals(expected, actual);
// Result
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(`Expected: ${expected} | Actual: ${actual}`);
// Clean up
cleanUp();
// END of TEST 8

// TEST 9
// If a plane of id = 3 is not in the airport using isPlaneInTheAirport() then add the plane of id = 3 to the airport using landPlane().
testHeader(
  9,
  `If a plane of id = 3 is not in the airport using isPlaneInTheAirport() then add the plane of id = 3 to the airport using landPlane().`
);
// Arrange
plane3;
plane4;
airport.airportPlanes = [plane4];
expected = true;
// Act
if (!airport.isPlaneInAirport(plane3)) {
  airport.landPlane(plane3);
}
actual = airport.airportPlanes.includes(plane3);
// Assert
result = assertEquals(expected, actual);
// Result
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(`Expected ${expected} | Actual: ${actual}`);
// Clean up
cleanUp();
// END of TEST 9

// Test 10
// If a plane of id = 4 is already in the airport and using checkThenLandPlane() then don't add a plane to the airportPlanes array with checkThenLandPlane().
testHeader(
  10,
  `If a plane of id = 4 is already in the airport and using checkThenLandPlane() then don't add a plane to the airportPlanes array with checkThenLandPlane().`
);
// Arrange
airport.airportPlanes = [plane4];
expected = airport.airportPlanes.length;
// Act
airport.checkThenLandPlane(plane4);
actual = airport.airportPlanes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(
  `Expected: ${expected} | Actual: ${actual}, planes: ${JSON.stringify(
    airport.airportPlanes
  )}`
);
// Clean up
cleanUp();
// END of TEST 10

// TEST 11
// If a plane of id = 4 is not in the airport then add to the airport using checkThenLandPlane()
testHeader(
  11,
  `If a plane of id = 4 is not in the airport then add to the airport using checkThenLandPlane().`
);
// Arrange
airport.airportPlanes = [plane3];
expected = airport.airportPlanes.length + 1;
// Act
airport.checkThenLandPlane(plane4);
actual = airport.airportPlanes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(
  `Expected: ${expected} | Actual: ${actual}, planes: ${JSON.stringify(
    airport.airportPlanes
  )}`
);
// Clean up
cleanUp();
// END of TEST 11

// TEST 12
// Check a plane of id = 3 can be removed from the airport array using takeOff().
testHeader(
  12,
  `Check a plane of id = 3 can be removed from the airport array using takeOff().`
);
// Arrange
airport.airportPlanes = [plane3, plane4, plane];
expected = airport.airportPlanes.length - 1;
// Act
airport.takeOff(plane3);
actual = airport.airportPlanes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(
  `Expected: ${expected} | Actual: ${actual}, planes: ${JSON.stringify(
    airport.airportPlanes
  )}`
);
// Clean up
cleanUp();
// END of TEST 12

// TEST 13
// Check a plane of id = 3 can be removed from the airport array if it is already at the airport using checkThenTakeOff().
testHeader(
  13,
  `Check a plane of id = 3 can be removed from the airport array if it is already at the airport using checkThenTakeOff().`
);
// Arrange
airport.airportPlanes = [plane3, plane4];
expected = airport.airportPlanes.length - 1;
// Act
airport.checkThenTakeOff(plane3);
actual = airport.airportPlanes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(
  `Expected: ${expected} | Actual: ${actual}, planes: ${JSON.stringify(
    airport.airportPlanes
  )}`
);
// Clean up
cleanUp();
// END of TEST 13

// TEST 14
// Check there is no change of airport array length if trying to remove a plane of id = 3 if it is not already in the airport.
testHeader(
  14,
  `Check there is no change of airport array length if trying to remove a plane of id = 3 if it is not already in the airport.`
);
// Arrange
airport.airportPlanes = [plane4, plane];
expected = airport.airportPlanes.length;
// Act
airport.checkThenTakeOff(plane3);
actual = airport.airportPlanes.length;
// Assert
result = assertEquals(expected, actual);
// Report
console.log(result ? `TEST PASSED` : `TEST FAILED`);
console.log(
  `Expected: ${expected} | Actual: ${actual}, planes: ${JSON.stringify(
    airport.airportPlanes
  )}`
);
// Clean up
cleanUp();
// END of TEST 14
