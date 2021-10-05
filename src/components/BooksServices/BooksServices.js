import React from 'react';
import './Bookservices.css'
 
const BooksServices = (props) => {
     const {name, img, price, describe} = props.book
    return (
        <div className="m-5 "> 
   <div className="card mb-3 ">
  <div className="row g-0 bg-color">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start img-size" alt="..."/>
    </div>
    <div className="col-md-8 fw-bolder">
      <div className="card-body">
        <h5 className="fs-3"> Name: {name}</h5>
        <p className="fs-5">describe: {describe}</p>
        <p className=""> Price: ${price} </p> 
         <h3>Course Duration 3 Years</h3>
         <button className=" btn btn-join fs-5 fw-bold">Join Us</button>
       </div>
    </div>
  </div>
</div>
         </div>
    );
};

export default BooksServices;