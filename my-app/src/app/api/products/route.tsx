export const dynamic = 'force-dynamic'

import { ProductModel } from "@/app/db/models/productModel";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
  try {
    // const fdasf = await request.json()
    // const router = useRouter()
    // console.log(router.query);
    const { searchParams } = new URL(request.url)

    const search :string | undefined= searchParams.get('search') as string

    const data = await ProductModel.getProducts(search)
    return NextResponse.json(data)
    
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error'
    }, {
      status: 500
    })
  }
}