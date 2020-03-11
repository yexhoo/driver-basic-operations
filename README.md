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

Business logic: 
1. Once a driver account is created, it can not be created again, if this happens add a violation called: ​**driver-already-created**.