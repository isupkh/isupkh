import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {

  let { id } = useParams();

  let content = [
    {
      id: 1,
      description: "Personalized Tiny Balloon Initial Name Necklace, Mini Name Necklace, Minimalist Necklace, Personalized Gift, Gift for her, Christmas Gift",
      price: "USD 11.58",
      img: "https://i.etsystatic.com/33188075/c/1653/1653/198/198/il/3ae1f9/6285000691/il_600x600.6285000691_hgzn.jpg",
      btn: "Add to Cart",
    },

    {
      id: 2,
      description: "Personalized Tiny Balloon Initial Name Necklace, Mini Name Necklace, Minimalist Necklace, Personalized Gift, Gift for her, Christmas Gift",
      price: "USD 13.99",
      img: "https://i.etsystatic.com/35966576/c/2078/2078/425/0/il/635675/4033819161/il_600x600.4033819161_5o80.jpg",
      btn: "Add to Cart",
    },

    {
      id: 3,
      description: "Personalized Tiny Balloon Initial Name Necklace, Mini Name Necklace, Minimalist Necklace, Personalized Gift, Gift for her, Christmas Gift",
      price: "USD 7.79",
      img: "https://i.etsystatic.com/24645705/r/il/e4b602/6626102983/il_600x600.6626102983_9z03.jpg",
      btn: "Add to Cart",
    },

    {
      id: 4,
      description: "Personalized Tiny Balloon Initial Name Necklace, Mini Name Necklace, Minimalist Necklace, Personalized Gift, Gift for her, Christmas Gift",
      price: "USD 16.50",
      img: "https://i.etsystatic.com/22775504/r/il/d1a3cd/4783320921/il_600x600.4783320921_6so0.jpg",
      btn: "Add to Cart",
    },

    {
      id: 5,
      description: "Personalized Tiny Balloon Initial Name Necklace, Mini Name Necklace, Minimalist Necklace, Personalized Gift, Gift for her, Christmas Gift",
      price: "USD 23.97",
      img: "https://i.etsystatic.com/19505509/r/il/47198d/6440304358/il_600x600.6440304358_675q.jpg",
      btn: "Add to Cart",

    },]

    

  let details = content.find((a) => a.id == id);
  console.log(details)

  return (
    <>
      <section>
        <div className="container w-[1200px] mx-auto flex justify-between mt-12 mb-12 shadow-2xl border p-2">
          <div>
            <div className='w-[480px]'>
              <img src={details.img} alt="" />
            </div>
          </div>

          <div className='mt-8 p-12'>
            <div className="p-3">
              <p className="pt-3 text-[18px] ">Couple Proposal Port {details.description}</p>
              <div className="flex justify-between items-center p-1 mt-4">
                <p className=" text-[21px] font-semibold text-green-700  ">{details.price}</p>
                <p className="bg-[#A0E193] border rounded-full px-2 mt-">{details.price}</p>
              </div>
              <p className="font-semibold mt-2">Biggest sale in 60+ days</p>
            </div>

            <div className=''>
              <button className='bg-gray-800 px-4 py-3 rounded shadow-2xl text-white font-semibold mt-20'>{details.btn}</button>
            </div>
          </div>

        </div>
      </section>




      
    </>
  )
}

export default Details
