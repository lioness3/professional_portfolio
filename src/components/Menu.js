import React, { useState } from 'react';
import './Menu.css';


import { Switch, Route, Link } from 'react-router-dom';
import Pdf from './images/Resume.pdf'
function Menu() {
  const [contactInfo, setContactInfo] = useState(null)
  const show = (  <div>
                 <p><a href="tel:+16035665610">call</a></p> 
                 <p><a href="sms://+16035665610">text</a></p> 
                 <p><a href="mailto:+16035665610">joann333carter@gmail.com</a></p>
                   </div>)
  
  
  const showContactInfo = () =>{
   
    if (contactInfo === null){
      setContactInfo(show)
    }else {
      setContactInfo(null)
    }
    
  }
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

      <div className='tooltip menuCol'onClick={()=>{showContactInfo()}}  >
        <span className='contact' >Contact</span>
        <span className='tooltiptext'>Contact Information</span>
        {contactInfo}
      </div>
     
      <div className='tooltip menuCol'>
 
          <Link to='/about' className='aboutLink'>About</Link>
        <span className='tooltiptext'>Learn More About Me</span>
      </div>

  

    </div>
  );
}

export default Menu;
