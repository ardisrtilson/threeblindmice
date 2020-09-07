export const CustomerHTMLConverter = (customerObj, relationObj) => {
    console.log(customerObj)
    console.log(relationObj)
    return `
    <div class="customers">
    <header class="customer__name">
        <h2>${customerObj.name}</h2>
    </header>
    <section class="employee__name">
    ${relationObj.map(employee => `<li>${employee.firstName} ${employee.lastName}</li>`).join(" ")}</li>
    </section>
        </div>
            `
}