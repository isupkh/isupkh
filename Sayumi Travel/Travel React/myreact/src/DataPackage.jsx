import React from 'react'
import { useParams } from 'react-router-dom'

function DataPackage() {

    const {id}=useParams()

    const Packages=[

        {
            id: 1,
            img: "https://sayumiglobal.com/uploads/1706014857.jpg",
            title: "Mustang",      
            Rate: "Starting from $10000",
        
        },
    
        {
            id: 2,
            img: "https://sayumiglobal.com/uploads/1706012899.jpg",
            title: "Muktinath",    
            Rate: "Starting from $95000",
            
        },
      
    
        {
            id: 3,
            img: "https://sayumiglobal.com/uploads/1705993224.webp",
            title: "Kathmandu",     
            Rate: "Starting from $1",
            
        },
    
     
        {
            id: 4,
            img: "https://sayumiglobal.com/uploads/1706193077.jpg",
            title: "Poon Hill",    
            Rate: "Starting from $10000",
            
        },
    
        {
            id: 5,
            img: "https://sayumiglobal.com/uploads/1706194871.jpg",
            title: "Panch Pokhari", 
            Rate: "Starting from $5000",
            
        },
    
        {
            id: 6,
            img: "https://sayumiglobal.com/uploads/1706198900.jpg",
            title: "Lumbini",  
            Rate: "Starting from $6000",
            
        },
    ]


    const DataPackage =Packages.find((b)=>b.id==id);


  return (
    <>
       <section className='mt-20'>
                <div className='container w-[1400px] mx-auto mb-20  '>

                    {/* LEFT */}
                    <div className='w-[50%]'>

                        <div className='w-[760px] h-[400px]'>
                            <img src={DataPackage.img} alt=""/>
                        </div>
                        <div className='mt-32'>
                            <p className='pt-3 text-[50px] font-semibold text-gray-700'>{DataPackage.title}</p>
                            <p className='pt-3 text-[16px] text-gray-800'>{DataPackage.Rate}</p>
                        </div>
                    </div>
                    </div>
        </section>
    </>
  )
}

export default DataPackage
