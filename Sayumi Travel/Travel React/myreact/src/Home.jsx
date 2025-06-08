import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

    const handleSeeMore = () => {
        navigate("/about");
    };

    const content =
        [
            {
                id: 1,
                img: "https://sayumiglobal.com/uploads/1733246409.webp",
                title: "Pokhara - Ghandruk",
                date: "3 days 2 nights",
                description: "Pokhara Pokhara is one of the most popular tourist destinations in Nepal. Many tourists visit Pokhara Valley to see the Himalayan range and lakes. Pokhara is also famous for boating, trekking, rafting and extreme sports like rafting, canoeing and bungee jumping... ",
                more: "Learn More",
                Rate: "Starting from $9500",
                cost:"9500",
            },
            {
                id: 2,
                img: "https://sayumiglobal.com/uploads/1706632316.jpg",
                title: "Pathibhara",
                date: "4",
                description: "Pathibhara, also known as Pathivara, is another sacred pilgrimage site in Nepal. It is situated in the Taplejung district in the eastern part of the country. The main attraction in Pathibhara is the Pathibhara Devi Temple, dedicated to Goddess Pathibhara...",
                more: "Learn More",
                cost:"24000",
                Rate: "Starting from $24000",
            },
            {
                id: 3,
                img: "https://sayumiglobal.com/uploads/1706630881.jpg",
                title: "Haleshi",
                date: "6",
                description: "The Halesi-Maratika Caves, also known as the Haleshi Mahadev Temple, are situated near the village of Mahadevasthan in the Khotang District of eastern Nepal. Positioned at an elevation ranging from 3,100 to 4,734 feet above sea level, these caves..",
                more: "Learn More",
                Rate: "Starting from $6000",
                Cost:"6000",
            },
    
            {
                id: 4,
                img: "https://sayumiglobal.com/uploads/1706200444.jpg",
                title: "Pokhara",
                date: "4",
                description: "Pokhara is a picturesque city located in the Gandaki Province of Nepal...",
                more: "Learn More",
                Rate: "Starting from $6000",
                Cost:"6000",
    
            },
    
            {
                id: 5,
                img: "https://sayumiglobal.com/uploads/1706200144.jpg",
                title: "Kalinchowk",
                date: "5",
                description: ", Kalinchowk is a popular destination in Nepal known for its scenic beauty, especially during the winter season...",
                more: "Learn More",
                Rate: "Starting from $6000",
                Cost:"6000",
            },
    
            {
                id: 6,
                img: "https://sayumiglobal.com/uploads/1706198900.jpg",
                title: "Lumbini",
                date: "4",
                description: "Lumbini immense significance as the birthplace of Siddhartha Gautama, who later became known...",
                more: "Learn More",
                Rate: "Starting from $6000",
                Cost:"6000",
            },
        ]


    return (
        <>

            <div>
                {/* all image content */}
                <section className=" relative">
                    {/* bg full image */}
                    <div className>
                        <div className="bg-cover w-full bg-[url(https://sayumiglobal.com/images/bg.jpg)] bg-fixed  h-[800px]  object-cover  ">
                        </div>
                    </div>
                    {/* welcome */}
                    <div className="container mx-auto w-[1200px] absolute bottom-44 left-72  shadow-2xl">
                        <div className="ml-80">
                            <p className="text-5xl mb-4 text-white">Welcome to <span className="font-semibold"> Sayumi Travels</span></p>
                            <p className=" px-16  text-white">Discover the world with our amazing travel experiences.</p>
                        </div>
                        {/* all secarch box */}
                        <div className="flex gap-8  bg-white  py-12 pl-16 mt-6  ">
                            <div>
                                <div className="flex gap-3 ml-16 mb-2">
                                    <i className="bi bi-geo-alt-fill text-gray-800 " />
                                    <p className="text-gray-800 font-semibold text-sm">Location</p>
                                </div>
                                <div className=" flex  border border-gray-300 py-2 rounded-lg  pl-4 ">
                                    <p className=" pr-20 text-sm">Select Location</p>
                                    <i className="bi bi-chevron-compact-down text-xl mr-4" />
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-3 ml-20 mb-2">
                                    <p className="text-gray-800 font-semibold text-sm">Duration </p>
                                </div>
                                <div className=" flex  border border-gray-300 py-2 rounded-lg pl-4">
                                    <p className="pr-20 text-sm">Select Duration</p>
                                    <i className="bi bi-chevron-compact-down text-xl mr-4" />
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-3 ml-20 mb-2">
                                    <p className="text-gray-800 font-semibold text-sm">Price Rating</p>
                                </div>
                                <div className=" flex  border border-gray-300 py-2 rounded-lg  pl-4">
                                    <p className=" pr-20 text-sm">Select Price Rating</p>
                                    <i className="bi bi-chevron-compact-down  text-xl mr-4" />
                                </div>
                            </div>
                            <div>
                                <button className="px-28 py-3 mt-6 rounded-lg  text-white bg-blue-500">Search</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}

                <section className="bg-[#f8f9fa]">

                    {/* package start */}

                    <div className="container mx-auto w-[1400px] pt-20 mb-8">
                        {/* package title */}
                        <p className="text-[#D91212] font-semibold text-2xl mb-12 text-center ">Our Packages</p>

                        {/* package 1 line */}

                        <div className="flex-wrap flex  items-center gap-6 ">

                            {content.slice(0, 6).map((a) => (
                                <Link to={`/details/${a.id}`}>
                                    <div className="border  shadow-xl rounded-lg bg-white w-[410px] cursor-pointer">

                                        <div className="overflow-hidden bg-cover">
                                            <img className="w-[410px] h-[250px] rounded-t-lg object-cover bg-fixed  hover:scale-105 duration-300 " src={a.img} alt="true" />
                                        </div>

                                        <div className="p-6">
                                            <p className="text-lg font-semibold text-gray-800 mb-4 hover:text-blue-700 duration-300  ">
                                                {a.title}
                                            </p>
                                            <div class="flex gap-3 mb-4">
                                                <i class="bi bi-calendar3 text-gray-700"></i>
                                                <p class="text-gray-600 text-sm ">{a.date}</p>
                                            </div>

                                            <p className="text-gray-700 text-sm mb-4">{a.description}</p>

                                            <div class="flex justify-between ">
                                                <button class="text-blue-700  font-semibold hover:underline">Learn More</button>
                                                <p class="text-[#D91212]">Starting from $6000</p>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>




                    {/* destination start */}
                    <div className="container mx-auto w-[1200px] pt-14 ">
                        {/* destination title */}
                        <p className="text-[#D91212] font-semibold text-2xl text-center ">Our Destinations</p>
                        {/* place image */}
                        <div className="flex justify-between gap-6 mt-14 swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="cursor-pointer swiper-slide">
                                    <img className="w-48 h-48 rounded-full hover:scale-105 duration-300 " src="https://sayumiglobal.com/uploads/1735539378.jpg" alt />
                                    <p className="text-[#D91212] font-semibold mt-5 ml-16 text-lg">Bali</p>
                                </div>
                                <div className="cursor-pointer swiper-slide">
                                    <img className="w-48 h-48 rounded-full hover:scale-105 duration-300" src="https://sayumiglobal.com/uploads/1733739532.jpg" alt />
                                    <p className="text-[#D91212] font-semibold mt-5 ml-16 text-lg">Pokhara</p>
                                </div>
                                <div className="cursor-pointer swiper-slide">
                                    <img className="w-48 h-48 rounded-full hover:scale-105 duration-300" src="https://sayumiglobal.com/uploads/1705978938.jpg" alt />
                                    <p className="text-[#D91212] font-semibold mt-5 ml-16 text-lg">Thailand</p>
                                </div>
                                <div className="cursor-pointer swiper-slide">
                                    <img className="w-48 h-48 rounded-full hover:scale-105 duration-300" src="https://sayumiglobal.com/uploads/1705979109.jpg" alt />
                                    <p className="text-[#D91212] font-semibold mt-5 ml-16 text-lg">Singapore</p>
                                </div>
                                <div className="cursor-pointer swiper-slide">
                                    <img className="w-48 h-48 rounded-full hover:scale-105 duration-300" src="https://sayumiglobal.com/uploads/1706197979.jpg" alt />
                                    <p className="text-[#D91212] font-semibold mt-5 ml-16 text-lg">Poon Hill</p>
                                </div>
                                
                                {/* for next */}
                                <div className="cursor-pointer swiper-slide">
                                    <img className="w-48 h-48 rounded-full" src="https://sayumiglobal.com/uploads/1706197927.jpg" alt />
                                    <p className="text-[#D91212] font-semibold mt-5 ml-16 text-lg">Panch Pokhari</p>
                                </div>
                                <div className="cursor-pointer swiper-slide">
                                    <img className="w-48 h-48 rounded-full" src="https://sayumiglobal.com/uploads/1706198024.jpg" alt />
                                    <p className="text-[#D91212] font-semibold mt-5 ml-16 text-lg">Haleshi
                                    </p>
                                </div>
                                <div className="cursor-pointer swiper-slide">
                                    <img className="w-48 h-48 rounded-full" src="https://sayumiglobal.com/uploads/1706198088.jpg" alt />
                                    <p className="text-[#D91212] font-semibold mt-5 ml-16 text-lg">Muktinath</p>
                                </div>
                                <div className="cursor-pointer swiper-slide">
                                    <img className="w-48 h-48 rounded-full" src="https://sayumiglobal.com/uploads/1706632401.jpg" alt />
                                    <p className="text-[#D91212] font-semibold mt-5 ml-16 text-lg">Pathivara</p>
                                </div>
                                <div className="cursor-pointer swiper-slide">
                                    <img className="w-48 h-48 rounded-full" src="https://sayumiglobal.com/uploads/1733739496.jpg" alt />
                                    <p className="text-[#D91212] font-semibold mt-5 ml-16 text-lg">Indonesia</p>
                                </div>
                            </div>
                            <div className="swiper-pagination">
                                <span className="custom-bullet" onclick="goToGroup(0)">•</span>
                                <span className="custom-bullet" onclick="goToGroup(5)">•</span>
                            </div>
                            {/* butn switch */}
                            {/* <div class=" "> */}
                            {/* top arrow */}
                            {/* <div class="flex gap-4 mt-6   justify-center">

                          <div class="w-9 h-9 rounded-full border hover:bg-[#869791]   ">
                              <i class="bi bi-chevron-left text-gray-600  text-2xl hover:text-white ml-1"></i>
                          </div>
                          <div class="w-9 h-9 rounded-full border hover:bg-[#869791]   ">
                              <i class="bi bi-chevron-right text-gray-600  text-2xl hover:text-white ml-1.5"></i>
                          </div>
                      </div> */}
                            {/* below circle */}
                            {/* <div class="flex gap-4 mt-4   justify-center ">
                          <button class="w-3 h-3 bg-[#869791] rounded-full"></button>
                          <button class="w-3 h-3 hover:bg-[#869791] rounded-full bg-gray-300"></button>
                      </div>
                      <div class="swiper-pagination"></div>
                  </div> */}
                        </div>
                        {/* destination butn */}
                        <div className="text-center ">
                            <button className="bg-blue-500 px-5  py-2 rounded-3xl text-white font-semibold text-sm mb-14  mt-10 hover:bg-blue-700 duration-200 ">See
                                More Destinations</button>
                        </div>
                    </div>
                </section>

                {/* company information */}

                <div>
                </div>
            </div>

            <section className="bg-[#E5E7EB]">
                <div className="container mx-auto w-[1200px]">

                    {/* about */}
                    <div className="flex items-center gap-12 mb-4 py-20">
                        <div className="w-[50%]">
                            <div className=" rounded-lg shadow-md hover:scale-105 duration-300 ">
                                <img className="w-full" src="https://sayumiglobal.com/uploads/1706014565.jpg" alt />
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className>
                                <h1 className="text-blue-800 text-3xl font-semibold">About Sayumi Global Travel</h1>
                                <p className="text-sm mt-7 text-left ">Sayumi Global" is a sophisticated and global-sounding name
                                    for a travel. It
                                    conveys a sense of international exploration and offers a unique brand identity. These web
                                    serve
                                    as comprehensive hubs, providing users with a variety of tools, information, and services to
                                    facilitate the entire travel process.</p>

                                {/* {content2.map((a) => (
                                <Link to={`/about/${a.id}`}>   */}

                                <Link to="/about" className="bg-blue-500 px-5 mt-8 py-2 rounded-3xl text-white font-semibold text-sm hover:bg-blue-700 duration-200 cursor-pointer inline-block text-center">
                                    See More
                                </Link>

                                {/* </Link> */}
                                {/* ))} */}

                            </div>
                        </div>
                    </div>
                    {/* videos  */}
                    {/* title */}
                    <div className="text-center">
                        <h1 className="text-blue-700 font-semibold text-3xl mb-14">Our Videos</h1>
                    </div>
                    {/* link utube */}
                    <div className=" flex justify-between items-center gap-6">
                        {/* pokhara iframe */}
                        <div>
                            <div className=" border  shadow-xl rounded-lg bg-white w-[400px] cursor-pointer">
                                <div className="relative w-full overflow-hidden bg-cover ">
                                    <iframe className="w-[400px] h-[250px]" src="https://www.youtube.com/embed/FhwqbF9zwUo" title="Traveling Pokhara, Nepal - 4K Cinematic Experience" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                </div>
                                <div className="p-5">
                                    <p className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-700 duration-300">Pokhara
                                    </p>
                                    <p className="text-gray-700 text-sm mb-5">Good Morning From Heaven</p>
                                    <p className="text-gray-600 text-sm ">Dec 29, 2023</p>
                                </div>
                            </div>
                        </div>
                        {/* travel iframe */}
                        <div>
                            <div className=" border  shadow-xl rounded-lg bg-white w-[400px] cursor-pointer">
                                <div className="  relative w-full overflow-hidden bg-cover ">
                                    <iframe className="w-[400px] h-[250px]" src="https://www.youtube.com/embed/PNYH5u9Yuc4" title="Travel Cinematic Short Video | Train Cinematic | #cinematic #edit #cinematography" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                </div>
                                <div className="p-5">
                                    <p className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-700 duration-300">Travel
                                    </p>
                                    <p className="text-gray-700 text-sm mb-5">Travel is Love</p>
                                    <p className="text-gray-600 text-sm ">Dec 29, 2023</p>
                                </div>
                            </div>
                        </div>
                        {/* mustang iframe */}
                        <div>
                            <div className=" border  shadow-xl rounded-lg bg-white w-[390px] cursor-pointer">

                                <div className="relative w-full overflow-hidden bg-cover ">
                                    <iframe className="w-[390px] h-[250px]" src="https://www.youtube.com/embed/CDx2fxb5ZF4" title="So You Want To See The World? (Travel Film)" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                </div>
                                <div className="p-5">
                                    <p className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-700 duration-300">Mustang
                                    </p>
                                    <p className="text-gray-700 text-sm mb-5">Hello Mustang</p>
                                    <p className="text-gray-600 text-sm ">Dec 29, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/videos">
                        <div className="text-center">
                            <button className="bg-blue-500 px-5 mt-16 py-2 rounded-3xl  text-white font-semibold text-sm  mb-12 hover:bg-blue-700 duration-200 cursor-pointer">See
                                More</button>
                        </div>
                    </Link>
                </div>
            </section>
            {/* Blog */}
            <section>
                <div className="container mx-auto w-[1000px] mt-16 ">
                    {/* blog title */}
                    <div className="mb-24 text-center w-[700px] ml-36 ">
                        <h1 className="text-blue-800 text-3xl font-semibold mb-5 ">Our Blogs</h1>
                        <p className="text-gray-500 ">Embark on a Journey Beyond Ordinary - Explore, Discover, Wander. Your
                            Passportto Unveiling Hidden Gems around the Globe. Let the Adventure Begin!</p>
                    </div>
                    {/* blog content */}
                    <div className="flex gap-9 ">
                        {/* 1 */}
                        <div className="flex  gap-6 ">
                            <div className="w-[240px] h-[160px] border overflow-hidden bg-cover rounded-lg shadow-lg ">
                                <img className="w-[240px] h-[160px] hover:scale-105 duration-300 ease-in-out rounded-lg " src="https://sayumiglobal.com/uploads/1705978938.jpg" alt />
                            </div>
                            <div className>
                                <p className="text-gray-500 mb-2 text-sm"> 2024-01-05</p>
                                <h1 className="text-gray-800 font-bold mb-1"> Unveiling Hidden Gems: A Journey Off the Beaten Path
                                </h1>
                                <p className="text-gray-500 mb-2"> Welcome, fellow wanderers, to our travel blog where we embark on
                                    a jou...</p>
                                <button className="text-red-500 hover:text-red-700 text-sm font-bold"> Read more</button>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="flex  gap-6 ">
                            <div className="w-[240px] h-[160px] border overflow-hidden bg-cover rounded-lg shadow-lg  ">
                                <img className="w-[240px] h-[160px] hover:scale-105 duration-300 ease-in-out rounded-lg " src="https://sayumiglobal.com/uploads/1733739218.jpg" alt />
                            </div>
                            <div className>
                                <p className="text-gray-500 mb-2 text-sm"> 2024-01-06</p>
                                <h1 className="text-gray-800 font-bold mb-1">The Enchanting Alleys of Marrakech</h1>
                                <p className="text-gray-500 mb-2">Dive into the heart of Morocco's bustling city, where the narrow
                                    al..</p>
                                <button className="text-red-500 hover:text-red-700 text-sm font-bold"> Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-20 mt-14 mb-10 ">
                        {/* 1 */}
                        <div className="flex  gap-6 ">
                            <div className="w-[240px] h-[160px] border overflow-hidden bg-cover rounded-lg shadow-lg  ">
                                <img className="w-[240px] h-[160px] hover:scale-105 duration-300 ease-in-out rounded-lg " src="https://sayumiglobal.com/uploads/1733739301.jpg" alt />
                            </div>
                            <div className>
                                <p className="text-gray-500 mb-2 text-sm"> 2024-01-05</p>
                                <h1 className="text-gray-800 font-bold mb-1">Beyond the Temples - Exploring Kyoto's Hidden Charms
                                </h1>
                                <p className="text-gray-500 mb-2"> While Kyoto is renowned for its stunning temples, there's a whole
                                    d...</p>
                                <button className="text-red-500 hover:text-red-700 text-sm font-bold"> Read more</button>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="flex  gap-6 ">
                            <div className="w-[240px] h-[160px] border overflow-hidden bg-cover rounded-lg shadow-lg  ">
                                <img className="w-[240px] h-[160px] hover:scale-105 duration-300 ease-in-out rounded-lg " src="https://sayumiglobal.com/uploads/1705978938.jpg" alt />
                            </div>
                            <div className>
                                <p className="text-gray-500 mb-2 text-sm"> 2024-01-05</p>
                                <h1 className="text-gray-800 font-bold mb-1">Chasing the Northern Lights in Nepal</h1>
                                <p className="text-gray-500 mb-2">Step into the magical world of Lapland, where the dance of the
                                    Norther...</p>
                                <button className="text-red-500 hover:text-red-700 text-sm font-bold"> Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* review */}
            <section className="bg-[#F9FAFB] border border-gray-500 ">
                <div className="container mx-auto w-[1200px] py-12">
                    {/* review title */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl w-[500px] text-gray-800 font-bold ">Read trusted reviews from our customers</h1>
                        <div className="flex gap-4 mt-4 ">
                            <div className="w-9 h-9 rounded-full border hover:bg-[#E11D48] relative  ">
                                <i className="bi bi-chevron-left text-red-500  text-2xl hover:text-white absolute right-2   " />
                            </div>
                            <div className="w-9 h-9  rounded-full border hover:bg-[#E11D48] relative   ">
                                <i className="bi bi-chevron-right text-red-500 text-2xl hover:text-white absolute  left-2  " />
                            </div>
                        </div>
                    </div>
                    {/* customer  */}
                    <div className="flex justify-between gap-6 ">
                        {/* 1st review */}
                        <div className="w-[400px] h-[] bg-white mt-20 ">
                            <div className="p-9">
                                <img className="w-20  h-20 object-cover rounded-full" src="https://sayumiglobal.com/uploads/1733738964.jpg" alt />
                                <div className="flex gap-0.5 mt-2 mb-3">
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                </div>
                                <h1 className=" font-bold text-red-600">Traveller</h1>
                                <p className="text-gray-600 mt-2 mb-3">Booking through Sayumi was seamless, and the trip exceeded
                                    all expectations.</p>
                                <footer className="text-gray-700 font-semibold">- Anne</footer>
                            </div>
                        </div>
                        {/* 2 revirew */}
                        <div className="w-[400px] h-[] bg-white mt-20 ">
                            <div className="p-9">
                                <img className="w-20  h-20 object-cover rounded-full" src="https://sayumiglobal.com/uploads/1733738924.jpg" alt />
                                <div className="flex gap-0.5 mt-2 mb-3">
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                </div>
                                <h1 className=" font-bold text-red-600">Traveller</h1>
                                <p className="text-gray-600 mt-2 mb-3">The process was seamless, and their customer service was
                                    exceptional.</p>
                                <footer className="text-gray-700 font-semibold">- John</footer>
                            </div>
                        </div>
                        {/* 3 review */}
                        <div className="w-[400px] h-[] bg-white mt-20 ">
                            <div className="p-9">
                                <img className="w-20  h-20 object-cover rounded-full" src="https://sayumiglobal.com/uploads/1733738906.jpg" alt />
                                <div className="flex gap-0.5 mt-2 mb-3">
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                    <i className="bi bi-star-fill text-yellow-500 " />
                                </div>
                                <h1 className=" font-bold text-red-600">World Traveller</h1>
                                <p className="text-gray-600 mt-2 mb-3">I had an unforgettable experience booking through Sayumi
                                    Global.</p>
                                <footer className="text-gray-700 font-semibold">- De Alli</footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Home
