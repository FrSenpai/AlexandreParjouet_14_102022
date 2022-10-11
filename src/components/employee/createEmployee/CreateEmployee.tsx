import "./CreateEmployee.scss";
import Select from 'react-select'
import statesList from "../../../assets/json/statesList.json"
import departmentsList from "../../../assets/json/departmentsList.json"
import "react-datepicker/dist/react-datepicker.css";
import { CustomDatePicker } from "../../../layout/datepicker/DatePicker";
import { range } from "../../../utils/range";
import { useEffect, useState } from "react";
export function CreateEmployee() {
    const [form, setForm] = useState({data: {firstName:null, lastName:null, birthDay:null, startDate: null, address: {street:null, city:null, state:null, zip:null}, department:null}})
    /**
     * 
     * @param attrName {string} the name of the attribute to be updated (need to exist in the form state)
     * @param newValue {any} the new value to be set
     */
    const updateForm = (attrName:string, newValue:any) => {
        setForm({...form, data: {...form.data, [attrName]: newValue}})
    }

    useEffect(() => {
        console.log('form', form);
      }, [form])
    const yearsRange:any = {
        birthDate: [].concat(range(100, new Date().getFullYear() - 100)),
        startDate: [].concat(range(10, new Date().getFullYear())),
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
                <CustomDatePicker years={yearsRange.birthDate}></CustomDatePicker>

                <label htmlFor="start-date">Start Date</label>
                <CustomDatePicker years={yearsRange.startDate}></CustomDatePicker>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input onKeyUp={(e) => updateForm("address", {...form.data.address,street:e.currentTarget.value}) } id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input onKeyUp={(e) => updateForm("address", {...form.data.address,city:e.currentTarget.value}) } id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <Select onChange={(e:any) => updateForm("address", {...form.data.address,state:e.currentTarget.value}) } styles={getSelectStyles()} options={statesList.states} name="state" id="state"></Select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input onKeyUp={(e) => updateForm("address", {...form.data.address,zip:e.currentTarget.value}) }  id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select onChange={(e:any) => updateForm("department", e.value) } styles={getSelectStyles()} options={departmentsList.departments} name="department" id="department"/>
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