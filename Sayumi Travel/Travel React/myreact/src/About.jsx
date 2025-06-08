import React from 'react'


function About() {
 
  return (
    <>
         <section className=''>
                <div className='container w-[1400px] mx-auto py-20 flex  ' >
                    <div className='mt-16'>
                        <p className='text-[40px] font-bold mb-6 text-gray-700'>ABOUT <span className='text-red-600 '>SayumiTravels</span></p>
                        <p className='text-[18px] text-gray-600'>Sayumi Global" is a sophisticated and global-sounding name for a travel. It conveys a sense of international exploration and offers a unique brand identity. These web serve as comprehensive hubs, providing users with a variety of tools, information, and services to facilitate the entire travel process</p>
                    </div>

                    <div className='border-2 border-red-500 p-3 rounded-lg'>
                        <img className='rounded-lg w-[1500px] h-[300px]' src="https://sayumiglobal.com/uploads/1706014565.jpg" alt="" />
                    </div>
                </div>
            </section>
    </>
  );
}

export default About
