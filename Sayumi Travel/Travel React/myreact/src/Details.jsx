import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
   

    const content = [
        {
            id: 1,
            img: "https://sayumiglobal.com/uploads/1733246409.webp",
            title: "Pokhara - Ghandruk",
            date: "3 days 2 nights",
            description: "Pokhara Pokhara is one of the most popular tourist destinations in Nepal. Many tourists visit Pokhara Valley to see the Himalayan range and lakes. Pokhara is also famous for boating, trekking, rafting and extreme sports like rafting, canoeing and bungee jumping. Ghandruk Ghandruk is a traditional Gurung village in Kaski Gandaki Province. It is home to a Gurung museum and has one of the best views of Annapurna South, Gangapurna, Annapurna III, Hiunchuli, and Machhapuchhre. There is also a trek from Ghorekhani to Ghandruk that can also be done in one day",
            more: "Learn More",
            Rate: "Starting from $9500",
            cost:"9500",
        },
        {
            id: 2,
            img: "https://sayumiglobal.com/uploads/1706632316.jpg",
            title: "Pathibhara",
            date: "4",
            description: "Pathibhara, also known as Pathivara, is another sacred pilgrimage site in Nepal. It is situated in the Taplejung district in the eastern part of the country. The main attraction in Pathibhara is the Pathibhara Devi Temple, dedicated to Goddess Pathibhara.Pathibhara Devi Temple is a significant religious site for Hindus and Buddhists alike. Devotees believe that visiting the temple and offering prayers to Goddess Pathibhara fulfills their wishes and brings prosperity.The trek to Pathibhara is considered a moderate trek and is suitable for those seeking a combination of spiritual experience and adventure. Trekkers can enjoy the natural beauty of the region while making their way to the temple.",
            more: "Learn More",
            cost:"24000",
            Rate: "Starting from $24000",
        },
        {
            id: 3,
            img: "https://sayumiglobal.com/uploads/1706630881.jpg",
            title: "Haleshi",
            date: "6",
            description: "The Halesi-Maratika Caves, also known as the Haleshi Mahadev Temple, are situated near the village of Mahadevasthan in the Khotang District of eastern Nepal. Positioned at an elevation ranging from 3,100 to 4,734 feet above sea level, these caves are approximately 185 kilometers southwest of Mount Everest. This sacred site holds significance for Hindus, Buddhists, and the Kirat community. The temple is revered as a pilgrimage destination by Hindus, particularly those who associate it with Mahadeva, a form of Shiva. Simultaneously, Buddhists consider the caves sacred in connection with the legend of Padmasambhava. The Kirati Rai community in the region also holds Halesi in high regard, worshiping it as an ancestral deity. According to the Kirat mundhum, their oral tradition, their ancestor Raechhakule (Khokchilipa), also known as Hetchhakuppa, resided inside the Halesi cave in ancient times, establishing it as their ancestral place.",
            more: "Learn More",
            Rate: "Starting from $6000",
            cost:"6000",
        },

        {
            id: 4,
            img: "https://sayumiglobal.com/uploads/1706200444.jpg",
            title: "Pokhara",
            date: "4",
            description: "Pokhara is a picturesque city located in the Gandaki Province of Nepal. It is one of the most popular and scenic tourist destinations in the country, known for its stunning natural beauty, serene lakes, and magnificent views of the Himalayan mountain range. Nestled in the foothills of the Annapurna mountain range, Pokhara is situated at an elevation of approximately 827 meters (2,713 feet) above sea level. The city is surrounded by lush green hills and offers breathtaking views of the Himalayas. Pokhara is renowned for its pristine lakes, including Phewa Lake, Begnas Lake, and Rupa Lake. Phewa Lake, with its reflection of the Annapurna and Machapuchare mountains, is particularly iconic.",
            more: "Learn More",
            Rate: "Starting from $6000",
            cost:"6000",

        },

        {
            id: 5,
            img: "https://sayumiglobal.com/uploads/1706200144.jpg",
            title: "Kalinchowk",
            date: "5",
            description: "Kalinchowk is a Rural municipality located within the Dolakha district of the Bagmati province of Nepal. Kalinchowk is a hill station and a tourist hotspot. It is located at 3842 meters of altitude and about 150km northeast from national capital Kathmandu. The place is best known for trekking and skiing.During the December, January and February (mainly Paush and Magh in Nepali months) snowfalls in Kalinchowk. remove unwanted thing and make it correct",
            more: "Learn More",
            Rate: "Starting from $6000",
            cost:"6000",
        },

        {
            id: 6,
            img: "https://sayumiglobal.com/uploads/1706198900.jpg",
            title: "Lumbini",
            date: "4",
            description: "Lumbini, located in the Rupandehi District of Nepal, is a UNESCO World Heritage Site and holds immense significance as the birthplace of Siddhartha Gautama, who later became known as Buddha. Lumbini tour packages typically include visits to the sacred sites associated with the life of Buddha. This may include the Maya Devi Temple, the exact spot where Buddha was born, the Ashoka Pillar, and the sacred pond.Exploring the Lumbini Gardens, which feature beautiful landscapes, monastic zones, and various international monasteries representing different countries.",
            more: "Learn More",
            Rate: "Starting from $6000",
            cost:"6000",

        },
    ];


