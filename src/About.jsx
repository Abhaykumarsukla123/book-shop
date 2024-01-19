

export default function About() {
  return (
    <>
    

    <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <span className="text-xs font-semibold text-blue-400 uppercase">
                        Who we are</span>
                    <h2 className="mt-2 mb-6 text-2xl font-bold dark:text-gray-300">
                        We are the large business expert in Europe and Asia</h2>
                    <p className="mb-10 text-gray-600 dark:text-gray-400 ">
                        Lorem ipsum dolor sit amet, consectetur domino act Lorem ipsum dolor sit amet,
                        consectetur domino act Lorem ipsum dolor sit amet, consectetur domino act</p>
                    <a href="#"
                        className="px-4 py-3 text-gray-100 uppercase transition-all transform bg-blue-400 rounded hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-50 dark:text-gray-100 hover:text-gray-100">
                        About Us
                    </a>
                </div>
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div className="relative">
                        <img src="https://i.postimg.cc/kGjX7T1M/pexels-andrea-piacquadio-3756679.jpg" alt="aboutimage"
                            className="relative z-10 object-cover w-full h-full rounded"/>
                        <div
                            className="absolute bottom-0 right-0 z-10 p-4 bg-white shadow sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                            <p className="text-sm font-semibold">
                                Providing business solutions from 10 years
                            </p>
                        </div>
                        <div className="absolute hidden w-full h-full bg-blue-400 rounded -bottom-6 left-6 lg:block">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
