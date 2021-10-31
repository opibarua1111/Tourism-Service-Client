import React from 'react';

const Footer = () => {
    const fb = <i className="fab fa-facebook-square"></i>
    const twitter = <i class="fab fa-twitter-square"></i>
    const google = <i class="fab fa-google-plus-g"></i>
    return (
        <div className="w-full h-60 bg-indigo-300 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-5">
            <div className="">
                <h1 className="text-5xl pt-3 text-white bold">TOURISM</h1>
                <p className="text-sm pt-2 text-gray-700">Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists.</p>
            </div>
            <div className="bg-indigo-300">
                <h5 className="extrabold text-gray-800 mt-5 text-4xl mb-2">SUBSCRIBE</h5>
                <input type="text" className="w-60 rounded-lg h-10 round-lg mb-2" />
                <br />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 duration-300 hover:scale-110 focus:outline-none poppins rounded-full mt-0 transform transition mb-2">Subscribe</button>
            </div>
            <div className="bg-indigo-300">
                <div className="flex pb-2 justify-center">
                    <div class=" text-white lg:mt-20 ml-5 text-5xl">{fb}</div>
                    <div class=" text-white lg:mt-20 ml-5 text-5xl">{twitter}</div>
                    <div class=" text-white lg:mt-20 ml-5 text-5xl">{google}</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;