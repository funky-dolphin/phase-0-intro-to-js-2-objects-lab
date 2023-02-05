const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = { ...employee }
    newEmployee[key]=value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee[key]=value
    return employee
}
function deleteFromEmployeeByKey (employee, key){
    const newEmployee = {...employee}
    // nondestructive new employee
    delete newEmployee[key]
    // use bracket [key] to allow any key to be deleted
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}