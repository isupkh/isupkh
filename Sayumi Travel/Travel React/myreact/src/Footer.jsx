import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                {/* footer top */}
                <div className="container mx-auto w-[1100px] flex gap-20 justify-between py-10">
                    <div className=" w-[300px]">
                        <h1 className="text-blue-800 font-bold mb-4">About Sayumi Global</h1>
                        <p className="text-gray-600">Sayumi Global Travels: Your passport to unforgettable adventures and cultural
                            discovery.</p>
                    </div>
                    <div className="cursor-default mr-12">
                        <h1 className="text-blue-800 font-bold">Quick Links</h1>
                        <ul className="mt-3 text-gray-600">
                            <li className="hover:text-blue-600">Home</li>
                            <li className="mt-2 hover:text-blue-600">Destinations</li>
                            <li className="mt-2 hover:text-blue-600">Packages</li>
                            <li className="mt-2 hover:text-blue-600">Our Teams</li>
                        </ul>
                    </div>
                    <div className="cursor-default mr-12">
                        <h1 className="text-blue-800 font-bold">Helpful Links</h1>
                        <ul className="mt-3 text-gray-600">
                            <li className="hover:text-blue-600">Terms and Condition</li>
                            <li className="mt-2 hover:text-blue-600">Privacy Policy</li>
                            <li className="mt-2 hover:text-blue-600"> FAQ</li>
                        </ul>
                    </div>
                    <div className="cursor-default">
                        <h1 className="text-blue-800 font-bold">Contact Info</h1>
                        <ul className="mt-3 text-gray-600">
                            <li className="hover:text-blue-600"><i className="bi bi-geo-alt" /> Devchuli-15,Nawalpur</li>
                            <a target="_blank" href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ASKV5MhAdQDUQ08-EnZa_62a2-AKWlBnA8YKCJ23OFzjrsk6xDMbg-qCuOeCNFfNaxdSVUSxqRTMAQ&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-2009801425%3A1747574065805765">
                                <li className="mt-3 hover:text-blue-600"><i className="bi bi-envelope" /> info@sayumiglobal.com</li>
                            </a>
                            <li className="mt-3 hover:text-blue-600"><i className="bi bi-telephone" /> 078575216 , 9864675790</li>
                            <li className="mt-3 hover:text-blue-600"><i className="bi bi-telephone" /> 9857048815 , 9818708806</li>
                        </ul>
                        <div className="hover:scale-105 duration-300">
                            <button className="px-9 bg-blue-600 rounded-md text-sm py-2 text-white font-semibold mt-5 shadow-lg hover:bg-blue-700 ">Translate
                                Language </button>
                        </div>
                    </div>
                </div>
                {/* footer bottom */}
                <div className="bg-[#F9FAFB]">
                    <div className="container mx-auto w-[1200px]  flex justify-between py-6">
                        <p className=" text-gray-700">© 2024 Sayumi Travels . All Rights Reserved</p>
                        <p className=" text-gray-700">Powered by <a target="_blank" href="https://softsaro.com/"><span className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Softsaro
                            Nepal</span></a>
                        </p>
                        <div className="flex gap-3">
                            <img className="w-6 h-6 hover:scale-105 duration-200" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt />
                            <img className="w-6 h-6 hover:scale-105 duration-200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s" alt />
                            <img className="w-7 h-8 hover:scale-105 duration-200 " src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt />
                        </div>
                    </div>
                </div>
                {/* whats app logo */}
                <div className="relative">
                    <div className="fixed right-0 bottom-0 mb-5 mr-8 cursor-pointer ">
                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=9779857048815&text&type=phone_number&app_absent=0"><img className="w-[60px] " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
