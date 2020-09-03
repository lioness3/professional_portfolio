import React, { useState } from 'react';
import './Menu.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail, MdCall, MdSms, MdInfo } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Menu() {
  const [contactInfo, setContactInfo] = useState(null)
  const [emailColor, setEmailColor] = useState('black')
  
  const show = (  <div className='contactInfo'>
                    <a href="tel:+16035665610"><MdCall/> Call</a> 
                    <a href="sms://+16035665610"><MdSms/> Text</a> 
                    <a href="mailto: joann333carter@gmail.com"><MdEmail/> Email</a>
                   </div> )
  
  
  const showContactInfo = () =>{
    if (contactInfo === null){
      setContactInfo(show)
    }else {
      setContactInfo(null)
    }  
  }
  // IF the Icon color isnt black then change it to green and vice versa
  const handleIconColor = ( icon, seticon)=>{
   let iconColor =  (icon === 'black')? 'rgba(15, 214, 237, .3  )': 'black'
    seticon(iconColor)
  }

  return (
    <div className="menu">
      <div className='option'onClick={()=>{handleIconColor(emailColor, setEmailColor); showContactInfo()}} >
        <span className='icon' style={{color: `${emailColor}`}} ><MdEmail/></span>
        <p className='description'>Contact Me</p>
      </div>

      {contactInfo}

      <div className="option" >
        <a href='https://github.com/lioness3' rel="noopener noreferrer" target = "_blank" className='icon' ><AiFillGithub/></a>
        <p className="description">GitHub</p>
      </div>

      <div className="option" >
        <a href='https://www.linkedin.com/in/joann-carter/' rel="noopener noreferrer" target = "_blank" className='icon' ><AiFillLinkedin/></a>
        <p className="description">LinkedIn</p>
      </div>
      <div className='option' >
        <Link to='/about' className='icon'><MdInfo/></Link>
        <p className='description'>About Me</p>
      </div>
    </div>
  );
}

export default Menu;