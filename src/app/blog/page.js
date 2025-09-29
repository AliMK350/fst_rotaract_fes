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
          <div
        className="container-fluid bg-light py-5 mb-5"
        style={{
          backgroundImage: "url('/img/uni1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center py-5">
          <h1 style={{ color: "pink" }} className="display-1 animated slideInLeft">Blog</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center animated slideInLeft mb-0">
              <li className="breadcrumb-item"><a className="text-primary" href="/accueil">Home</a></li>
              <li className="breadcrumb-item">
                  <a className="text-primary" href="/equipe">Plus d&apos;info</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Blog</li>
            </ol>
          </nav>
        </div>
      </div>
          {/* First div */}
          {/* Blog Post Full Width */}
<div className="container py-5">
  <div className="row g-4 align-items-start">

    {/* Main Article */}
    <div className="col-lg-8">
      <div className="bg-light p-4 rounded shadow-sm h-100">
        <p className="mb-2 text-muted">
          <i className="fa fa-calendar-alt text-primary me-2"></i>16 mars 2024 | 
          <i className="fa fa-map text-primary ms-2 me-2"></i>Aïn Bouali
        </p>
        <h3 className="mb-3 text-primary">• La rénovation de la mosquée : une initiative humanitaire et culturelle</h3>
        <p>
          La rénovation de la mosquée a été réalisée le 16 mars 2024 dans la commune rurale d’Aïn
          Bouali, province de Moulay Yaacoub, par le club Rotaract FSTF. Ce projet a d’ailleurs
          remporté le premier prix du Rotaract District 9010, dans la catégorie Développement
          économique communautaire, pour le mandat 2023-2024.
        </p>
        <p>
          Avant les travaux, la mosquée se trouvait dans un état préoccupant : elle était mal équipée,
          dépourvue d’installations essentielles (Corans, tapis de prière, étagères en bois…) et son
          apparence laissait à désirer. L’objectif principal de cette initiative était donc de rendre la mosquée
          plus accueillante et fonctionnelle.
        </p>
        <p>
          Les préparatifs ont duré deux semaines (1–15 mars) : collecte de dons, recherche de fournisseurs,
          acquisition de matériel. Le 16 mars, les membres ont procédé aux travaux de rénovation intérieure
          et extérieure (peinture, aménagement, tapisserie…).
        </p>
        <p>
          Cette action a eu un impact à la fois humanitaire et socio-culturel. Elle a permis d’offrir aux
          fidèles un meilleur cadre de prière, tout en contribuant à l’amélioration de l’esthétique locale et
          à la préservation de l’identité spirituelle et culturelle de la région.
        </p>
      </div>
    </div>

    {/* Gallery (4 Images) */}
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
<div className="row g-4 mb-5 align-items-start">
  {/* Main Card */}
  <div className="col-lg-8">
    <div className="bg-light p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#fff0f6" }}>
      {/* Icons Row */}
      <p className="mb-2 text-muted">
        <i className="fa fa-calendar-alt text-primary me-2"></i>18 mai 2025 |
        <i className="fa fa-map text-primary ms-2 me-2"></i>Douar Bouarous
      </p>

      {/* Title */}
      <h3 className="mb-3 text-primary">
        • Une caravane humanitaire primée pour son impact culturel et social
      </h3>

      {/* Text */}
      <p>
        Le 18 mai 2025 restera une date marquante pour le club Rotaract FST Fès, qui a organisé
        une caravane humanitaire au Douar Bouarous. Cette initiative, saluée pour son impact
        humain et culturel, a valu au club la 3ème place du <strong>BEST CULTURE PROJECT</strong> au
        niveau du district, consacrant ainsi l’engagement des jeunes bénévoles en faveur des
        populations vulnérables.
      </p>
      <p>
        Dès 10h du matin, la caravane a démarré par la distribution des aides matérielles
        (vêtements, couvertures, etc…) soigneusement préparés. Les habitants ont accueilli nos
        membres avec chaleur et gratitude, créant une atmosphère de partage et de fraternité.
      </p>
      <p>
        Nos membres du club ne se sont pas limités à la remise de dons : ils ont pris le temps de
        discuter avec les familles et d’écouter leurs récits. Une visite de <em>Dar Al Fatat</em> a aussi
        permis de constater les difficultés auxquelles élèves et enseignants font face au
        quotidien.
      </p>
      <p>
        La journée a été marquée par des instants de partage authentiques : discussions
        intergénérationnelles, sourires des enfants, et gratitude exprimée par les plus âgés.
        <em>"Al Qaïd"</em>, le chef de la commune rurale, a souligné dans son discours l’importance
        d’un tel appui pour une communauté qui endure des conditions de vie difficiles.
      </p>
      <p>
        Loin de se limiter à son effet concret, cette action met en lumière la force de la culture et
        de la solidarité combinées, et démontre comment les jeunes font de leur générosité une
        véritable expression de respect pour l’humain.
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
  <div style={{ height: "300px", width: "100%", position: "relative", overflow: "hidden" }}>
    <Image
      src="/img/blog/prix.jpg"
      alt="Mosque Renovation"
      fill
      className="rounded shadow-sm"
      style={{
        objectFit: "cover",
        objectPosition: "center", // keeps the middle visible
      }}
    />
  </div>
</div>

    </div>
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
          {/* <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
              <p className="mb-2">
                <i className="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | 
                <i className="fa fa-folder-open text-dark me-1"></i>FST Fes
              </p>
              <h3 className="mb-3">Last thing we did</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
            </div>
          </div> */}

          {/* Fourth div (image) */}
          {/* <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
            <div className="h-100 position-relative" style={{ height: '100%' }}>
              <Image
                src="/img/img11.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="img-fluid"
              />
            </div>
          </div> */}

          {/* Fifth div */}
          {/* <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
              <p className="mb-2">
                <i className="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | 
                <i className="fa fa-folder-open text-dark me-1"></i>Bab ftouh
              </p>
              <h3 className="mb-3">Our best work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
            </div>
          </div> */}

          {/* Sixth div (image) */}
          {/* <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <div className="h-100 position-relative" style={{ height: '100%' }}>
              <Image
                src="/img/img8.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="img-fluid"
              />
            </div>
          </div> */}

          {/* Seventh div */}
          {/* <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
              <p className="mb-2">
                <i className="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | 
                <i className="fa fa-folder-open text-dark me-1"></i>Bab ftouh
              </p>
              <h3 className="mb-3">Our best work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
            </div>
          </div> */}

          {/* Eighth div (image) */}
          {/* <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <div className="h-100 position-relative" style={{ height: '100%' }}>
              <Image
                src="/img/img5.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="img-fluid"
              />
            </div>
          </div> */}
          {/* <div className="container py-5 d-flex justify-content-center">
  <div className="container py-5 d-flex justify-content-center">
  <div className="card text-center shadow-sm" style={{ maxWidth: "500px", backgroundColor: "#fff0f6" }}>
    <div className="card-body py-4 px-3">
      <h5 className="card-title text-primary mb-2">Bienvenue sur notre Blog !</h5>
      <p className="card-text text-secondary mb-0">
        Les derni&egrave;res actualit&eacute;s et &eacute;v&eacute;nements du club seront affich&eacute;s ici d&egrave;s qu&apos;ils seront disponibles.  
        Restez connect&eacute;s pour ne rien manquer !
      </p>
    </div>
  </div>
</div>

</div> */}

        </div>
      </div>
      <Footer />
    </>
  );
}
