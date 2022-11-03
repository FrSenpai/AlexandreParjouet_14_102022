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
            state.employees = action.payload //TRY IT 
        },
        add: (state, action) => {
            console.log("payload", action)
            state.employees = state.employees.concat(action.payload)

        },
        remove: (state, action) => {
            //TODO

        },
        reset: (state) => {
            state.employees = initialState.employees
        },
    },
})

// Action creators are generated for each case reducer function
export const { set, add, remove, reset } = employeeSlice.actions

export default employeeSlice.reducer