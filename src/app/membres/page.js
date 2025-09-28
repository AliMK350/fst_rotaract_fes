"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Image from "next/image";

export default function Membres() {
  const [loading, setLoading] = useState(true);

  const members = [
    { src: "/img/membres/lina.jpg", name: "Zerouali Lina", role: "Présidente", email: "linazerouali07@gmail.com" },
    { src: "/img/douaeghoulaichi.jpg", name: "Ghoulaichi Douae", role: "Vice Présidente", email: "ghoulaichidouae@gmail.com" },
    { src: "/img/sahar.jpg", name: "El Yaacoubi Sahar", role: "Secrétaire", email: "saharelyaacoubi@gmail.com" },
    { src: "/img/hiba.jpg", name: "Ismaili Hiba", role: "Chargée de Médias", email: "ismaili.hiba.07@gmail.com" },
    { src: "/img/basma.jpg", name: "Maarouf Basma", role: "Adjointe secrétaire", email: "basmamaarouf041@gmail.com" },
    { src: "/img/aya.jpg", name: "Fakihi Aya", role: "Graphic Designer", email: "aya8fakihi@gmail.com" },
    { src: "/img/ahlam.jpg", name: "Elgareh Ahlam", role: "Trésorière", email: "ahlamelgareh0123@gmail.com" },
    { src: "/img/louaye.jpg", name: "Hayani Louaye", role: "Chef de Protocole", email: "hayaniajilouaye@gmail.com"},
    { src: "/img/ahmed.jpg", name: "Dalli Ahmed", role: "Chef de Sponsoring", email: " dalliahmed822@gmail.com"},
    { src: "/img/ayoub1.jpg", name: "Afoudi Ayoub", role: "Chef d’Organisation", email: "Ayoubafoudi99@gmail.com"},
    { src: "/img/ayah.jpg", name: "Hallioui Aya", role: "Conseillère ", email: "lvaliente633@gmail.com"},
    { src: "/img/hamza.jpg", name: "El Ogri Hamza", role: "Adjoint Chef d’Organisation ", email: "hamza77721@gmail.com"},
  ];

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
