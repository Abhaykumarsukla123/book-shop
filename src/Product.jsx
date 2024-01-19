import ProductArray from './ProductArray';
export default function Product({addtoCart}) {
  return (
    <>
     <div className="mx-auto grid w-full max-w-7xl items-center  space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
     {ProductArray.map((val,index)=>
{
return(
<>
  <div className="rounded-md border shadow-9xl " key={index}>
  
    <img
      src={val.imgsrc}
      alt="Laptop"
      className="aspect-[16/9] w-full rounded-sm md:aspect-auto md:h-[300px] max-h-100"
    />
    <div className="p-0">
      <h1 className="inline-flex items-center text-lg font-semibold"> 
{val.title}
      </h1><br/>
      <h3 className="inline-flex items-center text-sm font-semibold"> 
    {val.bname}
      </h3><br/>
      <p  className="inline-flex items-center text-lg font-semibold">{val.rs}</p>
      <button 
        type="button"
        className="mt-0 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Shop Now
      </button>
      <button onClick={()=>addtoCart(val)}
        type="button"
        className="mt-2 w-full rounded-sm bg-red-800 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
 

      

</>
)})}
 </div>
      
    </>
  )
}
