import { WishlistModel } from "@/app/db/models/wishlistModel";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {

    const productId = await request.json()

    const userId = request.headers.get('x-id-user') as string

    const result = await WishlistModel.addWishlist({
      productId,
      userId,
    } as any)
    if (!result) {
      return NextResponse.next({
        status:404
      })
    }
    return NextResponse.json({
      productId,
      userId
    })

  } catch (error) {
    if (error instanceof ZodError) {
      const errPath = error.issues[0].path[0]
      const errMessage = error.issues[0].message
    } else {
      return NextResponse.json({
        message: 'Internal server error'
      }, {
        status: 500
      })
    }
  }

}

export async function GET(request: Request) {
  try {
    const _id = request.headers.get('x-id-user') as string
    const data = await WishlistModel.getAllWishlist(_id)
    // console.log(data);
  
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error'
    }, {
      status: 500
    }) 
  }
}

export async function DELETE(request: Request) {

  try {
    const _id = new ObjectId(await request.json())
  
    const data = await WishlistModel.deleteWishlist(_id)
  
    return NextResponse.json(data)
    
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error'
    }, {
      status: 500
    })
  }

}