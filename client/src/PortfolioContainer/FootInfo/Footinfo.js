import React from 'react';

import './Footinfo.css';

export default function Footinfo() {
  let year = new Date().getFullYear(); 
  return (
    <div className="footer-container">
      <div className="custom-shape-divider-top-1648635402">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="design">
        <p>Designed and Developed by <span>Ketan Shah</span></p>
      </div>
      <div className="copyright">
        <p>Copyright © {year} KS</p>
      </div>
    </div>
  )
}
