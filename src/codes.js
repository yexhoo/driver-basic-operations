// status
const DRIVER_STATUS_BANNED = "banned"
const DRIVER_STATUS_ACTIVATED = "activated"

// violation messages
const DRIVER_BANNED = "driver-banned"
const DRIVER_ON_RIDE = "driver-on-ride"
const DRIVER_ALREADY_BANNED = "driver-already-banned"
const DRIVER_DOES_NOT_EXIST = "driver-does-not-exist"
const DRIVER_ALREADY_CREATED = "driver-already-created"
const RIDE_WAS_NEVER_STARTED = "ride-was-never-started"
const OPERATIONS_REQUIRED = "Operations attribute is required"
const JSON_ERROR = "Something was wrong, please verify your JSON"
const RUNNING_SERVER = "Driver basic operations is running on port 3000"
const BAD_REQUEST = 400
const PORT = 3000

module.exports = {
    DRIVER_ALREADY_CREATED: DRIVER_ALREADY_CREATED,
    DRIVER_STATUS_ACTIVATED: DRIVER_STATUS_ACTIVATED,
    DRIVER_DOES_NOT_EXIST: DRIVER_DOES_NOT_EXIST,
    DRIVER_ON_RIDE: DRIVER_ON_RIDE,
    DRIVER_STATUS_BANNED: DRIVER_STATUS_BANNED,
    DRIVER_ALREADY_BANNED: DRIVER_ALREADY_BANNED,
    DRIVER_BANNED: DRIVER_BANNED,
    RIDE_WAS_NEVER_STARTED: RIDE_WAS_NEVER_STARTED,
    OPERATIONS_REQUIRED: OPERATIONS_REQUIRED,
    JSON_ERROR: JSON_ERROR,
    RUNNING_SERVER: RUNNING_SERVER,
    BAD_REQUEST: BAD_REQUEST,
    PORT: PORT
}