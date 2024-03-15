'use client'

import Link from "next/link"
import LoginButton from "./buttonLogin"
import LogoutButton from "./buttonLogout"
import { usePathname } from "next/navigation"

export default function Navbar({ isLogin }: { isLogin: any }) {
  const pathname = usePathname()


  return (

    <div className="bg-black w-full">
      <div className="mx-auto w-3/4">
        <div className="navbar text-white flex justify-center items-center py-3">
          <div className="flex-1 text-center">
            <Link href='/'>
              <p className="text-xl">NR SPORT</p>
            </Link>
          </div>
          <div className="flex-none gap-5">
            <div className="form-control">
              {pathname == '/products' && 
              <form >
              <input type="text" placeholder="Search" className="input w-24 md:w-auto text-black" name="search" />
              <button type="button" ></button>
              </form>
              }
            </div>
            <div className="dropdown dropdown-end">
              <button tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <Link href='/wishlist'>
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  </div>
                </Link>
              </button>
              {isLogin ?
                <LogoutButton /> :
                <LoginButton />
              }
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow text-black">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}