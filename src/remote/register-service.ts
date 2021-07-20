import { bankingClient } from './banking-client';
export async function register(username: string, password: string) {
    let response = await bankingClient.post('/register', {username, password});
    return await response.data;
}