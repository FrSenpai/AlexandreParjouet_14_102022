import { Employee } from './../../../models/Employee';
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    employees: []
}
export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        set: (state, action) => {
            //To set the full employees list
            state.employees = action.payload 
        },
        add: (state, action) => {
            //To add a new employee to the list of employees
            state.employees = state.employees.concat(action.payload)
        },
        remove: (state, action) => {
            //TODO
        },
        reset: (state) => {
            //To reset the employees list
            state.employees = initialState.employees
        },
    },
})

// Action creators are generated for each case reducer function
export const { set, add, remove, reset } = employeeSlice.actions

export default employeeSlice.reducer