import React from 'react';
import './styles.css';
import { Switch, Route, Link } from 'react-router-dom';



function Footer() {

  return (
  <div className="footer name">

    <div className='fixedInfo'>
        <h5 >Joann Carter</h5>

       <div>✆</div> <div> <Link to='/'>🏠</Link></div>   <div>✉️</div> 
       <p>Thank you for your time!</p>
      </div>
      
  </div>
  );
}

export default Footer;
