import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { EmployeeList } from "../../pages/employeeList/EmployeeList";
import { Error } from "../../pages/error/Error";
import { Home } from "../../pages/home/Home";
/**
 * 
 * @returns a component that displays the navigation
 */
export function RouterNavigation() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="employeeList" element={<EmployeeList/>}/>
            <Route path="*" element={<Error />}></Route>
        </Routes>
    )
}