const expect = require("chai").expect
const file = require("../src/file")
const driver = require("../src/driver")
const codes = require("../src/codes")

describe('Activate', () => {

    let testFile, resources = __dirname.concat("/resources/activate/");

    it('Driver activated', () => {
        testFile = resources.concat('activate.txt')
        const operations = file.readFile(testFile)
        const operationsOutput = driver.process(operations)

        expect(operationsOutput.length).is.equal(operations.length)
        expect(operationsOutput[0].status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(operationsOutput[0].onRide).is.equal(false)
        expect(operationsOutput[0].violations.length).is.equal(0)
    });

    it('Driver already created', () => {
        testFile = resources.concat('driver-already-created.txt')
        const operations = file.readFile(testFile)
        const operationsOutput = driver.process(operations)

        const firstDriver = operationsOutput[0]
        const secondDriver = operationsOutput[1]

        expect(operationsOutput.length).is.equal(operations.length)

        expect(firstDriver.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(firstDriver.onRide).is.equal(false)
        expect(firstDriver.violations.length).is.equal(0)

        expect(secondDriver.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(secondDriver.onRide).is.equal(false)
        expect(secondDriver.violations.length).is.equal(1)
    });

    it('Driver already created multiple', () => {
        testFile = resources.concat('driver-already-created-multiple.txt')
        const operations = file.readFile(testFile)
        const operationsOutput = driver.process(operations)

        const aveo = operationsOutput[1]
        const corsa = operationsOutput[3]
        const chevy = operationsOutput[5]

        expect(operationsOutput.length).is.equal(operations.length)

        expect(aveo.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(aveo.onRide).is.equal(false)
        expect(aveo.violations.length).is.equal(1)

        expect(corsa.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(corsa.onRide).is.equal(false)
        expect(corsa.violations.length).is.equal(1)

        expect(chevy.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(chevy.onRide).is.equal(false)
        expect(chevy.violations.length).is.equal(1)
    });

});