import Image from "next/image";

const Blog = () => {
    return (
        // Blog Start
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div
                    className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                    style={{ maxWidth: "600px" }}
                >
                    <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
                    <h1 className="mb-0">Read The Latest Articles From Our Blog</h1>
                </div>
                <div className="row g-5">
                    {/* Blog Post 1 */}
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <Image
                                    src="/img/fst.png"
                                    alt="Blog Image 1"
                                    width={500}
                                    height={300}
                                    className="img-fluid"
                                />
                                {/* <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-3" href="">Friendships</a> */}
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3">
                                        <i className="far fa-user text-primary me-2"></i>FST Fès
                                    </small>
                                    <small>
                                        <i className="far fa-calendar-alt text-primary me-2"></i>1995
                                    </small>
                                </div>
                                <h4 className="mb-3">FST Fès</h4>
                                <p>
                                    La Faculté des Sciences et Techniques (FST) de Fès a été fondée en 1995.
                                    Elle fait partie d&apos;un réseau national d&apos;établissements universitaires
                                    à caractère scientifique et technique, créé pour diversifier les formations
                                    offertes aux bacheliers scientifiques et améliorer l&apos;intégration de
                                    l&apos;université dans son environnement socio-économique
                                </p>
                                <a className="text-uppercase" href="/fst">
                                    En savoir plus <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <Image
                                    src="/img/new-logo.png"
                                    alt="Blog Image 2"
                                    width={500}
                                    height={300}
                                    className="img-fluid"
                                />
                                {/* <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-3" href="">Humanity</a> */}
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3">
                                        <i className="far fa-user text-primary me-2"></i>Rotaract
                                    </small>
                                    <small>
                                        <i className="far fa-calendar-alt text-primary me-2"></i>2014
                                    </small>
                                </div>
                                <h4 className="mb-3">Rotaract et FST Fès</h4>
                                <p>
                                    Le Rotaract FST Fès, fondé en 2014, s’inscrit dans cette dynamique en
                                    rassemblant des étudiants engagés de la Faculté des Sciences et Techniques
                                    de Fès autour de projets humanitaires, sociaux et culturels, portés par
                                    l’esprit de solidarité et de leadership.
                                </p>
                                <a className="text-uppercase" href="/equipe">
                                    En savoir plus <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.9s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <Image
                                    src="/img/img8.jpg"
                                    alt="Blog Image 3"
                                    width={500}
                                    height={300}
                                    className="img-fluid"
                                />
                                {/* <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-3" href="">Aventures</a> */}
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3">
                                        <i className="far fa-user text-primary me-2"></i>Our team
                                    </small>
                                    <small>
                                        <i className="far fa-calendar-alt text-primary me-2"></i>2025
                                    </small>
                                </div>
                                <h4 className="mb-3">Notre chère équipe</h4>
                                <p>
                                    Depuis ses débuts, le club a su préserver une double identité : celle
                                    d’un lieu de service à la communauté et celle d’une véritable école de
                                    vie où chaque membre apprend à travailler en équipe, à développer son sens
                                    du leadership et à cultiver des liens d’amitié forts.
                                </p>
                                <a className="text-uppercase" href="/equipe">
                                    En savoir plus <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Blog End
    );
};

export default Blog;
