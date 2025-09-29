"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

export default function Blog() {
  const [loading, setLoading] = useState(true);

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
          style={{ width: "4rem", height: "4rem", color: "pink" }}
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
          <h1
            style={{ color: "pink" }}
            className="display-1 animated slideInLeft"
          >
            Blog
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center animated slideInLeft mb-0">
              <li className="breadcrumb-item">
                <a className="text-primary" href="/accueil">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-primary" href="/equipe">
                  Plus d&apos;info
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* First Article */}
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          {/* Main Article */}
          <div className="col-lg-8">
            <div className="bg-light p-4 rounded shadow-sm h-100">
              <p className="mb-2 text-muted">
                <i className="fa fa-calendar-alt text-primary me-2"></i>
                16 mars 2024 |
                <i className="fa fa-map text-primary ms-2 me-2"></i>Aïn Bouali
              </p>
              <h3 className="mb-3 text-primary">
                • La rénovation de la mosquée : une initiative humanitaire et
                culturelle
              </h3>
              <p>
                La rénovation de la mosquée a été réalisée le 16 mars 2024 dans
                la commune rurale d’Aïn Bouali, province de Moulay Yaacoub, par
                le club Rotaract FSTF. Ce projet a d’ailleurs remporté le premier
                prix du Rotaract District 9010, dans la catégorie Développement
                économique communautaire, pour le mandat 2023-2024.
              </p>
              <p>
                Avant les travaux, la mosquée se trouvait dans un état
                préoccupant : elle était mal équipée, dépourvue d’installations
                essentielles (Corans, tapis de prière, étagères en bois…) et son
                apparence laissait à désirer. L’objectif principal de cette
                initiative était donc de rendre la mosquée plus accueillante et
                fonctionnelle.
              </p>
              <p>
                Les préparatifs ont duré deux semaines (1–15 mars) : collecte de
                dons, recherche de fournisseurs, acquisition de matériel. Le 16
                mars, les membres ont procédé aux travaux de rénovation intérieure
                et extérieure (peinture, aménagement, tapisserie…).
              </p>
              <p>
                Cette action a eu un impact à la fois humanitaire et
                socio-culturel. Elle a permis d’offrir aux fidèles un meilleur
                cadre de prière, tout en contribuant à l’amélioration de
                l’esthétique locale et à la préservation de l’identité spirituelle
                et culturelle de la région.
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div className="col-lg-4">
            <div className="row g-3">
              <div className="col-12">
                <Image
                  src="/img/blog/article1.jpg"
                  alt="Image 1"
                  width={600}
                  height={400}
                  className="img-fluid rounded shadow-sm"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="col-12">
                <Image
                  src="/img/blog/article1-2.jpg"
                  alt="Image 2"
                  width={600}
                  height={400}
                  className="img-fluid rounded shadow-sm"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Article */}
      <div className="row g-4 mb-5 align-items-start">
        {/* Main Card */}
        <div className="col-lg-8">
          <div
            className="bg-light p-4 rounded shadow-sm h-100"
            style={{ backgroundColor: "#fff0f6" }}
          >
            <p className="mb-2 text-muted">
              <i className="fa fa-calendar-alt text-primary me-2"></i>18 mai 2025
              |
              <i className="fa fa-map text-primary ms-2 me-2"></i>Douar Bouarous
            </p>
            <h3 className="mb-3 text-primary">
              • Une caravane humanitaire primée pour son impact culturel et
              social
            </h3>
            <p>
              Le 18 mai 2025 restera une date marquante pour le club Rotaract FST
              Fès, qui a organisé une caravane humanitaire au Douar Bouarous.
              Cette initiative, saluée pour son impact humain et culturel, a valu
              au club la 3ème place du <strong>BEST CULTURE PROJECT</strong> au
              niveau du district, consacrant ainsi l’engagement des jeunes
              bénévoles en faveur des populations vulnérables.
            </p>
            <p>
              Dès 10h du matin, la caravane a démarré par la distribution des
              aides matérielles (vêtements, couvertures, etc…) soigneusement
              préparés. Les habitants ont accueilli nos membres avec chaleur et
              gratitude, créant une atmosphère de partage et de fraternité.
            </p>
            <p>
              Nos membres du club ne se sont pas limités à la remise de dons : ils
              ont pris le temps de discuter avec les familles et d’écouter leurs
              récits. Une visite de <em>Dar Al Fatat</em> a aussi permis de
              constater les difficultés auxquelles élèves et enseignants font face
              au quotidien.
            </p>
            <p>
              La journée a été marquée par des instants de partage authentiques :
              discussions intergénérationnelles, sourires des enfants, et
              gratitude exprimée par les plus âgés. <em>&quot;Al Qaïd&quot;</em>,
              le chef de la commune rurale, a souligné dans son discours
              l’importance d’un tel appui pour une communauté qui endure des
              conditions de vie difficiles.
            </p>
            <p>
              Loin de se limiter à son effet concret, cette action met en lumière
              la force de la culture et de la solidarité combinées, et démontre
              comment les jeunes font de leur générosité une véritable expression
              de respect pour l’humain.
            </p>
          </div>
        </div>

        {/* Images Column */}
        <div className="col-lg-4">
          <div className="row g-3">
            <div className="col-12">
              <Image
                src="/img/blog/art10.jpg"
                alt="Caravane Humanitaire Image 1"
                width={600}
                height={400}
                className="img-fluid rounded shadow-sm"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-12">
              <div
                style={{
                  height: "300px",
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/img/blog/prix.jpg"
                  alt="Prix Award"
                  fill
                  className="rounded shadow-sm"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
