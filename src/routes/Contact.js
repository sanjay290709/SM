// FileName : Contact.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : To display the Contact Us page

import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <>
        <h1 className="heading"><span className="cp">Get</span><span className="cs"> In Touch</span></h1>
        <hr className="hr" style={{ "height": "10px !important" }} />
        {/* <h1> Contact Form will appear here</h1> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
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