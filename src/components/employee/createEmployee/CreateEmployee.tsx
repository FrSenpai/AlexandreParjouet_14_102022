import "./CreateEmployee.scss";
import Select from 'react-select'
import statesList from "../../../assets/json/statesList.json"
import departmentsList from "../../../assets/json/departmentsList.json"
import "react-datepicker/dist/react-datepicker.css";
import { CustomDatePicker } from "../../../layout/datepicker/DatePicker";
import { range } from "../../../utils/range";
import { useState } from "react";
import { isFormValid } from "../../../helpers/employee/createEmployee";
import { useDispatch } from "react-redux";
import { add } from "../../../store/reducers/employee/EmployeeReducer";
import {CustomModal} from 'basic-react-modal'
import 'basic-react-modal/dist/index.css'
export function CreateEmployee() {
    const [form, setForm] = useState({ data: { firstName: null, lastName: null, birthDay: null, startDate: null, address: { street: null, city: null, state: "AL", zip: null }, department: "Sales" }, error: "" })
    const [showModal, setShowModal] = useState(false)
    const yearsRange: any = { birthDate: [].concat(range(100, new Date().getFullYear() - 99)), startDate: [].concat(range(10, new Date().getFullYear())) }
    const dispatch = useDispatch();
    /**
     * 
     * @param attrName {string} the name of the attribute to be updated (need to exist in the form state)
     * @param newValue {any} the new value to be set
     */
    const updateForm = (attrName: string, newValue: any) => {
        setForm({ ...form, data: { ...form.data, [attrName]: newValue } })
    }
    /**
     * @description Submit the form -> we check if the form is valid, if it is, we hydrate the redux store with the form data
     */
    const submitForm = () => {
        if (!isFormValid(form.data).valid) {
            //we take only the first error, but we could display all of them
            setForm({ ...form, error: isFormValid(form.data).errors[0] })
        } else {
            dispatch(add({ ...form.data }))
            setForm({ ...form, error: "" })
            setShowModal(true)
        }
    }
    /**
     * @description used to close the modal
     */
    const closeModal = () => {
        setShowModal(!showModal)
    }

    const modalChildren = () => {
        return (
            <section className="ctnModalEmployee">
                <h3>Employee created !</h3>
                <p>The employee has been created.</p>
                <button onClick={() => closeModal()}>Close</button>
            </section>
        )
    }

    return (
        <section className="container">
            <h2>Create Employee</h2>
            <form className="createEmployeeForm" action="#" id="create-employee">
                <div>
                    <label htmlFor="first-name">First Name</label>
                    <input onKeyUp={(e) => updateForm("firstName", e.currentTarget.value)} type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input onKeyUp={(e) => updateForm("lastName", e.currentTarget.value)} type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <CustomDatePicker onChange={(v: Date) => updateForm("birthDay", v)} years={yearsRange.birthDate}></CustomDatePicker>

                    <label htmlFor="start-date">Start Date</label>
                    <CustomDatePicker onChange={(v: Date) => updateForm("startDate", v)} years={yearsRange.startDate}></CustomDatePicker>
                </div>


                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input onKeyUp={(e) => updateForm("address", { ...form.data.address, street: e.currentTarget.value })} id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input onKeyUp={(e) => updateForm("address", { ...form.data.address, city: e.currentTarget.value })} id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <Select onChange={(e: any) => updateForm("address", { ...form.data.address, state: e.value })} styles={getSelectStyles()} options={statesList.states} defaultValue={statesList.states[0]} name="state" id="state"></Select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input onKeyUp={(e) => updateForm("address", { ...form.data.address, zip: e.currentTarget.value })} id="zip-code" type="number" />
                </fieldset>
                <div className="ctnDepartmentInput">
                    <label htmlFor="department">Department</label>
                    <Select onChange={(e: any) => updateForm("department", e.value)} defaultValue={departmentsList.departments[0]}  styles={getSelectStyles()} options={departmentsList.departments} name="department" id="department" />

                </div>
            </form>
            <div hidden={form.error === ""}>
                <p>{form.error}</p>
            </div>
            <button onClick={() => { submitForm() }}>Save</button>
            <CustomModal show={showModal} close={closeModal} children={modalChildren()}></CustomModal>
        </section>
    )
}


function getSelectStyles() {
    return {
        control: (provided: any) => ({
            ...provided,
            background: "#f6f6f6",
        })
    }
}