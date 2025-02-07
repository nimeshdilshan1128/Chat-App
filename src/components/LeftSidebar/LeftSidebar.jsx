import React from 'react'
import './LeftSidebar.css'
import assests from '../../assets/assets'

const LeftSidebar = () => {
  return (
    <div className='ls'>
        <div className="ls-top">
            <div className="ls-nav">
                <img src={assests.logo} className="logo" alt="" />
                <div className="menu">
                    <img src={assests.menu_icon} alt="" className="src" />
                    <div className='sub-menu'>
                        <p>Edit Profile</p>
                        <hr />
                        <p>logout</p>
                    </div>
                </div>
            </div>
            <div className="ls-search">
                <img src={assests.search_icon} alt="" className="src" />
                <input type="text" placeholder="Search here..." />
            </div>
        </div>
        <div className="ls-list">
            {Array(12).fill("").map((item, index) => (
                <div key={index} className="friends">
                <img src={assests.profile_img} alt="" />
                <div>
                    <p>Nimesh Dilshan</p>
                    <span>Hello, How are you?</span>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default LeftSidebar