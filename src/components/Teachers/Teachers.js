import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import {  faPhone} from '@fortawesome/free-solid-svg-icons';

import './Teachers.css'
const Teachers = (props) => {
    // destructering props.teacher
    const {name , img, number, professoin} = props.teacher
     const phone = <FontAwesomeIcon icon={faPhone} /> 
    return ( 
        <>              
                     <img src={img} alt="" />
                     <h2> {name }</h2> 
                      <i className="fs-4">{professoin}</i>
                     <p className="regular-color fs-4">{phone}  {number}</p>  
                     <hr/>
        </>
    );
};

export default Teachers;