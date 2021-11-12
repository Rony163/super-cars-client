import { Grid } from '@mui/material';
import React from 'react';
import futureCar from '../../../images/futureCar.jpg';

const NewCollection = () => {
    return (
        <div className="mb-5">
            <h1 className="mt-5 mb-5 text-info">Upcomming Car</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <h2>Future Super Car</h2>
                    <p>With "only" around 1,000 horsepower, the V6-powered Aston Martin Valhalla isn't quite the bonkers hypercar that its big-brother Valkyrie is. It should still be an absolutely mental rocketship, however, and with such power emanating from a hybrid-assisted twin-turbo V6, it promises to offer a rather unique driving experience. Only 500 are slated for production and unless you're James Bond, they're already spoken for.This car is looking so beautiful. That doesn't dampen our enthusiasm to see this hypercar on the street in 2040.</p>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img className="img-fluid p-3" src={futureCar} alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default NewCollection;