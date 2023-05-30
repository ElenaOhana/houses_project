import Login from "../../AuthArea/Login/Login";
import SpecialHouse, { SpecialHouses } from "../../HouseArea/SpecialHouse/SpecialHouse";
import { authStore } from "../../../Redux/AuthState";
import HomeCalc from "../HomeCalc/HomeCalc";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
			{/* חישוב ערך הנכס */} {/* Calculator */}
            <HomeCalc/>

            {/* Expensive */}
            <SpecialHouse value={SpecialHouses.Expensive}/>

            {/* LeastExpensive */}
            <SpecialHouse value={SpecialHouses.LeastExpensive}/>

          {/* How to do Conditional rendering with the access to global store  */} 
          {/* {!authStore.getState().user && 
            <Login/>} */}
            
        </div>
    );
}

export default Home;
