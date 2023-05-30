import "./Registration.css";
import {useForm} from "react-hook-form";
import { UserModel } from "../../../Models/UserModel";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import { TextField, Button} from "@mui/material";
import { authStore } from "../../../Redux/AuthState";
import notificationService from "../../../Services/NotificationService";

function Registration(): JSX.Element {

    const{register, handleSubmit} =useForm<UserModel>();
    const navigate = useNavigate();

    function send(user: UserModel){
        authService.register(user)
        .then(()=>{
            //successful registration!
            //alert("Welcome " + user.firstName + " " + user.lastName)
            const userCache = authStore.getState().user;//Be sure that there is the cache.
            /* alert("Welcome " + userCache.firstName + " " + userCache.lastName) */
            notificationService.success("Welcome " + userCache.firstName + " " + userCache.lastName);
            navigate("/houses")
        })
        .catch(err=> notificationService.error(err));
        /* .catch(err=> alert(err.response.data)) */
    }

    return (
        <div className="Registration">
			
            <form onSubmit={handleSubmit(send)}>
                <TextField label="First name" {...register("firstName")}/><br/>
                <TextField label="Last Name"  {...register("lastName")}/><br/>
                <TextField label="User Name"  {...register("username")}/><br/>
                <TextField type="password" label="Password"   {...register("password")}/><br/>
                <Button variant="outlined" type = "submit">Sign in</Button>
            </form>

            <div>Do you have account already? <Link to={"/login"}>Login</Link></div>


        </div>
    );
}

export default Registration;
