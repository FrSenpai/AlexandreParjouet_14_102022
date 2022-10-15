import "./CreateEmployee.scss";
import Select from 'react-select'
import statesList from "../../../assets/json/statesList.json"
import departmentsList from "../../../assets/json/departmentsList.json"
import "react-datepicker/dist/react-datepicker.css";
import { CustomDatePicker } from "../../../layout/datepicker/DatePicker";
import { range } from "../../../utils/range";
import { useEffect, useState } from "react";
import { isFormValid } from "../../../helpers/employee/createEmployee";
export function CreateEmployee() {
    const [form, setForm] = useState({data: {firstName:null, lastName:null, birthDay:null, startDate: null, address: {street:null, city:null, state:null, zip:null}, department:null}, error: ""})
    const yearsRange:any = {birthDate: [].concat(range(100, new Date().getFullYear() - 100)),startDate: [].concat(range(10, new Date().getFullYear()))}
    /**
     * 
     * @param attrName {string} the name of the attribute to be updated (need to exist in the form state)
     * @param newValue {any} the new value to be set
     */
    const updateForm = (attrName:string, newValue:any) => {
        setForm({...form, data: {...form.data, [attrName]: newValue}})
    }
    /**
     * @description Submit the form -> we check if the form is valid, if it is, we hydrate the redux store with the form data
     */
    const submitForm = () => {
        if(!isFormValid(form.data).valid) {
            //we take only the first error, but we could display all of them
            setForm({...form, error: isFormValid(form.data).errors[0]})
            return
        }
            console.log("Form is valid!")
            //TODO: Hydrate data into employee store
        
    }
   
    return (
        <section className="container">
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input onKeyUp={(e) => updateForm("firstName", e.currentTarget.value) } type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input onKeyUp={(e) => updateForm("lastName", e.currentTarget.value) } type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <CustomDatePicker  onChange={(v:Date) => updateForm("birthDay", v)} years={yearsRange.birthDate}></CustomDatePicker>

                <label htmlFor="start-date">Start Date</label>
                <CustomDatePicker onChange={(v:Date) => updateForm("startDate", v)} years={yearsRange.startDate}></CustomDatePicker>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input onKeyUp={(e) => updateForm("address", {...form.data.address,street:e.currentTarget.value}) } id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input onKeyUp={(e) => updateForm("address", {...form.data.address,city:e.currentTarget.value}) } id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <Select onChange={(e:any) => updateForm("address", {...form.data.address,state:e.value}) } styles={getSelectStyles()} options={statesList.states} name="state" id="state"></Select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input onKeyUp={(e) => updateForm("address", {...form.data.address,zip:e.currentTarget.value}) }  id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select onChange={(e:any) => updateForm("department", e.value) } styles={getSelectStyles()} options={departmentsList.departments} name="department" id="department"/>
            </form>
            <div hidden={form.error === ""}>
                <p>{form.error}</p>
            </div>
            <button onClick={() => {submitForm()}}>Save</button>
        </section>
    )
}

function getSelectStyles() {
    return {
        control: (provided:any) => ({
          ...provided,
          background: "#f6f6f6",
        })}
}