import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Home } from "../../pages/home/Home";
export function RouterNavigation() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}