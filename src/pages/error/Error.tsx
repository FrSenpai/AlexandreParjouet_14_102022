import { Link } from "react-router-dom";
import "./Error.scss";
/**
 * 
 * @returns a component that displays the error page
 */
export function Error() {
    return (
        <div className="errorCtn">
            <h4>Erreur 404</h4>
            <p>La page n'existe pas.</p>
            <Link className="homeLink" to="/">Home</Link>
        </div>
    )
}