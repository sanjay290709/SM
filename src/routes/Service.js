// FileName : Service.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : To display the Services page

import Card from "../components/Card";

const Service = () => {
  // functions

  return (
    <>
      <h1 className="heading"><span className="cp">Services</span><span className="cs"> we Provide</span></h1>
      <hr className="hr" style={{ "height": "10px !important" }} />
      <h1 className="subHeading spacing"> Service cards will appear here</h1>
      
      {/* cards section */}
      <div class="container text-center mt-14">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <Card title_prop={'Web Development'} btn_pop={'Read More'}/>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <Card title_prop={'App Development'} btn_pop={'Read More'}/>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12" >
            <Card title_prop={'Custom Software Development'} btn_pop={'Read More'}/>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12" >
            <Card title_prop={'Maintanence of Old projects'} btn_pop={'Read More'}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;