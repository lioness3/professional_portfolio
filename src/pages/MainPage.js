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
import envelope from '../components/images/envelope.png'
// import { AiFillCloseCircle} from 'react-icons/ai';
function MainPage() {

const [appDetails, setAppDetails] = useState('Download My App')
const [message, setMessage] = useState(false)
const [forHire, setForHire] = useState(false)


  const [available, setAvailability] = useState('available')

  const handleAppStore = ()=>{
   
    
    if (available === 'available'){
      setAppDetails('Coming Soon')
      setAvailability('unAvailable')
    }else {
      setAppDetails('Download My App')
      setAvailability('available')
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
      <Link to='/about' className='nameLink'><Name /></Link> 
      <div onClick={()=>{
        handleMessageDisplay(forHire, setForHire)
      }}>
      <ForHire show={forHire}/>
      </div>
      <hr/>
        <div className={`card  ${available}`} onClick={()=>{ 
        handleAppStore()
          }}>
            <MdGetApp/>
          <p>{appDetails}</p>     
        </div>
      
        <div className='card resume'>
          <a href = {Pdf} target = "_blank" rel="noopener noreferrer" > <VscFilePdf/> <p>Download My Resume</p>  </a>
        </div>
        <hr/>
      </div>
  

    
    

  
      <div className='help' onClick={()=>{
        handleMessageDisplay(message, setMessage)
      }}>
      <img src={envelope} alt={envelope}/>
 
      </div>

    </div>
  );
}

export default MainPage;
