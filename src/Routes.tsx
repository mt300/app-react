import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Home } from "./components/pages/Home/Home";
import { Market } from "./components/pages/Market/Market";
import { Team } from "./components/pages/Team/Team";


export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/team" element={<Team/>} />
                <Route path="/market" element={<Market/>} />
                    
            </Routes>
        </Router>
    );
}