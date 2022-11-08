import { Link } from "react-router-dom";
import { CustomTable } from "../../layout/table/CustomTable";
import "./EmployeeList.scss";
/**
 * 
 * @returns a component that displays the employee list
 */
export function EmployeeList() {
    return (
        <div>
            <h1 className="title">Current Employees</h1>
            <div className="ctnCustomTable">
                <CustomTable></CustomTable>
            </div>
            <Link className="homeLink" to="/">Home</Link>
        </div>
    )
}