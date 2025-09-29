"use client";

import { useState, useEffect } from "react";
import Navbar from "../../app/components/navbar";
import Footer from "../../app/components/footer"

export default function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status" style={{ width: "3rem", height: "3rem", color: "pink" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="container-fluid bg-light py-5 mb-5" style={{ backgroundImage: "url('/img/uni1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container text-center py-5">
          <h1 style={{ color: "pink" }} className="display-1 animated slideInLeft">Contact</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="font-dancing-script text-primary">Contact</h1>
            <h2 className="mb-4">Avez-vous une suggestion pour nous ? Faites-nous part de vos idées pour notre future !</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <p className="text-center mb-4">
                Nous vous invitons chaleureusement à partager vos idées et suggestions pour les projets futurs de notre club universitaire. Que ce soit des initiatives humanitaires, vos contributions sont précieuses !
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" id="name" placeholder="Votre nom complet" value={formData.name} onChange={handleChange} required className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" id="email" placeholder="Votre e-mail" value={formData.email} onChange={handleChange} required className="form-control" />
                  </div>
                  <div className="col-12">
                    <input type="text" id="subject" placeholder="Sujet" value={formData.subject} onChange={handleChange} required className="form-control" />
                  </div>
                  <div className="col-12">
                    <textarea id="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required className="form-control" style={{ height: "150px" }}></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100 py-3">Envoyer le message</button>
                  </div>
                  {status && <div className="col-12 text-center mt-2"><p>{status}</p></div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
