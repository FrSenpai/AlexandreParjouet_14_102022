import { CustomTable } from "../../layout/table/CustomTable";
import "./EmployeeList.scss";
export function EmployeeList() {
    return (
        <div>
            <h1 className="title">Current Employees</h1>
            {/* TODO : TABLEAU */}
            <div className="ctnCustomTable">
                <CustomTable></CustomTable>
            </div>
            
        </div>
    )
}