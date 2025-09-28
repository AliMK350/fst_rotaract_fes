"use client"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Equipe(){
    return(
        <>
            <Navbar/>
                <div className="container-fluid bg-light py-5 mb-5" style={{
    backgroundImage: "url('/img/uni1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
        <div className="container text-center py-5">
            <h1 style={{color:"pink"}} className="display-1 animated slideInLeft">FST de Fes</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center animated slideInLeft mb-0">
                    <li className="breadcrumb-item"><a className="text-primary" href="/accueil">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-primary" href="/blog">Blog</a></li>
                    <li className="breadcrumb-item active" aria-current="page">FST</li>
                </ol>
            </nav>
        </div>
    </div>
    <div className="container-fluid d-flex justify-content-center align-items-center py-5" style={{ minHeight: "100vh" }}>
  <div className="card w-100 shadow-lg" style={{ maxWidth: "900px" }}>
    <div className="card-body p-4">
      <div className="d-flex mb-3">
        <small className="me-3">
          <i className="far fa-user text-primary me-2"></i>Université Sidi Mohammed Ben Abdellah de Fès
        </small>
        <small>
          <i className="far fa-calendar-alt text-primary me-2"></i>2025
        </small>
      </div>
      <h4 className="mb-3">A propos de la Faculté des Sciences et Techniques de Fès (FST Fès)</h4>
      <p>
        La Faculté des Sciences et Techniques de Fès est une institution universitaire publique située à Fès, l'une des villes universitaires les plus importantes du Maroc. Elle est intégrée au réseau des Facultés des Sciences et Techniques réparties à travers le pays. La FST Fès est rattachée à l’Université Sidi Mohamed Ben Abdellah et est sous la supervision du ministère de l’Enseignement supérieur, de la Recherche scientifique et de l'Innovation. Elle se spécialise dans l’enseignement supérieur, la recherche scientifique et technique, ainsi que dans la formation d’ingénieurs et de cadres, incluant la formation continue.
        <br /><br />
        La Faculté des Sciences et Techniques de Fès (FST Fès) a été créée en 1995. Les facultés des Sciences et Techniques sont des établissements universitaires scientifiques et techniques. Elles ont été créées pour développer et de diversifier les formations offertes aux bacheliers scientifiques pour une meilleure intégration de l’Université dans son environnement économique et social.
        <br /><br />
      </p>
      
    </div>
  </div>
</div>
            <Footer/>
        </>
    )
}