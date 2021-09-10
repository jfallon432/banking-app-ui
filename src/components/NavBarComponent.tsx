import React, {useState} from "react";
import {Link} from "react-router-dom";
import store from "../store/store";
function Nav() {
    const navStyle = {
        color: 'white'
    };

    const[isLogged, setIsLogged] = useState(store.getState().login.isLogged);

    store.subscribe(() => {
        setIsLogged(store.getState().login.isLogged)

    })

    return (
        <nav>
            <h3>Fallon Banking</h3>
            <ul className={"nav-links"}>
                <Link style={navStyle} to='/'>
                    <li>Create a new Character</li>
                </Link>

                <Link style={navStyle} to='/'>
                    <li>View Characters</li>
                </Link>

                {isLogged && (
                    <>
                    <Link style={navStyle} to='/'>
                        <li>Create Account</li>
                    </Link>

                    <Link style={navStyle} to='/'>
                    <li>View Accounts</li>
                    </Link>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Nav;