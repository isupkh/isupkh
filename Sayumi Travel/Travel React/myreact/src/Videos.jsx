import React from 'react'

function Videos() {
    return (
        <>
            <section className='bg-[#E5E7EB]'>
                <div className='container mx-auto w-[1400px] py-20 '>
                    <div className="text-center">
                        <h1 className="text-blue-700 font-semibold text-3xl mb-14">Our Videos</h1>
                    </div>
                    {/* link utube */}
                    <div className=" flex justify-between items-center ">
                        {/* pokhara iframe */}
                        <div>
                            <div className=" border  shadow-xl rounded-lg bg-white w-[400px] cursor-pointer">
                                <div className="relative w-full overflow-hidden bg-cover ">
                                    <iframe className="w-[400px] h-[250px]" src="https://www.youtube.com/embed/FhwqbF9zwUo" title="Traveling Pokhara, Nepal - 4K Cinematic Experience" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                </div>
                                <div className="p-5">
                                    <p className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-700 duration-300">Pokhara
                                    </p>
                                    <p className="text-gray-700 text-sm mb-5">Good Morning From Heaven</p>
                                    <p className="text-gray-600 text-sm ">Dec 29, 2023</p>
                                </div>
                            </div>
                        </div>
                        {/* travel iframe */}
                        <div>
                            <div className=" border  shadow-xl rounded-lg bg-white w-[400px] cursor-pointer">
                                <div className="  relative w-full overflow-hidden bg-cover ">
                                    <iframe className="w-[400px] h-[250px]" src="https://www.youtube.com/embed/PNYH5u9Yuc4" title="Travel Cinematic Short Video | Train Cinematic | #cinematic #edit #cinematography" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                </div>
                                <div className="p-5">
                                    <p className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-700 duration-300">Travel
                                    </p>
                                    <p className="text-gray-700 text-sm mb-5">Travel is Love</p>
                                    <p className="text-gray-600 text-sm ">Dec 29, 2023</p>
                                </div>
                            </div>
                        </div>
                        {/* mustang iframe */}
                        <div>
                            <div className=" border  shadow-xl rounded-lg bg-white w-[390px] cursor-pointer">

                                <div className="relative w-full overflow-hidden bg-cover ">
                                    <iframe className="w-[390px] h-[250px]" src="https://www.youtube.com/embed/CDx2fxb5ZF4" title="So You Want To See The World? (Travel Film)" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                </div>
                                <div className="p-5">
                                    <p className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-700 duration-300">Mustang
                                    </p>
                                    <p className="text-gray-700 text-sm mb-5">Hello Mustang</p>
                                    <p className="text-gray-600 text-sm ">Dec 29, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Videos
