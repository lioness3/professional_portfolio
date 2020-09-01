import React, { useState } from 'react';
import './Message.css';


function Message(props) {
  if (props.show){
    return (
        <div className="message">
          <div className='welcome' >
             <p>Hello! Thanks for taking the time to be here today. Feel free to click and explore to discover what I'm all about.</p>
             <p>There is an about sectkion, a PDF download for my resume, contact information, my custom App download, and even pictures of my cat.</p>
             <p>Im currently looking for a career in front end development. </p>
          </div>
       
    
        
        </div>
      );
  }else{
      return null
  }


}

export default Message;