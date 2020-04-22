import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Name from '../components/Name';
import './ColorfulPage.css'
import Footer from '../components/Footer';
import leaves from '../components/images/leafs.png'
import shadow from '../components/images/shadow.jpeg'
import vine from '../components/images/vi.png'
import workBuddy from '../components/images/workBuddy.jpeg'
import coPiolit from '../components/images/coPiolit.jpeg'
import waterfallAdventure from '../components/images/waterfallAdventure.jpeg'
import streetAdventures from '../components/images/streetAdventures.jpeg'
import Niagra from '../components/images/Niagra.jpeg'
import cat from '../components/images/cat.jpeg'
import craft from '../components/images/craft.jpeg'
function ColorfulPage() {


  return (
    <div className="colorfulPage">
 <div className='adventureMenu'>
 <p className='homeLink'>Home</p>
 
 </div>
      {/* cross country section 
      favorite things section
      fun facts section 
      hobbies */}



 <div className='zoomContainer'>
   <h3 className='zoomText'>My Latest Adventure</h3>
  
   <div className='section' >
    <p>I recently drove across the country with my co pilot, Shadow. </p>

    <img src={cat} className='cat' alt='cat'/>
  </div>

<div className='section'>
<p>We drove from Newhampshire to Niagra Falls and then across the top of the country to Oregon.It was in oregon that I attended a coding bootcamp where i discovered my passion for front end Development</p>
<img src={coPiolit} className='coPiolit' alt='cat image'/>
<img src={shadow} className='shadow' alt='cat'/>
<img src={streetAdventures} className='streetAdventure' alt='image on street'/>
  <img src={Niagra} className='niagra' alt='image of niagra falls'/>
</div>
 
 <div className='section'>
<p>I like the outdoors and i find myself making crafts and creating mobile apps in my spare time..</p>
<img src={waterfallAdventure} className='waterfallAdventure' alt='image'/>
  <img src={craft} className='craft' alt='craft image' /> 
</div>
 
<div>
 


</div>
<div>
<p> 
     
     
     
  </p>
 
</div>
 </div>

    </div>
  );
}

export default ColorfulPage;