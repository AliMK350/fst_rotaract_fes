"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function FaireUnDon() {
  const [loading, setLoading] = useState(true);

  const members = [
    { name: "Ahlam Elgareh", phone: "+212612468992", photo: "/img/ahlam.jpg" },
    { name: "Hiba Ismaili", phone: "+212655975243", photo: "/img/hiba.jpg" },
    { name: "Louaye Hayani", phone: "+212621582778", photo: "/img/louaye.jpg" },
  ];

  const rib = "007270000587530040274811";

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "3rem", height: "3rem", color: "pink" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="container-fluid bg-light py-5 mb-5"
        style={{
          backgroundImage: "url('/img/uni1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center py-5">
          <h1 style={{ color: "pink" }} className="display-1 animated slideInLeft">
            Faire un don
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center animated slideInLeft mb-0">
              <li className="breadcrumb-item">
                <a className="text-primary" href="/accueil">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-primary" href="/blog">
                  Blog
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Faire un don
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Donation Members Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="mb-3">Nos membres responsables des dons</h2>
          <div className="container py-5">
  <div
    className="text-center p-4 mb-5 rounded shadow"
    style={{ backgroundColor: "#ffc0cb" }} // joli rose pastel
  >
    <p className="mb-3" style={{ fontSize: "1.1rem" }}>
      Bienvenue sur notre page de dons ! Votre générosité nous aide à réaliser nos projets humanitaires, à fournir de la nourriture aux personnes dans le besoin et à faire des actions de rénovations. Chaque contribution compte et nous rapproche de notre objectif : construire une communauté plus solidaire et bienveillante. Merci pour votre soutien !
    </p>
    <p className="mb-0" style={{ fontSize: "1rem", fontWeight: "500" }}>
      Contactez-les directement pour toute information concernant les dons.
    </p>
  </div>
</div>

        </div>

        <div className="row justify-content-center mb-5">
          {members.map((member, index) => (
            <div key={index} className="col-md-4 text-center mb-4">
              <div className="card p-3 shadow-sm">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="rounded-circle mb-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover", margin: "0 auto" }}
                />
                <h4 className="mb-2">{member.name}</h4>
                <p>Téléphone : {member.phone}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="mb-3">RIB pour vos dons :</h3>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{rib}</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
