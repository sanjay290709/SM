// FileName : Contact.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : To display the Contact Us page

import Form from "../components/Form";
import SocialMediaCard from "../components/SocialMediaCard";

const Contact = () => {
  return (
    <>
      <>
        <h1 className="heading"><span className="cp">Get</span><span className="cs"> In Touch</span></h1>
        <hr className="hr" style={{ "height": "10px !important" }} />
        <h1 className="subHeading spacing">Tell us how you would like to contribute?</h1>
        {/* <h1> Contact Form will appear here</h1> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12  pt-2 mt-4">
              {/* <SocialMediaCard/> */}
              < p style={{ "textAlign": "justify" }}>We believe that innovation and creativity are at the heart of every successful business, and that's why we're passionate about delivering cutting-edge solutions that make a difference. Our team of experts is committed to staying ahead of the curve, using the latest technologies and tools to create unique and engaging experiences for our clients. From custom software development to digital marketing and beyond, we offer a wide range of services that can help take your business to the next level. But what sets us apart is our focus on collaboration and communication. We work closely with our clients every step of the way, listening to their needs and ideas, and turning them into reality. So if you're ready to take your business to new heights, get in touch with us today and let's start a conversation!
                <br />Contact us today to learn more about our services and how we can help you achieve your goals!</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Form />
            </div>
          </div>
        </div>

      </>
    </>
  );
}

export default Contact;