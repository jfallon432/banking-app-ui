import React from 'react';
import { Alert } from "@material-ui/lab";
import {Button, FormControl, Input, InputLabel, makeStyles, Typography} from "@material-ui/core";
import {useState} from "react";
import {Redirect} from "react-router-dom";
import {User} from "../models/user";
import {save} from "../remote/register-service";

interface IRegisterProps {
    errorMessage: string,
}

const useStyles = makeStyles({
    registerContainer: {
        justifyContent: "right",
        marginLeft: "25rem",
        marginTop: "10rem",
        padding: 20,
        width: "25%"
    }
});

function RegisterComponent() {

    const classes = useStyles();

    // internal component state, need not be stored in global state

    const[user, setUser] = useState({email: "", firstName: "", lastName: "", password: "", username: "", dob: new Date('0000-00-00')} as User)

    const handleChange = (e: any) => {
        e.preventDefault();
        const {name, value} = e.currentTarget;
        setUser({
            ...user, [name]: value
        });
    }



    const register = async (e: any) => {
       e.preventDefault();
        console.log('registration invoked!');
        console.log(user)
        const registeredUser = await save(user);

    }

    return (

        <>
            {console.log('RegisterComponent rerendering!')}
            <div id="register-component" className={classes.registerContainer}>
                <Typography align="center" variant="h4">Register Today</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Input
                        onChange={handleChange}
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        name={"firstName"}
                    />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <Input
                        onChange={handleChange}
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        name={"lastName"}
                    />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        onChange={handleChange}
                        id="email"
                        type="text"
                        placeholder="Email"
                        name={"email"}
                    />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="date">Date of Birth</InputLabel>
                    <Input
                        onChange={handleChange}
                        id="dob"
                        type="text"
                        placeholder="Date of Birth"
                        name={"dob"}
                    />
                </FormControl>

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
                    onClick={register}
                    variant="contained"
                    color="primary"
                    size="medium">Register</Button>

            </div>
        </>
    );
}

export default RegisterComponent;