import Image from "next/image";

const Footer = () => {
  return (
    // Footer Start
    <div className="container-fluid bg-dark text-secondary mt-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">

          {/* Column 1: Get In Touch */}
          <div className="col-lg-4 col-md-6">
            <h3 className="text-white mb-4">Rejoignez-nous</h3>
            <p className="mb-2" style={{ color: "pink" }}>
              <i className="fa fa-map-marker-alt me-3"></i>
              Faculté des Sciences et Techniques de Fès B.P. 2202 – Route d’Imouzzer, Fes 30000
            </p>
            <p className="mb-2" style={{ color: "pink" }}>
              <i className="fa fa-envelope me-3"></i>
              rotaract.clubfstfes.myrotary@gmail.com
            </p>

            {/* Social Icons */}
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.instagram.com/rotaractfstfes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.facebook.com/share/1BaSkjBnSJ/?mibextid=wwXIfr">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>

            {/* Google Maps iframe */}
            <div className="mt-3 rounded overflow-hidden" style={{ height: "150px", width: "100%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.8500397446765!2d-4.992323100633894!3d33.99963229895618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b9ae415fdf5%3A0x7447660c4c38d15e!2sFacult%C3%A9%20des%20Sciences%20et%20Techniques%20Fes!5e0!3m2!1sfr!2sma!4v1759086839226!5m2!1sfr!2sma"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h3 className="text-white mb-4">Liens rapides</h3>
            <div className="d-flex flex-column gap-2">
              <a className="btn btn-primary btn-link" href="/equipe">About Us</a>
              <a className="btn btn-primary btn-link" href="/membres">Contacter un membre</a>
              <a className="btn btn-primary btn-link" href="/blog">Blog</a>
              <a className="btn btn-primary btn-link" href="/fst">Plus sur FST de Fès</a>
            </div>
          </div>

          {/* Column 3: Logo */}
          {/* Column 3: Logo */}
<div className="col-lg-4 col-md-6 d-flex align-items-center justify-content-center justify-content-lg-end">
  <Image
    src="/img/logo-rotaract.png"
    alt="Rotaract Logo"
    width={300}  // bigger logo
    height={90}  // bigger logo
    style={{ objectFit: "contain" }}
  />
</div>


        </div>
      </div>

      {/* Bottom row */}
      <div className="container border-top border-secondary pt-3 mt-3">
        <div className="row g-3">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">Rotaract FST Fès</a>. Tout droit réservés.</p>
          </div>
          
        </div>
      </div>
    </div>
    // Footer End
  );
};

export default Footer;
