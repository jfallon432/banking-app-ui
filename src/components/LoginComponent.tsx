import React from 'react';
import { Alert } from "@material-ui/lab";
import {Button, FormControl, Input, InputLabel, makeStyles, Typography} from "@material-ui/core";
import {useState} from "react";
import {  useDispatch} from 'react-redux';
import {Redirect, useHistory} from "react-router-dom";
import {User} from "../models/user";
import {save} from "../remote/register-service";
import {LoginModel} from "../models/loginModel";
import {authenticate} from "../remote/login-service";
import store from "../store/store";

interface IRegisterProps {
    errorMessage: string,
}

const useStyles = makeStyles({
    loginContainer: {
        justifyContent: "left",
        marginLeft: "10rem",
        marginTop: "10rem",
        padding: 20,
        width: "25%"
    }
});

function LoginComponent() {
    const history = useHistory();
    const classes = useStyles();
    const[user, setUser] = useState({username:"", password:""} as LoginModel)
    const[token, setToken] = useState(store.getState().login.token)

    // const unsubscribe = store.subscribe(() => {
    //     setToken(store.getState().token)
    // })


    // internal component state, need not be stored in global state


    const handleChange = (e: any) => {
        e.preventDefault();
        const {name, value} = e.currentTarget;
        setUser({
            ...user, [name]: value
        });
    }



    const login = async (e: any) => {
        e.preventDefault();
        console.log('login invoked!');
        console.log(user)
        await authenticate(user).then(response => {
            console.log(store.getState().login);
            store.dispatch({type:'token', payload:response.headers.authorization});
            history.push("/dash");
        });


    }

    return (



        <>
            {console.log('LoginComponent rerendering!')}
            <div id="register-component" className={classes.loginContainer}>
                <Typography align="center" variant="h4">Log In!</Typography>



                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input
                        onChange={handleChange}
                        id="username"
                        type="text"
                        placeholder="Username"
                        name={"username"}
                    />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        onChange={handleChange}
                        id="password"
                        type="password"
                        placeholder="Password"
                        name={"password"}
                    />
                </FormControl>


                <br/><br/>
                <Button
                    id="register-button"
                    onClick={login}
                    variant="contained"
                    style={{background: "#0871c1", color: "white"}}
                    size="medium">Log In</Button>

            </div>
        </>
    );
}

export default LoginComponent;