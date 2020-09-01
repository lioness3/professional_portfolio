

import React, { useState } from 'react';
import './Message.css';


function ForHire(props) {
  if (props.show){
    return (
     <div className='moreDetails'>



        <p>Hard Working</p>
        <p>Creative</p>
        <p>Interpersonal Skills</p>
        <p>Problem Solver</p>
        <p>Download my Resume for more details</p>
    
    
    </div>
      );
  }else{
      return (
          <div className='hireMe'>
        <h1>FOR HIRE!</h1>
        </div>
      )
  }


}

export default ForHire;