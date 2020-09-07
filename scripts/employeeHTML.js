export const WorkforceHTMLConverter = (employeeObj, relationObj) => {
    console.log(relationObj)
    return `
    <div class="employee">
    <header class="employee__name">
        <h2>${employeeObj.firstName} ${employeeObj.lastName}</h1>
    </header>
    <section class="employee__computer">
        Currently using a ${employeeObj.computer.year} ${employeeObj.computer.model}
    </section>
    <section class="employee__department">
        Works in the ${employeeObj.department.name} department
        </section>
    <section class="employee__location">
        Works at the ${employeeObj.location.location} office
    </section>
    <section class="employee__customers">
    Has worked for the following customers:
    <ul>
        ${relationObj.map(business => `<li>${business.name}</li>`).join(" ")}</li>
    </ul>
    </section>
        </div>
            `
}