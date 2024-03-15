'use client'

import { logout } from "@/actions/addWishlist";

export default function LogoutButton() {
  // 'use server'
  // const isLogin = cookies().get('Authorization')
  const handleOnClick = async ()=>{
    await logout()
  }
  return (
        <button type="button" onClick={handleOnClick}>
          <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" /></svg>
          </div>
        </button>
  )
}