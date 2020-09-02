

import React, { useState } from 'react';
import './Message.css';
import Pdf from './images/Resume.pdf';


function ForHire(props) {
  if (props.show){
    return (
     <div className='moreDetails'>


        <p className='lineB'>Problem Solver</p>
        <p className='lineA'>Motivated</p>
        <p className='creative'>Creative</p>
   
       
        
        <a href = {Pdf} target = "_blank" rel="noopener noreferrer" className=''> <p>Download my Resume for more details</p>  </a>
    
    </div>
      );
  }else{
      return (
          <div className='hireMe'>
        <p>FOR HIRE!</p>
        </div>
      )
  }


}

export default ForHire;