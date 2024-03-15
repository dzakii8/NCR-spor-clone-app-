"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import ButtonDelete from "./buttonDelete";
import { ObjectId } from "mongodb";
// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';

export default function CardWishList() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/wishlist', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: 'no-store',
    }) as any
    const prod = await response.json()
    
    setData(prod)
  }

  useEffect(() => {
    fetchData()
  }, [])


  // let loop: ProductType[] = Array(20).fill({
  //   _id: "659eabb58e934ab0d2bb0050",
  //   name: "Sepatu 7",
  //   slug: "sepatu-7",
  //   description: "Ini adalah sepatu yang keren",
  //   excerpt: "Sepatu trail",
  //   price: 59.99,
  //   tags: ["trail"],
  //   thumbnail: "https://www.ncrsport.com/img/storage/large/DH0623-200-1.jpg",
  //   image: ["https://www.ncrsport.com/img/storage/large/DH0623-200-2.jpg", "https://www.ncrsport.com/img/storage/large/DH0623-200-1.jpg"],
  //   createdAt: "2024-01-10T08:00:00.000Z",
  //   updatedAt: "2024-01-10T08:00:00.000Z"
  // });

  return (
    <div className="flex flex-wrap mx-auto gap-10 justify-center" style={{ maxWidth: '75%' }}>
      {data.map((product: any, i: number) => {
        return (
          <div key={i} className="w-1/6 my-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Link href={`/products/${product.product.slug}`}>
              <img
                className="w-full"
                  src={product.product.image && product.product.image[0]}
                alt="Sunset in the mountains"
                />
                </Link>
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2">{product.product.name}</div>
                <p className="text-gray-700 text-base">{product.product.description}</p>
              </div>
              <div className="px-6">
                {product?.tags?.map((tag: string, index: number) => (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="px-6 py-2">
                <p className="text-gray-700 text-base">Price: ${product.product.price}</p>
                <ButtonDelete _id={product._id as ObjectId} fetchData={fetchData}/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
