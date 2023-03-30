// FileName : Footer.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : To display the Footer

const Contact = () => {
    return (
        <div className="">
            <footer
                className="text-center text-lg-start text-white"
                style={{ "background-color": "#45526e" }}
            >
                <div className="container-fluid pt-4">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
                            <h6 className="text-uppercase font-weight-bold">
                                SM Tech
                            </h6>
                            <p>
                                SM - Tech : We provide the best user experience by using the latest technology, we provide all kind of development services.
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto ">
                            <h6 className="text-uppercase font-weight-bold">Products</h6>
                            <p>
                                <a className="text-white">Home</a>
                            </p>
                            <p>
                                <a className="text-white">About US</a>
                            </p>
                            <p>
                                <a className="text-white">Services</a>
                            </p>
                            <p>
                                <a className="text-white">Contact Us</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">
                            <h6 className="text-uppercase font-weight-bold">
                                Useful links
                            </h6>
                            <p>
                                <a className="text-white">Web Development</a>
                            </p>
                            <p>
                                <a className="text-white">Software Development</a>
                            </p>
                            <p>
                                <a className="text-white">App Development</a>
                            </p>
                            <p>
                                <a className="text-white">Help</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto ">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <p><i className="fas fa-home mr-3"></i> Delhi, India</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                            <p><i className="fas fa-phone mr-3"></i> +91 98765 43210</p>
                            <p><i className="fas fa-print mr-3"></i> +91 98765 43210</p>
                        </div>
                    </div>

                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    style={{ "margin-top": "-2.5rem", "width": "100%", "height": "10rem", "display": "block" }}
                >
                    <path
                        fill="#FF8600"
                        d="M0,224L40,218.7C80,213,160,203,240,213.3C320,224,400,256,480,240C560,224,640,160,720,
                        144C800,128,880,160,960,149.3C1040,139,1120,85,1200,96C1280,107,1360,181,1400,218.7L1440,
                        256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,
                        320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    >
                    </path>
                    <text x="40.5" y="300"
                        fill="black"
                        style={{
                            "font-size": "20px",
                            "height": "10rem",
                            "display": "inline-block",
                            "font-stretch": "expanded"
                        }}
                    >
                        Copyrights : @SMTech
                    </text>
                </svg>
            </footer>
        </div>
    );
};


export default Contact;