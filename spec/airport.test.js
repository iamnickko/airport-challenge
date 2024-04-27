import {
  assertEquals,
  //   assertNotEquals,
} from "./test-framework/test-framework.js";
import airport from "../src/airport.js";

// TEST FUNCTIONS
// Test headers for console.log
const testHeader = (testNum, description) => {
  console.log(`===========================`);
  console.log(`Test ${testNum}:`);
  console.log(`${description}`);
  //   console.log(``);
};
// Test report

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
//
