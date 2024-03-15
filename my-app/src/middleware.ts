import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from './app/db/helpers/jwt'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/home', request.url))
  const token = cookies().get('Authorization')?.value.split(' ')[1]

  const requestHeader = new Headers(request.headers)

  if (token) {
    const decoded = await verifyToken(token as string)
    requestHeader.set('x-id-user', decoded._id as string)
    requestHeader.set('x-email-user', decoded.email as string)
    
    
    return NextResponse.next({
      request: {
        headers: requestHeader
      }
    })
  } 
  return NextResponse.redirect(new URL('/login', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/wishlist/:path*', '/api/wishlist/:path*'],
}