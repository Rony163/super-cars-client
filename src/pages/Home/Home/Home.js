import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Collections from '../Collections/Collections';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Collections></Collections>
            <Footer></Footer>
        </div>
    );
};

export default Home;