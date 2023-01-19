import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
      <>
  <nav> 
    <div className='instagram-box'>
      <i className="fab fa-instagram"></i>
      <span className="instagram-text">instagram</span>
    </div>
    <input type="text" placeholder='검색' />
    <div className="icon-nav">
      <i className="far fa-compass"></i>
      <i className="far fa-heart"></i>
      <i className="far fa-user"></i>
    </div>
    <script
  src="https://kit.fontawesome.com/f1d6ea217b.js"
  crossorigin="anonymous"
></script>
  </nav>
    </>
  )
}

export default Nav;
