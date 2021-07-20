import React from 'react';
import { Alert } from "@material-ui/lab";
import {Button, FormControl, Input, InputLabel, makeStyles, Typography} from "@material-ui/core";
import {useState} from "react";
import {Redirect} from "react-router-dom";
import {User} from "../models/user";

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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    let updateUsername = (e: any) => {
        setUsername(e.currentTarget.value);
    }
    let updatePassword = (e: any) => {
        setPassword(e.currentTarget.value);
    }
    let updateEmail = (e: any) => {
        setEmail(e.currentTarget.value);
    }
    let updateAge = (e: any) => {
        setAge(e.currentTarget.value);
    }
    let updateFirstName = (e: any) => {
        setFirstName(e.currentTarget.value);
    }
    let updateLastName = (e: any) => {
        setLastName(e.currentTarget.value);
    }



    let register = async () => {
        console.log('registration invoked!');

    }

    return (

        <>
            {console.log('RegisterComponent rerendering!')}
            <div id="register-component" className={classes.registerContainer}>
                <Typography align="center" variant="h4">Register Today</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Input
                        onChange={updateFirstName}
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                    />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <Input
                        onChange={updateLastName}
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                    />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="email">Last Name</InputLabel>
                    <Input
                        onChange={updateEmail}
                        id="email"
                        type="text"
                        placeholder="Email"
                    />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        onChange={updatePassword}
                        id="password"
                        type="password"
                        placeholder="Password"
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