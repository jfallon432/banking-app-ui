import { bankingClient } from './banking-client';
import {User} from "../models/user";
export async function save(user: User) {
    let response = await bankingClient.post('/register', user);
    return await response.data;
}