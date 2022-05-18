import React from 'react'
import Analytics from '../../assets/Analytics.jpg';
import './EachMember.css'

const EachMember = () => {
  return (
    <div>
                <div className="each-member">
                    {
                        ((item) => (
                            <div className="each-member-card" key={item.id}>
                                <div className="img-bg">
                                    <img width="205px" height="160px" src={Analytics} alt={item.title} />
                                </div>
                                <div className="content">
                                    <h5 className="each-member-name">{item.name}</h5>
                                    <p className="each-member-title">{item.title}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
    </div>
  )
}

export default EachMember