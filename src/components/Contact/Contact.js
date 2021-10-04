 import React from 'react';
  import './Contact.css' 
 import './Contact.css'
 
//  contact pages
 const Contact = () => {
 
     return (
   <div className="contact">
             <div className=" p-5 fw-bolder">
             <h1>Contact</h1>
             <p>Get a premium support now!</p>
          </div>
          <div className="row">
              <div className="col-lg-12 text-center">
                  <h2>Register below to enroll a Our English Course</h2>
                  <input className="input-sizing" type="text" placeholder="Enter Your Full Name" required />
                  <br/>
                  <input className="input-sizing-new" type="text" placeholder="Email Address" required/>
                  <input className="input-sizing-new" type="text" placeholder="Phone Number" required />
                  {/* <input type="text" /> */}
                  <button className="btn btn-danger regular-btn">  <i className="fas fa-sign-in-alt"></i>  Sing In</button> 
                </div> 
          </div> 
   </div>
     );
 };
 
 export default Contact;