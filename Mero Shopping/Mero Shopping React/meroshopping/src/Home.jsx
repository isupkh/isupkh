import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    let [categories, setCategories]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
            .then((a) => a.json())
            .then((c) => setCategories(c))
    },[])

    return (
        <>
            <section className="bg-[#F2F2F2] pt-10 mb-10 ">
                <div className="w-[1400px] mx-auto container flex justify-between">
                    {/* All left box */}
                    {/* 1st box */}
                    <div className=" w-[28%]">

                        <div className=" ">
                            <div className="text-gray-700 mb-10 bg-white text-[14px] font-semibold  p-4 shadow-xl rounded">
                                <h2 className="ml-5 mb-5 font-bold ">ALL CATEGORIES</h2>
                                {categories.map((a)=>(
                                <ul className="ml-8">                                
                                    <li className="mb-3">                                    
                                        <div className="flex justify-between"><a href="#" className="hover:text-orange-600 hover:bg-slate-300">
                                           <Link to={`/category/${a.slug}`}> <div className="gap-4 flex items-center"><img src="https://meroshopping.com/images/282BwCwYVuSdWTV7RrVEFgT7dJt3Qd1Cyfxk91pT.png" alt />
                                                {a.name}</div> </Link>
                                        </a>
                                            <div><i className="bi bi-caret-right-fill text-[9px] text-gray-500" /></div>
                                           
                                        </div>                                   
                                        </li>                           
                                </ul>
                                ))}
                            </div>
                        </div>




                        {/* 2nd box */}
                        <div className>
                            <div className="text-gray-600 bg-white    shadow-xl rounded">
                                <div className="bg-orange-600 flex justify-center items-center p-2 mb-8 ">
                                    <p className="text-[white]">Popular Items</p>
                                </div>
                                <div className=" px-8 py-4 mb-10  text-[14px] ">
                                    <div className="flex justify-between  mb-4  gap-8 p-2 hover:border border-gray-00  rounded hover:shadow-sm  cursor-pointer">
                                        <div>
                                            <img className="w-[200px] rounded " src="https://meroshopping.com/images/A5egvRa8bYyP8gXzHHbraoRPUvMN4W1bTILhrK8O.jpg" alt />
                                        </div>
                                        <div className>
                                            <p className=" hover:text-orange-600 transition duration-500 cursor-pointer">Mens Casual
                                                Military Leggings Outdoor Lightweight Work Pants Cargo Pants Multi Pockets </p>
                                            <p className="text-orange-600 font-bold mt-1">Rs. 1999</p>
                                        </div>
                                    </div>
                                    <div className="flex  mb-4 items-center    gap-8 p-2 hover:border border-gray-00 rounded hover:shadow-sm   duration-500 cursor-pointer">
                                        <div>
                                            <img className="w-[70px] rounded " src="https://meroshopping.com/images/EUKBxyQ5V23CGQkkJr5Q8jFiKtVpCRJ6rF8jGnSv.jpg" alt />
                                        </div>
                                        <div className>
                                            <p className=" hover:text-orange-600 transition duration-500 cursor-pointer pt-3">8.5
                                                Inch
                                                LCD Writing Tablet</p>
                                            <p className="text-orange-600 font-bold mt-1">Rs. 649</p>
                                        </div>
                                    </div>
                                    <div className="flex  mb-4 items-center    gap-5 p-2 hover:border border-gray-00 rounded hover:shadow-sm   duration-500 cursor-pointer">
                                        <div>
                                            <img className="w-[147px] rounded pb " src="https://meroshopping.com/images/BHaLuHXHzGA3cPzTs9TmacecGnWn0byTfWulBIvY.jpg" alt />
                                        </div>
                                        <div className>
                                            <p className=" hover:text-orange-600 transition duration-500 cursor-pointer pt-3">Cotton
                                                Solid Men Hooded Neck with Mask Full Sleeves Hoodie</p>
                                            <p className="text-orange-600 font-bold mt-1">Rs. 1299</p>
                                        </div>
                                    </div>
                                    <div className="flex  mb-4 items-center    gap-5 p-2 hover:border border-gray-00 rounded hover:shadow-sm   duration-500 cursor-pointer">
                                        <div>
                                            <img className="w-[120px] rounded pb " src="https://meroshopping.com/images/J40KaoPs3xUrCOiYMllsPQj2hOEjz5bEdKrHBGEV.jpg" alt />
                                        </div>
                                        <div className>
                                            <p className=" hover:text-orange-600 transition duration-500 cursor-pointer pt-3">
                                                GUANJING
                                                Anti Ageing Snail Facial Serum (2Pcs)</p>
                                            <p className="text-orange-600 font-bold mt-1">Rs. 999</p>
                                        </div>
                                    </div>
                                    <div className="flex  mb-4 items-center   gap-14 p-2 hover:border border-gray-00 rounded hover:shadow-sm   duration-500 cursor-pointer">
                                        <div>
                                            <img className="w-[131px] rounded pb " src="https://meroshopping.com/images/1PSqxsZtSwcMrsd58x0o4EMiUZq11umlCd8zbVug.jpg" alt />
                                        </div>
                                        <div className>
                                            <p className=" hover:text-orange-600 transition duration-500 cursor-pointer pt-3"> Mens
                                                2
                                                Pieces Loose Casual Suits Long Sleeve Button Down Shirt Jacket Jogging Pants Set
                                            </p>
                                            <p className="text-orange-600 font-bold mt-1">Rs. 1499</p>
                                        </div>
                                    </div>
                                    <div className="flex  mb-4 items-center    gap-9 p-2 hover:border border-gray-00 rounded hover:shadow-sm   duration-500 cursor-pointer">
                                        <div>
                                            <img className="w-[69px] rounded pb " src="https://meroshopping.com/images/WDZn1p7mDUGLWFk9r7FnGr4cICRhbeCKkh80fqih.webp" alt />
                                        </div>
                                        <div className>
                                            <p className=" hover:text-orange-600 transition duration-500 cursor-pointer pt-3">4K
                                                Portable Mini Projector</p>
                                            <p className="text-orange-600 font-bold mt-1">Rs. 0</p>
                                        </div>
                                    </div>
                                    <div className="flex  mb-4 items-center    gap-7 p-2 hover:border border-gray-00 rounded hover:shadow-sm   duration-500 cursor-pointer">
                                        <div>
                                            <img className="w-[120px] rounded  " src="https://meroshopping.com/images/J40KaoPs3xUrCOiYMllsPQj2hOEjz5bEdKrHBGEV.jpg" alt />
                                        </div>
                                        <div className>
                                            <p className=" hover:text-orange-600 transition duration-500 cursor-pointer pt-3">
                                                GUANJING
                                                Anti Ageing Snail Facial Serum (2Pcs)</p>
                                            <p className="text-orange-600 font-bold mt-1">Rs. 999</p>
                                        </div>
                                    </div>
                                    <div className="flex   items-center    gap-8 p-2 hover:border border-gray-00 rounded hover:shadow-sm   duration-500 cursor-pointer">
                                        <div>
                                            <img className="w-[76px] rounded pt-1  " src="https://meroshopping.com/images/tJ5z3iZoqhKOjOAht4CbSTEdNQqpAwssndhG5JrV.jpg" alt />
                                        </div>
                                        <div className>
                                            <p className=" hover:text-orange-600 transition duration-500 cursor-pointer pt-3">
                                                Handheld
                                                Fan Mini Portable Fan</p>
                                            <p className="text-orange-600 font-bold mt-1">Rs. 799</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3rd box */}
                        <div className>
                            <div className="text-gray-600 bg-white   shadow-xl rounded">
                                <div className="bg-orange-600 flex justify-center items-center p-2 mb-4 ">
                                    <p className="text-[white]">Weekly Popular Items</p>
                                </div>
                                <div className="px-8 pb-8  text-[14px] cursor-pointer">
                                    <div className=" mb-2   hover:border-gray-200  rounded hover:shadow-xl px-4 py-3  cursor-pointer">
                                        <div className="p-3 ">
                                            <img className=" " src="https://meroshopping.com/images/3TjE0voOUjbjYk1sJA0TpDv6SNfRhLcCp7BLlUoM.jpg" alt />
                                            <p className=" cursor-pointer">Nano Magic Tape</p>
                                            <div className="relative flex justify-between  ">
                                                <p className="text-orange-600 font-bold mt-2 ">Rs. 499</p>
                                                <button className="p-3  bg-slate-200"><i className="bi bi-heart-fill text-orange-500 absolute  right-1 top-1 " /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" mb-2   hover:border-gray-200  rounded hover:shadow-xl px-4 py-3  cursor-pointer">
                                        <div className="p-3 ">
                                            <img className="w-[180px]" src="https://meroshopping.com/images/CVIMP8TB4B53NJEOCceTuULpdrp5beMK6aIPALev.jpg" alt />
                                            <p className=" cursor-pointer mt-8">Dr Rashel 5 Second H...</p>
                                            <div className="relative flex justify-between ">
                                                <p className="text-orange-600 font-bold mt-2 ">Rs. 0</p>
                                                <button className="p-3  bg-slate-200"><i className="bi bi-heart-fill text-orange-500 absolute  right-1 top-1 " /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" hover:border-gray-200  rounded hover:shadow-xl px-4 py-3  cursor-pointer">
                                        <div className="p-3 ">
                                            <img className="w-[180px]" src="https://meroshopping.com/images/Q2oieNdYQ5MilZqzJgWo3kfNlg87kXcy6lCtKlaP.jpg" alt />
                                            <p className=" cursor-pointer mt-8">Comfortable 6 Pocket...</p>
                                            <div className="relative flex justify-between  ">
                                                <p className="text-orange-600 font-bold mt-2 ">Rs. 0</p>
                                                <button className="p-3  bg-slate-200"><i className="bi bi-heart-fill text-orange-600 absolute  right-1 top-1 " /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" hover:border-gray-200  rounded hover:shadow-xl px-4 py-3  cursor-pointer">
                                        <div className="p-3 mt ">
                                            <img className="w-[180px]" src="https://meroshopping.com/images/Ar07n8a0lGIjX1nmmSwCGzJqHqkQ4miTR5gK2gt7.jpg" alt />
                                            <p className=" cursor-pointer ">Samsung 32" HD TV UA...</p>
                                            <div className="relative flex justify-between  ">
                                                <p className="text-orange-600 font-bold mt-2 ">Rs. -5001</p>
                                                <button className="p-3  bg-slate-200"><i className="bi bi-heart-fill text-orange-500 absolute  right-1 top-1 " /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="  mt-2  hover:border-gray-200  rounded hover:shadow-xl px-4 py-3  cursor-pointer">
                                        <div className="p-3 ">
                                            <img className="w-[180px]" src="https://meroshopping.com/images/iMb055brjK3b3giQEoH2DHT8PBGY84JpPKN2Y3fM.png" alt />
                                            <p className=" cursor-pointer mt-8">Lord Buddha Smoke B...</p>
                                            <div className="relative flex justify-between  ">
                                                <p className="text-orange-600 font-bold mt-2 ">Rs. 799</p>
                                                <button className="p-3  bg-slate-200"><i className="bi bi-heart-fill text-orange-500 absolute  right-1 top-1 " /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" mb-4  hover:border-gray-200  rounded hover:shadow-xl px-4 py-3  cursor-pointer">
                                        <div className="p-3 ">
                                            <img className="w-[180px]" src="https://meroshopping.com/images/L9dXP8PpLmm2x5ynBhE0VZt9GtQkUb7JqG929YMf.jpg" alt />
                                            <p className=" cursor-pointer mt-8">Rechargeable Mosquit...</p>
                                            <div className="relative flex justify-between  ">
                                                <p className="text-orange-600 font-bold mt-2 ">Rs. 1099</p>
                                                <button className="p-3  bg-slate-200"><i className="bi bi-heart-fill text-orange-500 absolute  right-1 top-1 " /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4th box last  */}
                        <div className=" w-[1400px] flex items-center mt-8 ">
                            <div className="w-[28%]">
                                <div className="shadow-lg mt-4">
                                    <div className="bg-orange-600 text-white p-6 text-center rounded-t-lg  cursor-grab ">
                                        <p className="text-3xl font-bold ">“</p>
                                        <p className=" mb-10">
                                            I love dealing with meroshopping.com. Easy, painless, trouble-free. Description of
                                            the
                                            items clear and simple to understand. Pictures are great. Packaged nicely, very
                                            clean
                                            and neat. Coming very fast and very friendly staff. What else do you need? I'm
                                            giving
                                            all stars!
                                        </p>
                                    </div>
                                    <div className="relative flex flex-col items-center py-6 bg-gray-50">
                                        <img className="w-20 h-20 rounded-full absolute bottom-28 mb-1 " src="https://meroshopping.com/front/assets/image/catalog/demo/banners/home3/user-2.jpg" alt />
                                        <p className="mt-10 font-semibold text-gray-800">Saligram Aryal</p>
                                        <div className="flex mt-10 gap-2 ">
                                            <span className="h-1 w-6 bg-orange-600 rounded-full" />
                                            <span className="h-1 w-6 bg-gray-300 rounded-full" />
                                            <span className="h-1 w-6 bg-gray-300 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* All right part */}
                    <div className="w-[70%] ">
                        <div className>
                            <div className="relative">
                                <img src="https://meroshopping.com/images/ujh1YR4gou8JCoa6P2ECP1Zb9vHqj6EmM2QnTxAx.png" alt />
                                <div className="flex items-center justify-center gap-2 absolute left-96 bottom-4 ml-14">
                                    <i className="bi bi-circle text-sm " />
                                    <i className="bi bi-circle text-sm" />
                                    <i className="bi bi-circle text-sm text-orange-600" />
                                    <i className="bi bi-circle text-sm" />
                                    <i className="bi bi-circle text-sm" />
                                </div>
                            </div>
                            <div className="flex justify-between  gap-3 pr-36  mt-12 pl-3 text-gray-600 text-[13px] font-bold">
                                <div>
                                    <img className="rounded-full border border-white p-1 shadow-xl" src="https://meroshopping.com/images/TS4eGp37o2wgy7ENX2L7Yh3ocU5zDfAVbTKDejwa.png" alt />
                                    <p className="pl-10 mt-2">Women's Fashion</p>
                                </div>
                                <div>
                                    <img className="rounded-full shadow-xl border border-white p-1" src="https://meroshopping.com/images/DT4K1W232libuHy8woMS7u65aTC5TASMIxItMT9L.png" alt />
                                    <p className="pl-10 mt-2">Health and Beauty</p>
                                </div>
                                <div className=" ">
                                    <img className="rounded-full shadow-xl border border-white p-1" src="https://meroshopping.com/images/e2OjChaTYsSSgINw5mlh8XVkhMKQALjBHehgFehf.png" alt />
                                    <p className="ml-4 mt-3">Grocery, Household &amp; Pets</p>
                                </div>
                                <div>
                                    <img className="rounded-full shadow-xl border border-white p-1" src="https://meroshopping.com/images/mTL81WCVIdciwvZHSotOmVwrBpAZmFMdqTMVrExd.png" alt />
                                    <p className="ml-5 mt-3">Home, Furniture &amp; Patio</p>
                                </div>
                            </div>
                        </div>

                        {/* latest product */}

                        <div className="mt-10">
                            <div className="pb-1 border-b-2 border-b-orange-500">
                                <div className="flex items-center gap-3 text-gray-600 font-bold">
                                    <i className="bi bi-laptop text-xl " />
                                    <p className="text-[14px] "><a href="#" className=" hover:text-orange-600 duration-300">LATEST
                                        PRODUCTS</a></p>
                                </div>
                            </div>
                            <div className="flex justify-between text-gray-600  p-3 shadow-3xl rounded-md   mt-3 items-center  gap-2 flex-wrap border border-gray-200">
                                <div className=" hover:border-gray-300 bg-white hover:p-1 rounded hover:shadow-xl  cursor-pointer hover:border  mb-3">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[175px] h-[201px]" src="https://meroshopping.com/images/CCNznq7EFfoFNfCfzA4aj6MVM16cRNVNTjbyqY3q.png" alt />
                                        </div>
                                        <div>
                                            <p className="mt-4 l-2 text-sm hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Panchadhatu Bracelet ...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 999</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" hover:border-gray-300 bg-white hover:p-1 rounded hover:shadow-xl  cursor-pointer hover:border mb-3 ">
                                    <div className="mb-2 ">
                                        <img className="w-[175px] h-[201px]" src="https://meroshopping.com/images/WDZn1p7mDUGLWFk9r7FnGr4cICRhbeCKkh80fqih.webp" alt />
                                        <p className="hover:text-orange-600 transition duration-500 cursor-pointer mt-4 ml-2 ">
                                            4K Portable Mini Pro ...</p>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" hover:border-gray-300 bg-white hover:p-1 rounded hover:shadow-xl  cursor-pointer hover:border mb-3">
                                    <div className="mb-2 ">
                                        <img className="w-[175px] h-[201px]" src="https://meroshopping.com/images/eZps8ZaVRoR7WfYJA6i2rpStz18rHgOaktFpXg1h.jpg" alt />
                                        <p className="hover:text-orange-600 transition duration-500 cursor-pointer mt-4 ml-2 ">
                                            4K Portable Mini Pro ...</p>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" hover:border-gray-300 bg-white  rounded hover:shadow-xl  cursor-pointer hover:border mb-3 ">
                                    <div className="mb-2 ">
                                        <img className="w-[175px] h-[201px]" src="https://meroshopping.com/images/MfANZbsCDUF73ADIxV2GvkdIX4BOFctAA8bo3SPT.png" alt />
                                        <p className="hover:text-orange-600 transition duration-500 cursor-pointer mt-4 ml-2 ">
                                            4K Portable Mini Pro ...</p>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" hover:border-gray-300 bg-white hover:p-1 rounded hover:shadow-xl  cursor-pointer hover:border mb-3">
                                    <div className="mb-2 ">
                                        <img className="w-[175px] h-[201px]" src="https://meroshopping.com/images/7l4AgBbpP2LexKjjUk5f1UsezbFxKjLwkKwiglb5.jpg" alt />
                                        <p className="hover:text-orange-600 transition duration-500 cursor-pointer mt-4 ml-2 ">
                                            4K Portable Mini Pro ...</p>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" hover:border-gray-300 bg-white hover:p-1 rounded hover:shadow-xl  cursor-pointer hover:border mb-3">
                                    <div className="mb-2 ">
                                        <img className="w-[175px] h-[201px]" src="https://meroshopping.com/images/BHaLuHXHzGA3cPzTs9TmacecGnWn0byTfWulBIvY.jpg" alt />
                                        <p className="hover:text-orange-600 transition duration-500 cursor-pointer mt-4 ml-2 ">
                                            4K Portable Mini Pro ...</p>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" hover:border-gray-300 bg-white hover:p-1 rounded hover:shadow-xl  cursor-pointer hover:border mb-3">
                                    <div className="mb-2 ">
                                        <img className="w-[175px] h-[201px]" src="https://meroshopping.com/images/J40KaoPs3xUrCOiYMllsPQj2hOEjz5bEdKrHBGEV.jpg" alt />
                                        <p className="hover:text-orange-600 transition duration-500 cursor-pointer mt-4 ml-2 ">
                                            4K Portable Mini Pro ...</p>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" hover:border-gray-300 bg-white hover:p-1 rounded hover:shadow-xl  cursor-pointer hover:border mb-3 ">
                                    <div className="mb-2 ">
                                        <img className="w-[175px] h-[201px]" src="https://meroshopping.com/images/scCuX45ucDKCyDaJmiydYxZ8zZCXjbQm7hZtkKcX.jpg" alt />
                                        <p className="hover:text-orange-600 transition duration-500 cursor-pointer mt-4 ml-2 ">
                                            4K Portable Mini Pro ...</p>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" hover:border-gray-300 bg-white hover:p-1 rounded hover:shadow-xl  cursor-pointer hover:border mb-3">
                                    <div className="mb-2 ">
                                        <img className="w-[175px] h-[201px]" src="https://meroshopping.com/images/J40KaoPs3xUrCOiYMllsPQj2hOEjz5bEdKrHBGEV.jpg" alt />
                                        <p className="hover:text-orange-600 transition duration-500 cursor-pointer mt-4 ml-2 ">
                                            4K Portable Mini Pro ...</p>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" hover:border-gray-300 bg-white hover:p-1 rounded hover:shadow-xl  cursor-pointer hover:border mb-3 ">
                                    <div className="mb-2 ">
                                        <img className="w-[175px] h-[201px]" src="https://meroshopping.com/images/scCuX45ucDKCyDaJmiydYxZ8zZCXjbQm7hZtkKcX.jpg" alt />
                                        <p className="hover:text-orange-600 transition duration-500 cursor-pointer mt-4 ml-2 ">
                                            4K Portable Mini Pro ...</p>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* hot deal */}
                        
                        <div className="mt-10">
                            <div className="pb-1 ml-2 border-b-2 border-b-orange-500">
                                <div className="flex items-center gap-3 text-gray-600 font-bold">
                                    <i className="bi bi-fire" />
                                    <p className="text-[14px] "><a href="#" className=" hover:text-orange-600 duration-300">HOT DEAL</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between text-gray-600  p-2 shadow-3xl rounded-md   mt-3 items-center  flex-wrap ">
                                <div className=" bg-white mb-2 p-2 rounded hover:shadow-xl  cursor-pointer py-6">
                                    <div className=" ">
                                        <img className="w-[210px] h-[210px]" src="https://meroshopping.com/images/Lyj9kw3T6Of5EOnm1GwKXua8TVrIjEEc0JRE2fIL.jpg" alt />
                                    </div>
                                    <div>
                                        <p className="mt-6 ml-2 text hover:text-orange-600 transition duration-500 cursor-pointer">3
                                            in 1 Changeable Sunglas...</p>
                                    </div>
                                    <div className="relative flex justify-between  ">
                                        <p className="text-orange-600 font-bold mt-1 ml-2">Rs. 1799</p>
                                        <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                        </div>
                                    </div>
                                </div>
                                <div className=" bg-white mb-2 p-2 rounded hover:shadow-xl  cursor-pointer py-6">
                                    <div className=" ">
                                        <img className="w-[210px] h-[210px]" src="https://meroshopping.com/images/Wg5eT6yNwEbd3aaW25wL7a7kat0WN89BOC2RYIWn.jpg" alt />
                                    </div>
                                    <div>
                                        <p className="mt-6 ml-2 text hover:text-orange-600 transition duration-500 cursor-pointer">
                                            Rain Boot Cover 1 Pcs...</p>
                                    </div>
                                    <div className="relative flex justify-between  ">
                                        <p className="text-orange-600 font-bold mt-1 ml-2">Rs. 750</p>
                                        <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                        </div>
                                    </div>
                                </div>
                                <div className=" bg-white mb-2 p-2 rounded hover:shadow-xl  cursor-pointer py-6">
                                    <div className=" ">
                                        <img className="w-[210px] h-[210px]" src="https://meroshopping.com/images/y8F4byqSXhhVIRXmRj1Z42KyiN0qzFfkKQTdPNDC.jpg" alt />
                                    </div>
                                    <div>
                                        <p className="mt-6 ml-2 text hover:text-orange-600 transition duration-500 cursor-pointer">
                                            Salomon Men's Shorts 2Pcs...</p>
                                    </div>
                                    <div className="relative flex justify-between  ">
                                        <p className="text-orange-600 font-bold mt-1 ml-2">Rs. 1000</p>
                                        <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                        </div>
                                    </div>
                                </div>
                                <div className=" bg-white mb-2 p-2 rounded hover:shadow-xl  cursor-pointer py-6">
                                    <div className=" ">
                                        <img className="w-[210px] h-[210px]" src="https://meroshopping.com/images/1g4SlhheVKjOWQIdxe8uPHilaP75AnZi2g2afQJP.jpg" alt />
                                    </div>
                                    <div>
                                        <p className="mt-6 ml-2 text hover:text-orange-600 transition duration-500 cursor-pointer">
                                            Dr Rashel Anti-Ageing Sun...</p>
                                    </div>
                                    <div className="relative flex justify-between  ">
                                        <p className="text-orange-600 font-bold mt-1 ml-2">Rs. 0</p>
                                        <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* cake */}

                        <div className="mt-10">
                            <div className="pb-1 border-b-2 border-b-orange-500 flex justify-between">
                                <div className="flex items-center gap-3 text-gray-600 font-bold">
                                    <i className="bi bi-laptop text-xl" />
                                    <p className="text-[14px]"><a href="#" className=" hover:text-orange-600 duration-300">CAKE</a></p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-bold text-[14px]">VIEW MORE</p>
                                </div>
                            </div>
                            <div className="flex justify-between p-3 shadow-3xl rounded-md text-gray-600   mt-3 items-center  gap-2 flex-wrap border border-gray-300">
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[165.2px] h-[170px]" src="https://meroshopping.com/images/2v2sZl4Km1MwqIzgua9KZlEuFWv3gVMDIFsLDxNt.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="ml-2 mt-7 hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Mother's Day St...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 2100</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[165.2px] h-[170px]" src="https://meroshopping.com/images/f1DgDplC5ayURUrmx7Nki0H0wWaBzNWmS9i1YzK8.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="ml-2 mt-7 hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Mother's Day Re...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 2800</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-w-[165.2px] h-[170px]" src="https://meroshopping.com/images/bs5DY6DK0LcTrKOAcSCS0XGSsSHab9gBI7gr09X0.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="ml-2 mt-7 hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Mother's Day Va...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 2100</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[165.2px] h-[170px]" src="https://meroshopping.com/images/QwBAM0hMUgEtTlZiu3QfkNu0t0x0zqnWWEuJp8Ru.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="ml-2 mt-7 hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Mother's Day Ho...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 2700</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[165.2px] h-[170px]" src="https://meroshopping.com/images/2v2sZl4Km1MwqIzgua9KZlEuFWv3gVMDIFsLDxNt.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="ml-2 mt-7  hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Mother's Day St...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 2100</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="pb-1 border-b-2 border-b-orange-500 flex justify-between">
                                <div className="flex items-center gap-3 text-gray-600 font-bold">
                                    <i className="bi bi-laptop text-xl" />
                                    <p className="text-[16px]"><a href="#" className=" hover:text-orange-600 duration-300">Sports,
                                        Fitness &amp; Outdoors</a></p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-bold text-[14px]">VIEW MORE</p>
                                </div>
                            </div>
                            <div className="flex justify-between p-3 shadow-3xl rounded-md   mt-3 items-center text-gray-600  border border-gray-300">
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[161.2px] h-[170px]" src="https://meroshopping.com/images/YsZJOcVqmPo3y1wgwDfQCFvnGrqsdTKcsYNFZyM3.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="mt-7 ml-2  hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Fun Day Water B...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 1200</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[161.2px] h-[170px]" src="https://meroshopping.com/images/NU9s9V60iwksQnPwp0mU4gAMNgv50f36f9gYvJoX.png" alt />
                                        </div>
                                        <div>
                                            <p className="mt-7 ml-2  hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Jin Jingbang Wa...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 1200</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[161.2px] h-[170px]" src="https://meroshopping.com/images/dH2ACNbRyWz0DMQS0RZ9EK2NLP7rkzgm3wWZbrO6.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="mt-7 ml-2  hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Ox Baby Water B...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 1200</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[161.2px] h-[170px]" src="https://meroshopping.com/images/n928iEjg66gProJ6OoJTsyERj5KaFLU1XAr9IPwO.png" alt />
                                        </div>
                                        <div>
                                            <p className="mt-7 ml-2  hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Stainless Steel...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 1200</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[161.2px] h-[170px]" src="https://meroshopping.com/images/8JKjGaOYWSRdZJMCokwr4H1bbp5pmkYmk6JDoO7s.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="mt-7 ml-2  hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Baby Water Bott...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 1200</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="pb-1 border-b-2 border-b-orange-500 flex justify-between">
                                <div className="flex items-center gap-3 text-gray-600 font-bold">
                                    <i className="bi bi-laptop text-xl" />
                                    <p className="text-[16px]"><a href="#" className=" hover:text-orange-600 duration-300">Baby &amp;
                                        Toys</a></p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-bold text-[14px]">VIEW MORE</p>
                                </div>
                            </div>
                            <div className="flex justify-between p-3 shadow-3xl rounded-md text-gray-600   mt-3 items-center  gap-2 flex-wrap border border-gray-300">
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[170px] h-[188px]" src="https://meroshopping.com/images/KfVWpXSYuFFFW9PrDV741x0cFmw2ZPe26cVMX0tO.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="ml-2 mt-7   hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Anti Fall Baby......</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[170px] h-[188px]" src="https://meroshopping.com/images/OFSyudlvaHS8xlm3GHUYeHYkmqwi9AP2QrGlrMyc.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="ml-2 mt-7  hover:text-orange-600 transition duration-500 cursor-pointer">
                                                WHEATIFY Sipper......</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[170px] h-[188px]" src="https://meroshopping.com/images/w74ACP1JMHbNU0Xvmhfng2kJowlR5cHbQ4ZQWCEZ.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="ml-2 mt-7  hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Mini Portable D...</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[170px] h-[188px]" src="https://meroshopping.com/images/msyS881Ej3DdaevwfdJU4eFyKam8v5Hkx4Od2Ney.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="ml-2 mt-7  hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Anti Fall Baby......</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                    <div className=" mb-2">
                                        <div className=" ">
                                            <img className="w-[160px] h-[188px]" src="https://meroshopping.com/images/Ev3HsFnnypDhUZ4gWpEC5L5XTh6SaLA4xpX6jvGI.jpg" alt />
                                        </div>
                                        <div>
                                            <p className="ml-2 mt-7  hover:text-orange-600 transition duration-500 cursor-pointer">
                                                Baby Stroller O......</p>
                                        </div>
                                        <div className="relative flex justify-between  ">
                                            <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                            <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* below gray content */}
                <div className="w-[1400px] mx-auto container">
                    <div className="mt-16">
                        <div className="flex justify-center gap-7 items-center ">
                            <div className="border  rounded-lg shadow-xl pr-3 bg-white  cursor-pointer">
                                <img className="w-[450] h-[302]" src="https://meroshopping.com/images/74nkhcVwvNPXgbEVX2U6eQFG4jHfpkqhjWYULoIb.png" alt />
                            </div>
                            <div className="border  rounded-lg shadow-xl pr-3 bg-white cursor-pointer">
                                <img className="w-[450] h-[302]" src="https://meroshopping.com/images/4tbzt9dOBsrV3PFSlziw8mJMtb5gESb8IGtaa9T5.png" alt />
                            </div>
                            <div className="border  rounded-lg shadow-xl pr-3 bg-white cursor-pointer">
                                <img className="w-[450] h-[302]" src="https://meroshopping.com/images/4fIFZ31HnbVgp2g0qZNlO9ngIZUBcRa1PdYywNFT.png" alt />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="pb-1 border-b-2 border-b-orange-500 flex justify-between">
                            <div className="flex items-center gap-3 text-gray-600 font-bold">
                                <i className="bi bi-award text-xl" />
                                <p className="text-[16px]"><a href="#" className=" hover:text-orange-600 duration-300">FEATURE ITEMS</a>
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-bold text-[14px]">VIEW MORE</p>
                            </div>
                        </div>
                        <div className="flex justify-between p-2 shadow-lg rounded-md pb-3 border-t mt-4 items-center     border-gray-300">
                            <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                <div className=" mb-2">
                                    <div className=" ">
                                        <img className="w-[198px] h-[209px]" src="https://meroshopping.com/images/1g4SlhheVKjOWQIdxe8uPHilaP75AnZi2g2afQJP.jpg" alt />
                                    </div>
                                    <div>
                                        <p className="mt-7 ml-2  hover:text-orange-600 transition duration-500 cursor-pointer">
                                            Dr Rashel Anti-...</p>
                                    </div>
                                    <div className="relative flex justify-between  ">
                                        <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 0</p>
                                        <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                <div className=" mb-2">
                                    <div className=" ">
                                        <img className="w-[198px] h-[209px]" src="https://meroshopping.com/images/q9bNUhqwpzLAfhN7wAibcox9isKOatK2fRAb3fbN.jpg" alt />
                                    </div>
                                    <div>
                                        <p className="mt-7 ml-2  hover:text-orange-600 transition duration-500 cursor-pointer">
                                            Electric Cerami...</p>
                                    </div>
                                    <div className="relative flex justify-between  ">
                                        <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 1200</p>
                                        <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                <div className=" mb-2">
                                    <div className=" ">
                                        <img className="w-[198px] h-[209px]" src="https://meroshopping.com/images/h2eNySgbd1h3TFIK2tGLhSuuKyVO0JBedR78yilM.jpg" alt />
                                    </div>
                                    <div>
                                        <p className="mt-7 ml-2  hover:text-orange-600 transition duration-500 cursor-pointer">
                                            Himal Gyastric...</p>
                                    </div>
                                    <div className="relative flex justify-between  ">
                                        <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 999</p>
                                        <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                <div className=" mb-2">
                                    <div className=" ">
                                        <img className="w-[198px] h-[209px]" src="https://meroshopping.com/images/SaczUC9DyDH9jHyVQvr5Nmv8iSttSaHKwhgNOqTK.jpg" alt />
                                    </div>
                                    <div>
                                        <p className="mt-7 ml-2  hover:text-orange-600 transition duration-500 cursor-pointer">
                                            Vacuum Storage...</p>
                                    </div>
                                    <div className="relative flex justify-between  ">
                                        <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 1499</p>
                                        <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                <div className=" mb-2">
                                    <div className=" ">
                                        <img className="w-[198px] h-[209px]" src="https://meroshopping.com/images/Lyj9kw3T6Of5EOnm1GwKXua8TVrIjEEc0JRE2fIL.jpg" alt />
                                    </div>
                                    <div>
                                        <p className="mt-7 ml-2  hover:text-orange-600 transition duration-500 cursor-pointer">
                                            3 In 1 Changeable...</p>
                                    </div>
                                    <div className="relative flex justify-between  ">
                                        <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 1799</p>
                                        <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="  bg-white p-2  py-3 rounded hover:shadow-xl  cursor-pointer   ">
                                <div className=" mb-2">
                                    <div className=" ">
                                        <img className="w-[198px] h-[209px]" src="https://meroshopping.com/images/A5egvRa8bYyP8gXzHHbraoRPUvMN4W1bTILhrK8O.jpg" alt />
                                    </div>
                                    <div>
                                        <p className="mt-7 ml-2  hover:text-orange-600 transition duration-500 cursor-pointer">
                                            Mens Casual Mil...</p>
                                    </div>
                                    <div className="relative flex justify-between  ">
                                        <p className="text-orange-600 font-bold mt-2 ml-2">Rs. 1999</p>
                                        <div className="p-3 mr-2 mt-2  bg-slate-200 "><i className="bi bi-heart-fill text-orange-600 absolute  right-3 top-2 " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2 img */}
                    <div className="mt-10 ">
                        <div className="flex justify-center gap-8  items-center ">
                            <div className="mb-10">
                                <img className="w-[680px] h-[281px]" src="https://meroshopping.com/images/696oeQvVr59zdpHWNAw4NS6XlPH4Woyt41RPezSS.png" alt />
                            </div>
                            <div className="mb-10">
                                <img className="w-[680px] h-[281px]" src="https://meroshopping.com/images/AAdknAoutqk4QkZadjZgwrf3knB4v0e4epzYImCt.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home
