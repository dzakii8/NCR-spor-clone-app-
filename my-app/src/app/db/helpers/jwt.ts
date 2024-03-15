import * as jose from 'jose' 
import jwt from "jsonwebtoken";

const key = process.env.NEXT_PUBLIC_JWT_SECRET as string


export const signToken = (payload: object) => jwt.sign(payload, key)


export const verifyToken = async (jwt:string)=>{
  const secret = new TextEncoder().encode(key)
  const payload = await jose.jwtVerify(jwt, secret)
  // console.log(payload);
  
  return payload.payload
}
