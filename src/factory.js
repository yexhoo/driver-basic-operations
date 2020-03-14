const operations = require("./operations")

exports.getExecutor = (operation) => {

    for (type of operations.MAP.keys()) {
        const operationType = operations.MAP.get(type)
        if (operationType.props.every(n => operation.hasOwnProperty(n))) {
            return operationType.executor
        }
    }

    return operations.UNkNOW_OPERATION.executor
}