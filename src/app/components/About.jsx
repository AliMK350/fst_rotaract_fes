// ./components/About.jsx

const About = () => {
    return (
        // About Start
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            {/* Images */}
                            <div className="col-6 text-end">
                                <img className="img-fluid w-75 wow zoomIn" data-wow-delay="0.1s" src="/img/hero-slider-1.jpg" style={{ marginTop: '25%' }} alt=" img4" />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid w-100 wow zoomIn" data-wow-delay="0.3s" src="/img/hero-slider-2.jpg" alt="img1" />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid w-50 wow zoomIn" data-wow-delay="0.5s" src="/img/hero-slider-3.jpg" alt="img2" />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid w-75 wow zoomIn" data-wow-delay="0.7s" src="/img/hero-slider-4.jpg" alt="im3" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="text text-uppercase mb-3" style={{ letterSpacing: '5px', color:"pink"}}>About Us</h5>
                        <h1 className="display-5 mb-4">We are the Rotaract FST</h1>
                        <p className="mb-4">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat 
                            amet
                        </p>
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-check text-dark"></i>
                                    </div>
                                    <h5 className="mb-0">In over 40 countries</h5>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-check text-dark"></i>
                                    </div>
                                    <h5 className="mb-0">17000 member</h5>
                                </div>
                            </div>
                        </div>
                        <a href="" className="btn btn-primary py-3 px-5">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        // About End
    );
}

export default About;