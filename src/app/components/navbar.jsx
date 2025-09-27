// ./components/Navbar.jsx
import React from 'react';
import Image from 'next/image'; // Next.js optimized image component

const Navbar = () => {
    return (
        <div className="container-fluid bg-white sticky-top p-0">
            {/* HNA KAYN MOUCHKILA DYAL TEL */}
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                {/* Brand Logo/Link */}
                <a href="/" className="navbar-brand d-flex align-items-center px-3 py-0 me-0" style={{ height: "60px" }}>
  <Image 
    src="/img/logo-rotaract.png"
    alt="Rotaract Logo"
    width={400}
    height={200}
    style={{ objectFit: "contain" }}
  />
</a>

                
                {/* Toggler Button */}
                <button 
                    type="button" 
                    className="navbar-toggler me-4" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Navigation Links */}
                <div className="collapse navbar-collapse p-3" id="navbarCollapse">
                    <div className="navbar-nav mx-auto">
                        <a href="/accueil" className="nav-item nav-link active">Home</a>
                        <a href="/membres" className="nav-item nav-link">Nos membres</a>
                        <a href="/blog" className="nav-item nav-link">Blog</a>
                        {/* Dropdown */}
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light mt-2">
                                <a href="/gallery" className="dropdown-item">Photo Gallery</a>
                                <a href="/blog" className="dropdown-item">Beauty Blog</a>
                                <a href="/team" className="dropdown-item">Our Team</a>
                                <a href="/testimonial" className="dropdown-item">Testimonial</a>
                                <a href="/404" className="dropdown-item">404 Page</a>
                            </div>
                        </div> */}
                        
                        {/* <a href="/contact" className="nav-item nav-link">Contact</a> */}
                    </div>
                    
                    {/* Social Media Icons */}
                    <div className="d-flex">
                        <a className="btn btn-primary btn-sm-square me-3" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-primary btn-sm-square me-3" href=""><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-primary btn-sm-square" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
