// ./components/Blog.jsx

const Blog = () => {
    return (
        // Blog Start
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
                    <h1 className="mb-0">Read The Latest Articles From Our Blog</h1>
                </div>
                <div className="row g-5">
                    
                    {/* Blog Post 1 */}
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="/img/hero-slider-4.jpg" alt="Blog Image 1" />
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-3" href="">Friendships</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>Admin</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">Dolor et stet dolore ipsum et clita dolor</h4>
                                <p>Dolor et stet dolore ipsum et clita dolor ipsum et clita dolor et stet...</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="/img/hero-slider-4.jpg" alt="Blog Image 2" />
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-3" href="">Humanity</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>Admin</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">Dolor et stet dolore ipsum et clita dolor</h4>
                                <p>Dolor et stet dolore ipsum et clita dolor ipsum et clita dolor et stet...</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.9s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="/img/hero-slider-4.jpg" alt="Blog Image 3" />
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-3" href="">Aventures</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>Admin</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">Dolor et stet dolore ipsum et clita dolor</h4>
                                <p>Dolor et stet dolore ipsum et clita dolor ipsum et clita dolor et stet...</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Blog End
    );
}

export default Blog;