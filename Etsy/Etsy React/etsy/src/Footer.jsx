import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                {/* footer 1 */}
                <section className="bg-[#CCEBFF] w-full  ">
                    <div className="container w-[1200px] mx-auto  text-[#222222] border text-center">
                        <div className=" ">
                            <h2 className="font-semibold mt-10 text-[18px]">Yes! Send me exclusive offers, unique gift ideas, and
                                personalized
                                tips for shopping and selling on Etsy.</h2>
                            <div className>
                                <form className="flex items-center justify-center mt-6 mb-10" action>
                                    <input className="border border-gray-400 w-[500px] py-3 ps-5 rounded-full" type="text" placeholder="Enter your email" />
                                    <button className="ps-96 absolute text-[18px] font-semibold  ">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  footr 2 */}
                <section className="bg-[#3B67D9]  ">
                    <div className="container w-[1200px] mx-auto text-white ">
                        <div className="flex  gap-5 justify-center pt-7 pb-7 font-semibold text-[18px] ">
                            <i className="bi bi-globe" />
                            <p className="border-dashed border-b-2 border-white">Etsy 100% renewable electricity</p>
                        </div>
                    </div>
                </section>
                {/* footer 3 */}
                <section className="bg-[#2638C0] w-full  text-white ">
                    <div className="container w-[1200px] mx-auto flex justify-between ">
                        {/* logo box */}
                        <div className="bg-[#122868]  justify-center items-center w-[40%] h-[300px] flex">
                            <div className=" w-64 items-center ">
                                <div className="ml-20 bg-[#F1641E] rounded-2xl w-16 h-16">
                                    <p className="text-white font-semibold text-[20px] text-center pt-3 ">Eysy</p>
                                </div>
                                {/* down */}
                                <div className="mt-5">
                                    <button className="text-white bg-[#2638C0] rounded-3xl py-3 px-10 font-semibold ">Download the
                                        Etsy App</button>
                                </div>
                            </div>
                        </div>
                        {/* footer nav */}
                        <div className="flex gap-14 ">
                            <div className="mb-7">
                                <h1 className="font-semibold mb-7 text-[18px] mt-9">Shop</h1>
                                <ul className>
                                    <li>Gift cards</li>
                                    <li className="mt-2">Etsy Registry</li>
                                    <li className="mt-2">Sitemap</li>
                                    <li className="mt-2">Etsy blog</li>
                                    <li className="mt-2">Etsy United Kingdom</li>
                                    <li className="mt-2">Etsy Germany</li>
                                    <li className="mt-2">Etsy Canada</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="font-semibold mb-8 text-[18px] mt-10">Sell</h1>
                                <ul className="mb-7">
                                    <li>Sell on Etsy</li>
                                    <li className="mt-2">Teams</li>
                                    <li className="mt-2">Sitemap</li>
                                    <li className="mt-2">Forums</li>
                                    <li className="mt-2">Affiliates &amp; Creators</li>
                                </ul>
                            </div>
                            <div className>
                                <h1 className="font-semibold mb-8 text-[18px] mt-10">About</h1>
                                <ul className="mb-7">
                                    <li>Etsy, Inc.</li>
                                    <li className="mt-2">Policies</li>
                                    <li className="mt-2">Investors</li>
                                    <li className="mt-2">Careers</li>
                                    <li className="mt-2">Press</li>
                                    <li className="mt-2">Impact</li>
                                    <li className="mt-2">Legal imprint</li>
                                </ul>
                            </div>
                            <div className>
                                <h1 className="font-semibold mb-8 text-[18px] mt-10">Help</h1>
                                <ul className="mb-7">
                                    <li>Help Center</li>
                                    <li className="mt-2">Privacy settings</li>
                                </ul>
                                <ul className="flex gap-5">
                                    <li><i className="bi bi-instagram" /></li>
                                    <li><i className="bi bi-facebook" /></li>
                                    <li><i className="bi bi-pinterest" /></li>
                                    <li><i className="bi bi-youtube" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* 4th footer */}
                <section className="bg-[#222222] text-white">
                    <div className="container w-[1200px] mx-auto text-[14px]">
                        <div className="flex justify-between items-center pt-3 pb-3">
                            <div>
                                <ul className="flex justify-between gap-3">
                                    <li><i className="bi bi-globe-asia-australia" /> Nepal</li>|
                                    <li>English(US)</li>|
                                    <li>$(USD)</li>
                                </ul>
                            </div>
                            <div className="flex justify-between gap-4 ">
                                <p>© 2025 Etsy, Inc.</p>
                                <ul className="underline flex gap-4">
                                    <li>Terms of Use</li>
                                    <li>Privacy </li>
                                    <li>Interest-based ads</li>
                                    <li>Local Shops</li>
                                    <li>Regions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>

        </>
    )
}

export default Footer
