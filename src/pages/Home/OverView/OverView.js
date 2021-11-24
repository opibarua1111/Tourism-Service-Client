import React from 'react';

const OverView = () => {
    return (
        <div className="container pb-6">
            <h1 className="text-4xl mb-5">Overview</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div className="bg-purple-200 p-7 rounded-lg">
                    <i className="fab fa-codepen text-indigo-500 text-7xl"></i>
                    <h3 className="text-2xl normal">20</h3>
                    <h3 className="text-3xl font-bold">Years of Experience</h3>
                </div>
                <div className="bg-purple-200 p-7 rounded-lg">
                    <i className="far fa-clone text-indigo-500 text-7xl"></i>
                    <h3 className="text-2xl normal">120</h3>
                    <h3 className="text-3xl font-bold">Certificates</h3>
                </div>
                <div className="bg-purple-200 p-7 rounded-lg">
                    <i className="fas fa-suitcase-rolling text-indigo-500 text-7xl"></i>
                    <h3 className="text-2xl normal">7000+</h3>
                    <h3 className="text-3xl font-bold">Happy Tourism</h3>
                </div>
            </div>
        </div>
    );
};

export default OverView;