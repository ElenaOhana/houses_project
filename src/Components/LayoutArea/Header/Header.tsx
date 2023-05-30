import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { UserModel } from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import Login from "../../AuthArea/Login/Login";
import authService from "../../../Services/AuthService";

function Header(): JSX.Element {

const [user, setUser] =useState<UserModel>();

// useEffect it's like didMount - will cause to render only once,
// so that I need useState() to cause rendering while state has changed(not only subscribe to authStore)
    useEffect(()=>{ 
        setUser(authStore.getState().user);//setUser from useState()!! First state

        authStore.subscribe(()=> { // subscribe to changes of global state
            setUser(authStore.getState().user); //Like I override my local state with The global state.
        })
    }, [])

function logout(){
    authService.logout();
}

    return (
        <div className="Header">
            <h1>Houses Ure Us</h1>
            <>
                <div className="Menu">
                    { !user &&
                        <>
                            <Link to={"/register"}>Register</Link>

                            <Link to={"/login"}>Login</Link>
                        </>
                    }
                    
                    {user &&
                        <Link to="" onClick={logout}>| Logout |</Link>
                    }
                </div>
            </>
        </div>
    );
}

export default Header;
