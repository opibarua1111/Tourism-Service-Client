import React from 'react';

const Gellary = () => {
    return (
        <div>
            <h2 className="text-gray-700 text-4xl mt-10">Our Gellary</h2>
            <div className="mb-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                <div>
                    <img className="rounded-xl" src="https://i.ibb.co/xjzKYyD/tourism1.jpg" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="https://i.ibb.co/tHDsfQ8/tourism2.jpg" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="https://i.ibb.co/g32ZJ6V/tourism3.jpg" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="https://i.ibb.co/C6Szwtt/tourism4.jpg" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="https://i.ibb.co/bQxDbq4/tourism5.jpg" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="https://i.ibb.co/K9MtZN6/tourism6.jpg" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="https://i.ibb.co/HNg1cPQ/tourism7.jpg" alt="" />
                </div>
                <div>
                    <img className="rounded-xl" src="https://i.ibb.co/KhN0DYV/tourism8.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gellary;