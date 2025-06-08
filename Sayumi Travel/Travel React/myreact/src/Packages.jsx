import React from 'react'
import { Link } from 'react-router-dom'

function Packages() {
  const Packages = [

    {
      id: 1,
      img: "https://sayumiglobal.com/uploads/1706014857.jpg",
      title: "Mustang",
      review: "(3 Reviews)",
      Rate: "Starting from $10000",
      btn: "Enquire Now",
    },


    {
      id: 2,
      img: "https://sayumiglobal.com/uploads/1706012899.jpg",
      title: "Muktinath",
      review: "(3 Reviews)",
      Rate: "Starting from $95000",
      btn: "Enquire Now",
    },



    {
      id: 3,
      img: "https://sayumiglobal.com/uploads/1705993224.webp",
      title: "Kathmandu",
      review: "(3 Reviews)",
      Rate: "Starting from $1",
      btn: "Enquire Now",
    },


    {
      id: 4,
      img: "https://sayumiglobal.com/uploads/1706193077.jpg",
      title: "Poon Hill",
      review: "(3 Reviews)",
      Rate: "Starting from $10000",
      btn: "Enquire Now",
    },


    {
      id: 5,
      img: "https://sayumiglobal.com/uploads/1706194871.jpg",
      title: "Panch Pokhari",
      review: "(3 Reviews)",
      Rate: "Starting from $5000",
      btn: "Enquire Now",
    },

    {
      id: 6,
      img: "https://sayumiglobal.com/uploads/1706198900.jpg",
      title: "Lumbini",
      review: "(3 Reviews)",
      Rate: "Starting from $6000",
      btn: "Enquire Now",
    },
  ]

  return (
    <>
      <section className="bg-[#F3F4F6]  ">
        <div className="container mx-auto rounded-3xl w-[1200px]  ">
          <div className="">
            <p className="font-semibold text-3xl text-blue-700 mb-14 ">Our Packages</p>
       
            <div className=" flex flex-wrap justify-between gap-6 ">

            {Packages.slice(0,6).map((b) => (

              <div className=" rounded-3xl">
                <div className="relative overflow-hidden hover:rounded-3xl bg-cover">
                  <img className="  w-[383px] h-[320px]   object-cover rounded-3xl  hover:scale-105 duration-300" src={b.img} alt />
                  <div className="rounded-3xl w-[383px] shadow-3xl absolute top-44 bg-white opacity-90">
                    <div className="p-5 ">
                      <p className="text-[20px] font-semibold text-gray-700 mb-2">{b.title}</p>
                      <div className="mb-4 flex justify-between items-center">
                        <p className="text-gray-500 text-[14px]">{b.Rate}</p>
                        <div className="flex gap-0.5 ">
                          <i className="bi bi-star-fill text-yellow-500 " />
                          <i className="bi bi-star-fill text-yellow-500 " />
                          <i className="bi bi-star-fill text-yellow-500 " />
                          <i className="bi bi-star-fill text-yellow-500 " />
                          <i className="bi bi-star-fill text-yellow-500 " />
                          <p className="text-gray-500 text-[14px] ml-2">{b.review}</p>
                        </div>
                      </div>

                      <Link to={`/datapackage/${b.id}`}>
                      <button className="bg-blue-700 text-white rounded-full px-5 py-1">{b.btn}</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
            


            <div className="mt-20">
              <p className="font-semibold text-[24px] text-blue-700 mb-10 text-center">International</p>
              <div>
                <div className=" rounded-3xl">
                  <div className="relative overflow-hidden hover:rounded-3xl bg-cover">
                    <img className="  w-[383px] h-[320px]   object-cover rounded-3xl  hover:scale-105 duration-300" src="https://sayumiglobal.com/uploads/1706197818.jpg" alt />
                    <div className="rounded-3xl w-[383px] shadow-3xl absolute top-44 bg-white opacity-90">
                      <div className="p-5 ">
                        <p className="text-[20px] font-semibold text-gray-700 mb-2">Thailand</p>
                        <div className="mb-4">
                          <p className="text-gray-500 font-sm ">Starting from $10000</p>
                        </div>
                        <button className="bg-blue-700 text-white rounded-full px-5 py-1">Enquire Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
               
          </div>
        </div>
      </section>

    </>
  )
}

export default Packages
