import { WorkforceHTMLConverter } from "./employeeHTML.js"
import { getEmployees, useEmployees } from "./employeeProvider.js"
import { getCustomers, useCustomers } from "./CustomerProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers } from "./EmployeeCustomerProvider.js"


const contentTarget = document.querySelector(".employeeContainer")
let itemHTML = ""
export const employeeList = () => {
    getEmployees().then(() => {
        getCustomers().then(() => {
            getEmployeeCustomers().then(() => {
        let allEmployees = useEmployees()
        let allCustomers = useCustomers()
        let allEmployeeCustomers = useEmployeeCustomers()
        console.log(allEmployees)
        console.log(allCustomers)
        console.log(allEmployeeCustomers)

        const render = () => {
            contentTarget.innerHTML = allEmployees.map(employee => {
    
                let relatedEmployees = allEmployeeCustomers.filter(ec => ec.employeeId === employee.id)
    
                relatedEmployees = relatedEmployees.map(ec => {
                    return allCustomers.find(customer => customer.id === ec.customerId)
                })
    
                const html = WorkforceHTMLConverter(employee, relatedEmployees)
    
                return html
                
            }).join("")
        }
    
        render()
    })
        })
            })
}