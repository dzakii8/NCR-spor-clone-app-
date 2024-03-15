import { UserModel } from "@/app/db/models/userModel";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request:Request) {
    try {
      const body = await request.json()
      
      const checkUserEmail = await UserModel.checkUserEmail(body.email)
      const checkUserUsername = await UserModel.checkUserUsername(body.username)
      // console.log(checkUserEmail);
      
      if (checkUserEmail) {
        return NextResponse.json({
          message: 'Email already used'
        },{
          status: 404
        }
        )
      }
      if (checkUserUsername) {
        return NextResponse.json({
          message: 'Username already used'
        }, {
          status: 404
        }
        )
      }
  
      const result = await UserModel.addUser(body)
    
      return NextResponse.json({data: result})
      
      
    } catch (error) {
      if (error instanceof ZodError) {
        const errPath = error.issues[0].path[0]
        const errMessage = error.issues[0].message
      } else {
        return NextResponse.json({
          message: 'Internal server error'
        },{
          status : 500
        })
      }
    }
}