const details = content.find((a) => a.id == id);

    const [fromCurrency, setFromCurrency] = useState('NPR');
    const [toCurrency, setToCurrency] = useState('USD');
    const [openFrom, setOpenFrom] = useState(false);
    const [openTo, setOpenTo] = useState(false);

    const currencies = ['NPR'];
    const currencies2 = ['USD', 'EUR'];

    return (
        <>
            <section className='mt-20'>
                <div className='container w-[1400px] mx-auto mb-20 flex gap-40 '>

                    {/* LEFT */}
                    <div className='w-[50%]'>

                        <div className='w-[760px] h-[400px]'>
                            <img src={details.img} alt="" />
                        </div>
                        <div className='mt-32'>
                            <p className='pt-3 text-[50px] font-semibold text-gray-700'>{details.title}</p>
                            <p className='pt-3 text-[16px] text-gray-800'>{details.description}</p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='w-[50%] mt-24'>
                        {/* Weather Box */}
                        <div className='bg-[#F3F4F6] h-32 rounded'>
                            <div className='pl-10'>
                                <p className='font-semibold text-[18px] mb-3'>Weather Details</p>
                                <ul>
                                    <li>Current Weather in</li>
                                    <li>Temperature: °C</li>
                                    <li>Weather:</li>
                                </ul>
                            </div>
                        </div>

                        {/* Currency Converter */}
                        <div className='shadow-lg h-auto rounded mt-14 p-6 text-center'>
                            <p className='font-semibold text-[20px] mb-9 text-center text-gray-700'>Exchange Rate Calculator</p>

                            <div className="flex  justify-between">

                                {/* Convert From */}

                                <div className="relative ">

                                    <label className="block mb-2  text-gray-800">Convert from:</label>
                                    <button onClick={() => {
                                            setOpenFrom(!openFrom);
                                            setOpenTo(false);
                                        }}
                                        className="w-60 flex justify-between items-center border hover:border-blue-500 rounded px-4 py-2 text-left shadow-sm focus:outline-none text-gray-600"
                                    >
                                        {fromCurrency}
                                        <ChevronDown className="w-4 h-4 text-gray-600" />
                                    </button>

                                    {openFrom && (
                                        <ul className="absolute z-10 w-full mt-1 bg-white border rounded shadow">
                                            {currencies.map((currency) => (
                                                <li
                                                    key={currency}
                                                    onClick={() => {
                                                        setFromCurrency(currency);
                                                        setOpenFrom(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                                                    {currency}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Convert To */}
                                <div className="relative ">

                                    <label className="block mb-2 text-gray-800">Convert to:</label>
                                    <button
                                        onClick={() => {
                                            setOpenTo(!openTo);
                                            setOpenFrom(false);
                                        }}
                                        className="w-60 flex justify-between items-center border rounded hover:border-blue-500 px-4 py-2 text-left text-gray-600 shadow-sm focus:outline-none">
                                        {toCurrency}
                                        <ChevronDown className="w-4 h-4 text-gray-600" />
                                    </button>
                                    
                                    {openTo && (
                                        <ul className="absolute z-10 w-full mt-1 bg-white border rounded shadow">
                                            {currencies2.map((currency) => (
                                                <li
                                                    key={currency}
                                                    onClick={() => {
                                                        setToCurrency(currency);
                                                        setOpenTo(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer">
                                                    {currency}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block mb-2  text-gray-800">Amount:</label>
                                <input
                                    type="number"
                                    placeholder="Enter amount"
                                    className="w-80 px-4 py-2 w-full border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className=' text-center '>

                                <button className='py-2 text-white font-semibold mt-12 w-36 text-center  bg-blue-500 rounded-lg'>Convert</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* inclide */}

            <section>
                <div className='container mx-auto w-[1200px] mb-20'>
                    <div className='text-center'>
                        <p className='font-bold text-gray-800 text-[34px] mb-6'>Inclusions</p>
                        <p className='text-gray-700 text-[18px]'>Join us as you explore the world, where each trip is thoughtfully planned, and every little detail is considered, making your adventure a beautiful collection of unforgettable moments.</p>
                    </div>
                </div>
            </section>

            {/* travel */}
            <section>
                <div className='container w-[1400px] mx-auto   shadow-lg mb-14 rounded-lg border-t-4 border-blue-500'>
                    <div className='w-full h-[130px]  px-10'>
                        <p className='py-4  text-[20px] font-semibold text-gray-900 '>Accessible Travel Package</p>
                        <p className='text-gray-700'>Explore our specially curated travel package designed for individuals with diverse accessibility needs. Enjoy accessible accommodations, inclusive transportation, and tailored experiences to ensure a memorable journey. Book your accessible adventure today!</p>
                    </div>
                </div>
            </section>

            {/* book  */}

            <section>
                <div className='container w-[1400px] mx-auto border mb-14 rounded-3xl flex justify-between p-4 gap-10 '>
                    {/* left package */}
                    <div>
                        <div>
                            <p className='mb-4 font-bold text-gray-700'>Package Features</p>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.</p>
                        </div>

                        <div className='flex justify-between gap-10 mt-10'>
                            <div>
                                <p className='mb-4 text-blue-700 font-semibold'>What’s included</p>
                                <p className='text-gray-700'>Grounded Transportation (Scorpio) (Breakfast, Lunch and Dinner) Hotel Accommodation on sharing basis Sightseeing</p>
                            </div>

                            <div>
                                <p className='mb-4 text-blue-700 font-semibold'>What’s not included</p>
                                <p className='text-gray-700'>Personal Expenses Bar and BBQ Travel Insurance Anything beyond our control</p>
                            </div>
                        </div>
                    </div>

                    {/* right book now */}
                    <div className='bg-[#F9FAFB] rounded-3xl border '>
                        <div className='text-center w-[400px] h-[300px] mt-8'>
                            <p className='font-semibold text-gray-700 mb-8 text-[18px]'>Pay once, own it forever</p>
                            <p className='font-semibold text-gray-700 mb-8'> <span className='text-[44px] font-bold'>{details.cost}</span> /per package</p>
                            <button className='bg-blue-800 text-white rounded-lg w-[300px] h-[40px] font-semibold '>Book Now</button>
                            <p className='mt-8 text-gray-600 text-sm w-52 ml-24'>Invoices and receipts available for easy company reimbursement</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* review */}
            <section className='bg-[#F3F4F6] '>
                <div className='container w-[1200px] mx-auto py-20 '>
                    <div className='flex text-center gap-72 ml-40'>
                        <div >
                            <p className='mb-16 text-[#1E3A8A] font-bold text-[28px]'>What People Think:</p>
                            <p className='mb-4 text-lg text-gray-600'>Reviews</p>
                            <div>
                                <button className='bg-[#1E3A8A] text-white rounded-full font-semibold py-3 px-8'>Write a review</button>
                            </div>
                        </div>

                        <div className='bg-white w-40 h-32 rounded-lg shadow-lg text-center '>
                            <i className="bi bi-star-fill text-yellow-400 text-[45px] "></i>
                            <p className='text-gray-500 text-[14px] mt-3'>Average User Rating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-action section */}
            <section className='bg-[#7F7F7F]'>
                <div className='container w-[1200px] mx-auto py-20'>
                    <div className='text-center'>
                        <p className='text-white text-[40px] font-bold'>Beautiful Beach Paradise Package</p>
                        <p className='mt-4 text-white font-semibold'>Immerse yourself in luxury and create unforgettable memories.</p>
                        <div className='mt-8 cursor-pointer'>
                            <button className='bg-white text-blue-600 px-10 py-3 rounded-lg shadow font-semibold hover:text-white duration-300'>Book Now</button>
                        </div>
                    </div>
                </div>
            </section>

                

        </>
    );
}

export default Details;