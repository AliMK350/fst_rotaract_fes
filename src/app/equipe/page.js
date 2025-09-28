"use client"

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

export default function Equipe() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust time if needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-pink" role="status" style={{ width: "3rem", height: "3rem", color: "pink" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div
        className="container-fluid bg-light py-5 mb-5"
        style={{
          backgroundImage: "url('/img/uni1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center py-5">
          <h1 style={{ color: "pink" }} className="display-1 animated slideInLeft">Notre histoire</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center animated slideInLeft mb-0">
              <li className="breadcrumb-item"><a className="text-primary" href="/accueil">Home</a></li>
              <li className="breadcrumb-item"><a className="text-primary" href="/blog">Blog</a></li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-fluid d-flex justify-content-center align-items-center py-5" style={{ minHeight: "100vh" }}>
        <div className="card w-100 shadow-lg" style={{ maxWidth: "900px" }}>
          <div className="card-body p-4">
            <div className="d-flex mb-3">
              <small className="me-3">
                <i className="far fa-user text-primary me-2"></i>Our team
              </small>
              <small>
                <i className="far fa-calendar-alt text-primary me-2"></i>2025
              </small>
            </div>
            <h4 className="mb-3">Notre histoire</h4>
            <p>
              Depuis ses débuts, le club a su préserver une double identité : celle d’un lieu de service à la communauté et celle d’une véritable école de vie où chaque membre apprend à travailler en équipe, à développer son sens du leadership et à cultiver des liens d’amitié forts.
              <br /><br />
              Au fil des années, le Rotaract FST Fès a marqué son empreinte à travers des projets humanitaires, éducatifs, culturels et environnementaux qui reflètent l’esprit de créativité et d’innovation de ses membres.
              <br /><br />
              Mais au-delà des actions visibles, le club a surtout construit une culture d’appartenance : chaque étudiant qui y adhère ne trouve pas seulement une opportunité de bénévolat, mais une famille où il peut évoluer, partager et s’épanouir. Ainsi, depuis plus d’une décennie, le Rotaract FST Fès reste fidèle à sa mission : former des jeunes engagés, conscients et solidaires, capables d’avoir un impact positif sur leur environnement immédiat et bien au-delà.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
