# Driver Basic Operations

<p align= "justify">
The application needs to handle 4 operations, every operation has to be handled different according to its business rules and validations: 

1. Activate a driver 
2. Accept a ride 
3. Ban a driver 
4. Driver finished a ride 

Keep in mind new rules will appear in the future.


## 1. Activate a driver 

<p align= "justify">
This operation creates the driver account, the driver account is initialized with the following parameters: 

1. id : string 
2. name : string 
3. car : string 
4. onRide : boolean 
5. status : string - default activated 
6. violations : array[strings] 

**Business logic:**
1. Once a driver account is created, it can not be created again, if this happens add a violation called: ​**driver-already-created**.

## 2. Accept a ride

<p align= "justify">
Accepts a ride and sets the driver on a ride to true, the ride has the following data: 

1. ride : map: 
    * a. user: string : id of the user 
    * b. id: string: id of the ride 
    * c. estimatedKm : string : estimated kilometers to arrive to the destination 
    * d. etaMinutes: integer: estimated time in minutes to arrive to the destination 
    * e. estimatedPrice: integer: estimated price of the ride 
    * f. status: boolean: default start 
2. driver: string : id of the driver 

**Business logic:**
1. Only and active user can accept rides, otherwise add a violation: ​**driver-banned**
2. A driver can only accept a rider, if he is not already in one, otherwise add a violation: **driver-on-ride**

## 3. Ban a driver

<p align= "justify">
Bans a driver, and changes the status of the driver to banned. 

1. ban : boolean: status 
2. driver: string : id of the driver 

**Business logic:**
1. Only active drivers can be banned, if a driver is already banned, add a violation: **driver-already-banned**
2. If a driver is on a ride, he can’t be banned, if this happens add a violation: **driver-on-ride**