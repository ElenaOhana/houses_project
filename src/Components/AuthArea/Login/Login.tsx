import { CredentialsModel } from "../../../Models/CredentialsModel";
import {useForm} from "react-hook-form";
import authService from "../../../Services/AuthService";
import "./Login.css";
import { authStore } from "../../../Redux/AuthState";
import { useNavigate } from "react-router-dom";
import notificationService from "../../../Services/NotificationService";

function Login(): JSX.Element {

    const{register, handleSubmit} =useForm<CredentialsModel>();
    const navigate = useNavigate();

    function send(cred:CredentialsModel){
        authService.login(cred)
            .then(()=>{
            //successful login!
            notificationService.success("Hello " + authStore.getState().user.firstName);
            navigate("/houses")
        })
        /* .catch(err=> alert(err.response.data)) *///In order to show exception message from BACK-END.
        /* .catch(err=> alert(err.message)) *///axios shows message from library, but not from Back-end.
        .catch(err=> notificationService.error(err));
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit(send)}>
			{/* <div className="SignIn"><p>Sign in</p></div> */}
            <input placeholder="username" {...register("username")}/><br/>
            <input type="password" placeholder="password"  {...register("password")}/><br/>
            <button>Login</button> {/* In <button></button> submit אוטומטי */}
            </form>
        </div>
    );
}

export default Login;
