"use client";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Image from "next/image";

export default function Membres() {
  const members = [
    { src: "/img/membres/lina.jpg", name: "Zerouali Lina", role: "Présidente", email: "linazerouali07@gmail.com" },
    { src: "/img/douaeghoulaichi.jpg", name: "Ghoulaichi Douae", role: "Vice Présidente", email: "ghoulaichidouae@gmail.com" },
    { src: "/img/sahar.jpg", name: "El Yaacoubi Sahar", role: "Secrétaire", email: "Saharelyaacoubi@gmail.com" },
    { src: "/img/hiba.jpg", name: "Ismaili Hiba", role: "Chargée de Médias", email: "ismaili.hiba.07@gmail.com" },
    { src: "/img/aya.jpg", name: "Fakihi Aya", role: "Graphic Designer", email: "Aya8fakihi@gmail.com" },
    { src: "/img/ahlam.jpg", name: "Elgareh Ahlam", role: "Trésorière", email: "ahlamelgareh0123@gmail.com" }
  ];

  return (
    <>
      <Navbar />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            {members.map((member, idx) => (
              <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay={`${0.3 + idx * 0.1}s`} key={idx}>
                <div className="team-item bg-light rounded overflow-hidden">
                  <div className="team-img position-relative" style={{ height: '300px' }}>
  <Image
    src={member.src}
    alt={member.name}
    fill
    style={{ objectFit: 'cover' }}
  />
  <div className="team-social">
    <a className="btn btn-square" href={`mailto:${member.email}`}>
      <i className="fa fa-envelope"></i>
    </a>
  </div>
</div>
                  <div className="text-center py-4">
                    <h5 className="text-primary">{member.name}</h5>
                    <p className="m-0">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
