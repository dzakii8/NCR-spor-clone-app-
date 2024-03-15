import { ProductType } from "../app/types";
import Link from "next/link";
import ButtonAdd from "./buttonAdd";

export default async function CardHome() {

  const fetchData = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: 'no-store'
    })
    return await data.json()
}

  const data = (await fetchData()).slice(0,10)

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
      {data.map((product: ProductType, i: number) => {
        return (
          <div key={i} className="w-1/6 my-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Link href={`/products/${product.slug}`}>
              <img
                className="w-full"
                src={product.image && product.image[0]}
                alt="Sunset in the mountains"
                />
                </Link>
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6">
                {product?.tags?.map((tag: string, index: number) => (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
