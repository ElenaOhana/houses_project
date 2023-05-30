import { HouseModel } from "../../../Models/HouseModel";
import "./HouseCard.css";
import { Divider, Typography} from "@mui/material";

interface houseProps{
    house : HouseModel;
}

function HouseCard(property: houseProps): JSX.Element {
    return (
        <div className="HouseCard">
            <Typography align="center" variant="h2">Price</Typography>
            <Typography align="center" variant="h3">${property.house.price}</Typography>
            <Divider variant="middle"/>
            <Typography align="center" variant="h3">Number of Rooms</Typography>            
            <Typography align="center" variant="h4">{property.house.numOfRooms}</Typography>       
            <Divider variant="middle"/>
            <Typography align="center" variant="h3">Description</Typography>            
            <Typography align="center" variant="h4">{property.house.description}</Typography>        
        </div>
    );
}

export default HouseCard;
