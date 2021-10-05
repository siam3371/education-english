import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Books from '../Books/Books';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(()=> {
        fetch('./teachers.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[]) 
    return (
       <div className="container">
            <h1 className="text-center m-5 text-primary"> Meet our Engslish Educational teacher Services</h1>
             <div className="row"> 
             <div className="col-lg-4 col-md-4 hover-overlay shadow-lg p-3 text-center m-5 bg-body rounded"> 
             <h1 className="mb-5">Teacher Services </h1> 
             {
                     teachers.map(teacher => <Teachers
                        key={teacher.id}
                        teacher ={teacher}></Teachers>)
                 } 
                  </div>
                 <div className="col-lg-6 col-md-6">
               <h3>Popular English Books</h3>    
               <Books></Books>
               </div>  
              </div>
       </div>
    );
};

export default Home;