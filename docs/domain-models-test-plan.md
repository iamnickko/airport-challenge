# Domain Models and Test Plan

### **User Story 1 Requirements**

| Object | Property | Message | Output |
| :--- | :---: | :---: | :---: | 
| Airport | capacity @integer | setCapacity(@integer) | @Void | 

### Tests:
- [ ] Define capacity using ```setCapacity()``` and expect capacity to equal the integer.
---

### **User Story 2 Requirements**

| Object  |     Property      |    Message    | Output |
| :------ | :---------------: | :-----------: | :----: |
| Airport | capacity @integer | setCapacity() | @Void  |


### Tests:
- [ ] Change an already existing capacity with ```setCapacity()``` and expect the capacity to equal the new integer.
---

### **User Story 3 Requirements**

| Object  |     Property      |    Message    | Output |
| :------ | :---------------: | :-----------: | :----: |
| Airport | capacity @integer <br> airportPlanes @Array[@planes]| setCapacity() <br> isAirportFull() | @Void <br> Boolean  |
| Plane |   |  |  |

### Tests:
- [ ] Check if airportPlanes length doesn't equal capacity.
---