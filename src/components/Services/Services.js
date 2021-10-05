 import React, { useEffect, useState } from 'react';
 import './Services.css'
import BooksServices from '../BooksServices/BooksServices';
//  services section
 const Services = () => {
     const [books, setBooks] = useState([])
     useEffect(()=> {
         fetch('./educationBooks.JSON')
         .then(res => res.json())
         .then(data => setBooks(data))
     },[])
     return (
         <div className='row'>
             <div className="fs-3 text-center" >
             <h1 className="services-header"> If Any Books Read Problem Meet Our Teacher</h1>
             <p>Collected Our Book</p>
             </div>
              <div className="col-lg-12 bg-color"> 
                {
                    books.map(book => <BooksServices
                        key={book.credits}
                        book={book}></BooksServices>)
                } 
             </div>
         </div>
     );
 };
 
 export default Services;