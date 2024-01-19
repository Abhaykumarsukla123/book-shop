
import { Link } from 'react-router-dom'
import Signout from './Signout'
import { FaUserTie } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";

export default function Nav({cart}) {
  return (
    <>
  
    <nav className="bg-orange-900 rounded-md max-h-16 position-fixed">
      
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:ml-6 sm:block">
          
          <div className="flex space-x-4">
          <div className="flex flex-shrink-0 items-center">
          <img className="max-h-12 w-auto rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYWA8DmYR43F1oqPtwoWYJdeFBIYtGq7vsw&usqp=CAU" alt="Book Store"/>
        </div>
            <div  className=" text-blue rounded-md  py-2 px-5 text-lg font-large mx-0 font-bold bg-orange-100" aria-current="page">Book Shop </div>
            <Link to="/Home" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md ml-44 px-4 py-2 my-2 text-sm font-medium">Home</Link>
            <Link to="/About" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm my-2 font-medium">About</Link>
            <Link to="/Featuredpro" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md  px-4 py-2 text-sm my-2 font-medium">Products</Link>
            <Link to="/Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm my-2 font-medium">Contact</Link>

            <Link to="/Slider" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm my-2 font-medium">Author</Link>
            <Link to="/Error" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 my-2 text-sm font-medium">Error</Link>


          </div>
        </div>
      </div>
      <div className='flex pr-10'>
        
      <Link to="/CartList">
      <BsFillCartPlusFill  className='h-7 w-7 text-white '/>
    
      </Link> 
      <div className='w-4 h-4 mb-2 pb-5 bg-red text-white  rounded-full'><p className='h-2'>{cart}</p></div>
      </div>
     
      <Signout/>
      <div>
      
           <Link to='/Login'>
           <FaUserTie className='h-16 w-8 mb-0 relative text-white' />
           
          </Link>
          </div>
        </div>
       
      </div>
     
</nav>
    </>
  )
}
