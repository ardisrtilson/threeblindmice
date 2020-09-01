export const WorkforceHTMLConverter = (employeeObj) => {
    console.log(employeeObj)
    return `
        <article>
        ${employeeObj.firstName}
        <br>
        ${employeeObj.age}
        <br>
        ${employeeObj.computer.model}
        <br>
        ${employeeObj.computer.year}
        <br>
        </article>
            `
}