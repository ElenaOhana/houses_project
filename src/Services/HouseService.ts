import { HouseModel } from "../Models/HouseModel";
import axios from "axios";
import appConfig from "../Utils/Config";
import { AddAction, FetchAction, houseStore } from "../Redux/HouseState";

class HousesService{
    public async getAllHouses(){
        if(houseStore.getState().houses.length == 0){ // In order do not to request the server "all the time"
            const response = axios.get<HouseModel[]>(appConfig.housesUrl);
            const houses = (await response).data;
            houseStore.dispatch(FetchAction(houses));// send the HouseModel[] to the HouseState
            return houses;
        }
        else{
            return houseStore.getState().houses;
        }
    }

    public async addHouse(house: HouseModel){
        const response = axios.post<HouseModel>(appConfig.housesUrl, house);
        const newHouse = (await response).data;
        houseStore.dispatch(AddAction(newHouse));
        return newHouse;
    }

    public async houseExpensiveHouse(){
        const response = axios.get<HouseModel>(appConfig.housesUrl + "exp");
        return (await response).data;
    }

    public async houseLeastExpensiveHouse(){
        const response = axios.get<HouseModel>(appConfig.housesUrl + "cheap");
        return (await response).data;
    }
}

const houseService = new HousesService(); // חוספים משתנה החוצה 
export default houseService;
