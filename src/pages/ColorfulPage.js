import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Name from '../components/Name';
import './ColorfulPage.css'
import Footer from '../components/Footer';
import leaves from '../components/images/leafs.png'

import vine from '../components/images/vi.png'
function ColorfulPage() {


  return (
    <div className="colorfulPage">
 <div className='adventureMenu'>
 <p className='homeLink'>home</p>
 
 </div>
        {/* ZOOM IN CLICK HERE TO LEARM MORE */}

 <div className='zoomContainer'>
   <h3 className='zoomText'>My Adventures..</h3>
   <div>
<p>I recently drove across the country with my cat...</p>
</div>
  
<div>
<p>racecar</p>
</div>
<div>
<p> 
     
     I like the outdoors and i find myself making crafts and creating mobile apps in my spare time..
     
  </p>
</div>
 </div>

    </div>
  );
}

export default ColorfulPage;