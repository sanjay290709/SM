import TechImg from '../assets/Tech.png'
// FileName : About.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : To display the About Us page

const About = () => {
  return (
    <>
      <h1 className="heading"><span className="cp">About</span><span className="cs"> US</span></h1>
      <hr className="hr" style={{ "height": "10px !important" }} />
      <h1 className='subHeading spacing'> We AM Tech are the digitally helping hands.</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mt-2">
            <img src={TechImg} alt="" className="img mt-4" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12  d-flex justify-content-center align-items-center mt-3">
            {/* <ul>

              <li> At [company name], we are passionate about using technology to transform businesses and empower people. As a leading provider of web development, custom software development, and app development services, we help companies of all sizes to leverage the latest technologies to streamline their operations, improve their customer experiences, and accelerate their growth. With a team of highly skilled and experienced developers, designers, and project managers, we are committed to delivering high-quality and cost-effective solutions that exceed our clients' expectations.</li>
              <li>Our approach to software development is centered around collaboration, transparency, and innovation. We work closely with our clients to understand their unique business requirements and goals, and we leverage our expertise in a wide range of technologies to create tailored solutions that meet their specific needs. Whether our clients require a simple website, a complex e-commerce platform, or a custom mobile app, we have the expertise and the passion to deliver solutions that drive results.</li>
              <li>At [company name], we pride ourselves on our ability to stay ahead of the curve when it comes to technology trends and advancements. We are constantly exploring new technologies and tools to enhance our capabilities and to provide our clients with cutting-edge solutions. We also prioritize the security and scalability of our solutions, ensuring that they are designed to grow with our clients' businesses and to withstand the evolving threats of the digital landscape.</li>
              <li>Beyond our technical expertise, we also prioritize exceptional customer service. We understand that our clients rely on us to help them achieve their business goals, and we are dedicated to delivering solutions that are timely, responsive, and effective. We take a proactive approach to communication, ensuring that our clients are always kept in the loop and that their feedback is incorporated into our development processes.</li>
              <li>Ultimately, at [company name], our mission is to empower businesses with technology. We believe that technology has the power to drive innovation, efficiency, and growth, and we are committed to helping our clients leverage it to its full potential. Whether you are a small business owner or a large enterprise, we have the expertise, the passion, and the dedication to help you achieve your goals and transform your business. Contact us today to learn more about our services and to see how we can help you succeed.</li>
            </ul> */}
            <p style={{ "text-align": "justify" }}>We are passionate about using technology to transform businesses and empower people. As a leading provider of web development, custom software development, and app development services, we help companies of all sizes to leverage the latest technologies to streamline their operations, improve their customer experiences, and accelerate their growth. With a team of highly skilled and experienced developers, designers, and project managers, we are committed to delivering high-quality and cost-effective solutions that exceed our clients' expectations. Our approach to software development is centered around collaboration, transparency, and innovation. We work closely with our clients to understand their unique business requirements and goals, and we leverage our expertise in a wide range of technologies to create tailored solutions that meet their specific needs.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
