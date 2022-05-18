import React from 'react'
import {useState, useEffect } from 'react';
import Button from '../components/button/Button'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
// import Drean from '../assets/productImg/dreamcar 1.png'
// import Cardiac from '../assets/productImg/cardiallac 1.png'
// import Cardiac from '../assets/productImg/cardiallac 1.png'
// import Cardiac from '../assets/productImg/cardiallac 1.png'
import './css/Product.css'

import Sidebar from '../components/sidebar/Sidebar'
const Clients = () => {
  const [client, setClient] = useState([])


useEffect(() => {

  const fetchData = async () => {
    const response = await fetch(`https://fakerapi.it/api/v1/companies?_quantity=1`);
    const clientData = await response.json();
    console.log(clientData.data)
     setClient(clientData.data)
  };

  fetchData();
}, [])
  return (
    <div className='client-container'>
    <Sidebar/>

     <main>
        <div className="separator">
              <Navbar/>
              <Button props="Add Members"/>
        </div>

        <div className="client-info">
          <div className="title">
          <h5> Clients</h5>
          </div>

          <div className="clienys">
           <p>Click on <strong>View</strong> to edit product details  </p>

            {client.map((clnt)=>{
              return (
            <div key={clnt.id} className="product-cards-container">
             <div className="card">
               <img src={clnt.image} alt="cardiac car" />
               <div className="card-info">
                
             </div>
               </div>
               </div>

              )
            })}
          

           </div> 
        </div>
      </main>
              </div>
  )
}

export default Clients