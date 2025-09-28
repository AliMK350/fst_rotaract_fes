"use client"
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

export default function Blog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // optional delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status" style={{ width: '4rem', height: '4rem', color: 'pink' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid blog p-0">
        <div className="row g-0">
          {/* First div */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
              <p className="mb-2">
                <i className="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | 
                <i className="fa fa-folder-open text-dark me-1"></i>Bab ftouh
              </p>
              <h3 className="mb-3">Our best work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
            </div>
          </div>

          {/* Second div (image) */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <div className="h-100 position-relative" style={{ height: '100%' }}>
              <Image
                src="/img/img10.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Third div */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
              <p className="mb-2">
                <i className="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | 
                <i className="fa fa-folder-open text-dark me-1"></i>FST Fes
              </p>
              <h3 className="mb-3">Last thing we did</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
            </div>
          </div>

          {/* Fourth div (image) */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
            <div className="h-100 position-relative" style={{ height: '100%' }}>
              <Image
                src="/img/img11.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Fifth div */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
              <p className="mb-2">
                <i className="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | 
                <i className="fa fa-folder-open text-dark me-1"></i>Bab ftouh
              </p>
              <h3 className="mb-3">Our best work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
            </div>
          </div>

          {/* Sixth div (image) */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <div className="h-100 position-relative" style={{ height: '100%' }}>
              <Image
                src="/img/img8.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Seventh div */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
              <p className="mb-2">
                <i className="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | 
                <i className="fa fa-folder-open text-dark me-1"></i>Bab ftouh
              </p>
              <h3 className="mb-3">Our best work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
            </div>
          </div>

          {/* Eighth div (image) */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <div className="h-100 position-relative" style={{ height: '100%' }}>
              <Image
                src="/img/img5.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
