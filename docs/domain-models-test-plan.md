# Domain Models and Test Plan

<!-- ### **User Story 1 Requirements**

| Object | Property | Message | Output |
| :--- | :---: | :---: | :---: | 
| **Airport** | `capacity` @integer | `setCapacity(@integer)` | `@Void` | 

### Tests:
- [ ] Define capacity using ```setCapacity()``` and expect `capacity` to equal the integer.
--- -->

### **User Story 1 Requirements**

| Object  |     Property      |    Message    | Output |
| :------ | :---------------: | :-----------: | :----: |
| **Airport** | `capacity` @integer | `setCapacity()` | `@Void`  |


### Tests:
- [x] Change the default capacity of 10 with ```setCapacity()``` and expect the capacity to equal the new integer.
---

### **User Story 2 Requirements**

| Object  |     Property      |    Message    | Output |
| :------ | :---------------: | :-----------: | :----: |
| **Airport** | `capacity` @integer <br> `airportPlanes` @Array[@Plane] | `setCapacity()` <br>  `landPlane(@Plane)` | `@Void` <br> `@Void`|
| **Plane** |  |  |  |

### Tests:
- [x] Check if the airport is not full by checking airportPlanes length is less than capacity.
- [x] Check if a plane can be added to the airport with `landPlane()`
- [x] Check a plane cannot be landed if capacity is full.

---

### **User Story 3 Requirements**

| Object | Property | Message | Output |
| :--- | :---: | :---: | :---: |
| **Airport** | `capacity` @integer <br> `airportPlanes` @Array[@Plane] <br><br> | - <br>`landPlane(@Plane)` <br> `isPlaneInAirport()` <br> `checkThenLandPlane()`| - <br> - <br> `@Boolean` <br> - |
| **Plane** | `id` @integer | | |

### Tests:
- [x] Check if a specific plane is in the airport.
- [x] Check if a specific plane can be added to the airport array.
- [x] Check if a plane with `id = 3` can be added to airport already with a plane with `id = 4`
- [x] Check if airport actually contains plane with `id = 3` after landing plane of `id = 3` using `landPlane()`.
- [x] If a plane of `id = 3` is not in the airport using `isPlaneInAirport()` then add the plane of `id = 3` to the airport using `landPlane()`.
- [x] If a plane of `id = 4` is already in the airport and using `checkThenLandPlane()` then don't add a plane to the airportPlanes array.


---

### **User Story 4 Requirements**

| Object | Property | Message | Output |
| :--- | :---: | :---: | :---: |
| **Airport**| `capacity` @integer <br> `airportPlanes` @Array[@Plane] | - <br> `takeoffPlane(@Plane)` | |
| **Plane** |  | | | 

### Tests:
- [ ] Check if a specific plane is in the airport.
- [ ] Check a plane can be removed from the airport array.

---