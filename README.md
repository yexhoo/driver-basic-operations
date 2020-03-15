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

## 4. Driver finished a ride

<p align= "justify">
This operations is when a previous ride is finished, this is the same json as when we start a ride, but we add more keys. 

1. status: string: now is finished 
2. ride: map - We add the following keys: 
    * a. km: integer : the real kilometers the driver did to take the user to the destination 
    * b. minutes: integer: the real minutes the driver traveled to arrive to the destination 
    * c. price: integer: the real price of the ride. 

**Business logic:**
1. If the ride was never started, add a violation : ​**ride-was-never-started**

***
### Run tests at localhost

* Open a terminal
```sh
# Check latest node.js installation
# installation steps
$ sudo apt update
$ sudo apt install nodejs
$ sudo apt install npm

# check version
$ node -v
v12.14.1

# check version
$ npm -v
6.13.4
```
```sh
# Check Mocha installation
# Installation steps
$ sudo npm i -g mocha

# check version
$ mocha --version
7.1.0
```
```sh
# check version Doker installation
$ docker -v
Docker version 18.09.7, build 2d0083d
```
```sh
# check docker-compose installation
$ docker-compose -v
docker-compose version 1.21.2, build a133471
```
```sh
#Clone repository
$ git clone git@github.com:yexhoo/driver-basic-operations.git
```
```sh
# Install dependencies.
$ cd driver-basic-operations
$ npm install
```
```sh
# Run tests
$ npm test

# Output
> mocha test/*.spec.js

  Accept
    ✓ Accept
    ✓ Without driver without violation
    ✓ On ride violation
    ✓ Finish ride
    ✓ Banned violation

  Activate
    ✓ Activated
    ✓ Already created single violation
    ✓ Already created multiple violation

  Ban
    ✓ On ride violation
    ✓ Already banned violation

  Finish
    ✓ Ride was never started violation


  11 passing (39ms)
```
***
### Run application at Docker container.

* Open a terminal
```sh
# Build project
$ docker-compose up --build

# Output
Creating network "driver-basic-operations_default" with the default driver
Building app
Step 1/7 : FROM node:12
 ---> 7a73e56f893c
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> 6d86250f19b6
Step 3/7 : COPY ./package.json .
 ---> Using cache
 ---> 339fcb3f3bf7
Step 4/7 : RUN npm install
 ---> Using cache
 ---> a96afa81cc74
Step 5/7 : COPY . .
 ---> b696c83be1dd
Step 6/7 : EXPOSE 3000
 ---> Running in c2eb2eb910d8
Removing intermediate container c2eb2eb910d8
 ---> 80031a06132b
Step 7/7 : CMD npm start
 ---> Running in 26871436c159
Removing intermediate container 26871436c159
 ---> 75a8a0d9386f
Successfully built 75a8a0d9386f
Successfully tagged driver-basic-operations_app:latest
Creating driver-basic-operations_app_1 ... done
Attaching to driver-basic-operations_app_1
app_1  | 
app_1  | > driver-basic-operations@1.0.0 dev /app
app_1  | > nodemon src/app.js 
app_1  | 
app_1  | [nodemon] 2.0.2
app_1  | [nodemon] to restart at any time, enter `rs`
app_1  | [nodemon] watching dir(s): *.*
app_1  | [nodemon] watching extensions: js,mjs,json
app_1  | [nodemon] starting `node src/app.js`
app_1  | Driver basic operations on port 3000
```

## **Endpoint**

***
**Validate**
* **Description:** Allows to validate driver operations list.
* **URL:** http://localhost:3000/validate
* **Content-Type:** application/json
* **Method:** `POST`
* **Required:** 
```javascript
{
	"operations":[]
}
```
*  **Body:** 
```javascript
{
	"operations":[
		{"driver": "driver-1", "name": "Pronto test", "car": "Aveo 2014"},
		{"driver": "driver-1", "name": "Pronto test", "car": "Aveo 2014"}
	]
}
```
* **Success Response:**
  * **Code:** 200 <br />
    **Content:** 
```javascript
[
    {
        "driver": "driver-1",
        "name": "Pronto test",
        "car": "Aveo 2014",
        "status": "activated",
        "onRide": false,
        "violations": []
    },
    {
        "driver": "driver-1",
        "name": "Pronto test",
        "car": "Aveo 2014",
        "status": "activated",
        "onRide": false,
        "violations": [
            "driver-already-created"
        ]
    }
]
```
* **Sample Call:**
```javascript
{
	"operations":[
		{"driver": "driver-1", "name": "Pronto test", "car": "Aveo 2014"},
		{"driver": "driver-1", "name": "Pronto test", "car": "Aveo 2014"}
	]
}
```