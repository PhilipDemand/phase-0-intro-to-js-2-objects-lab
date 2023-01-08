const employee = {
    name: 'Johnny Johnson',
    address: '38 Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee}
    newObject[key] = value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(object, key) {
    const newerObject = {...object}
    delete newerObject[key]
    return newerObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
  }

