import React from 'react'
import './css/Home.css';
import './css/Product.css'
import Navbar from '../components/navbar/Navbar';
import Button from '../components/button/Button';
import TeamButton from '../components/button/TeamButton'
import Analytics from '../assets/Analytics.jpg';
import Cardiac from '../assets/productImg/cardiallac 1.png'
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

{/* Team Members Section */}
            <div className="team-card">
              <div className="title">
                <h2>Team Members</h2>
              </div>

              <div className="team-members">

                <div className="each-member">
                  <div className="each-member-card"> <img src={Analytics} alt="" /></div>
                  <div>
                    <h3 className="each-member-name"> Doyle S.</h3>
                    <p className="each-member-title">UI/UX Designer</p>
                  </div>
                </div>

                <div className="each-member">
                  <div className="each-member-card"> <img src={Analytics} alt="" /></div>
                  <div>
                    <h3 className="each-member-name"> Doyle S.</h3>
                    <p className="each-member-title">UI/UX Designer</p>
                  </div>
                </div>

                <div className="each-member">
                  <div className="each-member-card"> <img src={Analytics} alt="" /></div>
                  <div>
                    <h3 className="each-member-name"> Doyle S.</h3>
                    <p className="each-member-title">UI/UX Designer</p>
                  </div>
                </div>

                <div className="each-member">
                  <div className="each-member-card"> <img src={Analytics} alt="" /></div>
                  <div>
                    <h3 className="each-member-name"> Doyle S.</h3>
                    <p className="each-member-title">UI/UX Designer</p>
                  </div>
                </div>

                <div className="each-member">
                  <div className="each-member-card"> <img src={Analytics} alt="" /></div>
                  <div>
                    <h3 className="each-member-name"> Doyle S.</h3>
                    <p className="each-member-title">UI/UX Designer</p>
                  </div>
                </div>

                <TeamButton props="View Members"/>
              </div>
            </div>

{/* Client Section */}

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
              <div className="product-cards-container">
                <div className="card">
               <img src={Cardiac} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>Ford</h4>
                    <p>$5,000</p>
                    <span>Tax: 2%</span>
                 </div>
                 <button>View</button>
               </div>
             </div>
              </div>
            </div>


          </div>
        </main>
    </div>
   
  )
}

export default Home