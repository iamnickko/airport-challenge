import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js";

// Clean up function AFTER EACH test
const cleanUp = () => {
  expected = undefined;
  actual = undefined;
  result = undefined;
};

// TEST 1
// Change the default capacity of 10 with setCapacity() and expect the capacity to equal the new integer

console.log(`===========================`);
console.log(`Test 1:`);
console.log(
  `Change the default capacity of 10 with setCapacity() and expect the capacity to equal the new integer`
);
console.log(`===========================`);

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
!result && console.log(`Expected value: ${expected} | Actual value: ${actual}`);
console.log(`===========================`);

// Clean up
cleanUp();

// END of TEST 1
