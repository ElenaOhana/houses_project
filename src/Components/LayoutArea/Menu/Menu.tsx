import "./Menu.css";
import { NavLink } from "react-router-dom";
import { UserModel } from "../../../Models/UserModel";
import { useEffect, useState } from "react";
import { authStore } from "../../../Redux/AuthState";

function Menu(): JSX.Element {

const [user, setUser] = useState<UserModel>();
/* const [token, setToken] = useState<string>();//My try to hide addHouse */

useEffect(() => {
    authStore.subscribe(()=>{
        setUser(authStore.getState().user);
        /* setToken(authStore.getState().token);//ךא מצליח */
        /* console.log(token); */
    })
}, [])

    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
			<NavLink to="/houses">Houses</NavLink>
            {user &&
                <NavLink to="/add">Add Home</NavLink>
            }


        {/*     <AppBar>
                <Toolbar>
                    <Typography>Typography</Typography>
                </Toolbar>
            </AppBar> */}

        </div>
    );
}

export default Menu;
