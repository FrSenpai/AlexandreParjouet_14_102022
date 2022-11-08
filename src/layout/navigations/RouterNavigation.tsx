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
    //The error page won't trigger on localhost because hash router is used, it's working on the deployed version
    return (
        <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="employeeList" element={<EmployeeList/>}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}