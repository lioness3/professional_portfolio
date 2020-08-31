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
  const [emailColor, setEmailColor] = useState('black')
  
  const show = (  <div className='contactInfo'>
                    <a href="tel:+16035665610"><MdCall/> Call</a> 
                    <a href="sms://+16035665610"><MdSms/> Text</a> 
                    <a href="mailto: joann333carter@gmail.com"><MdEmail/> Email</a>
                   </div>)
  
  
  const showContactInfo = () =>{
   
    if (contactInfo === null){
      setContactInfo(show)
    }else {
      setContactInfo(null)
    }
    
  }
  const handleIconColor = ( icon, seticon)=>{
   let iconColor =  (icon === 'black')? 'rgba(15, 214, 237, .3  )': 'black'
    seticon(iconColor)
  }

  return (
    <div className="menu">
      

      <div className='option'onClick={()=>{handleIconColor(emailColor, setEmailColor); showContactInfo()}} >
       
        <span className='icon' style={{color: `${emailColor}`}} ><MdEmail/></span>
        <p className='description'>Contact</p>
      </div>
      {contactInfo}
      <div className="option" >
        <a href='https://github.com/lioness3' rel="noopener noreferrer" target = "_blank" className='icon' ><AiFillGithub/></a>
        <p className="description">GitHub</p>
      </div>

 
     
      <div className='option' >
 
          <Link to='/about' className='icon'><BsInfoCircleFill/></Link>
        <p className='description'>About</p>
      </div>

     

    </div>
  );
}

export default Menu;
