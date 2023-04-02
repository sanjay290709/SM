// FileName : Objectives.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : To display the Technology page

import Technologies from "../components/TechStack";

const Technology = () => {
  return (
    <>
      <h1 className="heading"><span className="cp">Technology</span><span className="cs"> We Use</span></h1>
      <hr className="hr" style={{ "height": "10px !important" }} />
      <h1 className="subHeading"> We use the latest and on-demand technologies.</h1>
      <Technologies />
    </>
  );
}

export default Technology;