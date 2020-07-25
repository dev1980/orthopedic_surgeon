import React from 'react';
import web from '../src/images/Dr.-Abhay-2-280x280.png';


const Contact = () => {
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
                
                <div className="my-3">
              
                 <div className="hotline">
                   <p>HOTLINE NUMBER</p>
                   <p>+977-1-4286428</p>
                 </div>
                 <div className="hotline">
                   <p>EMERGENCY CONTACT!</p>
                   <p>+977-1-4288404</p>
                 </div>
                 <div className="hotline">
                   <p>Contact Details</p>
                   <p>VAYODHA HOSPITAL</p>
                   <p>Address : Balkhu, Kathmandu</p>
                   <p>Email : info@vayodhahospitals.com</p>
                 </div>
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

export default Contact;
