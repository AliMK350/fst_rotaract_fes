// ./components/Footer.jsx

const Footer = () => {
    return (
        // Footer Start
        <div className="container-fluid bg-dark text-secondary mt-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5">
                    
                    {/* Column 1: Get In Touch */}
                    <div className="col-lg-4 col-md-6">
                        <h3 className="text-white mb-4">Rejoignez-nous</h3>
                        <p className="mb-2" style={{color:"pink"}}><i className="fa fa-map-marker-alt me-3"></i>Faculté des Sciences et Techniques de Fès B.P. 2202 – Route d’Imouzzer، B.P. 2202 Route d’Imouzzer, Fes 30000</p>
                        <p className="mb-2" style={{color:"pink"}}><i className="fa fa-envelope me-3"></i>rotaract.clubfstfes.myrotary@gmail.com </p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.instagram.com/rotaractfstfes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.facebook.com/share/1BaSkjBnSJ/?mibextid=wwXIfr"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                    
                    {/* Column 2: Quick Links */}
                    <div className="col-lg-4 col-md-6">
                        <h3 className="text-white mb-4">Liens rapides</h3>
                        <a className="btn btn-primary btn-link" href="/equipe">About Us</a>
                        <a className="btn btn-primary btn-link" href="/membres">Contacter un membre</a>
                        <a className="btn btn-primary btn-link" href="/blog">Blog</a>
                        <a className="btn btn-primary btn-link" href="/fst">Plus sur FST de Fès</a>
                    </div>
                    
                    {/* Column 3: Newsletter */}
                    <div className="col-lg-4 col-md-6">
                        <img className="img relative" width={8000} height={1000} src="/img/logo-rotaract.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#">Rotaract FST Fès</a>. Tout droit réservés.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0">Distributed By <a className="text-white border-bottom" href="https://themewagon.com">ThemeWagon</a></p>
                    </div>
                </div>
            </div>
        </div>
        // Footer End
    );
}

export default Footer;