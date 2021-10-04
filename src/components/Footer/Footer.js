import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* this is footer */}
            <div className="row container-fluid bg-dark text-white fs-5">
                <div className="col-lg-4 p-5">
                    <h2>About</h2>
                    <p>Team</p>
                    <p>Locations</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                 </div>
                <div className="col-lg-4 p-5">
                    <h3>Resource</h3>
                    <p>Resourse Name</p>
                    <p>Another Resourse</p>
                    <p>Final Resourse</p>
                </div>
                <div className="col-lg-4 p-5">
                    <input type="text" placeholder="Enter Your Email " />
                    {/* button click */}
                    <button className="btn btn-danger">Log in </button>
                     </div>
                     <h3 className="text-center"><small>  
Copyrights © 2021 English Course.
</small></h3> 
            </div>

        </div>
    );
};

export default Footer;