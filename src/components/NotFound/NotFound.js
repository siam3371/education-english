import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        // not found page create
        <div className="text-center"> 
          <h1 className="not-found">4 <small className="zero">0</small> 4</h1>
          <h3 className="text-danger">Opps! this page could not be found</h3>
        </div>
    );
};

export default NotFound;