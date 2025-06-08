import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

let content=[
{
    id:1,
    description: "Personalized Tiny Balloon Initial Name Necklace, Mini Name Necklace, Minimalist Necklace, Personalized Gift, Gift for her, Christmas Gift",
    price:"USD 11.58",
    img: "https://i.etsystatic.com/33188075/c/1653/1653/198/198/il/3ae1f9/6285000691/il_600x600.6285000691_hgzn.jpg",
    btn: "Add to Cart",
},

{
    id:2,
    description: "Personalized Tiny Balloon Initial Name Necklace, Mini Name Necklace, Minimalist Necklace, Personalized Gift, Gift for her, Christmas Gift",
    price:"USD 13.99",
    img: "https://i.etsystatic.com/35966576/c/2078/2078/425/0/il/635675/4033819161/il_600x600.4033819161_5o80.jpg",
    btn: "Add to Cart",
},

{
    id:3,
    description: "Personalized Tiny Balloon Initial Name Necklace, Mini Name Necklace, Minimalist Necklace, Personalized Gift, Gift for her, Christmas Gift",
    price:"USD 7.79",
    img: "https://i.etsystatic.com/24645705/r/il/e4b602/6626102983/il_600x600.6626102983_9z03.jpg",
    btn: "Add to Cart",
},


{
    id:4,
    description: "Personalized Tiny Balloon Initial Name Necklace, Mini Name Necklace, Minimalist Necklace, Personalized Gift, Gift for her, Christmas Gift",
    price:"USD 16.50",
    img: "https://i.etsystatic.com/22775504/r/il/d1a3cd/4783320921/il_600x600.4783320921_6so0.jpg",
    btn: "Add to Cart",
},

{
    id:5,
    description: "Personalized Tiny Balloon Initial Name Necklace, Mini Name Necklace, Minimalist Necklace, Personalized Gift, Gift for her, Christmas Gift",
    price:"USD 23.97",
    img: "https://i.etsystatic.com/19505509/r/il/47198d/6440304358/il_600x600.6440304358_675q.jpg",
    btn: "Add to Cart",

},]



    
    return (
        <>
                {/* 1 sectn */}
                <section>
                    <div className=" container w-[1200px] flex justify-between mx-auto gap-5 my-8">
                        {/* left img */}
                        <div className="bg-[#FFFBD8] rounded-3xl flex justify-between  w-[80%] hover:shadow-2xl">
                            {/* text side */}
                            <div className="ms-9  text-[#222222]  p-7 ">
                                <div className="text-center px-[1px] ">
                                    <h1 className="text-[38px] font-semibold mt-7 mb-4">Refresh <br />
                                        your closest !</h1>
                                    <p className="font-semibold text-[18px]">Outfit yourself with orginal style pieces</p>
                                    <button className="bg-[#222222] text-white p-3 rounded-3xl my-6 font-semibold ">Shop Now</button>
                                </div>
                            </div>
                            {/* img side */}
                            <div className="  rounded-e-3xl hover:shadow-2xl">
                                <img className="rounded-s-[130px] w-[400px] h-[350px] rounded-e-3xl " src="https://i.etsystatic.com/ij/0dca06/6623590294/ij_680x540.6623590294_grnov7s7.jpg?version=0" alt />
                            </div>
                        </div>
                        {/* right img */}
                        <div className="relative">
                            <div className="w-[340px] h-[180px]">
                                <img className=" rounded-3xl inset-shadow-indigo-900 " src="https://i.etsystatic.com/19483987/r/il/aaf515/2830473657/il_600x600.2830473657_d1an.jpg" alt />
                            </div>
                            <div className="absolute bottom-8 left-5  text-white ">
                                <p className="font-bold text-[26px] ">Bags &amp; Purses</p>
                                <p className="font-semibold text-[19px]">Shop Now</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 2 sectn recently view */}
                <section>
                    <div className="container w-[1200px]  mx-auto mt-9 ">
                        <h2 className="text-[#222222] font-semibold text-[25px] ">Recently Viewed</h2>
                        <div className="flex gap-8 mt-8 ">
                            <div className="relative  hover:shadow-xl">
                                <img className="rounded-3xl   " src="https://i.etsystatic.com/35518631/c/2232/2232/132/132/il/4c52b1/6575126061/il_340x270.6575126061_jhjf.jpg" alt />
                                <div className="absolute bottom-2   left-3  item center bg-white border border-gray-400 px-1 py-0 rounded-full shadow-sm ">
                                    <span className="font-semibold text-[14px] ">USD 11.91 </span>
                                </div>
                            </div>
                            <div className="relative rounded-3xl  hover:shadow-xl">
                                <img className="rounded-3xl " src="https://i.etsystatic.com/23794773/r/il/85a768/2368528438/il_340x270.2368528438_ltk5.jpg" alt />
                                <div className="absolute bottom-2 left-3  item center bg-white border border-gray-400 px-1 py-0 rounded-full shadow-sm ">
                                    <span className="font-semibold text-[14px] ">USD 11.91 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* 3rd sectn discover */}
                <section>
                    <div className="container w-[1200px]  mx-auto mt-14 text-[#222222]  ">
                        <h2 className=" font-semibold text-[29px] text-center">Discover gifts for every occasion</h2>
                        <div className="flex gap-6 mt-9 px-24">
                            <div className="hover:border border-gray-300  p-4 rounded-3xl hover:shadow-xl">
                                <img className="rounded-full" src="https://i.etsystatic.com/13722199/r/il/0cff33/4982780061/il_600x600.4982780061_jdxq.jpg" alt />
                                <p className="font-semibold text-center pt-3">Gifts for Her</p>
                            </div>
                            <div className="hover:border border-gray-300  p-4 rounded-3xl hover:shadow-xl">
                                <img className="rounded-full" src="https://i.etsystatic.com/12495984/r/il/b9936d/3476468291/il_600x600.3476468291_l7fj.jpg" alt />
                                <p className="font-semibold text-center pt-3">Gifts for Him</p>
                            </div>
                            <div className="hover:border border-gray-300  p-4 rounded-3xl hover:shadow-xl">
                                <img className="rounded-full" src="https://i.etsystatic.com/14409281/r/il/8faa43/4650882265/il_600x600.4650882265_tf25.jpg" alt />
                                <p className="font-semibold text-center pt-3">Engagement Gifts</p>
                            </div>
                            <div className="hover:border border-gray-300  p-4 rounded-3xl hover:shadow-xl">
                                <img className="rounded-full" src="https://i.etsystatic.com/34798907/r/il/38bae7/4695292104/il_600x600.4695292104_btge.jpg" alt />
                                <p className="font-semibold text-center pt-3">Baby Gifts</p>
                            </div>
                            <div className="hover:border border-gray-300  p-4 rounded-3xl hover:shadow-xl">
                                <img className="rounded-full" src="https://i.etsystatic.com/20000021/r/il/19faf0/1990574121/il_600x600.1990574121_rilw.jpg" alt />
                                <p className="font-semibold text-center pt-3">Personalized Jewwlry</p>
                            </div>
                            <div className="hover:border border-gray-300  p-4 rounded-3xl hover:shadow-xl">
                                <img className="rounded-full" src="https://i.etsystatic.com/55753271/r/il/0a8f8c/6559525732/il_600x600.6559525732_nrqp.jpg" alt />
                                <p className="font-semibold text-center  pt-3">Flower Gifts</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 4th sectn pick */}
                <section>
                    <div className="container w-[1200px] mx-auto mt-14 text-[#222222]  ">
                        <h2 className=" font-semibold text-[29px] ">
                            Picks inspired by your shopping </h2>
                        <div className="gap-4 flex mt-9 ">
                            <div className=" relative">
                                <img className="rounded-3xl w-[250px] h-[220px] hover:shadow-xl" src="https://i.etsystatic.com/35518631/c/2232/2232/132/132/il/4c52b1/6575126061/il_340x270.6575126061_jhjf.jpg" alt />
                                <div className="absolute bottom-2 left-3 inline-flex justify-between gap-3 item center bg-white border border-gray-400 px-1 py-0 rounded-full shadow-sm ">
                                    <span className="font-semibold text-[14px] ">USD 11.91 </span>
                                    <span className=" text-[14px] line-through ">USD 39.71</span>
                                </div>
                            </div>
                            <div className=" relative">
                                <img className="rounded-3xl w-[250px] h-[220px] hover:shadow-xl" src="https://i.etsystatic.com/41120973/r/il/c5eca6/6662825815/il_600x600.6662825815_jljb.jpg" alt />
                                <div className="absolute bottom-2 left-3 inline-flex justify-between gap-3 item center bg-white border border-gray-400 px-1 py-0 rounded-full shadow-sm ">
                                    <span className="font-semibold text-[14px] ">USD 11.91 </span>
                                    <span className=" text-[14px] line-through ">USD 39.71</span>
                                </div>
                            </div>
                            <div className=" relative">
                                <img className="rounded-3xl w-[250px] h-[220px] hover:shadow-xl" src="https://i.etsystatic.com/52301098/r/il/7837fd/6367300446/il_600x600.6367300446_fcvb.jpg" alt />
                                <div className="absolute bottom-2 left-3 inline-flex justify-between gap-3 item center bg-white border border-gray-400 px-1 py-0 rounded-full shadow-sm ">
                                    <span className="font-semibold text-[14px] ">USD 11.91 </span>
                                    <span className=" text-[14px] line-through ">USD 39.71</span>
                                </div>
                            </div>
                            <div className=" relative">
                                <img className="rounded-3xl w-[250px] h-[220px] hover:shadow-xl" src="https://i.etsystatic.com/27995302/c/1752/1392/192/1157/il/e87170/5488216283/il_600x600.5488216283_p523.jpg" alt />
                                <div className="absolute bottom-2 left-3 inline-flex justify-between gap-3 item center bg-white border border-gray-400 px-1 py-0 rounded-full shadow-sm ">
                                    <span className="font-semibold text-[14px] ">USD 11.91 </span>
                                    <span className=" text-[14px] line-through ">USD 39.71</span>
                                </div>
                            </div>
                            <div className=" relative">
                                <img className="rounded-3xl w-[250px] h-[220px] relative hover:shadow-xl" src="https://i.etsystatic.com/25357039/c/1639/1301/22/595/il/4aa6da/6123332214/il_600x600.6123332214_eack.jpg" alt />
                                <div className="absolute bottom-2 left-3 inline-flex justify-between gap-3 item center bg-white border border-gray-400 px-1 py-0 rounded-full shadow-sm ">
                                    <span className="font-semibold text-[14px] ">USD 11.91 </span>
                                    <span className=" text-[14px] line-through ">USD 39.71</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <h5 className="text-end mb-3 text-[14px]">Because you viewed</h5>
                            <div className="flex gap-4 w-full  justify-end">
                                <img className="w-12" src="https://i.etsystatic.com/33188075/c/1653/1653/198/198/il/3ae1f9/6285000691/il_75x75.6285000691_hgzn.jpg" alt />
                                <img className="w-12" src="https://i.etsystatic.com/35518631/c/2232/2232/132/132/il/4c52b1/6575126061/il_75x75.6575126061_jhjf.jpg" alt />
                            </div>
                        </div>
                    </div></section>

                {/* 5th todays deal*/}
                <section>
                    <div className="container w-[1200px] mx-auto mt-10 text-[#222222] cursor-pointer ">

                        <div className="flex justify-between items-center ">
                            <div className="flex justify-center items-center  gap-10">
                                <h2 className=" font-semibold text-[29px] ">Today's big deals</h2>
                                <div className="flex items-center space-x-2 text-gray-600 text-lg cursor-pointer group ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 transition-transform group-hover:rotate-180">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                                    </svg>
                                    <span>Fresh deals in <span className="font-semibold">10:28:01</span></span>
                                </div>
                            </div>
                            <div className="relative me-16">
                                {/* Navigation Buttons */}
                                <button className="absolute top-1/2 left-0 -translate-y-1/2 bg-white w-14 h-14 rounded-full border shadow-lg flex items-center justify-center">
                                    <span className="text-[21px]">❮</span>
                                </button>
                                <button className="absolute top-1/2 right-5 -translate-y-1/2 bg-white w-14 h-14 rounded-full shadow-lg border flex items-center justify-center">
                                    <span className="text-[21px]">❯</span>
                                </button>
                            </div>
                        </div>

                        {/* img part */}

                        <div className="flex justify-between items-center gap-3 mt-8 ">

                        {content.map((a)=>(
                            <Link to={`/details/${a.id}`}>
                            <div className="border border-gray-400 rounded-2xl hover:shadow-xl">
                                <img className="w-[350px] h-[220px] rounded-t-2xl " src={a.img} alt />
                                <div className="p-3">
                                    <p className="pt-3 ">Couple Proposal Port </p>
                                    <div className="flex justify-between items-center p-1">
                                        <p className=" text-[21px] font-semibold text-green-700">{a.price}</p>
                                        <p className="bg-[#A0E193] border rounded-full px-2">35% off</p>
                                    </div>
                                    <p className="font-semibold">Biggest sale in 60+ days</p>
                                </div>
                            </div>
                            </Link>
                            ))}



                        </div>
                    </div>
                </section>


                {/* 6th shop our */}
                <section>
                    <div className="container w-[1200px] mx-auto mt-14 text-[#222222]  ">
                        <h2 className=" font-semibold text-[29px] mb-4 ">Shop our most popular categories</h2>
                        <div className="flex gap-4 font-semibold mt-6">
                            <div>
                                <img className="rounded-2xl hover:shadow-2xl" src="https://i.etsystatic.com/18740337/r/il/ef677a/3054897089/il_600x600.3054897089_65lf.jpg" alt />
                                <p className="pt-3  ">Sewing Patterns</p>
                            </div>
                            <div>
                                <img className="rounded-2xl  hover:shadow-2xl" src="https://i.etsystatic.com/22134162/c/2912/2314/0/0/il/b61bc1/2238133374/il_600x600.2238133374_9rde.jpg" alt />
                                <p className="pt-3">Templates</p>
                            </div>
                            <div>
                                <img className="rounded-2xl  hover:shadow-2xl" src="https://i.etsystatic.com/22195950/r/il/582901/3571682397/il_600x600.3571682397_6tg9.jpg" alt />
                                <p className="pt-3">Signs</p>
                            </div>
                            <div>
                                <img className="rounded-2xl  hover:shadow-2xl" src="https://i.etsystatic.com/12360908/c/2553/2027/186/383/il/b03306/2500653746/il_600x600.2500653746_kcts.jpg" alt />
                                <p className="pt-3">Craft supplies and tools</p>
                            </div>
                            <div>
                                <img className="rounded-2xl  hover:shadow-2xl" src="https://i.etsystatic.com/6054905/r/il/fb09a4/3574531004/il_600x600.3574531004_m2me.jpg" alt />
                                <p className="pt-3">Wall hangings</p>
                            </div>
                            <div className>
                                <img className="rounded-2xl  hover:shadow-2xl" src="https://i.etsystatic.com/44161790/r/il/226159/5729625769/il_600x600.5729625769_3jbx.jpg" alt />
                                <p className="pt-3">Paints</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 7th personize */}
                <section>
                    <div className="container mx-auto w-[1200px] mt-10">
                        {/* left part */}
                        <div className=" flex  justify-between items-center">
                            <div className="  ml-10 text-[16px]">
                                <p className=" ">Editors’ Picks</p>
                                <h1 className="text-3xl mt-1 font-semibold text-[#222222] ">Personalized Gifts</h1>
                                <p className="text-gray-700  mt-2">Create custom gifts with extraordinary sellers.</p>
                                <button className="mt-6 bg-gray-200 text-gray-800 pt-2 py-2 px-4 font-semibold rounded-full">Shop these
                                    unique finds</button>
                            </div>
                            <div className="flex  gap-4 ">
                                <div className="w-72 h-72">
                                    <img src="https://i.etsystatic.com/22414130/r/il/513d8c/5578751464/il_600x600.5578751464_66mv.jpg" alt="Gift 1" className="w-full h-full rounded-lg" />
                                </div>
                                <div className="w-72 h-72">
                                    <img src="https://i.etsystatic.com/12495984/r/il/524c9c/3933188633/il_600x600.3933188633_4i07.jpg" alt="Gift 2" className="w-full h-full rounded-lg" />
                                </div>
                            </div>
                        </div>
                        {/* right part */}
                        <div className="flex justify-between items-center gap-4  mt-6 ">
                            <div className="flex gap-4 ">
                                <div className="w-72 h-72">
                                    <img src="https://i.etsystatic.com/23794773/r/il/85a768/2368528438/il_600x600.2368528438_ltk5.jpg" alt="Gift 3" className="w-full h-full rounded-lg" />
                                </div>
                                <div className="w-72 h-72">
                                    <img src="https://i.etsystatic.com/15693273/r/il/fe28b0/5357538415/il_600x600.5357538415_4or6.jpg" alt="Gift 4" className="w-full h-full rounded-lg" />
                                </div>
                            </div>
                            <div className="flex gap-4 ">
                                <div className="w-72 h-72">
                                    <img src="https://i.etsystatic.com/35518631/c/2232/2232/132/132/il/4c52b1/6575126061/il_600x600.6575126061_jhjf.jpg" alt="Gift 5" className="w-full h-full rounded-lg" />
                                </div>
                                <div className="w-72 h-72">
                                    <img src="https://i.etsystatic.com/35531138/r/il/ab0019/5712490633/il_600x600.5712490633_4g3y.jpg" alt="Gift 6" className="w-full h-full rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 8th gift for kids */}
                <section>
                    <div className="container mx-auto w-[1200px] mt-16  flex gap-4 justify-between">
                        {/*  left main */}
                        <div className=" ">
                            {/* top */}
                            <div className=" flex justify-between items-center  ml-3 ">
                                <div className="text-[18px] ">
                                    <p className="text-gray-600  ">Editors’ Picks</p>
                                    <h1 className="text-2xl mt-2 font-semibold text-[#222222] ">Gifts for kids</h1>
                                    <button className="mt-6 bg-gray-200 text-gray-800  py-2 px-3 font-semibold rounded-full">See
                                        More</button>
                                </div>
                                <div className="flex  gap-3 ">
                                    <div className="w-48 h-48">
                                        <img src="https://i.etsystatic.com/10897104/r/il/c0f3a4/4823819317/il_600x600.4823819317_j0ku.jpg" alt="Gift 1" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div className="w-48 h-48">
                                        <img src="https://i.etsystatic.com/7661454/r/il/de324b/1708759658/il_600x600.1708759658_ih1z.jpg" alt="Gift 2" className="w-full h-full rounded-lg" />
                                    </div>
                                </div>
                            </div>
                            {/* below */}
                            <div className="flex gap-4  mt-3 ">
                                <div className="flex gap-3 ">
                                    <div className="w-48 h-48">
                                        <img src="https://i.etsystatic.com/25977346/r/il/07b6c4/5018784720/il_600x600.5018784720_ql2e.jpg" alt="Gift 3" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div className="w-48 h-48">
                                        <img src="https://i.etsystatic.com/36611196/r/il/e43a17/4292558034/il_600x600.4292558034_n4xc.jpg" alt="Gift 4" className="w-full h-full rounded-lg" />
                                    </div>
                                </div>
                                <div className="flex gap-3 ">
                                    <div className="w-48 h-48">
                                        <img src="https://i.etsystatic.com/7463786/r/il/760370/5843398143/il_600x600.5843398143_c5ou.jpg" alt="Gift 5" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div className="w-48 h-48">
                                        <img src="https://i.etsystatic.com/14550717/c/1431/1431/244/81/il/cb467a/2069215813/il_600x600.2069215813_4agj.jpg" alt="Gift 6" className="w-full h-full rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right img */}
                        <div className=" ">
                            <div className="w-[387px] h-[401px] pr-4">
                                <img src="https://i.etsystatic.com/23904858/c/1686/1686/618/286/il/99f0f1/5497379938/il_600x600.5497379938_86g7.jpg" alt="Gift5 6" className="w-full h-full rounded-lg" />
                            </div>
                        </div>
                    </div></section>
                {/* 9th shop extraordinary */}
                <section>
                    <div className="container w-[1200px] mx-auto mt-14 text-[#222222]  ">
                        <h2 className=" font-semibold text-[29px] ">
                            Shop extraordinary items at special prices</h2>
                        <div className="gap-2 flex mt-6 ">
                            <div className="hover:border border-gray-300  p-4 rounded-3xl hover:shadow-xl">
                                <img className="rounded-3xl w-[250px] h-[220px]" src="https://i.etsystatic.com/21329309/c/1811/1811/567/163/il/ca4d1d/4191566485/il_300x300.4191566485_jrny.jpg" alt />
                                <p className="font-semibold ml-3">Pet Fifts<br /> up to 20% off</p>
                            </div>
                            <div className="hover:border border-gray-300  p-4 rounded-3xl hover:shadow-xl">
                                <img className="rounded-3xl w-[250px] h-[220px] " src="https://i.etsystatic.com/38780505/r/il/42898b/6571046972/il_300x300.6571046972_rx0v.jpg" alt />
                                <p className="font-semibold ml-3 ">Toys &amp; Games<br /> up to 20% off</p>
                            </div>
                            <div className="hover:border border-gray-300  p-4 rounded-3xl hover:shadow-xl">
                                <img className="rounded-3xl w-[250px] h-[220px]" src="https://i.etsystatic.com/37000927/r/il/43d749/6407225013/il_300x300.6407225013_kuk3.jpg" alt />
                                <p className="font-semibold ml-3">Home Decor<br /> up to 20% off</p>
                            </div>
                            <div className="hover:border border-gray-300  p-4 rounded-3xl hover:shadow-xl">
                                <img className="rounded-3xl w-[250px] h-[220px]" src="https://i.etsystatic.com/14533306/c/1010/1010/509/392/il/9d586d/5492598667/il_300x300.5492598667_cohe.jpg" alt />
                                <p className="font-semibold ml-3">Statement Rings<br />up to 20% off</p>
                            </div>
                            <div className="hover:border border-gray-300  p-4 rounded-3xl hover:shadow-xl">
                                <img className="rounded-3xl w-[250px] h-[220px]" src="https://i.etsystatic.com/24025247/r/il/9e2f2b/6380475465/il_300x300.6380475465_kzbf.jpg" alt />
                                <p className="font-semibold ml-3">Shelving <br />up to 20% off</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 10th text part */}
                <section className="bg-[#FFFBD8]">
                    <div className="container w-[1200px] mx-auto mt-14 text-[#222222]  ">
                        {/* top */}
                        <div className="text-center pt-12">
                            <h2 className=" text-[45px]">What is Etsy?</h2>
                            <p className="underline pt-1 text-[19px]">Read our wonderfully weird stody</p>
                        </div>
                        {/* mid */}
                        <div className="mt-16 flex gap-10 text-[16px] ">
                            <div className="  w-[33.3%]">
                                <h2 className="text-[25px] font-semibold ">A community doing good</h2>
                                <p className="pt-4   ">Etsy is a global online marketplace, where people come
                                    together to make, sell, buy, and collect unique items. We’re also a community pushing for
                                    positive change for small businesses, people, and the planet.<span className="border-dashed border-b-2 border-gray-700"> Here are some of the ways we’re
                                        making a positive impact, together.</span></p>
                            </div>
                            <div className=" mr-6 w-[33.3%]">
                                <h2 className="text-[25px] font-semibold">Support independent creators</h2>
                                <p className="pt-4  ">There’s no Etsy warehouse – just millions of people selling the
                                    things they love. We make the whole process easy, helping you connect directly with makers to
                                    find something extraordinary.</p>
                            </div>
                            <div className="mr-6 w-[33.3%]">
                                <h2 className="text-[25px] font-semibold">Peace of mind</h2>
                                <p className="pt-4    ">Your privacy is the highest priority of our dedicated team.
                                    And if you ever need assistance, we are always ready to step in for support.</p>
                            </div>
                        </div>
                        {/* lower */}
                        <div className="text-center mt-16 ">
                            <h2 className=" text-[25px] font-semibold">Have a question? Well, we've got some answers.</h2>
                            <button className=" border-2 border-black bg-none px-4 py-4 font-semibold  rounded-full mt-6 mb-14">Go to
                                Help
                                Center</button>
                        </div>
                    </div>
                </section>  
        </>
    )
}

export default Home
