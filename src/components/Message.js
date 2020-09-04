import React from 'react';
import './Message.css';
import { AiFillCloseCircle} from 'react-icons/ai';

function Message(props) {


  if (props.show){
    return (
 
      <div className='welcome' >
        <div className='closeMessage'>
        <AiFillCloseCircle onClick={()=>{
            props.handleMessageDisplay()
            }}/>
        </div>
        <div className='helloMessage'>
          <p id='hello'>Hello!</p>
          <p>Thank you for taking the time to be here today. Feel free to click and explore to discover what I'm all about.</p>
          <p>There is an 'About Me' section, a PDF download for my resume, contact information, my custom app download, and even pictures of my cat.</p>
          <p>I'm currently seeking a career in software development.</p>
          <p style={{float:'right'}}>- Joann Carter</p>
        </div>
      </div>
      );
  }else{
      return null
  }
}

export default Message;