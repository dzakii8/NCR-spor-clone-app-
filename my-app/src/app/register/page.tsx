import Link from "next/link";

function RegisterPage() {

  const handleSubmit = async (formData: FormData) => {
    "use server"
    const input = {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password")
    }
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/register', {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });
    console.log(await response.json());
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action={handleSubmit}>
          <div className="mb-4 text-center">
            <label
              className="block text-black text-m font-light mb-2"
              htmlFor="name"
            >
              NAME
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center italic"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4 text-center">
            <label
              className="block text-black text-m font-light mb-2"
              htmlFor="username"
            >
              USERNAME
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center italic"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4 text-center">
            <label
              className="block text-black text-m font-light mb-2"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center italic"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6 text-center">
            <label
              className="block text-black text-m font-light mb-2"
              htmlFor="password"
            >
              PASSWORD
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-center italic"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="flex">
            <button
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              REGISTER
            </button>
          </div>
          <div className="mt-4 text-center text-gray-600">
              Already have an account? 
            <Link href='/login'>
              <button className="text-blue-500">Login now!</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
