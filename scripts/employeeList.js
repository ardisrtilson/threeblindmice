import { WorkforceHTMLConverter } from "./employeeHTML.js"
import { getEmployees, useEmployees } from "./employeeProvider.js"

const contentTarget = document.querySelector(".employeeContainer")
let itemHTML = ""
export const employeeList = () => {
    getEmployees().then(() => {
        let allEmployees = useEmployees()
        
        itemHTML += allEmployees.map(employee => WorkforceHTMLConverter(employee)).join("")
        console.log(itemHTML)
        contentTarget.innerHTML = ` <h3> Articles </h3> ${itemHTML}`
    }) 
    }