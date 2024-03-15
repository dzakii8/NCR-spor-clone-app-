"use client"

import { ObjectId } from "mongodb"

export default function ButtonDelete({ _id, fetchData }: { _id:ObjectId|undefined, fetchData:any}) {

  const handleOnClick = async (_id : ObjectId|undefined) => {
    
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/wishlist`,{
      method: 'DELETE',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_id)
    })
    fetchData()
  }

  return (
    <button onClick={() => handleOnClick(_id)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-2">
      Delete from whislist
    </button>
  )
}