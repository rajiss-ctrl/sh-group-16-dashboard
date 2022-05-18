import React from 'react'
import './css/Home.css';
import Navbar from '../components/navbar/Navbar';
import Button from '../components/button/Button';
import TeamButton from '../components/button/TeamButton'
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
                  <div className="each-member">
                    <div className="each-member-card"> <img src={Analytics} alt="" /> </div>
                    <p className="each-member-name">Doyle S.</p>
                    <p className="each-member-title">UI/UX Designer</p>
                  </div>

                  <div className="each-member">
                    <div className="each-member-card"><img src={Analytics} alt="" /></div>
                    <p className="each-member-name">Doyle S.</p>
                    <p className="each-member-title">UI/UX Designer</p>
                  </div>

                  <div className="each-member">
                    <div className="each-member-card"><img src={Analytics} alt="" /></div>
                    <p className="each-member-name">Doyle S.</p>
                    <p className="each-member-title">UI/UX Designer</p>
                  </div>

                  <div className="each-member">
                    <div className="each-member-card"><img src={Analytics} alt="" /></div>
                    <p className="each-member-name">Doyle S.</p>
                    <p className="each-member-title">UI/UX Designer</p>
                  </div>

                  <div className="each-member">
                    <div className="each-member-card"><img src={Analytics} alt="" /></div>
                    <p className="each-member-name">Doyle S.</p>
                    <p className="each-member-title">UI/UX Designer</p>
                  </div>
                </div>
                <TeamButton props="View Members"/>
              </div>
            </div>



          </div>
        </main>
    </div>
   
  )
}

export default Home