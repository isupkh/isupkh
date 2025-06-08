import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Details from './Details'



function Header() {
    return (
        <>
            <header className="border-b-2 border-gray-300 pb-3 font-semibold mt-5">
                {/* upper head */}

                {/* left */}

                 <div className=" container w-[1200px] flex justify-between mx-auto items-center m-4 ">
                    <div className="flex gap-3 items-center">
                        <Link to={'/'}> <a href="index.html"> <h2 className="text-orange-600 font-bold text-[35px] ">Etsy</h2></a>
                        </Link>
                        <p className="text-[18px]  hover:bg-gray-300 rounded-full  px-2 py-2 transition duration-500 cursor-pointer">
                            <i className="bi bi-list pe-3 text-[18px]" />Category</p>
                    </div>

                {/* mid */}

                    <div className="flex relative  ">
                        <input className="rounded-full w-[755px] border p-3 border-black " type="text" placeholder="Search for anything..." />
                        <div className="flex items-center absolute mt-1 right-2 bg-[#F1641E]  w-10 h-10  hover:bg-orange-200 rounded-full transition duration-400 cursor-pointer">
                            <i className="bi bi-search p-3  text-white font-bold " />
                        </div>
                    </div>

                {/* left */}

                    <div className="flex items-center text-center gap-1">
                        <div className>
                            <p className="text-[18px]  hover:bg-gray-300 rounded-full  px-3 py-2 transition duration-500 cursor-pointer">
                                Sign in</p>
                        </div>
                        <div className="flex gap-2  ">
                            <i className="bi bi-heart mt-2 text-[20px] hover:bg-blue-200 rounded-full  w-10 h-10 transition  duration-500 cursor-pointer" />
                            <i className="bi bi-gift mt-2 text-[20px] hover:bg-blue-200 rounded-full  w-10 h-10 transition duration-500 cursor-pointer" />
                            <i className="bi bi-cart mt-2 text-[20px] hover:bg-blue-200 rounded-full  w-10 h-10 transition duration-500 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* header below */}
                <div className=" container w-[1200px] flex mx-auto  justify-center   ">
                    <ul className="flex gap-1 text-[17px]  mr-9 ">
                        <li className="hover:bg-gray-300 rounded-full  px-3 py-2 transition duration-500 cursor-pointer "><i className="bi bi-gift" /> Gifts</li>
                        <li className="hover:bg-gray-300 rounded-full  px-3 py-2 transition duration-500 cursor-pointer">
                            Personalized and Custom Clothing</li>
                        <li className="hover:bg-gray-300 rounded-full  px-3 py-2 transition duration-500 cursor-pointer">Home
                            Favorites</li>
                        <li className="hover:bg-gray-300 rounded-full  px-3 py-2 transition duration-500 cursor-pointer">Fashion
                            Finds</li>
                        <li className="hover:bg-gray-300 rounded-full  px-3 py-2 transition duration-500 cursor-pointer">Registry
                        </li>
                    </ul>
                </div>
            </header>


        <Routes>
        <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/>
        </Routes>
        </>
    )
}
export default Header
