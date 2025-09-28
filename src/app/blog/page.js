"use client"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
export default function Blog(){
    return(
        <>
            <Navbar></Navbar>
                <div className="container-fluid blog p-0">
        <div className="row g-0">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
                    <p className="mb-2"><i className="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | <i className="fa fa-folder-open text-dark me-1"></i>Bab ftouh</p>
                    <h3 className="mb-3">Our best work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
                    
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <div className="h-100">
                    <img className="img-fluid w-100 h-100" src="img/img10.jpg" alt="" style={{objectFit: "cover"}}/>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
                    <p className="mb-2"><i className="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | <i className="fa fa-folder-open text-dark me-1"></i>FST Fes</p>
                    <h3 className="mb-3">Last thing we did</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
                    
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                <div className="h-100">
                    <img className="img-fluid w-100 h-100" src="img/img11.jpg" alt="" style={{objectFit: "cover"}}/>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
                    <p className="mb-2"><i className="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | <i className="fa fa-folder-open text-dark me-1"></i>Bab ftouh</p>
                    <h3 className="mb-3">Our best work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
                    
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <div className="h-100">
                    <img className="img-fluid w-100 h-100" src="img/img8.jpg" alt="" style={{objectFit: "cover"}}/>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
                    <p className="mb-2"><i className="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | <i className="fa fa-folder-open text-dark me-1"></i>Bab ftouh</p>
                    <h3 className="mb-3">Our best work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus.</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <div className="h-100">
                    <img className="img-fluid w-100 h-100" src="img/img5.jpg" alt="" style={{objectFit: "cover"}}/>
                </div>
            </div>
        </div>
    </div>
            <Footer></Footer>
        </>
    )
}