import React, {useState} from 'react';
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
const [displayMentionables, setDisplayMentionables] = useState('infoHidden')
const [displayFavorites, setDisplayFavorites] = useState('infoHidden')
const [displayAdventures, setDisplayAdventures]= useState('infoHidden')
const [displayHobbies, setDisplayHobbies] = useState('infoHidden')
const showMentionablesInfo = ()=>{
  if (displayMentionables === 'infoHidden'){
    setDisplayMentionables('info')
  }else{
    setDisplayMentionables('infoHidden')
  }
  
}
const showFavoritesInfo = ()=>{
  if (displayFavorites === 'infoHidden'){
    setDisplayFavorites('info')
  }else{
    setDisplayFavorites('infoHidden')
  }
  
}
const showAdventuresInfo = ()=>{
  if (displayAdventures === 'infoHidden'){
    setDisplayAdventures('stories')
  }else{
    setDisplayAdventures('infoHidden')
  }
  
}
const showHobbiesInfo = ()=>{
  if (displayHobbies === 'infoHidden'){
    setDisplayHobbies('stories')
  }else{
    setDisplayHobbies('infoHidden')
  }
  
}
  return (
    <div className="colorfulPage">
 
        <Link to='/' className='homeLink'>Joann Carter</Link>

  
  
      <div className='zoomContainer'>

        <div className='section' >
        <p className='heading'>ADVENTURES<span className='carrot' onClick={()=>{showAdventuresInfo()}}> ...</span></p>
        <div className = {displayAdventures}>
          <p className='caption'>I recently drove across the country with my co pilot, Shadow. </p>
          <img src={coPiolit} className='coPiolit' alt='cat image'/>
          <p className='caption'>We explored Niagra Falls</p>
          <img src={Niagra} className='niagra' alt='image'/>
          <p className='caption'> Our final destination was Washington, where we currently reside.</p>
          <img src={cat} className='cat' alt='cat'/>
    
          <img src={shadow} className='shadow' alt='cat'/>
  </div>
        </div>

       

        <div className='section'>
          <p className='heading'>HOBBIES<span className='carrot' onClick={()=>{showHobbiesInfo()}}> ...</span></p>
          <div className = {displayHobbies}>
          <p className='caption'>I feel grounded when im in nature.</p> 
          <img src={waterfallAdventure} className='waterfallAdventure' alt='image'/>
          <p className='caption'>I enjoy creating crafts out of recycled material. </p>
          <img src={craft} className='craft' alt='craft image' /> 
          </div>
        </div>
      </div>
      <div className='zoomContainer2'>
       <div className='section2 '>
          <p className=' heading2 '>MENTIONABLES<span className='carrot' onClick={()=>{showMentionablesInfo()}}> ...</span></p>
          <div className = {displayMentionables}>
            <p>React</p>
            <p>React Native</p>
            <p>Ruby </p>
            <p>Rails</p>
            <p>Ionic</p>
            <p>Pair Programming</p>
            <p>Associates in Science </p>
            <p>Web and Mobile Developer</p>
            <p>Ham Radio License</p>
            <p>Licensed Manicurist</p>
            <p>Sig Sauer Certifications</p>
            <p>Barbizon Modeling Academy</p>
          </div>
         
        </div> 
         <div className=' section2 '>
          <p className=' heading2 '>FAVORITES<span  className='carrot' onClick={()=>{showFavoritesInfo()}}> ...</span></p>
          <div className={displayFavorites}>

              <p className='pizza'>Pizza <span className='pizzaEmoji'>🍕</span></p>
              <p className='iceCream'>Ice Cream <span className='iceCreamEmoji'>🍦</span></p>
              <p className='puzzles'>Puzzles <span className='puzzlesEmoji'>🧩</span></p>
              <p className='tacos'>Tacos <span className='tacosEmoji'>🌮</span> </p>
              <p className='family'>Family <span className='familyEmoji'>👨‍👩‍👧</span></p>
              <p className='raceCar'>Race Cars <span className='raceCarEmoji'>🏎</span></p>
              <p className='crafts'>Crafts <span className='craftsEmoji'>🧶</span></p>
          
         

             
  
            
         
  
             
          
          </div>

        </div>  
      
        </div> 
     </div>

  );
}

export default ColorfulPage;