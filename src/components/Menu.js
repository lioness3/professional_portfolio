import React from 'react';
import './Menu.css';

import Mailto from 'react-protected-mailto';
import { Switch, Route, Link } from 'react-router-dom';
import Pdf from './images/Resume.pdf'
function Menu() {
  return (
    <div className="menu">
      

      <div className='tooltip'>
        
      <a href = {Pdf} target = "_blank" className='resume'>Resume</a>
      
        <span className='tooltiptext'>Download my resume</span>
      </div>
      
      <div className="tooltip">
        <a href='https://github.com/lioness3' className='githubLink'>GitHub</a>
        <span className="tooltiptext">
          Github Link</span>
      </div>

      <div className='tooltip'>
      {/* <div className='contactDropDown'>
        <span className='contact'>Contact </span>
        <div className= 'contactDetails'>
          <div><Mailto email='joann333carter@gmail.com'/> </div><div><Mailto tel='603-566-5610'/></div>
        </div>
      </div> */}
       <span className='contact'>Contact </span>
        <span className='tooltiptext'>Contact Me Directly</span>
      </div>
     
      <div className='tooltip'>
 
          <Link to='/colorful' className='aboutLink'>About</Link>
       
        <span className='tooltiptext'>Download my resume</span>
      </div>

  

    </div>
  );
}

export default Menu;
