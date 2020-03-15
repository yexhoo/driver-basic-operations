const operations = require("./operations")

exports.getExecutor = (operation) => {

  for (type of operations.MAP.keys()) {
    const operationType = operations.MAP.get(type)
    if (operationType.props.every(n => this.hasOwnDeepProperty(operation, n))) {
      return operationType.executor
    }
  }

  return operations.UNkNOW_OPERATION.executor
}


exports.hasOwnDeepProperty = (obj, prop) => {
  if (typeof obj === 'object' && obj !== null) {
    if (obj.hasOwnProperty(prop)) {
      return true;
    }
    for (var p in obj) {
      if (obj.hasOwnProperty(p) && this.hasOwnDeepProperty(obj[p], prop)) {
        return true;
      }
    }
  }
  return false;
}