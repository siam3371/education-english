import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        // this is header part
        <div className='fs-4 d-flex justify-content-around background-color text-success'>
            <div>
                 <h2>English Educational Course</h2>
            </div>
         <div>
         <Link className="  m-3 text-decoration-none" to="/">Home</Link>  
         <Link className="  m-3  text-decoration-none" to="/about">About Us</Link>
         <Link className="  m-3  text-decoration-none" to="/services">Services</Link>
         <Link className="  m-3 text-decoration-none" to="contact">Contact</Link>
         </div>
        </div>
    );
};

export default Header;