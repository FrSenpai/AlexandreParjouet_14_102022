import { CreateEmployee } from "../../components/employee/createEmployee/CreateEmployee"
import "./Home.scss"
export function Home() {
    return (
        <section>
            <h1 className="title">HRnet</h1>
            <div className="container">
                <a href="employee-list.html">View Current Employees</a>
                <CreateEmployee></CreateEmployee>
            </div>
        </section>
    )
}