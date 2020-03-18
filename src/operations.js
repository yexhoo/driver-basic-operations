const unknowExecutor = require("./strategies/unknown-strategy")
const activateExecutor = require("./strategies/activate-strategy")
const acceptExecutor = require("./strategies/accept-strategy")
const banExecutor = require("./strategies/ban-strategy")
const finishExecutor = require("./strategies/finish-strategy")

const unknow = {
    name: "unknow",
    props: [],
    executor: unknowExecutor.get(),
    validations: []
}

const activate = {
    name: "activate",
    props: ["driver", "name", "car"],
    executor: activateExecutor.get(),
    validations: []
}

const finish = {
    name: "finish",
    props: ["ride", "driver", "km", "minutes", "price"],
    executor: finishExecutor.get(),
    validations: ["driver"]
}

const accept = {
    name: "accept",
    props: ["ride", "driver"],
    executor: acceptExecutor.get(),
    validations: ["driver"]
}

const ban = {
    name: "ban",
    props: ["ban", "driver"],
    executor: banExecutor.get(),
    validations: ["driver"]
}

const MAP = new Map()
    .set("activate", activate)
    .set("finish", finish)
    .set("accept", accept)
    .set("ban", ban)

module.exports = {
    MAP: MAP,
    UNkNOW: unknow
}