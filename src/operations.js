const unknowExecutor = require("./executors/unknown-executor")
const activateExecutor = require("./executors/activate-executor")

const unknow = { props: [], executor: unknowExecutor.get() }
const activate = { props: ["driver", "name", "car"], executor: activateExecutor.get() }

const MAP = new Map()
    .set("activate", activate)

module.exports = {
    MAP: MAP,
    UNkNOW: unknow
}