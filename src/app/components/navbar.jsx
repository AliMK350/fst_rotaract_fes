"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="container-fluid bg-white sticky-top p-0 shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light px-4 py-2">

        {/* Brand Logo */}
        <a href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src="/img/logo-rotaract.png"
            alt="Rotaract Logo"
            width={250}  // Bigger logo width
            height={80}  // Fixed height
            style={{ objectFit: "contain" }}
          />
        </a>

        {/* Hamburger / Toggler */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;charset=utf8,%3Csvg viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath stroke=\"pink\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4 7h22M4 15h22M4 23h22\"/%3E%3C/svg%3E')",
            }}
          ></span>
        </button>

        {/* Links + Social Icons */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <a href="/accueil" className="nav-item nav-link active">Home</a>
            <a href="/membres" className="nav-item nav-link">Nos membres</a>
            <a href="/blog" className="nav-item nav-link">Blog</a>
            <a href="/contact" className="nav-item nav-link">Contact</a>
            <a href="/don" className="nav-item nav-link">Faire un don</a>
          </div>

          <div className="d-flex ms-lg-3">
            <a className="btn btn-primary btn-sm-square me-2" href="https://www.facebook.com/share/1BaSkjBnSJ/?mibextid=wwXIfr">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-primary btn-sm-square" href="https://www.instagram.com/rotaractfstfes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
