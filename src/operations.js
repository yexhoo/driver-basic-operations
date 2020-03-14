const unknowExecutor = require("./executors/unknown-executor")
const activateExecutor = require("./executors/activate-executor")
const acceptExecutor = require("./executors/accept-executor")

const unknow = { props: [], executor: unknowExecutor.get() }
const activate = { props: ["driver", "name", "car"], executor: activateExecutor.get() }
const accept = { props: ["driver", "ride"], executor: acceptExecutor.get() }

const MAP = new Map()
    .set("activate", activate)
    .set("accept", accept)

module.exports = {
    MAP: MAP,
    UNkNOW: unknow
}