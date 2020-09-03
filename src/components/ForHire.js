

import React from 'react';
import './Message.css';



function ForHire(props) {
  if (props.show){
    return (
     <div className='moreDetails'>
        <p className='creative'>Creative</p>
        <p className='lineB'>Problem Solver</p>
        <p className='lineA'>Motivated</p>
       
     </div>
      )
   }else{
      return (
          <div className='hireMe'>
            <p>FOR HIRE!</p>
          </div>
      )
  }


}

export default ForHire;