import React from 'react'
import './FirstCards.css'
// import CardCarousel from "./CardCarousel";
import imgMob from '../src/images/img-mob.png';
import imgRandom from '../src/images/img-random.png'
import imgOne from '../src/images/img-one.png';
import imgTwo from '../src/images/img-two.png';
import imgThree from '../src/images/img-three.png';
import imgFour from '../src/images/img-four.png';
import imgFive from '../src/images/img-five.png';
import imgSix from '../src/images/img-six.png';
import imgSeven from '../src/images/img-seven.png';


const FirstCards = () => {
    return (
        <>
        <div>
        <h1 className="Header-one">How we work</h1>
        <p className="Header-one" style={{fontSize: "large"}}>We strongly believe in building high impact and user-friendly Websites & Mobile Apps that help boost your venture</p>
        <div className="CardArr row">
        <div className="card text-white bg-dark mb-3 col-md-3" style={{maxWidth: "18rem" }}>
        <div className="card-header" style={{color: "GrayText",fontSize: 'large'}}>01</div>
        <div className="card-body">
            <h5 className="card-title">Planning</h5>
            <p className="card-text">Proper planning and understanding of client's web/apps requirements before its implementation in actual</p>
        </div>
        </div>

        <div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem" }}>
        <div className="card-header" style={{color: "GrayText",fontSize: 'large'}}>03</div>
        <div className="card-body">
            <h5 className="card-title">Design & Code</h5>
            <p className="card-text">After planning,We start designing & development at the same time so that we can complete the project on time.</p>
        </div>
        </div>

        <div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem" }}>
        <div className="card-header" style={{color: "GrayText",fontSize: 'large'}}>02</div>
        <div className="card-body">
            <h5 className="card-title">Planning</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>

        <div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem" }}>
        <div className="card-header" style={{color: "GrayText",fontSize: 'large'}}>03</div>
        <div className="card-body">
            <h5 className="card-title">Design & Code</h5>
            <p className="card-text">After planning,We start designing & development at the same time so that we can complete the project on time.</p>
        </div>
        </div>
        </div>

        <div className="parent-container">
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">SERVICES WE OFFER</h5>
                    <p className="card-text">We know how to build your brand visibility, it requires a combination of sophisticated Mobile App Development, website design, development, and SEO techniques. We provide access for our clients to the range of specialized digital strategies.</p>
                    <button type="button" className="btn btn-outline-dark">Read More</button>
                </div>
            </div>
        </div>
        </div>
        <div>

        {/* <CardCarousel /> */}
        </div>
        <div>
        <h1 className="Header-one">Why Choose Adixsoft?</h1>
        </div>

        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                <img src={imgMob} className="rounded float-end" alt="name"></img>
                <h1 className="text-header">Proven Success & High ROI</h1>
                <br></br>
                <p>Adixsoft is a leading name in website/Apps designing and development. We use up to date technologies in designing and developing websites & Apps. We are highly concerned about the 
                    success of our clients and thus, we are adorned by a team of highly skilled & experienced programmers, developers, 
                    designers and online marketing experts who have abilities in handling complex projects and deriving success out of it. We help our clients in generating outstanding ROI.</p>
                {/* <figure className="figure">
                <img src={imgRandom} className="figure-img img-fluid rounded" alt="..."/>
                <figcaption className="figure-caption">A caption for the above image.</figcaption>
                </figure> */}
                </div>
            </div>
        </div>

        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">

            <button type="button" className="btn btn-outline-danger btn-lg">Get A Quote Now</button>
                </div>
                </div>
                </div>
        
        
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <h1 className="Header-one">Our Work</h1>
                    <p className="Header-one" style={{fontSize: "large"}}>Our digitally focused web development and designing services help businesses make quick & high profits from the web by reaching more target audiences with their brilliant presence.</p>
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
                </div>
                </div>
                </div>
        </>
    )
}

export default FirstCards
