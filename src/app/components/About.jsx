// ./components/About.jsx

const About = () => {
    return (
        // About Start
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            {/* Images */}
                            <div className="col-6 text-end">
                                <img className="img-fluid w-75 wow zoomIn" data-wow-delay="0.1s" src="/img/img1.jpg" style={{ marginTop: '25%' }} alt=" img4" />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid w-100 wow zoomIn" data-wow-delay="0.3s" src="/img/img2.jpg" alt="img1" />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid w-50 wow zoomIn" data-wow-delay="0.5s" src="/img/img7.jpg" alt="img2" />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid w-75 wow zoomIn" data-wow-delay="0.7s" src="/img/img6.jpg" alt="im3" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="text text-uppercase mb-3" style={{ letterSpacing: '5px', color:"pink"}}>About Us</h5>
                        <h1 className="display-5 mb-4">We are Rotaract FST Fès</h1>
                        <p className="mb-4">
                            Le Rotaract est un réseau mondial de clubs de jeunes qui partagent les mêmes valeurs : servir, apprendre et créer des liens d’amitié. Chaque club a sa propre identité, mais tous font partie de cette grande famille.
                        </p>
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-check text-dark"></i>
                                    </div>
                                    <h5 className="mb-0">Dans plus de 40 pays</h5>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-check text-dark"></i>
                                    </div>
                                    <h5 className="mb-0">Plus de 17000 membres</h5>
                                </div>
                            </div>
                        </div>
                        <a href="/equipe" className="btn btn-primary py-3 px-5">En savoir plus</a>
                    </div>
                </div>
            </div>
        </div>
        // About End
    );
}

export default About;