// ./components/Team.jsx

const Team = () => {
    return (
        // Team Start
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                {/* Ensure /img/team-1.jpg exists in your public folder */}
                                <img className="img-fluid" src="/img/team-1.jpg" alt="Team Member 1" />
                                <div className="team-social">
                                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h5 className="text-primary">Full Name</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                {/* Ensure /img/team-2.jpg exists in your public folder */}
                                <img className="img-fluid" src="/img/team-2.jpg" alt="Team Member 2" />
                                <div className="team-social">
                                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h5 className="text-primary">Full Name</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                {/* Ensure /img/team-3.jpg exists in your public folder */}
                                <img className="img-fluid" src="/img/team-3.jpg" alt="Team Member 3" />
                                <div className="team-social">
                                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h5 className="text-primary">Full Name</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Team End
    );
}

export default Team;