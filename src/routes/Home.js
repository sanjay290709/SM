import Navbar from "../components/Navbar";
import one from '../assets/one.jpg';

// FileName : Home.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : To display the Home main page

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <img className="bgImage" src={one} alt="Home page bg image"/>
    </div>
  );
};

export default Home;