import { useEffect, useState } from "react";
import { HouseModel } from "../../../Models/HouseModel";
import houseService from "../../../Services/HouseService";
import HouseCard from "../HouseCard/HouseCard";
import "./SpecialHouse.css";

interface HouseProps{
    value: SpecialHouses;
}

export enum SpecialHouses{
    Expensive, LeastExpensive
}

function SpecialHouse(props: HouseProps): JSX.Element {

    const [house, setHouse] = useState<HouseModel>();

    useEffect(()=>{
        switch (props.value){
            case SpecialHouses.Expensive:
                houseService.houseExpensiveHouse()
                .then(h=>setHouse(h))
                .catch()
            break;
            case SpecialHouses.LeastExpensive:
                houseService.houseLeastExpensiveHouse()
                .then(h=>setHouse(h))
                .catch()
            break;
        }
    }, [])

    return (
        <div className="SpecialHouse">
			{house && //כדי לא יציג null או undefined בהתחלה-לפני שהספיק לגשת לשרת.
            <div>
                {/* <span>Num of room:</span>
                <span>Price: {house.price}</span>
                <span>Description: {house.description}</span> */}
                <HouseCard house= {house}/>
            </div>
            }
        </div>
    );
}

export default SpecialHouse;
