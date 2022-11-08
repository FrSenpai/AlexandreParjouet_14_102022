import { DateTime } from 'luxon';
/**
 * 
 * @param employees employees list
 * @returns formatted employees list to use it on table
 */
export function getTableFormatEmployee(employees: any) {
    const formattedEmployees: Array<any> = []
    employees.forEach((employee: any) => {
        formattedEmployees.push({
            firstName: employee.firstName,
            lastName: employee.lastName,
            startDate: DateTime.fromJSDate(new Date(employee.startDate)).toFormat("MM/dd/yyyy"),
            department: employee.department,
            birthDay: DateTime.fromJSDate(new Date(employee.birthDay)).toFormat("MM/dd/yyyy"),
            street: employee.address.street,
            city: employee.address.city,
            state: employee.address.state,
            zip: employee.address.zip,
        })
    })
    return formattedEmployees
}

/**
 * 
 * @returns the headers of the table containing the employee list
 */
export function getHeaders() {
    const headers = [
        {
            Header: 'First Name',
            accessor: 'firstName', // accessor is the "key" in the data
        }, {
            Header: 'Last Name',
            accessor: 'lastName',
        }, {
            Header: 'Start Date',
            accessor: 'startDate',
        }, {
            Header: 'Departement',
            accessor: 'department',
        },
        {
            Header: 'Date of Birth',
            accessor: 'birthDay',
        },
        {
            Header: 'Street',
            accessor: 'street',
        },
        {
            Header: 'City',
            accessor: 'city',
        },
        {
            Header: 'State',
            accessor: 'state',
        },
        {
            Header: 'Zip Code',
            accessor: 'zip',
        },
    ]

    return headers
}