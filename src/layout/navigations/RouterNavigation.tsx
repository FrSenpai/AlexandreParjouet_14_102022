import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { EmployeeList } from "../../pages/employeeList/EmployeeList";
import { Home } from "../../pages/home/Home";
export function RouterNavigation() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="employeeList" element={<EmployeeList/>}/>
        </Routes>
    )
}