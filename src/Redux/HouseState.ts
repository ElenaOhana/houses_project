import { HouseModel } from "../Models/HouseModel";
import {configureStore, createStore} from "@reduxjs/toolkit";

export class HousesState{    // Cash
    houses: HouseModel[] =[];
}

enum HousesActionTypes{
    FetchHouses,
    AddHouse, 
    DeleteHouse
}

export interface HousesAction{
    type: HousesActionTypes,  // What action?
    payload: any  // What a data that action supports? /* HouseModel[] | HouseModel | number */
}

export function FetchAction(houses: HouseModel[]){
    return { type: HousesActionTypes.FetchHouses, payload: houses}
}
export function AddAction(house: HouseModel){
    return { type: HousesActionTypes.AddHouse, payload: house}
}
export function DeleteAction(id: number){
    return { type: HousesActionTypes.DeleteHouse, payload: id}
}

// payload is the data that accompanies the action.
export function houseReducer(currentState = new HousesState(), action: HousesAction): HousesState{
    const newState = currentState={...currentState}

    switch(action.type){
        case HousesActionTypes.FetchHouses: // payload is house[]
            newState.houses = action.payload;
        break;
        // push- מוסיף בסוף. אפשר למיין גם
        case HousesActionTypes.AddHouse:   // payload is house
            newState.houses.push(action.payload);
        break;
        
        case HousesActionTypes.DeleteHouse:   // payload is id
            const index = newState.houses.findIndex(h=>h.id == action.payload)
            if(index >= 0)
                newState.houses.splice(index, 1);
        break;
    }

    return newState;
}

/* export const houseStore = configureStore({reducer: houseReducer}); */ /* bug in adding */
export const houseStore = createStore(houseReducer);

