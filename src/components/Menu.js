import React from 'react';
import './styles.css';
import Resume from './Resume';
import Mailto from 'react-protected-mailto';
import { Switch, Route, Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
     

      <div className='menuDropDown'>
        <span className='resume' >Resume</span>

        <div className='dropDownContents'>
          <Resume/>
        </div>
      </div>
      
      <div className="tooltip">
        <a href='https://github.com/lioness3' className='githubLink'>GitHub</a>
        <span className="tooltiptext">
          Github Link</span>
      </div>


      <div className='contactDropDown'>
        <span className='contact'>Contact </span>
        <div className= 'contactDetails'>
          <div><Mailto email='joann333carter@gmail.com'/> </div><div><Mailto tel='603-566-5610'/></div>
        </div>
      </div>

      <div className='aboutLink'>
  <Link to='/colorful'>About</Link>
      
      </div>

    </div>
  );
}

export default Menu;
