"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Equipe() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un petit délai de chargement
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
            FST de Fes
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
                FST
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div
        className="container-fluid d-flex justify-content-center align-items-center py-5"
        style={{ minHeight: "100vh" }}
      >
        <div className="card w-100 shadow-lg" style={{ maxWidth: "900px" }}>
          <div className="card-body p-4">
            <div className="d-flex mb-3">
              <small className="me-3">
                <i className="far fa-user text-primary me-2"></i>
                Universit&eacute; Sidi Mohammed Ben Abdellah de F&egrave;s
              </small>
              <small>
                <i className="far fa-calendar-alt text-primary me-2"></i>2025
              </small>
            </div>
            <h4 className="mb-3">
              A propos de la Facult&eacute; des Sciences et Techniques de F&egrave;s (FST F&egrave;s)
            </h4>
            <p>
              La Facult&eacute; des Sciences et Techniques de F&egrave;s est une institution universitaire publique situ&eacute;e &agrave; F&egrave;s, l&apos;une des villes universitaires les plus importantes du Maroc. Elle est int&eacute;gr&eacute;e au r&eacute;seau des Facult&eacute;s des Sciences et Techniques r&eacute;parties &agrave; travers le pays. La FST F&egrave;s est rattach&eacute;e &agrave; l&apos;Universit&eacute; Sidi Mohamed Ben Abdellah et est sous la supervision du minist&egrave;re de l&apos;Enseignement sup&eacute;rieur, de la Recherche scientifique et de l&apos;Innovation. Elle se sp&eacute;cialise dans l&apos;enseignement sup&eacute;rieur, la recherche scientifique et technique, ainsi que dans la formation d&apos;ing&eacute;nieurs et de cadres, incluant la formation continue.
              <br />
              La Facult&eacute; des Sciences et Techniques de F&egrave;s (FST F&egrave;s) a &eacute;t&eacute; cr&eacute;&eacute;e en 1995. Les facult&eacute;s des Sciences et Techniques sont des &eacute;tablissements universitaires scientifiques et techniques. Elles ont &eacute;t&eacute; cr&eacute;&eacute;es pour d&eacute;velopper et diversifier les formations offertes aux bacheliers scientifiques pour une meilleure int&eacute;gration de l&apos;Universit&eacute; dans son environnement &eacute;conomique et social.
              <br />
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
