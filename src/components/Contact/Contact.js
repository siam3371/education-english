 import React from 'react';
  import './Contact.css' 
 import './Contact.css'
 

//  contact pages
 const Contact = () => {
      return (
   <div className="contact fw-bold">
             <div className=" text-center p-5 fw-bolder">
             <h1>Get In Touch
</h1>
    
          </div>
          <div className="row">
              <div className="col-lg-6 text-center">
                  <h2>Register below to enroll a Our English Course</h2>
                  <input className="input-sizing" type="text" placeholder="Enter Your Full Name" required />
                  <br/>
                  <input className="input-sizing-new" type="text" placeholder="Email Address" required/>
                  <input className="input-sizing-new" type="text" placeholder="Phone Number" required />
                   <button className="btn btn-danger regular-btn">  <i className="fas fa-sign-in-alt"></i>  Sing In</button> 
                </div> 
                <div className="col-lg-6">
                  <h2> <i className="social-link fas fa-map-marker-alt"> </i>  Postal Address:</h2>          
                  <h4>PO Box 97845 Baker, Los Angeles, California, US.</h4>
                  <h2><i className=" social-link fas fa-envelope"> </i>  Email:</h2> 
                  <h4>educationEnglish@gmail.com</h4>
                  <h2> <li className=" social-link fas fa-globe px-2" > </li>Web:</h2>
                  <h4>education.com</h4>
                </div>
          </div> 
   </div>
     );
 };
 
 export default Contact;