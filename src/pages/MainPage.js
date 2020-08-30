import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from '../components/Menu';
import { MdEmail, MdCall, MdSms, MdGetApp } from 'react-icons/md';
import './MainPage.css'

import star from '../components/images/star.png'



function MainPage() {
const [contact, setContactInfo]= useState(null)
const contactMe = (
  <div>
    <MdEmail/>
   <p>Contact Me</p>
   </div>
)
const [details, setDetails] = useState(contactMe)
  const [available, setAvailability] = useState('available')
  const handleAppStore = ()=>{
    console.log('clicked');
    
    if (available === 'available'){
      setAvailability('unAvailable')
    }else {
      setAvailability('available')
    }
  }

 

 const contactInfo = (
 <div className='contactDetails' onClick={()=>{ setContactInfo(null)}}>
    <a href="tel:+16035665610">Call <MdCall/></a>
    <a href="sms://+16035665610">Text <MdSms/></a> 
    <a href="mailto: joann333carter@gmail.com">Email <MdEmail/></a> 
   </div>
 )
 const handleContactInfo = ()=>{
  
  if (details ){
    setContactInfo(contactInfo)
    setDetails(null)
  }else {
    setDetails(contactMe)
    setContactInfo(null)
  }
}

  return (
    <div className="mainPage">
    
      <Menu/> 

      <div className={`card  ${available}`} onClick={()=>{ 
      handleAppStore()
        }}>
          <MdGetApp/>
         <p>Download My App</p>     
      </div>
      <div className='card contact'onClick={()=>{
    handleContactInfo() 
   }}>
      {details}
     
 
   </div>
   {contact}

      {/* <img src={star} className='star' alt='star' />
      <img src={star} className='star2' alt='star' />
      <img src={star} className='star3' alt='star' />
      <img src={star} className='star4' alt='star' />
      <img src={star} className='star5' alt='star' />
      <img src={star} className='star6' alt='star' />
      <img src={star} className='star7' alt='star' />
      <img src={star} className='star8' alt='star' />
      <img src={star} className='star9' alt='star' />
      <img src={star} className='starRight' alt='star' /> */}
  
    </div>
  );
}

export default MainPage;
