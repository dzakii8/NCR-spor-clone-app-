import { ProductModel } from "@/app/db/models/productModel";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  try {
    console.log(context?.params?.slug);
    
    const data = await ProductModel.getProductSlug(context?.params?.slug as string)
    // console.log(data,4254235);
    
    return NextResponse.json(data)
    
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error'
    }, {
      status: 500
    })
  }
}