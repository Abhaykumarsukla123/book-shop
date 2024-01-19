import {Link} from 'react-router-dom';
export default function Error() {
  return (
    <>
   <div className="flex h-screen flex-col bg-white">
  <img
    src="https://wallpapercave.com/wp/wp2303643.jpg"
    alt=""
    className="h-64  bg-cover"
  />

  <div className="flex flex-1 items-center justify-center">
    <div className="mx-auto max-w-xl px-4 py-8 text-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        We can't find that page.
      </h1>

      <p className="mt-4 text-gray-500">
        Try searching again, or return home to start from the beginning.
      </p>

      <Link to="/Home"
        
        className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </Link>
    </div>
  </div>
</div>
    </>
  )
}
