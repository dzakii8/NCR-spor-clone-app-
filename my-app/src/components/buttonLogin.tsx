'use client'

import Link from "next/link";

export default function LoginButton() {
  // 'use server'
  // const isLogin = cookies().get('Authorization')
  return (
        <button type="button">
          <div className="indicator">
              <Link href='/login'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" /></svg>
              </Link>
          </div>
        </button>
  )
}