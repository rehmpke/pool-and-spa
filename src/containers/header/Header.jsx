import React from 'react';
import poolSpa from '../../assets/pool-spa.jpg'
import './header.css';
function Header() {
  return (
    <div className="app__header section__padding" id="home">
      <div className="app__header-content">
        <h1>Pool and Spa Inventory</h1>
        <p>Our family pool and spa chemical inventory system.</p>
      </div>
      <div className="app__header-image">
        <img src={poolSpa} alt="" className="src" />
      </div>
    </div>
  )
}

export default Header