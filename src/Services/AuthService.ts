import axios from "axios";
import { CredentialsModel } from "../Models/CredentialsModel";
import { UserModel } from "../Models/UserModel";
import { authStore, loginAction, logoutAction, registerAction } from "../Redux/AuthState";
import appConfig from "../Utils/Config";

class AuthService{
    public async login(credentials:CredentialsModel){
        const response = axios.post<string>(appConfig.authUrl + "login", credentials);
        const token = (await response).data;
        authStore.dispatch(loginAction(token));//Have received the token?-send it as payload(with action type-login) as a change in authStore!
    }

    public async register(userModel:UserModel){
        const response = axios.post<string>(appConfig.authUrl + "register", userModel);
        const token = (await response).data;
        authStore.dispatch(registerAction(token));// dispatch() - Write to state(AddCat Component)
    }

    public async logout(){
        authStore.dispatch(logoutAction());
    }

    //All those above inside the AXIOS and also converting the Object to/from JSON(like Spring for XHR)))
    /* public request(credentials:CredentialsModel){
        const xhr = new XMLHttpRequest();
        xhr.onload = (response) => {
            //response??
        }
        xhr.open("POST", appConfig.authUrl);
        xhr.send(credentials);
    } */
}

const authService = new AuthService();
export default authService;



