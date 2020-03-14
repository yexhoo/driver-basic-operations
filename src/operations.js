const unknowExecutor = require("./executors/unknown-executor")
const activateExecutor = require("./executors/activate-executor")
const acceptExecutor = require("./executors/accept-executor")
const banExecutor = require("./executors/ban-executor")

const unknow = { props: [], executor: unknowExecutor.get() }
const activate = { props: ["driver", "name", "car"], executor: activateExecutor.get() }
const accept = { props: ["ride", "driver"], executor: acceptExecutor.get() }
const ban = { props: ["ban", "driver"], executor: banExecutor.get() }

const MAP = new Map()
    .set("activate", activate)
    .set("accept", accept)
    .set("ban", ban)

module.exports = {
    MAP: MAP,
    UNkNOW: unknow
}