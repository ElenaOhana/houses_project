import { useEffect, useState } from "react";
import { HouseModel } from "../../../Models/HouseModel";
import houseService from "../../../Services/HouseService";
import HouseCard from "../HouseCard/HouseCard";
import { TextField, Button} from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import "./Houses.css";
import { FetchAction, houseStore } from "../../../Redux/HouseState";
import notificationService from "../../../Services/NotificationService";
import { UserModel } from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import { Link } from "react-router-dom";

function Houses(): JSX.Element {

const[houses, setHouses] = useState<HouseModel[]>([]); 

const[user, setUser] =useState<UserModel>();

useEffect(()=>{
   /*  houseStore.dispatch(FetchAction([])) *///My TRY- infinite loop
    /* setHouses([]);  */               //My TRY- infinite loop

    setUser(authStore.getState().user);//My TRY
    authStore.subscribe(()=> { // My TRY
        setUser(authStore.getState().user); //My TRY
    })

    houseService.getAllHouses()
    .then((houses)=>setHouses(houses))
    .catch(err=> notificationService.error(err));

}, [user, houses]); // [houses] -dependencies- trigger for running inner code of useEffect

function refresh(){
    houseStore.dispatch(FetchAction([]))
    setHouses([]);
}

    return (
        <div className="Houses">
            { user ?
            <><div className="housesDiv">
                <Button onClick={refresh}><RefreshIcon/></Button>
			    {/*  houses.map(h=><span>{h.price}</span>)  */}
			    {houses.map(h=><HouseCard house={h} key ={h.id}/>)}</div>
            </> : 
            <>
            <div className="parent"><div className="child">You are logged out already. Please login <Link to={"/login"}>here.</Link></div></div>
            </>
             }
        </div>
    );
}

export default Houses;
