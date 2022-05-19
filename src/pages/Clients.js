import React from 'react'
import { useState, useEffect } from 'react';
import Button from '../components/button/Button'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import './css/Clients.css'


const Clients = () => {
  const [client, setClient] = useState([])


  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`https://fakerapi.it/api/v1/companies?_quantity=10`);
      const clientData = await response.json();
      console.log(clientData.data)
      setClient(clientData.data)
    };

    fetchData();
  }, [])
  return (
    <div className='client-container'>
      <Sidebar />

      <main>
        <div className="separator">
          <Navbar props="Search Clients" />
          <Button props="Add Client" />
        </div>

        <div className="client-info">
          <div className="title">
            <h5> Clients</h5>
          </div>

          <div className="clients">
            <table >
                  <thead>
                    <tr>
                      <td></td>
                      <td >Fullname</td>
                      <td>Email Address</td>
                      <td>Phone Number</td>
                      <td>Gender</td>
                    </tr>
                  </thead>
            {client.map((clnt) => {
              return (

                  <tbody key={clnt.id}>
                    <tr>
                      <td><img src={clnt.image} alt="client" /></td>
                      <td ><h4>{clnt.name}</h4></td>
                      <td>{clnt.email}</td>
                      <td>{clnt.phone}</td>
                      <td>{clnt.contact.gender}</td>
                    </tr>
                  </tbody>

              )
            })}

            </table>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Clients