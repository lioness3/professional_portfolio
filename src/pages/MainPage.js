import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Name from '../components/Name';
import { MdEmail, MdCall, MdSms, MdGetApp,MdHelpOutline } from 'react-icons/md';
import { VscFilePdf } from 'react-icons/vsc';
import './MainPage.css';
import Pdf from '../components/images/Resume.pdf';
import Message from '../components/Message'
import ForHire from '../components/ForHire'
import { AiFillCloseCircle} from 'react-icons/ai';
function MainPage() {
const [contact, setContactInfo]= useState(null)
const [appDetails, setAppDetails] = useState('Download My App')
const [message, setMessage] = useState(false)
const [forHire, setForHire] = useState(false)
const contactMe = (
  <div>
    <MdEmail/>
   <p>Contact Me</p>
   </div>
)
const [details, setDetails] = useState(contactMe)
  const [available, setAvailability] = useState('available')

  const handleAppStore = ()=>{
   
    
    if (available === 'available'){
      setAppDetails('Work in Progress')
      setAvailability('unAvailable')
    }else {
      setAppDetails('Download My App')
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
const handleMessageDisplay = (content, setContent)=>{
  if(content){
    setContent(false)
  }else{
    setContent(true)
  }
  
}

  return (
    <div className="mainPage">
   
      <Menu/> 
      <Message show={message} handleMessageDisplay={()=>{handleMessageDisplay(message, setMessage)}} />

      <div className='sidebar'>
      <Link to='/about'><Name /></Link> 
      <div onClick={()=>{
        handleMessageDisplay(forHire, setForHire)
      }}>
      <ForHire show={forHire}/>
      </div>
        <div className={`card  ${available}`} onClick={()=>{ 
        handleAppStore()
          }}>
            <MdGetApp/>
          <p>{appDetails}</p>     
        </div>
        <div className='card resume'>
          <a href = {Pdf} target = "_blank" rel="noopener noreferrer" className=''> <VscFilePdf/> <p>Download My Resume</p>  </a>
        </div>
      </div>
  

    
    

  
      <div className='help' onClick={()=>{
handleMessageDisplay(message, setMessage)
      }}>
      <MdHelpOutline color='rgb(111, 8, 8 )' size='5vmax'/>
 
      </div>

    </div>
  );
}

export default MainPage;
