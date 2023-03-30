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
      <h1> About Us detail will appear here</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mt-3">
            <img src={TechImg} alt="" className="img mt-4" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
        
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
