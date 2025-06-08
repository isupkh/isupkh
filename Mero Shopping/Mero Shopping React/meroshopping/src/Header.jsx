import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Category from './Category'



function Header() {
    return (
        <>
            <header>
                {/* top part */}
                <div className="flex justify-end text-sm text-gray-600 gap-5 items-center border-b border-orange-500">
                    <div className="w-[1200px] container mx-auto">
                        <div className="flex justify-end text-sm text-gray-600 gap-4 items-center ">
                            <a href="#" className="hover:text-orange-500 border-l border-orange-500 pl-3 pt-1 pb-1">Sell on
                                MeroShopping</a>
                            <a href="#" className="hover:text-orange-500 border-l border-orange-500 pl-3 pt-1 pb-1">Track Order</a>
                            <a href="#" className="hover:text-orange-500 border-l border-orange-500 pl-3 pt-1 pb-1 ">Help</a>
                            <a href="#" className="hover:text-orange-500 border-l border-orange-500 pl-3 pt-1 pb-1">Login</a>
                            <a href="#" className="hover:text-orange-500 border-l border-orange-500 pl-3 pt-1 pb-1">Registration</a>
                            <a href="#" className="hover:text-orange-500 border-l border-orange-500 pl-3 pt-1 pb-1">Seller Login</a>
                        </div>
                    </div>
                </div>
                {/* mid part */}
                <div className="border-b border-orange-500 ">
                    <div className="w-[1200px] container mx-auto pt-3 pb-3 flex justify-between items-center">
                        <div>
                            <Link to={'/'}><img className="w-[]" src="https://meroshopping.com/front/assets/image/catalog/demo/logo/logo-old.png" alt="Mero Shopping Logo" /></Link>
                        </div>
                        <div className="flex items-center  ">
                            <input className="w-[600px] border border-gray-300 px-4 py-1 rounded rounded-r-none " type="text" placeholder="Search Products On Mero Shopping" />
                            <div className="relative">
                                <input className="border border-gray-300 px-8 py-1" placeholder="All Categories" />
                                <i className="bi bi-caret-down-fill text-[12px] text-gray-500 absolute right-2 top-2  " />
                            </div>
                            <button className="bg-orange-500 px-2 py-1 text-white rounded-r-lg border-l border-orange-500 "><i className="bi bi-search " /></button>
                        </div>
                        <div className="  items-center flex gap-4">
                            <i className="bi bi-cart-plus-fill text-orange-500 text-3xl" />
                            <div className>
                                <p className="bg-orange-500 text-white w-7 h-7 pl-2 flex items-center rounded-full">
                                    {JSON.parse(localStorage.getItem('cart'))?.length ?? 0}
                                </p>
                                <p className="text-gray-600">Cart</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bottom part */}
                <div className="p-4 ">
                    <div className="w-[1200px] container mx-auto">
                        <div className=" flex gap-9 text-gray-600 items-center justify-center">
                            <a href="#" className=" hover:text-orange-500">
                                <div className="gap-2 flex items-center"><img src="https://meroshopping.com/images/mIAj62uhjSkKjY8stxjuRyYYFwW2sHJLB6PeXZ6N.png" alt /> Global Collection</div>
                            </a>
                            <a href="#" className=" hover:text-orange-500">
                                <div className="gap-2 flex items-center"><img src="https://meroshopping.com/images/GZ1gcWnoibueuqKkhOLEd5oAdGSuEAAJ3SrU3iXE.png" alt /> Mero Brand</div>
                            </a>
                            <a href="#" className=" hover:text-orange-500">
                                <div className="gap-2 flex items-center"><img src="https://meroshopping.com/images/6ppbyoUGHgjYRr43600Q0xXSurHUvf88qvSoxUSk.png" alt /> 99 Store</div>
                            </a>
                            <a href="#" className=" hover:text-orange-500">
                                <div className="gap-2 flex items-center"><img src="https://meroshopping.com/images/aUJgOmPcmnbqrLG5o8VWt3dyh4aCfvG4HcI8bSsk.png" alt /> Deal of the Day</div>
                            </a>
                            <a href="#" className=" hover:text-orange-500">
                                <div className="gap-2 flex items-center"><img src="https://meroshopping.com/images/F8YWeTY1OcQxrux1b4fTQM9W3SAUGDxnhsorZJ7j.png" alt /> Kids Area</div>
                            </a>
                            <a href="#" className=" hover:text-orange-500">
                                <div className="gap-2 flex items-center"><img src="https://meroshopping.com/images/0fs9twYk9TELAdpFpQFuNRK7DXv59FffBtrFzY3Z.png" alt /> Send gift to Nepal</div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>


<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/category/:cid' element={<Category/>} />
</Routes>
















        </>
    )
}

export default Header
