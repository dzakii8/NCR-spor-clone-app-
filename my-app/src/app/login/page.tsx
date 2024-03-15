import { cookies } from 'next/headers'
import Link from 'next/link';
import { redirect } from 'next/navigation';


export default function LoginPage() {

  const handleSubmit = async (formData: FormData) => {
    "use server"
    const input = {
      email: formData.get("email"),
      password: formData.get("password")
    }
    // console.log(input);
    
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/login', {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });
    let {accessToken} = await response.json()
    cookies().set('Authorization',"Bearer "+ accessToken)
    return redirect('/')
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          action={handleSubmit}
        >
          <div className="mb-4 text-center">
            <label
              className="block text-black text-m font-light mb-2"
            >
              EMAIL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center italic"
              id="email"
              name="email"
              type="text"
              placeholder="EMAIL"
            />
          </div>
          <div className="mb-6 text-center">
            <label
              className="block text-black text-m font-light mb-2"
            >
              PASSWORD
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-center italic"
              id="password"
              type="password"
              name="password"
              placeholder="PASSWORD"
            />
          </div>
          <div className="flex">
            <button
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              LOGIN
            </button>
          </div>
          <div className="mt-4 text-center text-gray-600">
            Don`t have an account?{" "}
            <Link href='/register'>
            <button className="text-blue-500">
              Register now!
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>

  )
}
