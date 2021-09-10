import { bankingClient } from './banking-client';
import {} from "../models/user";
import {LoginModel} from "../models/loginModel";
export async function authenticate(user: LoginModel) {
    let response = await bankingClient.post('/login', user);
    console.log("request")
    return await response;
}