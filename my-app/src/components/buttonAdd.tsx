"use client"

import { ObjectId } from "mongodb"
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function ButtonAdd({ productId }: { productId: ObjectId | undefined }) {

  const handleOnClick = async (productId: ObjectId | undefined) => {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/wishlist`, {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productId)
    })
    if (response.status != 200) {
      toast.error('already added to wishlist!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.success('added to wishlist!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

    }
  }

  return (
    <>
      <button onClick={() => handleOnClick(productId)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">
        Add to whislist
      </button>
      <ToastContainer />
    </>
  )
}