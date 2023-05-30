import { Route, Routes } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import Registration from "../../AuthArea/Registration/Registration";
import Home from "../../HomeArea/Home/Home";
import AddHouse from "../../HouseArea/AddHouse/AddHouse";
import Houses from "../../HouseArea/Houses/Houses";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/houses" element={<Houses/>}/>
                <Route path="/add" element={<AddHouse/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Registration/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
