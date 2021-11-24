import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-screen"
                    src="https://i.ibb.co/d5rHWSc/tourism-bg1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="banner_description md:w-6/12">
                    <h2 className="text-5xl text-white">TRAVEL TO DISCOVER THE WORLD</h2>
                    <p className="text-xl  text-white">tourism have become an essential part of our life as it refreshes the mind and reduces stress. It is also one of the fastest-growing industry</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-screen"
                    src="https://i.ibb.co/8mnqkfh/tourism-bg2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="banner_description md:w-6/12">
                    <h2 className="text-5xl text-white">EXPRIENCE FREEDOM</h2>
                    <p className="text-xl text-white">A tourism region is a geographical region that has been designated by a governmental organization or tourism bureau as having common cultural </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full ">
                <img
                    className="d-block w-screen h-screen"
                    src="https://i.ibb.co/tK2LxJw/tourism-bg3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="banner_description md:w-6/12">
                    <h2 className="text-5xl text-white">CHANGE THE WHY YOU THINK</h2>
                    <p className="text-xl text-white">Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;