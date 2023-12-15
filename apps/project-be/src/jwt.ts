import {decode} from 'jsonwebtoken'
export const  decodeJwt = (token: string) => {
    const tokenBody = token.split(' ')[1];
    const payload = decode(tokenBody, {json:true});
    if (!payload) throw new Error('Invalid Token')
    return payload;
}