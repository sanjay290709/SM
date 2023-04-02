import ReactLogo from '../assets/icons-logo/JavaScript.png'

const Technologies = () => {
    return (
        <>
            <section className="contact-section">
                <div className="container py-5">
                    <div className="row">
                        <div className="text-center">
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center contact-section-image">
                            <p style={{ "text-align": "justify" }}> We provide you the best product by using the latest and on-demand technologies. In today's fast-paced and competitive market, staying ahead of the curve is essential to business success. The ability to leverage the latest and on-demand technologies is critical in achieving this goal. By adopting new technologies, businesses can increase efficiency, reduce costs, and improve customer satisfaction. For example, the use of cloud computing allows businesses to access and store data securely and efficiently, while artificial intelligence and machine learning can provide valuable insights and predictions that can inform business decisions. In addition, the adoption of automation and robotics can help streamline manufacturing and production processes, resulting in increased productivity and higher-quality products.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-section-btn-container d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <button type="button" className="btn btn-none btn-lg contact-section-btn shadow fw-bold"><i className="fa-brands fa-html5 me-2" style={{ "color": "#e34c26" }}></i>HTML</button>
                                    <button type="button" className="btn btn-none btn-lg contact-section-btn shadow fw-bold"><i className="fa-brands fa-css3 me-2" style={{ "color": "#2965f1" }}></i>CSS</button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <button type="button" className="btn btn-none btn-lg contact-section-btn shadow fw-bold">
                                        <i className="fa-brands fa-square-js me-2" style={{ "color": "#f0db4f" }}></i>JavaScript</button>
                                    <button type="button" className="btn btn-none btn-lg contact-section-btn shadow fw-bold"><i className="fa-brands fa-react me-2" style={{ "color": "#61dbfb" }}></i>React JS</button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <button type="button" className="btn btn-lg contact-section-btn shadow fw-bold"><i className="fa-brands fa-node-js me-2" style={{ "color": "#3c873a" }}></i>Node JS</button>
                                    <button type="button" className="btn btn-lg contact-section-btn shadow fw-bold">
                                        <img src="/theme/img/mongodb.png" alt="" />  MongoDB</button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <button type="button" className="btn btn-none btn-lg contact-section-btn shadow fw-bold">
                                        <i className="fa-brands fa-php me-2" style={{ "color": "#656f99" }}></i>php</button>
                                    <button type="button" className="btn btn-none btn-lg contact-section-btn shadow fw-bold"><i className="fa-brands fa-node-js me-2" style={{ "color": "#3c873a" }}></i>Express JS</button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <button type="button" className="btn btn-none btn-lg contact-section-btn shadow fw-bold">
                                        <i className="fa-brands fa-laravel me-2" style={{ "color": "#fb503b" }}></i>Laravel</button>
                                    <button type="button" className="btn btn-none btn-lg contact-section-btn shadow fw-bold"><i className="fa-brands fa-wordpress me-2" style={{ "color": "#21759b" }}></i>WordPress</button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <button type="button" className="btn btn-none btn-lg contact-section-btn shadow fw-bold">
                                        <img src="/theme/img/jquery.png" alt="" className="me-2" />  jQuery</button>
                                    <button type="button" className="btn btn-none btn-lg contact-section-btn shadow fw-bold"><i className="bi bi-filetype-sql me-2" style={{ "color": "#00758f" }}></i>MySQL</button>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </section >
        </>
    )
}

export default Technologies;