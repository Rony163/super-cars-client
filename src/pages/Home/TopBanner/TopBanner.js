import React from 'react';
import { Carousel } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div>
            <Carousel variant="dark" className="mt-5" >
                <Carousel.Item className="mt-2">
                    <img
                        className="d-block banner"
                        src="https://www.teahub.io/photos/full/155-1556951_supercars-hd-wallpapers-1080p-download-supercar-wallpaper-hd.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-white bannerText">
                        <h1>Take a ride on this car</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="mt-2">
                    <img
                        className="d-block banner"
                        src="https://wallpaperaccess.com/full/145594.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-white bannerText">
                        <h1>Take a ride on this car</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="mt-2">
                    <img
                        className="d-block banner"
                        src="https://images6.alphacoders.com/685/thumb-1920-685698.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-white bannerText">
                        <h1>Take a ride on this car</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopBanner;