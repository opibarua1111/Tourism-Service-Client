import React from 'react';
import Banner from '../Banner/Banner';
import Gellary from '../Gellary/Gellary';
import OverView from '../OverView/OverView';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gellary></Gellary>
            <OverView></OverView>
        </div>
    );
};

export default Home;