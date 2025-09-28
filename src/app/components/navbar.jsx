"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JS so collapse works
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="container-fluid bg-white sticky-top p-0">
      <nav className="navbar navbar-expand-lg navbar-light p-0">
        {/* Brand Logo/Link */}
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-3 py-0 me-0"
          style={{ height: "60px" }}
        >
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
            <a href="/accueil" className="nav-item nav-link active">
              Home
            </a>
            <a href="/membres" className="nav-item nav-link">
              Nos membres
            </a>
            <a href="/blog" className="nav-item nav-link">
              Blog
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="d-flex">
            <a
              className="btn btn-primary btn-sm-square me-3"
              href="https://www.facebook.com/share/1BaSkjBnSJ/?mibextid=wwXIfr"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-primary btn-sm-square me-3"
              href="https://www.instagram.com/rotaractfstfes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
