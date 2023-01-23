// Write your solution in this file!
const employee ={}
employee.name = "Nicholas Brereton"
employee.streetAddress = "332 East 14th St"

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key]=value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}
function deleteFromEmployeeByKey(employee, key, value){
    return{...employee,
    [key]:value
    }
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    const newEmployee = {}
    employee[key]=value
    return newEmployee, employee
}