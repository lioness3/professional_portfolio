import React, {useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';


import './ColorfulPage.css'


import shadow from '../components/images/shadow.jpeg'

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
const [display, setDisplay]= useState(null)
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

const fav=(
  <div className='content'>
    <div  onClick={()=>{
      handleDisplay(null)
    }}> <p className='closeView'>x</p>
    <p className='banner'>FAVORITES</p></div>
   
    <p className='pizza'>Pizza <span className='pizzaEmoji'>🍕</span></p>
    <p className='iceCream'>Ice Cream <span className='iceCreamEmoji'>🍦</span></p>
    <p className='puzzles'>Puzzles <span className='puzzlesEmoji'>🧩</span></p>
    <p className='tacos'>Tacos <span className='tacosEmoji'>🌮</span> </p>
    <p className='family'>Family <span className='familyEmoji'>👨‍👩‍👧</span></p>
    <p className='raceCar'>Race Cars <span className='raceCarEmoji'>🏎</span></p>
    <p className='crafts'>Crafts <span className='craftsEmoji'>🧶</span></p>
  </div>)
const interests = (
  <div className='content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}>x</div>
    <p className='banner'>INTERESTS</p>
    <p>Front End Developer</p>
    <p>UI Design</p>
    <p>UX Design</p>
  </div>
)
const languages = (
  <div className='content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}>x</div>
    <p className='banner'>LANGUAGES</p>
    <p>React</p>
    <p>React Native</p>
    <p>Ruby </p>
    <p>Rails</p>
    <p>Ionic</p>
  </div>
)
const skills = (
  <div className='content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}>x</div>
    <p className='banner'>SKILLS</p>
    <p>Pair Programming</p>
    <p>User Experiance </p>
    <p>Web and Mobile Developer</p>
    <p>Customer Service</p>
  </div>
)
const funFacts = (
  <div className='content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}>x</div>
    <p className='banner'>FUN FACTS</p>
    <p>Ham Radio License</p>
    <p>Licensed Manicurist</p>
    <p>Sig Sauer Certifications</p>
    <p>Barbizon Modeling Academy</p>
  </div>
)
const adventures = (
  <div className='detailedContent content' >  
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}>x</div>
    <p className='banner'>ADVENTURES</p>
    <p className='caption'>I recently drove across the country with my co pilot, Shadow. </p>
    <img src={coPiolit} className='coPiolit' alt='cat image'/>
    <p className='caption'>We explored Niagra Falls</p>
    <img src={Niagra} className='niagra' alt='image'/>
    <p className='caption'> Our final destination was Washington, where we currently reside.</p>
    <img src={cat} className='cat' alt='cat'/>
    <img src={shadow} className='shadow' alt='cat'/>
  </div>
)
const crafts =(

  <div className='detailedContent content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}>x</div>
    <p className='banner'>HOBBIES</p>
    <p className='caption'>I feel grounded when im in nature.</p> 
    <img src={waterfallAdventure} className='waterfallAdventure' alt='image'/>
    <p className='caption'>I enjoy creating crafts out of recycled material. </p>
    <img src={craft} className='craft' alt='craft image' /> 
  </div>
)
const handleDisplay=(content)=>{
setDisplay(content)
}
  return (
    <div className="colorfulPage" >
 
        <Link to='/' className='homeLink'>Joann Carter</Link>
        <div className='titleCol' >
          <div className=' title' onClick={()=>{handleDisplay(languages)}}>
            <p>LANGUAGES</p>
          </div> 
          <div className=' title ' onClick={()=>{handleDisplay(funFacts)}}>
            <p>FUN FACTS</p>
          </div> 
          <div className='title' onClick={()=>{handleDisplay(skills)}}>
            <p>SKILLS</p>
          </div> 
          <div className='title' onClick={()=>{handleDisplay(interests)}}>
            <p>INTERESTS</p>
          </div> 
          <div className='title' onClick={()=>{handleDisplay(fav)}}>
            <p>FAVORITES</p>
          </div>  
          <div className='title' onClick={()=>{handleDisplay(adventures)}}>
            <p>ADVENTURES</p>
          </div>  
          <div className='title' onClick={()=>{handleDisplay(crafts)}}>
            <p>CRAFTS</p>
          </div> 
         
        </div>
        <div className='changeableContent'>
          {display}
        </div>
     </div>

  );
}

export default ColorfulPage;