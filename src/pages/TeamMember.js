import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Uilady from '../assets/dashbordimg/collabWireframe.png'
import Button from '../components/button/Button'
import Sidebar from '../components/sidebar/Sidebar'
import './css/TeamMember.css'

const TeamMember = () => {
  return (
    <div className="team-member-container">

      <main>
        <div className="separator">
              <Navbar/>
              <Button props="Add Members"/>
        </div>

        <div className="members">
          <div className="title">
          <h5> Team Members</h5>
          </div>

          <div className="members-info">
            <div className="member-one">
              <img src={Uilady} alt="" />
              <div className="info">
                <div className="name">
                  <h6>Doyle .S</h6>
                  <p>UX Designer</p>
                </div>
                <ol>
                  <li className='email'>sam.Doyle@gmail.com</li>
                  <li>+234790800499</li>
                  <li className='gender'>Female</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="members-info">
            <div className="member-one">
              <img src={Uilady} alt="" />
              <div className="info">
                <div className="name">
                  <h6>Doyle .S</h6>
                  <p>UX Designer</p>
                </div>
                <ol>
                  <li className='email'>sam.Doyle@gmail.com</li>
                  <li>+234790800499</li>
                  <li className='gender'>Female</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="members-info">
            <div className="member-one">
              <img src={Uilady} alt="" />
              <div className="info">
                <div className="name">
                  <h6>Doyle .S</h6>
                  <p>UX Designer</p>
                </div>
                <ol>
                  <li className='email'>sam.Doyle@gmail.com</li>
                  <li>+234790800499</li>
                  <li className='gender'>Female</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="members-info">
            <div className="member-one">
              <img src={Uilady} alt="" />
              <div className="info">
                <div className="name">
                  <h6>Doyle .S</h6>
                  <p>UX Designer</p>
                </div>
                <ol>
                  <li className='email'>sam.Doyle@gmail.com</li>
                  <li>+234790800499</li>
                  <li className='gender'>Female</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default TeamMember