// ./components/Team.jsx

const Team = () => {
    return (
        // Team Start
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Our members</h5>
                    <h1 className="mb-0">Notre chaleureuse équipe</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                {/* Ensure /img/team-1.jpg exists in your public folder */}
                                <img className="img-fluid" src="/img/membres/lina.jpg" alt="Team Member 1" />
                                <div className="team-social">
                                    <a className="btn btn-square" href="mailto:linazerouali07@gmail.com"><i className="fa fa-envelope"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h5 className="text-primary">Zerouali Lina</h5>
                                <p className="m-0">Présidente</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                {/* Ensure /img/team-2.jpg exists in your public folder */}
                                <img className="img-fluid" src="/img/douaeghoulaichi.jpg" alt="Team Member 2" />
                                <div className="team-social">
                                    <a className="btn btn-square" href="mailto:ghoulaichidouae@gmail.com"><i className="fa fa-envelope"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h5 className="text-primary">Ghoulaichi Douae</h5>
                                <p className="m-0">Vice Présidente</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                {/* Ensure /img/team-3.jpg exists in your public folder */}
                                <img className="img-fluid" src="/img/sahar.jpg" alt="Team Member 3" />
                                <div className="team-social">
                                    <a className="btn btn-square" href="mailto:Saharelyaacoubi@gmail.com"><i className="fa fa-envelope"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h5 className="text-primary"> El Yaacoubi Sahar</h5>
                                <p className="m-0">Secrétaire</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <center><a href="/membres" className="btn btn-primary py-3 px-5">Voir tous nos membres</a></center>
        </div>
        
        // Team End
    );
}

export default Team;