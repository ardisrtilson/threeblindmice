import { employeeList } from "./employeeList.js"

let employees = ""
export const getEmployees = () => {
    return fetch('http://localhost:8088/employees?_expand=computer')
        .then(response => response.json())
        .then(parsedEmployees => {
            employees = parsedEmployees
        })
}

export const useEmployees = () => {
    return employees.slice()
}