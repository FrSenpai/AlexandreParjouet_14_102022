import "./CreateEmployee.scss";
import Select from 'react-select'
import statesList from "../../../assets/json/statesList.json"
import departmentsList from "../../../assets/json/departmentsList.json"
export function CreateEmployee() {
    return (
        <section className="container">
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <Select styles={getSelectStyles()} options={statesList.states} name="state" id="state"></Select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select styles={getSelectStyles()} options={departmentsList.departments} name="department" id="department"/>
            </form>

            <button>Save</button>
        </section>
    )
}

function getSelectStyles() {
    return {
        control: (provided:any) => ({
          // none of react-select's styles are passed to <Control />
          ...provided,
          background: "#f6f6f6",
        })}
}