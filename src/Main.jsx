import React from 'react';
import imgOne from '../src/images/img-one.png';
import imgTwo from '../src/images/img-two.png';
import imgThree from '../src/images/img-three.png';
import imgFour from '../src/images/img-four.png';
import imgFive from '../src/images/img-five.png';
import imgSix from '../src/images/img-six.png';
import imgSeven from '../src/images/img-seven.png';
import FirstCards from './FirstCards';

const Main = () => {
    return (
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={imgOne} className="d-block w-100" alt="imgone"/>
            </div>
            <div className="carousel-item">
                <img src={imgTwo} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={imgThree} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={imgFour} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={imgFive} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={imgSix} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={imgSeven} className="d-block w-100" alt="..."/>
            </div>
        </div>
        </div>
        <FirstCards/>
        </>
    )
}

export default Main
