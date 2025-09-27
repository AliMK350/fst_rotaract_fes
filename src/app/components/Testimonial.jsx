// ./components/Testimonial.jsx

const Testimonial = () => {
    return (
        // Testimonial Start
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                    <h1 className="mb-0">What Our members Say About Rotaract</h1>
                </div>
                {/* The main carousel structure. main.js handles the carousel initialization. */}
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                    
                    {/* Testimonial Item 1 */}
                    <div className="testimonial-item bg-light my-4">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded-circle" src="/img/testimonial-1.jpg" style={{ width: '60px', height: '60px' }} alt="Client 1" />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Member Name 1</h4>
                                <small className="text-uppercase">Occupation 1</small>
                            </div>
                        </div>
                        <div className="pt-4 px-5">
                            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. 
                            At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                        </div>
                    </div>

                    {/* Testimonial Item 2 */}
                    <div className="testimonial-item bg-light my-4">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded-circle" src="/img/testimonial-2.jpg" style={{ width: '60px', height: '60px' }} alt="Client 2" />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Member Name 2</h4>
                                <small className="text-uppercase">Occupation 2</small>
                            </div>
                        </div>
                        <div className="pt-4 px-5">
                            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. 
                            At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                        </div>
                    </div>

                    {/* Testimonial Item 3 */}
                    <div className="testimonial-item bg-light my-4">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded-circle" src="/img/testimonial-3.jpg" style={{ width: '60px', height: '60px' }} alt="Client 3" />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Member Name 3</h4>
                                <small className="text-uppercase">Occupation 3</small>
                            </div>
                        </div>
                        <div className="pt-4 px-5">
                            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. 
                            At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Testimonial End
    );
}

export default Testimonial;