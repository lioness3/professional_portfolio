import React from 'react';
import './Menu.css';


import { Switch, Route, Link } from 'react-router-dom';
import Pdf from './images/Resume.pdf'
function Menu() {
  return (
    <div className="menu">
      

      <div className='tooltip menuCol'>
        
      <a href = {Pdf} target = "_blank" rel="noopener noreferrer" className='resume'>Resume</a>
      
        <span className='tooltiptext'>Download my resume</span>
      </div>
      
      <div className="tooltip menuCol">
        <a href='https://github.com/lioness3' rel="noopener noreferrer" target = "_blank" className='githubLink'>GitHub</a>
        <span className="tooltiptext">
          Github Link</span>
      </div>

      <div className='tooltip menuCol'  >
        <Link to ='/contact' className='contact'>Contact</Link>
  
        <span className='tooltiptext'>Contact Me Directly</span>
      </div>
     
      <div className='tooltip menuCol'>
 
          <Link to='/about' className='aboutLink'>About</Link>
        <span className='tooltiptext'>Learn More About Me</span>
      </div>

  

    </div>
  );
}

export default Menu;
