import React from 'react';
import web from '../src/images/Dr.-Abhay-2-280x280.png';
const About = () => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1><strong className="text-primary">Dr.Abhay Yadav</strong></h1>
                <p className="my-3">
                MS. ORTHOPEDIC AND SPINE SURGEON <br />
                HOD Orthopedics Department
                </p>
                <p>NMC No : 5800</p>
                <p>Dr.Abhay Yadav, one of the best orthopedic and spine surgeons, have specific training and experience in a broad range of orthopedic specialties such as sports medicine, trauma, joint replacement, pediatrics, spine, shoulder and elbow, foot and ankle and hand.</p>
                <div className="my-3">
                 
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated" alt="Dr. Abjay Yadav" />
              </div>


            </div>


            </div>
          </div>
        </div>
     </section>
    </div>
  );
};

export default About;
