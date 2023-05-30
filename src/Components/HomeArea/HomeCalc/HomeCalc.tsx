import "./HomeCalc.css";
import {TextField, Button} from "@mui/material";
import { useState, useRef } from "react";

function HomeCalc(): JSX.Element {

    const [price, setPrice] = useState<number>(0);
    /* const [rooms, setRooms] =useState<number>(0); */

    const roomsElement = useRef<any>();

   /*  function changeValue(e: React.ChangeEvent<HTMLInputElement>){ //every change on button
        setRooms(+(e.target.value));   // +() in TS - it is try to change the string to number
    } */

   /*  function calc(){
        setPrice(rooms* 1000000);
    } */

    function calc(){
        setPrice(+(roomsElement.current.children[1].children[0].value) * 1000000);
    }
   

    return (
        <div className="HomeCalc">
		{/* 	<TextField label="Number of rooms" type="number"  onChange={changeValue}/><br/><br/> */}
     {/*        <Button variant="outlined" onClick={calc}>Calculate</Button><br/><br/> */}
			<TextField label="Number of rooms" type="number" ref={roomsElement}/><br/><br/>
            <Button variant="outlined" onClick={calc}>Calculate</Button><br/><br/>
            <span>Current value: ₪ {price} </span>
        </div>
    );
}

export default HomeCalc;


