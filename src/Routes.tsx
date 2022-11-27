import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Catalog } from "./components/pages/Catalog";
import { Cart } from "./components/pages/Cart";


export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/catalog" element={<Catalog/>} />
                <Route path="/cart" element={<Cart/>} />
                    
            </Routes>
        </Router>
    );
}