import React from 'react'
import {useState, useEffect } from 'react';
import Button from '../components/button/Button'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import './css/Clients.css'


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

          <div className="clients">
        

            {client.map((clnt)=>{
              return (

                 <table key={clnt.id}>
                  <thead>
                    <tr>
                      <td></td>
                      <td >Fullname</td>
                      <td>Email Address</td>
                      <td>Phone Number</td>
                      <td>Gender</td>
                    </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img src={clnt.image} alt="client" /></td>
                        <td ><h4>{clnt.name}</h4></td>
                        <td>{clnt.email}</td>
                        <td>{clnt.phone}</td>
                        <td>{clnt.contact.gender}</td>
                      </tr>
                    </tbody>
                  
                </table>
            // <div key={clnt.id} className="client-cards-container">
            //  <div className="card">
            //    <img src={clnt.image} alt="cardiac car" />
            //    <div className="card-info">
                
            //  </div>
            //    </div>
            //    </div>

              )
            })}
          

           </div> 
        </div>
      </main>
              </div>
  )
}

export default Clients