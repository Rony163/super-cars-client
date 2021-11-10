import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import AllCollections from '../AllCollections/AllCollections';

const SharedCollections = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AllCollections></AllCollections>
            <Footer></Footer>
        </div>
    );
};

export default SharedCollections;