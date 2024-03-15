import Link from "next/link";

export default function SeeAll() {

  return (
    <div className="flex justify-center">
      <Link href='/products'>
        <button
          // onClick={onClick}
          className="bg-black text-white px-4 py-2 mt-4"
        >
          See All
        </button>
      </Link>
    </div>
  );
}