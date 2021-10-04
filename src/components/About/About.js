import React from 'react';
import './about.css'
const About = () => {
    return (
        <div>
            {/* about header part */}
         <div className="fw-bold fs-4 text-center about-header bg-danger p-5 " >
         <h1>About</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.</p>
         </div>
                {/* about main part */}
                  <div className="row align-self-center ">
                      <div className="col-lg-6 text-center mt-5 p-5 fw-bolder col-md-6">
                          <h3>The Best Way to Learn English Language</h3>
                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                          <button className="btn-regular fw-bold mt-5">Get Started</button>
                       </div>
                      <div className="col-lg-6 col-md-6 mb-5">
                          <img className="img-sizing" src="https://image.shutterstock.com/image-photo/young-student-boy-smiling-looking-260nw-304191287.jpg" alt="" />
                      </div>
                  </div>
           </div>
    );
};

export default About;