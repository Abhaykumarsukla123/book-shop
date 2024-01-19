
// eslint-disable-next-line react/prop-types
export default function CartList({cart}) {
  return (
 <>
    
  
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
  <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Shopping Cart
    </h1>
    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
      <section
        aria-labelledby="cart-heading"
        className="rounded-lg bg-white lg:col-span-8"
      >
        <h2 id="cart-heading" className="sr-only">
          Items in your shopping cart
        </h2>
        <ul role="list" className="divide-y divide-gray-200">
         
        {

            cart.map((data,index)=>
            {
              return(

                <li className="flex py-6 sm:py-6 " key={index}>
              <div className="flex-shrink-0">
                <img
                  src={data.imgsrc}
                  alt="Nike Air Force 1 07 LV8"
                  className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                />
              </div>
              <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                 
                    <div className="flex justify-between">
                    <h3 className="text-lg font-bold">{data.bname}</h3>
                      <h3 className="text-sm">
                        <a href="#" className="font-semibold mt-12 text-red-700 ">
                     Remove
                        </a>
                      </h3>
                    </div>
                   
                    <div className="mt-1 flex items-end">
                      <p className="text-xs font-medium text-gray-500 line-through">
                        ₹1000
                      </p>
                      <p className="text-sm font-medium text-gray-900">₹{data.rs}</p>
                    <p className="text-sm font-medium text-green-500">5% Off</p>
                    
                    </div>
                    <div className="flex m-4">
                    <a className="border-neutral-950">-</a>
                    <input type="text" value="0"></input>
                    <button type="button">+</button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </li>
              )
            })
            
        }

        </ul>
      </section>
      <section
        aria-labelledby="summary-heading"
        className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
      >
        <h2
          id="summary-heading"
          className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
        >
          Price Details
        </h2>
        <div>
          <dl className=" space-y-1 px-2 py-4">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-800">Price (3 item)</dt>
              <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
            </div>
            <div className="flex items-center justify-between pt-4">
              <dt className="flex items-center text-sm text-gray-800">
                <span>Discount</span>
              </dt>
              <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
            </div>
            <div className="flex items-center justify-between py-4">
              <dt className="flex text-sm text-gray-800">
                <span>Delivery Charges</span>
              </dt>
              <dd className="text-sm font-medium text-green-700">Free</dd>
            </div>
            <div className="flex items-center justify-between border-y border-dashed py-4 ">
              <dt className="text-base font-medium text-gray-900">Total Amount</dt>
              <dd className="text-base font-medium text-gray-900">₹ 48,967</dd>
            </div>
          </dl>
          <div className="px-2 pb-4 font-medium text-green-700">
            You will save ₹ 3,431 on this order
          </div>
        </div>
      </section>
        </form>
        </div>
</div>

 </>
  )
}
