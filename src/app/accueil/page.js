"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';

export default function Accueil() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate page loading
    const timer = setTimeout(() => setLoading(false), 500); // adjust if needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="spinner-border text-pink"
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
      <Hero />
      <About />
      <Team />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
}
