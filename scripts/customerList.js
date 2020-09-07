import { CustomerHTMLConverter } from "./customerHTML.js"
import { getEmployees, useEmployees } from "./employeeProvider.js"
import { getCustomers, useCustomers } from "./CustomerProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers } from "./EmployeeCustomerProvider.js"


const contentTarget = document.querySelector(".customerContainer")

export const customerList = () => {
    getEmployees().then(() => {
        getCustomers().then(() => {
            getEmployeeCustomers().then(() => {
        let allEmployees = useEmployees()
        let allCustomers = useCustomers()
        let allEmployeeCustomers = useEmployeeCustomers()

        const render = () => {
            contentTarget.innerHTML = allCustomers.map(customer => {
    
                let relatedEmployees = allEmployeeCustomers.filter(ce => ce.customerId === customer.id)
    
                relatedEmployees = relatedEmployees.map(ce => {
                    return allEmployees.find(employee => employee.id === ce.employeeId)
                })
                    console.log(relatedEmployees)
                const html = CustomerHTMLConverter(customer, relatedEmployees)
    
                return html
                
            }).join("")
        }
    
        render()
    })
        })
            })
}