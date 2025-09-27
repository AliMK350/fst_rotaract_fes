// ./components/Hero.jsx

import React from 'react';

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
                                        {/* Phone Icon */}
                                        <div className="btn-square btn btn-primary flex-shrink-0" style={{color:"pink"}}>
                                            <i className="fa fa-phone text-dark"></i>
                                        </div>
                                        <div className="px-3">
                                            <h5 className="text-primary mb-0">Call Us</h5>
                                            <p className="fs-5 text-dark mb-0">+123456789</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center">
                                        {/* Mail Icon */}
                                        <div className="btn-square btn btn-primary flex-shrink-0">
                                            <i className="fa fa-envelope text-dark"></i>
                                        </div>
                                        <div className="px-3">
                                            <h5 className="text mb-0">Mail Us</h5>
                                            <p className="fs-5 text mb-0" style={{color:'white'}}>info@domain.com</p>
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
                            <img className="img-fluid" src="/img/hero-slider-4.jpg" alt="Hair Salon Model 1" />
                            <img className="img-fluid" src="/img/hero-slider-5.jpg" alt="Hair Salon Model 2" />
                            <img className="img-fluid" src="/img/hero-slider-4.jpg" alt="Hair Salon Model 3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Hero End
    );
}

export default Hero;