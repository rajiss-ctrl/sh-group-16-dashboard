import React from 'react'
import './css/Home.css';
import Navbar from '../components/navbar/Navbar';
import Button from '../components/button/Button';
import TeamButton from '../components/button/TeamButton'
import EachMember from '../components/EachMember/EachMember'
import ItemCard from '../components/itemCard/'
import Analytics from '../assets/Analytics.jpg';
import Sidebar from '../components/sidebar/Sidebar';


const Home = () => {
  return (

    <div className="container">
        <Sidebar/>
        <main>
          <div className="separator">
            <Navbar/>
            <Button props="Add Members"/>
          </div>

          <div className="card">
            <h2 className="welcome">
              Welcome, 
            </h2>
            <div className="analytics">
              <img src={Analytics} alt="" />
            </div>

            <div className="team-card">
              <div className="title">
                <h2>Team Members</h2>
              </div>
              <div className="team-members">

                <div className="each">
                  <EachMember/>

                </div>
                <TeamButton props="View Members"/>
              </div>
            </div>


            <div className="client-card">
              <div className="title">
                <h2>Clients</h2>
              </div>

              <div className="client-infor">
                <table>
                  <thead>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <div className="product-card">
              <div className="title">
                <h2>Products</h2>
              </div>
              <ItemCard/>
            </div>


          </div>
        </main>
    </div>
   
  )
}

export default Home