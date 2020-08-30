import React, { useState } from 'react';
import './Menu.css';
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail, MdCall, MdSms } from 'react-icons/md';
import { BsInfoCircleFill } from 'react-icons/bs';
import { VscFilePdf } from 'react-icons/vsc';



import { Switch, Route, Link } from 'react-router-dom';
import Pdf from './images/Resume.pdf'
function Menu() {
  const [contactInfo, setContactInfo] = useState(null)
  const show = (  <div className='contactInfo'>
                 <p><a href="tel:+16035665610">Call <MdCall/></a></p> 
                 <p><a href="sms://+16035665610">Text <MdSms/></a></p> 
                 <p><a href="mailto: joann333carter@gmail.com">Email <MdEmail/></a></p>
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
        
      <a href = {Pdf} target = "_blank" rel="noopener noreferrer" className='resume'><VscFilePdf/></a>
      
        <span className='tooltiptext'>Download my resume</span>
      </div>
      
      <div className="tooltip menuCol">
        <a href='https://github.com/lioness3' rel="noopener noreferrer" target = "_blank" className='githubLink'><AiFillGithub/></a>
        <span className="tooltiptext">
          Github Link</span>
      </div>

      {/* <div className='tooltip menuCol'onClick={()=>{showContactInfo()}}  >
        <span className='contact' ><MdEmail/></span>
        <span className='tooltiptext'>Contact Information</span>
        {contactInfo}
      </div> */}
     
      <div className='tooltip menuCol'>
 
          <Link to='/about' className='aboutLink'><BsInfoCircleFill/></Link>
        <span className='tooltiptext'>Learn More About Me</span>
      </div>

     

    </div>
  );
}

export default Menu;
