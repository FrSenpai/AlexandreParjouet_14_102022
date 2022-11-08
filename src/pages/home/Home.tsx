import { CreateEmployee } from "../../components/employee/createEmployee/CreateEmployee"
import "./Home.scss"
import { Link } from "react-router-dom";
/**
 * 
 * @returns a component that displays the home page
 */
export function Home() {
    return (
        <section>
            <h1 className="title">HRnet</h1>
            <div className="container">
                <Link to={"employeeList"}>View Current Employees</Link>
                <CreateEmployee></CreateEmployee>
            </div>
        </section>
    )
}