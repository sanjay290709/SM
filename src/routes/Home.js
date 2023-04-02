import Navbar from "../components/Navbar";
import Service from "./Service";
import About from "./About";
import Technology from "./Technology";
import Footer from "./Footer";
import Contact from "./Contact";
import Form from "../components/Form";

// FileName : Home.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : To display the Home main page

const Home = () => {
  return (
    <>
      <div className="section home">
        <Navbar />
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* <Form /> */}
          </div>
        </div>
      </div>
      <div className="section even-section pt-4">
        <About />
      </div>
      <div className="section pt-4">
        <Service />
      </div>
      <div className="section even-section pt-4">
        <Technology />
      </div>
      <div className="section pt-4">
        <Contact />
      </div>
      <div className="footer pt-4">
        <Footer />
      </div>
    </>
  );
};

export default Home;