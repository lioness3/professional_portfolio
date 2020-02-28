import React from 'react';
import './styles.css';
import Resume from './Resume';
import Mailto from 'react-protected-mailto';

function Menu() {
  return (
  <div className="menu">

    <div className='menuDropDown'>
      <span className='resume' >Resume</span>

        <div className='dropDownContents'>
          <Resume/>
        </div>
    </div>

    <a href='https://github.com/lioness3' className='githubLink'>GitHub</a>

    <div className='contactDropDown'>
      <span className='contact'>Contact</span>
      <div className= 'contactDetails'>
        <Mailto email='joann333carter@gmail.com'/> <Mailto tel='603-566-5610'/>
      </div>
    </div>

    <div className='adventureDropDown'>
      <span className='adventure'>Adventures</span>
      <div className='adventureStories'>
        <p>Adventure stories...</p>
      </div>
  </div>

  </div>
  );
}

export default Menu;
