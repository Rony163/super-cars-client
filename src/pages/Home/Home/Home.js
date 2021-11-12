import React from 'react';
import Reviews from '../../ManageReview/Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import NewCollection from '../NewCollection/NewCollection';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Products></Products>
            <NewCollection></NewCollection>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;