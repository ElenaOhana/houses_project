import jwtDecode from "jwt-decode";
import {UserModel} from "../Models/UserModel";
import {createStore} from "redux";
import notificationService from "../Services/NotificationService";

export class AuthState{
    public token:string;
    public user:UserModel;

    constructor(){
        const storedToken = localStorage.getItem("token");
        if(storedToken){
            try{
                this.token = storedToken;
                this.user = {...jwtDecode(storedToken)};
                //this.user = jwtDecode(storedToken);/* .iat */
                console.log(this.user);
            }catch(err: any){
                notificationService.error("error decoding token!")
            }
        }
        console.log(this.user);
    }
}

export enum AuthActionTypes{
    Login,
    Register,
    Logout
}
export interface AuthAction{
    type: AuthActionTypes,
    payload?: any
}

export function loginAction(token: string){
    return {type: AuthActionTypes.Login, payload: token}
}
export function registerAction(token:string){
    return {type: AuthActionTypes.Register, payload: token}
}
export function logoutAction(){
    return {type: AuthActionTypes.Logout}
}

export function reducer(currentState = new AuthState(), action:AuthAction){
    const newState={...currentState};

    switch(action.type){
        case AuthActionTypes.Login: // payload is token!
            newState.token = action.payload;
            newState.user = jwtDecode(newState.token);
            localStorage.setItem("token", newState.token);
        break;

        case AuthActionTypes.Register: // payload is token!
                newState.token = action.payload;
                newState.user = jwtDecode(newState.token);
                localStorage.setItem("token", newState.token);
        break;

        case AuthActionTypes.Logout:
            newState.token = null;
            newState.user = null;
            localStorage.removeItem("token");
        break;
    }
    return newState;
}

export const authStore = createStore(reducer);

