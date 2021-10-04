import React from 'react';
import './Bookservices.css'
 
const BooksServices = (props) => {
     const {name, img, price, describe, credits} = props.book
    return (
        <div className="m-5 "> 
   <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start img-size" alt="..."/>
    </div>
    <div className="col-md-8 fw-bolder">
      <div className="card-body">
        <h5 className="fs-3"> Name: {name}</h5>
        <p className="fs-5">describe: {describe}</p>
        <p className=""> Price: ${price} </p>
        <p> credits :{credits}</p>
        <button className="btn btn-success" >Buy Now</button>
      </div>
    </div>
  </div>
</div>
         </div>
    );
};

export default BooksServices;