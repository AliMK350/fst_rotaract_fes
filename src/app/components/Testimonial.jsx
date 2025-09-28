"use client";

import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 className="mb-0">Un mot de notre pésidente</h1>
        </div>

        <div className="testimonial-item bg-light shadow p-4 mx-auto" style={{ maxWidth: "500px", borderRadius: "15px" }}>
          <div className="d-flex align-items-center border-bottom pb-3 mb-3">
            <Image 
              src="/img/membres/lina.jpg"
              alt="Lina Zerouali"
              width={60}
              height={60}
              className="circle"
            />
            <div className="ps-3">
              <h5 className="mb-0 text-secondary">Lina Zerouali</h5>
              <small className="text-uppercase">Présidente</small>
            </div>
          </div>
          <p className="mb-0">
            It is with great pride that I take on the presidency of Rotaract FST for this new year. Our club will continue to uphold the values of solidarity, service, and friendship, while strengthening the impact of our actions within the community. Together, with energy and commitment, we will build a year full of projects and achievements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
