import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-screen"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-white">TRAVEL TO DISCOVER THE WORLD</h2>
                    <p className="text-white">tourism have become an essential part of our life as it refreshes the mind and reduces stress. It is also one of the fastest-growing industry</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-screen"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-white">EXPRIENCE FREEDOM</h2>
                    <p className=" text-white">A tourism region is a geographical region that has been designated by a governmental organization or tourism bureau as having common cultural </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full ">
                <img
                    className="d-block w-screen h-screen"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption className="banner_description align-middle">
                    <h2 className="text-5xl text-white">CHANGE THE WHY YOU THINK</h2>
                    <p className=" text-white">Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;