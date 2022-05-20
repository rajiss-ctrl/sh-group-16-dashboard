import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
// import Uilady from '../assets/dashbordimg/collabWireframe.png'
import Button from '../components/button/Button'
import Sidebar from '../components/sidebar/Sidebar'
import './css/TeamMember.css'
import { useNavigate } from 'react-router-dom'

const TeamMember = () => {
const [member, setMember] = useState([])
const navigate = useNavigate()


useEffect(() => {

  const fetchData = async () => {
    const response = await fetch(` https://fakerapi.it/api/v1/persons?_quantity=10`);
    const newData = await response.json();
    console.log(newData.data)
     setMember(newData.data)
  };

  fetchData();

}, [setMember])


const handleClick = ()=>{
  navigate('/signup')
}


  return (
    <div className="team-member-container">
            <Sidebar/>
      <main>
        <div className="separator">
              <Navbar props="Search Team Members"/>
              <Button handleClick={handleClick} props="Signin As Admin"/>
        </div>

        <div className="members">
          <div className="title">
          <h5> Team Members</h5>
          </div>

            {member.map((member)=>{
              return (
              <div key={member.id} className="members-info">

            <div className="member-one">
              <img src={member.image} alt="" />
              <div className="info">
                <div className="name">
                  <h6>{member.lastname}</h6>
                  <p>UX Designer</p>
                </div>
                <ol>
                  <li className='email'>{member.email}</li>
                  <li>{member.phone}</li>
                  <li className='gender'>{member.gender}</li>
                </ol>
              </div>
            </div>
          </div>
              )
            })}

          {/* <div className="members-info">
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
          </div> */}
        </div>
      </main>

    </div>
  )
}

export default TeamMember