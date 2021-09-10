import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Input,
    InputLabel,
    makeStyles, Radio,
    RadioGroup,
    Typography
} from "@material-ui/core";
import React, {useState} from "react";

const useStyles = makeStyles({
    dashBoardContainer: {
        justifyContent: "left",
        marginLeft: "10rem",
        marginTop: "10rem",
        padding: 20,
        width: "25%"
    }
});

function CreateAccountComponent(){
    const [account, setAccount] = useState({
        accountType : "",
        nickname: "",
        balance: 200.00
    })
    const classes = useStyles();

    const handleChange = (e: any) => {
        e.preventDefault();
        const {name, value} = e.currentTarget;
        setAccount({
            ...account, [name]: value
        });
    }

    const handleClick = (e: any)=>{
        console.log("add account invoked");
        console.log(account);
    }


    return(
    <div style={{display: "flex"}}>
        <div id="create-account-component" className={classes.dashBoardContainer}>
            <Typography align="center" variant="h6">
                Open new Bank Account.
                </Typography>
            <br/>
            <br/>

            <FormControl component="fieldset">
                <FormLabel component="legend">Account Type</FormLabel>
                <RadioGroup aria-label="account-type" name="accountType" value={account.accountType} onChange={handleChange}>
                    <FormControlLabel value="checking" control={<Radio />} label="Checking" />
                    <FormControlLabel value="savings" control={<Radio />} label="Savings" />
                </RadioGroup>
            </FormControl>

            <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="lastName">Account Nicknames</InputLabel>
                <Input
                    onChange={handleChange}
                    id="lastName"
                    type="text"
                    placeholder="Account Nickname"
                    name={"lastName"}
                />
            </FormControl>

            <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="email">Starting Balance</InputLabel>
                <Input
                    onChange={handleChange}
                    id="email"
                    type="text"
                    placeholder="Email"
                    name={"email"}
                />
            </FormControl>

            <br/><br/>
            <Button
                type={"submit"}
                id="register-button"
                onClick={handleClick}
                variant="contained"
                style={{background: "#0871c1", color: "white"}}
                size="medium">Add account</Button>
        </div>

    </div>
    );
}

export default CreateAccountComponent;