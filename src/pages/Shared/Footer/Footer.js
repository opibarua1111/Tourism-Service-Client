import React from 'react';

const Footer = () => {
    const fb = <i class="fab fa-facebook-f"></i>
    const twitter = <i class="fab fa-twitter"></i>
    const google = <i class="fab fa-google"></i>
    return (
        <div className="bg-red-300">
            <div className="w-full h-60  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-5 container">
                <div >
                    <img className="mx-auto pt-3" src="https://i.ibb.co/By8JxgC/tourism-icon.png" width="20%" alt="" />
                    <h1 className="text-5xl pt-3 text-gray-700 bold">TOURISM</h1>
                    <p className="text-sm pt-2 text-gray-700">Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists.</p>
                </div>
                <div className="">
                    <h5 className="extrabold text-gray-800 mt-5 text-4xl mb-2">SUBSCRIBE</h5>
                    <input type="text" className="w-60 rounded-lg h-10 round-lg mb-2" />
                    <br />
                    <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 duration-300 hover:scale-110 focus:outline-none poppins rounded-full mt-0 transform transition mb-2">Subscribe</button>
                </div>
                <div className="">
                    <div className="flex pb-2 justify-center">
                        <div className="  lg:mt-20 ml-5 text-2xl w-11 h-11 rounded-full bg-blue-800 hover:bg-blue-50 text-blue-50 hover:text-blue-800 flex items-center justify-center"><a href="https://www.facebook.com/opi.barua.56/">{fb}</a></div>
                    <div className=" text-blue-50 hover:text-blue-400 lg:mt-20 ml-5 text-2xl w-11 h-11 rounded-full bg-blue-400 hover:bg-blue-50 flex items-center justify-center"><a href="#" className="hover:text-blue-400">{twitter}</a></div>
                        <div className=" text-red-50 hover:text-red-800 lg:mt-20 ml-5 text-2xl w-11 h-11 rounded-full bg-red-800 hover:bg-red-50 flex items-center justify-center"><a href="#" className="hover:text-red-800">{google}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;