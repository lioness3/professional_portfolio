import React from 'react';
import './styles.css';
import Resume from './Resume';
import Mailto from 'react-protected-mailto';
import { Switch, Route, Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
     
<div className='home'>
<Link to='/'>Home</Link>
</div>
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
        <span className='contact'>Contact</span>
        <div className= 'contactDetails'>
          <Mailto email='joann333carter@gmail.com'/> <Mailto tel='603-566-5610'/>
        </div>
      </div>

      <div className='adventureDropDown'>
        <span className='adventure'><Link to='/themes'>SHOW ME COOL</Link></span>
        <div className='adventureStories'>
          <p>Adventure stories...</p>
        </div>
      </div>

    </div>
  );
}

export default Menu;
