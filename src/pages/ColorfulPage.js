import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from '../components/Menu';

import './ColorfulPage.css'
import Footer from '../components/Footer';
import leaves from '../components/images/leafs.png'
import leaf from '../components/images/leaf.png'
import shadow from '../components/images/shadow.jpeg'
import vine from '../components/images/vi.png'
import workBuddy from '../components/images/workBuddy.jpeg'
import coPiolit from '../components/images/coPiolit.jpeg'
import waterfallAdventure from '../components/images/waterfallAdventure.jpeg'

import Niagra from '../components/images/Niagra.jpeg'
import cat from '../components/images/cat.jpeg'
import craft from '../components/images/craft.jpeg'
function ColorfulPage() {


  return (
    <div className="colorfulPage">
 
        <Link to='/' className='homeLink'>Joann Carter</Link>

  
  
      <div className='zoomContainer'>

        <div className='section' >
        <p className='heading'>RECENT ADVENTURE</p>
          <p className='caption'>I recently drove across the country with my co pilot, Shadow. </p>
          <img src={coPiolit} className='coPiolit' alt='cat image'/>
          <p className='caption'>First, We drove from New Hampshire to Niagra Falls</p>
          <img src={Niagra} className='niagra' alt='image'/>
          <p className='caption'> Our final destination was Washington, where we currently reside.</p>
          <img src={cat} className='cat' alt='cat'/>
    
          <img src={shadow} className='shadow' alt='cat'/>
  
        </div>

       

        <div className='section'>
          <p className='heading'>HOBBIES</p>
          <p className='caption'>I feel grounded when im in nature.</p> 
          <img src={waterfallAdventure} className='waterfallAdventure' alt='image'/>
          <p className='caption'>I enjoy creating crafts out of recycled material. </p>
          <img src={craft} className='craft' alt='craft image' /> 
        </div>
      </div>
       <div className=' skills'>
          <p className='skillsCaption'>SKILLS</p>
          <div className='skillsList'>
            <span>RUBY </span>
            <span>RAILS</span>
            <span>IONIC</span>
            <span>REACT</span>
            <span>REACT NATIVE</span>
            <span>NPM</span>
            <span>PAIR PROGRAMMING</span>
          </div>
         
        </div> 
         <div className=' clip'>
          <p className='clipCaption'>Some of my favorite things</p>
          <div className='favorites'>
            <span>PIZZA</span>
            <span>ICE CREAM</span>
            <span>PUZZLES</span>
            <span>TACOS</span>
            <span>FAMILY</span>
            <span>RACE CARS</span>
            <span>CRAFTS</span>
        
          </div>

        </div>  
        <div className=' accomplishments'>
          <p className='accomplishmentsCaption'>ACCOMPLISHMENTS</p>
          <div className='accomplishmentsList'>
            <span>ASSOCIATES IN SCIENCE </span>
            <span>WEB AND MOBILE DEVELOPER</span>
            <span>HAM RADIO LICENSE</span>
            <span>LICENSED NAIL TECHNICIAN</span>
            <span>SIG SAUER CERTIFICATIONS</span>
            <span>BARBIZON MODELING ACADEMY</span>
          </div>
        </div>  
     </div>

  );
}

export default ColorfulPage;