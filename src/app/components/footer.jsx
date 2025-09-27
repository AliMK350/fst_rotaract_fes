// ./components/Footer.jsx

const Footer = () => {
    return (
        // Footer Start
        <div className="container-fluid bg-dark text-secondary mt-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5">
                    
                    {/* Column 1: Get In Touch */}
                    <div className="col-lg-4 col-md-6">
                        <h3 className="text-white mb-4">Get In Touch</h3>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    
                    {/* Column 2: Quick Links */}
                    <div className="col-lg-4 col-md-6">
                        <h3 className="text-white mb-4">Quick Links</h3>
                        <a className="btn btn-link" href="">About Us</a>
                        <a className="btn btn-link" href="">Contact Us</a>
                        <a className="btn btn-link" href="">Our Services</a>
                        <a className="btn btn-link" href="">Terms & Condition</a>
                        <a className="btn btn-link" href="">Support</a>
                    </div>
                    
                    {/* Column 3: Newsletter */}
                    <div className="col-lg-4 col-md-6">
                        <h3 className="text-white mb-4">Newsletter</h3>
                        <p>Dolor clita stet nonumy clita-clita dolore. Sit et ipsum anim nonumy nonumy</p>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ height: '48px' }} />
                            <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 mt-1 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved. Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0">Distributed By <a className="text-white border-bottom" href="https://themewagon.com">ThemeWagon</a></p>
                    </div>
                </div>
            </div>
        </div>
        // Footer End
    );
}

export default Footer;