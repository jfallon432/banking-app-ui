import React from "react";
import store from "../store/store";
import {$CombinedState} from "redux";
import LoginComponent from "./LoginComponent";
import Registration from "./RegistrationComponent";
import {Button, FormControl, Input, InputLabel, makeStyles, Typography} from "@material-ui/core";
import CreateAccountComponent from "./CreateAccountForm";


function DashBoardComponent() {
    console.log(store.getState().login)


    return (
        <>
            <CreateAccountComponent/>

        </>
    );
}

export default DashBoardComponent;