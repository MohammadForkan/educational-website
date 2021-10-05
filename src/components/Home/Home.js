import React from 'react';
import AllServices from '../AllServices/AllServices';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllServices></AllServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;