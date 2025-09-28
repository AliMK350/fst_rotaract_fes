// ./components/Hero.jsx

import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        // Hero Start
        <div className="container-fluid p-0 hero-header bg-light mb-5">
            <div className="container p-0">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6 hero-header-text py-5">
                        <div className="py-5 px-3 ps-lg-0">
                            {/* Assuming you have a font that handles the 'font-dancing-script' class, 
                                otherwise this text will use the default font. */}
                            <h1 className="font-dancing-script text-primary animated slideInLeft">Welcome</h1>
                            <h1 className="display-1 mb-4 animated slideInLeft" style={{color:'white'}}>Site web du club Rotaract FST Fes</h1>
                            <div className="row g-4 animated slideInLeft">
                                
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center">
                                        {/* Mail Icon */}
                                        <div className="btn-square btn btn-primary flex-shrink-0">
                                            <a href='mailto:rotaract.clubfstfes.myrotary@gmail.com'><i className="fa fa-envelope text-dark"></i></a>
                                        </div>
                                        <div className="px-3">
                                            <h5 className="text-primary mb-0">Mail Us</h5>
                                            <p className="fs-5 text mb-0" style={{color:'white'}}>rotaract.clubfstfes.myrotary@gmail.com </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Carousel Section */}
                    <div className="col-lg-6">
                        {/* NOTE: The 'owl-carousel' class relies on 'main.js' to initialize the slider
                             because we correctly loaded the JS in layout.tsx. */}
                        <div className="owl-carousel header-carousel animated fadeIn">
<Image
  src="/img/img5.jpg"
  alt="carousel image 1"
  fill
  className="img-fluid position-relative"
/>

<Image
  src="/img/img3.jpg"
  alt="carousel image 2"
  fill
  className="img-fluid position-relative"
/>

<Image
  src="/img/logo-rotaract.png"
  alt="Rotaract Logo"
  fill
  className="img-fluid position-relative"
/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Hero End
    );
}

export default Hero;