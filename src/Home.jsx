import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect"
import Slider from "./Slider"
import Featuredpro from "./Featuredpro";
import Blog from "./Blog";
export default function Home() {
  return (
    <>
    
    <div className="relative w-full h-full bg-[url('/src/img/shome.jpg')]  bg-cover "> 
  
  <div className="relative isolate z-0  px-6 pt-14 lg:px-8">
    <div className="relative mx-auto max-w-2xl py-24">
      <div className="text-center">
      <div className='text-blue-500 uppercase tracking-wide font-bold italic  text-5xl' >
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("In This Website")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You")
                        .start();
                }}
            />
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-2">
        <Link to='/product' className="relative inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">Shop Now--</span></span> <span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link>
        </div>
      </div>
    </div>
  </div>
</div>
<Slider/>
<Featuredpro/>
<Blog/>
    </>
      
    
  )
}

